import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Load Firebase configuration for Firestore persistence
let firebaseConfig: any = null;
try {
  const rawConfig = fs.readFileSync(path.join(process.cwd(), "firebase-applet-config.json"), "utf8");
  firebaseConfig = JSON.parse(rawConfig);
} catch (e) {
  console.warn("Could not load firebase-applet-config.json:", e);
}

// Asynchronously save questions and responses to Firestore database
async function logAdvisorQueryToFirestore(data: {
  userQuestion: string;
  advisorResponse: string;
  houseContext?: any;
  sessionId?: string;
}) {
  if (!firebaseConfig || !firebaseConfig.projectId || !firebaseConfig.apiKey) {
    return;
  }
  try {
    const databaseId = firebaseConfig.firestoreDatabaseId || "(default)";
    const url = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/${databaseId}/documents/advisor_queries?key=${firebaseConfig.apiKey}`;
    
    const body = {
      fields: {
        userQuestion: { stringValue: data.userQuestion },
        advisorResponse: { stringValue: data.advisorResponse },
        createdAt: { stringValue: new Date().toISOString() },
        timestamp: { integerValue: String(Date.now()) },
        sessionId: { stringValue: data.sessionId || "session_" + Math.random().toString(36).substring(2, 9) },
        source: { stringValue: "medgon_advisor_chat" },
        houseContextSummary: {
          stringValue: data.houseContext ? JSON.stringify(data.houseContext) : ""
        }
      }
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      console.warn("Firestore logging response status:", res.status, err);
    } else {
      console.log("Logged advisor interaction to Firestore collection 'advisor_queries'");
    }
  } catch (err) {
    console.error("Error saving advisor query to Firestore:", err);
  }
}

// Initialize Gemini SDK with server-side API Key
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not defined in environment variables");
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function cleanMarkdownFormatting(text: string): string {
  if (!text) return "";
  // Clean potential enclosing markdown codeblocks from LLMs while preserving rich formatting (bold, lists, etc.)
  return text
    .replace(/^```[a-z]*\s*\n/i, "")
    .replace(/\n\s*```$/i, "")
    .trim();
}

const MEDGON_SYSTEM_INSTRUCTION = `ROL Y COMPORTAMIENTO:
Eres el asesor y consultor técnico de Medgón Passivhaus, especializada en edificación industrializada en madera bajo el estándar Passivhaus.
Tus respuestas deben estar redactadas en un lenguaje claro, cercano y pedagógico, sin tecnicismos difíciles, para que cualquier persona comprenda de forma honesta qué puede decidir, qué límites técnicos existen para garantizar la eficiencia de la casa y cómo funciona cada etapa.

REGLA FUNDAMENTAL DE EXCLUSIVIDAD DE CATÁLOGO (OBLIGATORIA):
Fabricamos exclusivamente viviendas de nuestro catálogo oficial.
Nuestros modelos ya han sido diseñados y probados en fábrica bajo criterios de mejora continua en eficiencia, confort, durabilidad, salubridad y economía.
Dentro de cada modelo del catálogo la distribución de estancias principales es personalizable y el plano se puede rotar o voltear para orientarlo en la parcela, pero la vivienda siempre es un modelo optimizado de nuestro catálogo. NUNCA ofrezcas proyectos personalizados desde cero ni fuera de catálogo.

RESPUESTAS TIPO OPTIMIZADAS (UTILIZA ESTAS RESPUESTAS Y CRITERIOS PEDAGÓGICOS ANTE LAS PREGUNTAS DE LOS CLIENTES):

1. Distribución y diseño:
Pregunta tipo: ¿Puedo modificar la distribución interior y las ventanas?
Respuesta pedagógica:
"Tienes flexibilidad para adaptar las estancias principales: puedes ajustar el tamaño de los dormitorios y el espacio del salón-cocina según tu estilo de vida.

Para garantizar la máxima eficiencia energética y que los costes no se disparen, los baños, el cuarto de instalaciones y las ventanas (tanto en tamaño como en ubicación) mantienen una posición fija y optimizada. Lo que sí podemos hacer según las características de tu parcela es rotar o voltear la vivienda completa de forma horizontal para aprovechar al máximo la luz natural."

2. Porches:
Pregunta tipo: ¿Puedo añadir un porche a mi casa?
Respuesta pedagógica:
"Sí, es totalmente posible. Puedes elegir entre integrarlo en el volumen de la propia vivienda o añadirlo de forma exterior como una pérgola de perfilería metálica. Ten en cuenta que esta zona exterior se valora y presupuesta como un extra sobre el modelo base."

3. Cubierta y tejado:
Pregunta tipo: ¿El tejado y las tejas entran en el precio?
Respuesta pedagógica:
"La estructura completa del tejado con su aislamiento térmico de alta eficiencia está incluida en el precio base.

En cuanto al acabado exterior, incluimos de serie una cubierta metálica tipo bandeja (siempre que la normativa de tu municipio lo autorice). Si el ayuntamiento exige teja tradicional o prefieres este acabado por estética, se presupuesta y ejecuta como una partida complementaria."

4. Climatización y VMC:
Pregunta tipo: ¿Qué es la VMC?
Respuesta pedagógica:
"La VMC (Ventilación Mecánica Controlada) es el \\"pulmón\\" de tu casa. Renueva y purifica el aire de forma continua las 24 horas, eliminando polvo y polen, y evitando la humedad y las condensaciones. Además, recupera más del 90% del calor del interior, lo que te permite respirar aire limpio sin perder temperatura ni gastar de más en calefacción."

Pregunta tipo: ¿Qué es la aerotermia?
Respuesta pedagógica:
"Es una bomba de calor muy eficiente que aprovecha la energía del aire exterior. A través de un suelo radiante, calienta la vivienda en invierno, la refresca en verano y produce el agua caliente durante todo el año con un consumo eléctrico mínimo frente a las calderas tradicionales."

5. Ubicación, geografía y radio de acción:
Pregunta tipo: ¿Dónde construís? o cualquier consulta sobre si construimos en algún lugar, provincia o ámbito geográfico concreto:
Respuesta pedagógica obligatoria:
"Principalmente estamos limitados por el radio de acción de la localización de la vivienda:

* **Dentro de nuestro radio de acción (Palencia y provincias limítrofes: Burgos, Cantabria, León y Valladolid):** Estamos abiertos a todas las posibilidades y podemos abordar cualquiera de las 4 modalidades que ofrecemos:
  1. **Suministro de Estructuras Medgón**
  2. **Suministro + Montaje**
  3. **Suministro + Montaje + Instalaciones**
  4. **Llave en Mano**

* **Para el resto de localizaciones (más allá de provincias limítrofes a Palencia):** De momento sólo podemos ofrecer la opción básica de **Suministro de estructuras**, con el acompañamiento de uno de nuestros técnicos para ayudar al montaje y resolver cualquier otra consulta."


6. Alcance técnico y acabados interiores:
Pregunta tipo: ¿Qué incluye Medgón y por qué no hacéis acabados interiores?
Respuesta pedagógica:
"Nos encargamos de la parte técnica y crítica donde más valor aportamos: cimentación, estructura hermética de alta eficiencia e instalaciones principales.

Los acabados visibles (suelos, azulejos y pintura) se gestionan con profesionales locales. Esta transparencia te permite elegir los materiales y colores a tu gusto sin pagar sobrecostes innecesarios por intermediación."

7. Asesoramiento en parcela:
Pregunta tipo: ¿Ayudáis a elegir parcela y qué compromiso exige?
Respuesta pedagógica:
"Sí, te ayudamos a valorar la orientación solar, la pendiente del terreno y los accesos para comprobar que tu casa sea viable y eficiente. Este estudio inicial es totalmente gratuito y no te compromete a contratar con nosotros."

8. Relación calidad-precio:
Pregunta tipo: ¿Cómo conseguís una buena relación calidad-precio?
Respuesta pedagógica:
"Gracias a nuestros modelos ya diseñados y probados en fábrica. Al estandarizar las medidas y optimizar los procesos de corte y montaje, eliminamos imprevistos y desperdicio de material. Esto nos permite ofrecerte precios ajustados manteniendo siempre materiales de primera calidad."

9. Plazos de entrega:
Pregunta tipo: ¿Cuáles son los plazos de entrega?
Respuesta pedagógica:
"La fase previa depende del tiempo que requiera redactar el proyecto y de los trámites de licencia de tu ayuntamiento. Una vez concedida la licencia e iniciada la obra, la vivienda suele estar terminada en un plazo estimado de unos 6 meses gracias a la rapidez del montaje industrializado."

10. Formas de pago:
Pregunta tipo: ¿Cómo se gestionan los pagos?
Respuesta pedagógica:
"Trabajamos con hitos claros y transparentes:

1. **Reserva:** Una señal inicial de 5.000 € para fijar fechas y comenzar gestiones.
2. **Fabricación:** Entre el 30% y el 40% al iniciar la producción en taller y comprar materiales.
3. **Resto de la obra:** En modalidad \\"llave en mano\\", el saldo restante se abona mes a mes según el trabajo ejecutado (ideal para la hipoteca autopromotor). Si contratas únicamente el suministro, el importe pendiente se liquida a la salida del material de fábrica."

11. Presupuestos y coste por metro cuadrado:
Pregunta tipo: ¿Cuánto cuesta el metro cuadrado?
Respuesta pedagógica:
"Como referencia para una vivienda de nuestro catálogo, el coste se sitúa habitualmente entre **1.700 € y 1.900 € por m²**.

El valor final exacto varía según las calidades elegidas y el tamaño total: las casas de mayor superficie reparten mejor los costes fijos de cimentación e instalaciones, reduciendo el precio por metro cuadrado."

12. Modelos de catálogo y filtrado por dormitorios:
Cuando pregunten por modelos según dormitorios:
- 1 dormitorio: Modelo MG87 (87 m² construidos), configurable como suite con vestidor o 2 dormitorios.
- 2 dormitorios: Modelos MG87 (87 m²), MG100 (100 m² con 2 baños) y MG105 (105 m² con suite).
- 3 dormitorios: Modelos MG105 (105 m² en planta baja) y MG128 (128 m² con cubierta plana).
- 4 dormitorios: Modelos MG128 (128 m²), MG148 (148 m² en L con porche) y MG165 (165 m² de alta gama).
Indica que pueden filtrar por dormitorios usando los botones de la calculadora para ver planos, fotos y presupuestos.

13. Sobre Medgón y Trayectoria (Manifiesto Oficial de Empresa):
"Durante 20 años, la construcción tradicional aceptó el caos como algo 'normal'. En Medgón nos negamos. No solo construimos casas; ingeniamos certeza. Al llevar la obra al taller, nuestro sistema industrializado garantiza precisión milimétrica y ensambla tu hogar en días. Cambiamos la improvisación del barro por la perfección de la fabricación CNC.
La confianza no se promete, se demuestra. Llevamos dos décadas en esto, y catorce apostando exclusivamente por el estándar más vanguardista: Passivhaus. Que nuestros clientes nos recomienden es nuestro mayor orgullo. Hemos ejecutado más de 200 test blower door, blindando la hermeticidad que protege su salud y logra la ansiada certificación. No exigimos fe ciega: cada vivienda es verificable en la base de datos pública Passivhaus. Detrás de cada proyecto hay más de 40 personas obsesionadas con tu habitabilidad. No construimos para el ayer, sino para el siglo XXI. Tu salud, confort, economía, legado y paz mental son nuestro compromiso."

14. Adaptación a la Normativa del Futuro (Garantía Cero Obsolescencia):
La vivienda que estamos construyendo ya se adapta a la normativa que viene en el futuro, por lo que nunca tendrás una casa obsoleta y sin cumplir la normativa.
- Edificios de cero emisiones: La directiva exige este estándar desde 2028 para edificios nuevos de organismos públicos y desde 2030 para todos los nuevos. Incluye muy alta eficiencia y ausencia de emisiones de carbono in situ. Medgón verifica el edificio completo: demanda, instalaciones, ACS, energía primaria y suministro energético (Passivhaus no equivale automáticamente a cero emisiones, pero Medgón lo resuelve integralmente).
- Huella de carbono de ciclo de vida (PCG): Cálculo y declaración obligatoria desde 2028 en edificios >1.000 m² y desde 2030 en todos los nuevos. Medgón mide materiales, fabricación CNC, transporte, montaje en seco, sustituciones y fin de vida (no solo el carbono de la madera PEFC).

15. 12 Ventajas del Sistema Constructivo Medgón:
1. Ahorro en energía: Criterios Passivhaus con 24 cm de aislamiento en muros y tejado (hasta 70% menos en calefacción y climatización).
2. Confort todo el año: Temperatura constante (20-22 °C) y aislamiento acústico exterior.
3. Materiales naturales y sostenibles: Madera de bosques certificados PEFC, sumidero de CO₂.
4. Ventanas premium: PVC con triple cristal y doble cámara con gas argón.
5. Persianas automáticas: Motorizadas, integradas sin infiltraciones de aire ni roturas térmicas.
6. Aire limpio y reciclado: Sistema VMC 24h que renueva el aire recuperando >90% del calor, libre de polvo y polen.
7. Calefacción y climatización radiante: En techos y paredes, calor y refrescamiento uniforme sin radiadores ni corrientes.
8. Energía eficiente con aerotermia: Bomba de calor de alto rendimiento (COP > 4.0).
9. Muros resistentes y silenciosos: Placas especiales Fermacell ignífugas, hidrófugas y anti-impacto.
10. Obra más limpia y económica: Montaje en seco con mínimo residuo y ahorro en contenedores.
11. Estructura más ligera: Menor peso propio que reduce costes y volumen de cimentación.
12. Plazos de obra más cortos: Construcción industrializada en seco, un 30-50% más rápido.

CONTACTO Y CERCANÍA:
Mantén siempre una actitud amable, servicial y honesta. Si necesitan más información técnica o comercial personalizada sobre nuestros modelos de catálogo, pueden contactar al equipo técnico en informacion@medgon.com o en el teléfono 979 88 10 10.`;

// Deterministic response generator adhering strictly to the user's optimized pedagogical responses
function generateDeterministicMedgonResponse(query: string, houseContext?: any): string {
  const m2 = houseContext?.m2 || 100;
  const rawQuery = (query || "").trim();
  const lowerQuery = rawQuery.toLowerCase();

  // Sobre Medgón / Trayectoria / Historia / Blower Door / Experiencia
  if (
    lowerQuery.includes("sobre medgon") ||
    lowerQuery.includes("sobre medgón") ||
    lowerQuery.includes("quienes sois") ||
    lowerQuery.includes("quiénes sois") ||
    lowerQuery.includes("historia") ||
    lowerQuery.includes("experiencia") ||
    lowerQuery.includes("trayectoria") ||
    lowerQuery.includes("blower door") ||
    lowerQuery.includes("20 años") ||
    lowerQuery.includes("veinte años") ||
    lowerQuery.includes("manifiesto") ||
    lowerQuery.includes("equipo de medgon") ||
    lowerQuery.includes("equipo de medgón")
  ) {
    return "Durante 20 años, la construcción tradicional aceptó el caos como algo \"normal\". En Medgón nos negamos. No solo construimos casas; ingeniamos certeza. Al llevar la obra al taller, nuestro sistema industrializado garantiza precisión milimétrica y ensambla tu hogar en días. Cambiamos la improvisación del barro por la perfección de la fabricación CNC.\n\nLa confianza no se promete, se demuestra. Llevamos dos décadas en esto, y catorce apostando exclusivamente por el estándar más vanguardista: **Passivhaus**. Que nuestros clientes nos recomienden es nuestro mayor orgullo. Hemos ejecutado **más de 200 test blower door**, blindando la hermeticidad que protege tu salud y logra la ansiada certificación. No exigimos fe ciega: cada vivienda es verificable en la base de datos pública Passivhaus.\n\nDetrás de cada proyecto hay más de 40 personas obsesionadas con tu habitabilidad. No construimos para el ayer, sino para el siglo XXI. Tu salud, confort, economía, legado y paz mental son nuestro compromiso.";
  }

  // Normativa del futuro / 2028 / 2030 / Cero Emisiones / Huella de carbono / Obsolescencia
  if (
    lowerQuery.includes("normativa") ||
    lowerQuery.includes("futuro") ||
    lowerQuery.includes("2030") ||
    lowerQuery.includes("2028") ||
    lowerQuery.includes("cero emisiones") ||
    lowerQuery.includes("huella de carbono") ||
    lowerQuery.includes("obsolet") ||
    lowerQuery.includes("epbd") ||
    lowerQuery.includes("pcg")
  ) {
    return "Una de las ideas fundamentales de nuestro sistema es que la vivienda que estamos construyendo **ya se adapta a la normativa que viene en el futuro**, por lo que nunca tendrás una casa obsoleta y sin cumplir la normativa:\n\n1. **Edificios de Cero Emisiones (Directiva Europea EPBD):**\n* *Estado y horizonte:* Exigido desde 2028 para edificios nuevos públicos y desde 2030 para todos los nuevos. Incluye muy alta eficiencia y ausencia de emisiones in situ.\n* *Qué prepara Medgón:* Verificamos el edificio completo (demanda, instalaciones, ACS, energía primaria y suministro energético). Passivhaus no equivale automáticamente a cero emisiones, por lo que Medgón garantiza la integración de aerotermia y energía renovable para lograrlo desde el día uno.\n\n2. **Huella de Carbono de Ciclo de Vida (PCG):**\n* *Estado y horizonte:* Cálculo y declaración obligatoria desde 2028 en edificios >1.000 m² útiles y desde 2030 en todas las viviendas nuevas.\n* *Qué prepara Medgón:* Medimos el ciclo integral: materiales certificados PEFC, fabricación CNC en taller, transporte optimizado, montaje en seco, sustituciones y fin de vida.\n\nCon esto blindas el valor de tasación y mercado de tu casa sin riesgos de obsolescencia ni reformas obligatorias.";
  }

  // 12 Ventajas del sistema constructivo
  if (
    lowerQuery.includes("12 ventajas") ||
    lowerQuery.includes("doce ventajas") ||
    lowerQuery.includes("ventaja") ||
    lowerQuery.includes("beneficio") ||
    lowerQuery.includes("por que medgon") ||
    lowerQuery.includes("por qué medgon") ||
    lowerQuery.includes("por que elegir") ||
    lowerQuery.includes("por qué elegir")
  ) {
    return "Las 12 ventajas clave del sistema constructivo industrializado Medgón son:\n\n1. ✅ **Ahorro en energía:** Criterios Passivhaus con 24 cm de aislamiento en muros y tejado (hasta un 70% menos en calefacción y climatización).\n2. ✅ **Confort todo el año:** Temperatura agradable (20-22 °C estables) y máximo aislamiento del ruido exterior.\n3. ✅ **Materiales naturales y sostenibles:** Madera de bosques con sello PEFC respetuosa con el medio ambiente.\n4. ✅ **Ventanas premium:** Carpinterías de PVC con triple cristal y doble cámara con gas argón.\n5. ✅ **Persianas automáticas:** Motorizadas (control domótico o móvil) sin filtraciones de aire desde el exterior.\n6. ✅ **Aire limpio y reciclado:** Ventilación continua 24h (VMC) que renueva el aire recuperando >90% del calor.\n7. ✅ **Calefacción y climatización radiante:** En techos y paredes, calor uniforme en invierno y refrescamiento en verano sin corrientes de aire.\n8. ✅ **Energía eficiente con aerotermia:** Bomba de calor con COP superior a 4 para calefacción, refrigeración y ACS.\n9. ✅ **Muros resistentes y silenciosos:** Placas especiales Fermacell que aíslan del ruido, resisten golpes y fuego.\n10. ✅ **Obra más limpia y económica:** Montaje en seco con mínimo residuo y ahorro en contenedores.\n11. ✅ **Estructura más ligera:** Reduce el peso propio y optimiza la cimentación.\n12. ✅ **Plazos de obra más cortos:** Terminación un 30-50% más rápida gracias al ensamblado en taller y montaje en días.";
  }

  // 0. Proyectos personalizados o a medida (Exclusividad de catálogo)
  if (
    lowerQuery.includes("a medida") ||
    lowerQuery.includes("desde cero") ||
    lowerQuery.includes("mi propio plano") ||
    lowerQuery.includes("mi propio dise") ||
    lowerQuery.includes("otro plano") ||
    lowerQuery.includes("otro dise") ||
    lowerQuery.includes("arquitecto externo") ||
    lowerQuery.includes("fuera de catalogo") ||
    lowerQuery.includes("fuera de catálogo") ||
    (lowerQuery.includes("personaliz") && (lowerQuery.includes("proyecto") || lowerQuery.includes("casa") || lowerQuery.includes("vivienda") || lowerQuery.includes("hac")))
  ) {
    return "En Medgón construimos exclusivamente viviendas de nuestro catálogo oficial. Nuestros modelos están ya diseñados y probados en fábrica bajo criterios de mejora continua para ofrecerte lo mejor en eficiencia, confort, durabilidad, salubridad y economía con un presupuesto cerrado. Dentro de cada modelo puedes adaptar la distribución de las estancias principales y rotar o voltear el plano según tu parcela. Para consultar los modelos disponibles de nuestro catálogo, puedes contactar con nuestro equipo técnico en informacion@medgon.com o en el 979 88 10 10.";
  }

  // Modelos de catálogo filtrados por número de dormitorios / habitaciones
  if (
    lowerQuery.includes("modelos por dormitorios") ||
    lowerQuery.includes("por dormitorios") ||
    lowerQuery.includes("por habitaciones") ||
    lowerQuery.includes("filtrar por dormitorios") ||
    lowerQuery.includes("filtro por dormitorios") ||
    lowerQuery.includes("cuantos dormitorios") ||
    lowerQuery.includes("cuántos dormitorios") ||
    (lowerQuery.includes("dormitorio") && (
      lowerQuery.includes("1") || lowerQuery.includes("un") || 
      lowerQuery.includes("2") || lowerQuery.includes("dos") || 
      lowerQuery.includes("3") || lowerQuery.includes("tres") || 
      lowerQuery.includes("4") || lowerQuery.includes("cuatro") || 
      lowerQuery.includes("5") || lowerQuery.includes("cinco") || 
      lowerQuery.includes("modelo") || lowerQuery.includes("que hay") || 
      lowerQuery.includes("qué hay") || lowerQuery.includes("tenéis") || 
      lowerQuery.includes("teneis") || lowerQuery.includes("catalogo") || 
      lowerQuery.includes("catálogo") || lowerQuery.includes("recomiend")
    )) ||
    (lowerQuery.includes("habitaci") && (
      lowerQuery.includes("1") || lowerQuery.includes("un") || 
      lowerQuery.includes("2") || lowerQuery.includes("dos") || 
      lowerQuery.includes("3") || lowerQuery.includes("tres") || 
      lowerQuery.includes("4") || lowerQuery.includes("cuatro") || 
      lowerQuery.includes("5") || lowerQuery.includes("cinco") || 
      lowerQuery.includes("modelo") || lowerQuery.includes("que hay") || 
      lowerQuery.includes("qué hay") || lowerQuery.includes("tenéis") || 
      lowerQuery.includes("teneis") || lowerQuery.includes("catalogo") || 
      lowerQuery.includes("catálogo") || lowerQuery.includes("recomiend")
    ))
  ) {
    return "En nuestro catálogo oficial Medgón disponemos de modelos optimizados por número de dormitorios:\n\n* **1 Dormitorio:** Modelo MG87 (87 m² construidos), optimizable como amplia suite diáfana con vestidor o 2 dormitorios.\n* **2 Dormitorios:** Modelos MG87 (87 m²), MG100 (100 m² con 2 baños en planta) y MG105 (105 m² estilo industrial).\n* **3 Dormitorios:** Modelos MG105 (105 m² con suite y cuarto técnico) y MG128 (128 m² con cubierta plana Boho).\n* **4 Dormitorios:** Modelos MG128 (128 m²), MG148 (148 m² en distribución en L con porche) y MG165 (165 m² de alta gama).\n\nPuedes usar los botones y chips de filtrado por dormitorios en la calculadora para ver al instante sus fotos, planos con cotas y presupuestos.";
  }

  // 1. Distribución y diseño
  if (
    lowerQuery.includes("distribuc") ||
    lowerQuery.includes("ventana") ||
    lowerQuery.includes("modificar la distribucion") ||
    lowerQuery.includes("modificar la distribución") ||
    lowerQuery.includes("mover tabique") ||
    lowerQuery.includes("rotar") ||
    lowerQuery.includes("voltear")
  ) {
    return "Tienes flexibilidad para adaptar las estancias principales: puedes ajustar el tamaño de los dormitorios y el espacio del salón-cocina según tu estilo de vida.\n\nPara garantizar la máxima eficiencia energética y que los costes no se disparen, los baños, el cuarto de instalaciones y las ventanas (tanto en tamaño como en ubicación) mantienen una posición fija y optimizada. Lo que sí podemos hacer según las características de tu parcela es rotar o voltear la vivienda completa de forma horizontal para aprovechar al máximo la luz natural.";
  }

  // 2. Porches
  if (
    lowerQuery.includes("porche") ||
    lowerQuery.includes("pergola") ||
    lowerQuery.includes("pérgola")
  ) {
    return "Sí, es totalmente posible. Puedes elegir entre integrarlo en el volumen de la propia vivienda o añadirlo de forma exterior como una pérgola de perfilería metálica. Ten en cuenta que esta zona exterior se valora y presupuesta como un extra sobre el modelo base.";
  }

  // 3. Cubierta y tejado
  if (
    lowerQuery.includes("tejado") ||
    lowerQuery.includes("cubierta") ||
    lowerQuery.includes("teja") ||
    lowerQuery.includes("bandeja")
  ) {
    return "La estructura completa del tejado con su aislamiento térmico de alta eficiencia está incluida en el precio base.\n\nEn cuanto al acabado exterior, incluimos de serie una cubierta metálica tipo bandeja (siempre que la normativa de tu municipio lo autorice). Si el ayuntamiento exige teja tradicional o prefieres este acabado por estética, se presupuesta y ejecuta como una partida complementaria.";
  }

  // 4. Climatización y VMC
  // 4a. VMC
  if (
    lowerQuery === "vmc" ||
    lowerQuery.includes("vmc") ||
    lowerQuery.includes("ventilacion") ||
    lowerQuery.includes("ventilación") ||
    lowerQuery.includes("pulmon") ||
    lowerQuery.includes("pulmón")
  ) {
    return "La VMC (Ventilación Mecánica Controlada) es el \"pulmón\" de tu casa. Renueva y purifica el aire de forma continua las 24 horas, eliminando polvo y polen, y evitando la humedad y las condensaciones. Además, recupera más del 90% del calor del interior, lo que te permite respirar aire limpio sin perder temperatura ni gastar de más en calefacción.";
  }

  // 4b. Aerotermia
  if (
    lowerQuery.includes("aeroterm") ||
    lowerQuery.includes("suelo radiante") ||
    lowerQuery.includes("bomba de calor")
  ) {
    return "Es una bomba de calor muy eficiente que aprovecha la energía del aire exterior. A través de un suelo radiante, calienta la vivienda en invierno, la refresca en verano y produce el agua caliente durante todo el año con un consumo eléctrico mínimo frente a las calderas tradicionales.";
  }

  // 5. Ubicación, geografía y radio de acción
  if (
    lowerQuery.includes("donde constru") ||
    lowerQuery.includes("dónde constru") ||
    lowerQuery.includes("donde") ||
    lowerQuery.includes("dónde") ||
    lowerQuery.includes("ubicacion") ||
    lowerQuery.includes("ubicación") ||
    lowerQuery.includes("geograf") ||
    lowerQuery.includes("radio") ||
    lowerQuery.includes("zonas") ||
    lowerQuery.includes("lugar") ||
    lowerQuery.includes("provincia") ||
    lowerQuery.includes("comunidad") ||
    lowerQuery.includes("madrid") ||
    lowerQuery.includes("palencia") ||
    lowerQuery.includes("carrión") ||
    lowerQuery.includes("carrion") ||
    lowerQuery.includes("burgos") ||
    lowerQuery.includes("valladolid") ||
    lowerQuery.includes("león") ||
    lowerQuery.includes("leon") ||
    lowerQuery.includes("cantabria") ||
    lowerQuery.includes("asturias") ||
    lowerQuery.includes("galicia") ||
    lowerQuery.includes("madrid") ||
    lowerQuery.includes("andaluc") ||
    lowerQuery.includes("valencia") ||
    lowerQuery.includes("construis en") ||
    lowerQuery.includes("construís en") ||
    lowerQuery.includes("construyen en") ||
    lowerQuery.includes("haceis en") ||
    lowerQuery.includes("hacéis en")
  ) {
    return "Principalmente estamos limitados por el ámbito geográfico de la localización de la vivienda:\n\n* **Dentro de nuestro radio de acción (Palencia y provincias limítrofes: Burgos, Cantabria, León y Valladolid):** Estamos abiertos a todas las posibilidades y podemos abordar cualquiera de las 4 modalidades que ofrecemos:\n  1. **Suministro de Estructuras Medgón**\n  2. **Suministro + Montaje**\n  3. **Suministro + Montaje + Instalaciones**\n  4. **Llave en Mano**\n\n* **Para el resto de localizaciones (más allá de provincias limítrofes a Palencia):** De momento sólo podemos ofrecer la opción básica de **Suministro de estructuras**, con el acompañamiento de uno de nuestros técnicos para ayudar al montaje del equipo local y atender cualquier otra consulta técnica.\n\nPara consultar la viabilidad concreta de tu ubicación, contáctanos en informacion@medgon.com o en el 979 88 10 10.";
  }

  // 6. Alcance técnico y acabados interiores
  if (
    lowerQuery.includes("alcance") ||
    lowerQuery.includes("acabados interiores") ||
    lowerQuery.includes("acabado interior") ||
    lowerQuery.includes("por que no haceis") ||
    lowerQuery.includes("por qué no hacéis") ||
    lowerQuery.includes("no haceis acabados") ||
    lowerQuery.includes("no hacéis acabados") ||
    (lowerQuery.includes("incluye") && lowerQuery.includes("medg"))
  ) {
    return "Nos encargamos de la parte técnica y crítica donde más valor aportamos: cimentación, estructura hermética de alta eficiencia e instalaciones principales.\n\nLos acabados visibles (suelos, azulejos y pintura) se gestionan con profesionales locales. Esta transparencia te permite elegir los materiales y colores a tu gusto sin pagar sobrecostes innecesarios por intermediación.";
  }

  // 7. Asesoramiento en parcela
  if (
    lowerQuery.includes("parcela") ||
    lowerQuery.includes("terreno") ||
    lowerQuery.includes("compromiso") ||
    lowerQuery.includes("orientacion") ||
    lowerQuery.includes("orientación")
  ) {
    return "Sí, te ayudamos a valorar la orientación solar, la pendiente del terreno y los accesos para comprobar que tu casa sea viable y eficiente. Este estudio inicial es totalmente gratuito y no te compromete a contratar con nosotros.";
  }

  // 8. Relación calidad-precio
  if (
    lowerQuery.includes("calidad-precio") ||
    lowerQuery.includes("calidad precio") ||
    lowerQuery.includes("relacion calidad") ||
    lowerQuery.includes("relación calidad") ||
    lowerQuery.includes("buena relacion") ||
    lowerQuery.includes("buena relación") ||
    lowerQuery.includes("conseguis una buena") ||
    lowerQuery.includes("conseguís una buena")
  ) {
    return "Gracias a nuestros modelos ya diseñados y probados en fábrica. Al estandarizar las medidas y optimizar los procesos de corte y montaje, eliminamos imprevistos y desperdicio de material. Esto nos permite ofrecerte precios ajustados manteniendo siempre materiales de primera calidad.";
  }

  // 9. Plazos de entrega
  if (
    lowerQuery.includes("plazo") ||
    lowerQuery.includes("tiempo") ||
    lowerQuery.includes("cuanto tard") ||
    lowerQuery.includes("cuánto tard") ||
    lowerQuery.includes("meses")
  ) {
    return "La fase previa depende del tiempo que requiera redactar el proyecto y de los trámites de licencia de tu ayuntamiento. Una vez concedida la licencia e iniciada la obra, la vivienda suele estar terminada en un plazo estimado de unos 6 meses gracias a la rapidez del montaje industrializado.";
  }

  // 10. Formas de pago
  if (
    lowerQuery.includes("pago") ||
    lowerQuery.includes("financiaci") ||
    lowerQuery.includes("hipoteca") ||
    lowerQuery.includes("hitos") ||
    lowerQuery.includes("como se gestionan") ||
    lowerQuery.includes("cómo se gestionan")
  ) {
    return "Trabajamos con hitos claros y transparentes:\n\n1. **Reserva:** Una señal inicial de 5.000 € para fijar fechas y comenzar gestiones.\n2. **Fabricación:** Entre el 30% y el 40% al iniciar la producción en taller y comprar materiales.\n3. **Resto de la obra:** En modalidad \"llave en mano\", el saldo restante se abona mes a mes según el trabajo ejecutado (ideal para la hipoteca autopromotor). Si contratas únicamente el suministro, el importe pendiente se liquida a la salida del material de fábrica.";
  }

  // 11. Presupuestos y coste por metro cuadrado
  if (
    lowerQuery.includes("metro cuadrado") ||
    lowerQuery.includes("cuanto cuesta el m") ||
    lowerQuery.includes("cuánto cuesta el m") ||
    lowerQuery.includes("precio m2") ||
    lowerQuery.includes("precio por m") ||
    lowerQuery.includes("coste por m") ||
    lowerQuery.includes("coste m2")
  ) {
    return "Como referencia para una vivienda de nuestro catálogo, el coste se sitúa habitualmente entre **1.700 € y 1.900 € por m²**.\n\nEl valor final exacto varía según las calidades elegidas y el tamaño total: las casas de mayor superficie reparten mejor los costes fijos de cimentación e instalaciones, reduciendo el precio por metro cuadrado.";
  }

  // Saludos
  if (/^(hola|buenos d[ií]as|buenas tardes|buenas noches|buenas|que tal|qué tal|saludos|inicio|comenzar)/i.test(lowerQuery)) {
    return "Hola. Fabricamos viviendas industrializadas de madera bajo el estándar Passivhaus, diseñadas para ofrecerte máxima eficiencia energética, confort y precio cerrado.\n\n¿En qué puedo orientarte hoy sobre los modelos de nuestro catálogo?";
  }

  // Contacto directo
  if (
    lowerQuery.includes("contacto") ||
    lowerQuery.includes("email") ||
    lowerQuery.includes("correo") ||
    lowerQuery.includes("telefono") ||
    lowerQuery.includes("teléfono") ||
    lowerQuery.includes("direccion") ||
    lowerQuery.includes("dirección")
  ) {
    return "Puedes contactar directamente con el equipo técnico de Medgón por correo electrónico en informacion@medgon.com o por teléfono en el 979 88 10 10. Nuestras oficinas centrales y nave de fabricación están en el Polígono Industrial, nave 50, 34120 Carrión de los Condes (Palencia). Estaremos encantados de asesorarte sobre los modelos de nuestro catálogo.";
  }

  // Desglose de presupuesto según m2 actual seleccionado
  let ratePerM2 = 1720;
  if (m2 <= 105) {
    ratePerM2 = 1720;
  } else if (m2 <= 135) {
    ratePerM2 = 1520;
  } else {
    ratePerM2 = 1400;
  }

  const medgonBase = m2 * ratePerM2;
  const medgonMin = Math.round(medgonBase * 0.97).toLocaleString('es-ES');
  const medgonMax = Math.round(medgonBase * 1.03).toLocaleString('es-ES');
  const finishesMin = (m2 * 180).toLocaleString('es-ES');
  const finishesMax = (m2 * 200).toLocaleString('es-ES');

  return `Como referencia para una vivienda de nuestro catálogo, el coste se sitúa habitualmente entre **1.700 € y 1.900 € por m²** (variando según las calidades elegidas y la superficie total).\n\nPara la vivienda de **${m2} m²** que tienes seleccionada en la calculadora:\n* **Fase técnica Medgón:** entre ${medgonMin} € y ${medgonMax} € (+ IVA), unos ${ratePerM2.toLocaleString('es-ES')} €/m² (+ IVA).\n* **Bolsa de acabados interiores (gremios locales):** entre ${finishesMin} € y ${finishesMax} € (+ IVA), calculada a 180 - 200 €/m².\n* **Honorarios de proyecto visado y dirección facultativa:** 12.500 € (+ IVA).\n\nSi deseas consultar los detalles de este modelo de catálogo, contáctanos en informacion@medgon.com o en el 979 88 10 10.`;
}

// Health endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Medgon Passivhaus Advisor API" });
});

// Chat endpoint with Gemini & intelligent fallback
app.post("/api/advisor/chat", async (req, res) => {
  try {
    const { messages, houseContext } = req.body;
    const ai = getGeminiClient();

    let userPrompt = "";
    if (Array.isArray(messages) && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      userPrompt = lastMsg.content || "";
    } else if (typeof req.body.prompt === "string") {
      userPrompt = req.body.prompt;
    }

    if (!userPrompt.trim()) {
      return res.status(400).json({ error: "El mensaje no puede estar vacío." });
    }

    // Helper to send response and log asynchronously to Firestore
    const sendResponseAndLog = (replyText: string) => {
      // Fire-and-forget async log to Firestore
      logAdvisorQueryToFirestore({
        userQuestion: userPrompt,
        advisorResponse: replyText,
        houseContext,
        sessionId: req.body?.sessionId,
      });
      return res.json({ reply: replyText });
    };

    // If Gemini client is not initialized, use the deterministic knowledge engine directly
    if (!ai) {
      const fallbackReply = generateDeterministicMedgonResponse(userPrompt, houseContext);
      return sendResponseAndLog(fallbackReply);
    }

    // Build context-aware prompt
    let promptWithContext = userPrompt;
    if (houseContext) {
      promptWithContext = `[Contexto actual seleccionado por el usuario en la calculadora: Superficie = ${houseContext.m2} m², Acabados = ${houseContext.finishesRate} €/m², Extras = ${JSON.stringify(houseContext.extras)}, Tipo IVA = ${houseContext.vatRate}%]

Pregunta del usuario:
${userPrompt}`;
    }

    // Clean multi-turn history for Gemini:
    // 1. First item MUST be 'user'
    // 2. Roles must strictly alternate
    // 3. Combine consecutive turns of the same role
    const rawHistory = (messages || []).slice(0, -1);
    const validContents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

    for (const msg of rawHistory) {
      const text = (msg.content || "").trim();
      if (!text) continue;
      const role: "user" | "model" = msg.sender === "user" ? "user" : "model";

      // Ignore leading model greeting if user has not yet spoken
      if (validContents.length === 0 && role !== "user") {
        continue;
      }

      const prev = validContents[validContents.length - 1];
      if (prev && prev.role === role) {
        prev.parts[0].text += `\n\n${text}`;
      } else {
        validContents.push({
          role,
          parts: [{ text }],
        });
      }
    }

    // Append the current turn
    const prevTurn = validContents[validContents.length - 1];
    if (prevTurn && prevTurn.role === "user") {
      prevTurn.parts[0].text += `\n\n${promptWithContext}`;
    } else {
      validContents.push({
        role: "user",
        parts: [{ text: promptWithContext }],
      });
    }

    let aiText: string | null = null;
    const modelsToTry = ["gemini-2.5-flash", "gemini-flash-latest", "gemini-3.8-flash"];

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: validContents,
          config: {
            systemInstruction: MEDGON_SYSTEM_INSTRUCTION,
            temperature: 0.0, // Rigorous, mathematically exact as requested
            topP: 0.95,
          },
        });
        if (response.text && response.text.trim()) {
          aiText = response.text;
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} call failed, trying next:`, err?.message || err);
      }
    }

    const rawReply = aiText || generateDeterministicMedgonResponse(userPrompt, houseContext);
    const replyText = cleanMarkdownFormatting(rawReply);
    return sendResponseAndLog(replyText);
  } catch (error: any) {
    console.error("Error in /api/advisor/chat:", error);
    const userPrompt = req.body?.prompt || req.body?.messages?.slice(-1)[0]?.content || "";
    const fallbackReply = generateDeterministicMedgonResponse(userPrompt, req.body?.houseContext);
    logAdvisorQueryToFirestore({
      userQuestion: userPrompt,
      advisorResponse: fallbackReply,
      houseContext: req.body?.houseContext,
      sessionId: req.body?.sessionId,
    });
    return res.json({ reply: fallbackReply });
  }
});

// Endpoint to retrieve recent questions/queries from Firestore
app.get("/api/advisor/logs", async (_req, res) => {
  if (!firebaseConfig || !firebaseConfig.projectId || !firebaseConfig.apiKey) {
    return res.status(503).json({ error: "Firebase no está configurado." });
  }
  try {
    const databaseId = firebaseConfig.firestoreDatabaseId || "(default)";
    const url = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/${databaseId}/documents/advisor_queries?pageSize=50&key=${firebaseConfig.apiKey}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }
    
    const data = await response.json();
    const documents = (data.documents || []).map((doc: any) => {
      const fields = doc.fields || {};
      return {
        id: doc.name.split("/").pop(),
        userQuestion: fields.userQuestion?.stringValue || "",
        advisorResponse: fields.advisorResponse?.stringValue || "",
        createdAt: fields.createdAt?.stringValue || "",
        timestamp: Number(fields.timestamp?.integerValue || 0),
        sessionId: fields.sessionId?.stringValue || "",
        houseContextSummary: fields.houseContextSummary?.stringValue || "",
      };
    }).sort((a: any, b: any) => b.timestamp - a.timestamp);

    res.json({ queries: documents, total: documents.length });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || "Error al obtener consultas de Firestore" });
  }
});

// Endpoint to reset / delete all stored advisor queries in Firestore
app.delete("/api/advisor/logs", async (_req, res) => {
  if (!firebaseConfig || !firebaseConfig.projectId || !firebaseConfig.apiKey) {
    return res.status(503).json({ error: "Firebase no está configurado." });
  }
  try {
    const databaseId = firebaseConfig.firestoreDatabaseId || "(default)";
    const listUrl = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/${databaseId}/documents/advisor_queries?pageSize=300&key=${firebaseConfig.apiKey}`;
    
    const listRes = await fetch(listUrl);
    if (!listRes.ok) {
      const errText = await listRes.text();
      return res.status(listRes.status).json({ error: errText });
    }

    const data = await listRes.json();
    const documents = data.documents || [];
    let deletedCount = 0;

    for (const doc of documents) {
      const deleteUrl = `https://firestore.googleapis.com/v1/${doc.name}?key=${firebaseConfig.apiKey}`;
      const delRes = await fetch(deleteUrl, { method: "DELETE" });
      if (delRes.ok) {
        deletedCount++;
      }
    }

    res.json({ success: true, deletedCount });
  } catch (error: any) {
    console.error("Error resetting advisor logs:", error);
    res.status(500).json({ error: error?.message || "Error al resetear consultas de Firestore" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Medgón Server running on http://localhost:${PORT}`);
  });
}

startServer();
