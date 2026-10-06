import React, { useState } from 'react';
import { CATALOG_MODELS } from '../data/modelsCatalog';
import { SpecializedSolutionsSection } from './SpecializedSolutionsSection';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Wind, 
  TreePine, 
  Clock, 
  Layers, 
  Building2,
  Mouse,
  Ruler,
  Maximize2,
  Sparkles 
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenExportModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    parcelaSituacion: '',
    modeloInteres: 'Aún no lo sé / Deseo orientación',
  });

  const allModelsList = Object.values(CATALOG_MODELS);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Puedo modificar la distribución interior y la posición de las ventanas?',
      a: 'La distribución interior de dormitorios y salón-cocina es totalmente configurable a tus necesidades. Sin embargo, los baños, cuartos de instalaciones y los huecos de ventanas exteriores permanecen fijos para garantizar el aislamiento térmico Passivhaus, eliminar puentes térmicos y asegurar la certificación energética.',
    },
    {
      q: '¿Puedo añadir un porche a mi casa de catálogo?',
      a: 'Sí, todos los modelos permiten la incorporación de porches y pérgolas exteriores en madera técnica. Nuestra oficina técnica calcula la estructura para garantizar la continuidad estética y la protección solar pasiva en los meses de verano.',
    },
    {
      q: '¿El tejado y las tejas cerámicas entran en el precio?',
      a: 'En las modalidades Suministro + Montaje + Instalaciones y Llave en Mano, la cubierta se entrega 100% aislada, impermeabilizada y terminada con teja cerámica o acabado plano continuo según el diseño del modelo elegido.',
    },
    {
      q: '¿Qué es la VMC y cómo funciona con la aerotermia?',
      a: 'La Ventilación Mecánica Controlada (VMC) de doble flujo renueva el aire interior las 24 horas del día, filtrando pólenes y partículas y recuperando más del 90% del calor. La aerotermia aporta la climatización (suelo radiante/refrescante) y el agua caliente con un consumo eléctrico mínimo.',
    },
    {
      q: '¿Dónde construye Medgón habitualmente?',
      a: 'Fabricamos todas las estructuras en nuestra planta robotizada de Carrión de los Condes (Palencia) y realizamos montaje en toda España. Para la modalidad Llave en Mano, operamos habitualmente en un radio de 150 km desde Palencia y en Cataluña con asociados homologados.',
    },
    {
      q: '¿Cuáles son los plazos habituales de entrega?',
      a: 'El plazo medio en obra es de aproximadamente 6 meses tras la concesión de licencia municipal. La fabricación en taller climatizado permite adelantar trabajo sin depender de las condiciones meteorológicas.',
    },
    {
      q: '¿Cómo se gestionan los pagos?',
      a: 'Se estructuran con máxima certidumbre: 5.000 € de reserva para asignación de cupo en fábrica y estudio preliminar; un 30-40% al inicio del mecanizado en taller; y el resto por certificaciones mensuales de avance o salida de fábrica.',
    },
    {
      q: '¿Cuánto cuesta el metro cuadrado de una vivienda de catálogo?',
      a: 'La fase técnica habitual de una vivienda de catálogo Medgón se sitúa entre 1.700 € y 1.900 €/m² + IVA, dependiendo de la superficie del modelo, la cimentación específica según el estudio geotécnico y las opciones de envolvente elegidas.',
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* 1. HERO SECTION (Estilo minimalista arquitectónico centrado inspirado en EquityFlow) */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Centered Header Block */}
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-xs font-bold uppercase tracking-wider text-[#0DA836] shadow-2xs">
              <TreePine className="w-3.5 h-3.5" />
              <span>CATÁLOGO RESIDENCIAL INDUSTRIALIZADO</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.08] text-balance">
              Tu casa de consumo casi nulo.<br />
              <span className="text-[#16181B]">Clara desde el inicio.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#5A606A] leading-relaxed max-w-2xl mx-auto font-normal">
              Viviendas de alta eficiencia, saludables que te devuelven la inversión realizada. Elige un modelo Medgón, adáptalo a tu forma de vivir y construye con más control sobre el proceso, el confort y el futuro.
            </p>

            {/* Centered Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>Ver modelos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-[#16181B] bg-white hover:bg-[#FAF8F5] border border-[#16181B]/20 hover:border-[#16181B] rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
              >
                Tengo una parcela
              </button>
            </div>
          </div>

          {/* Wide Hero Architectural Visual Card (Estilo EquityFlow con franja inferior) */}
          <div className="mt-10 sm:mt-12 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#16181B]/10 bg-[#16181B] group">
            <img
              src="/casa_mediterranea_pinos_lavanda.png"
              alt="Casa mediterránea entre pinos y lavanda · Vivienda Passivhaus industrializada de madera técnica"
              className="w-full h-[380px] sm:h-[480px] lg:h-[580px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              loading="eager"
            />
            
            {/* Scrim and Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />

            {/* Bottom Floating Bar */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
              
              {/* Bottom Left: Proven Performance Statement */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white shrink-0 sm:max-w-[240px] leading-snug">
                  Rendimiento probado en cada metro cuadrado
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed border-l-0 sm:border-l sm:border-white/25 sm:pl-4">
                  Más de 20 años de ingeniería en madera técnica mecanizada y modelado Passivhaus garantizan máxima eficiencia térmica, bioconfort y retorno contrastado de la inversión.
                </p>
              </div>

              {/* Bottom Right: Scroll Now / Explorar Catálogo Pill */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('catalogo-2026');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('catalog');
                }}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white text-xs font-semibold hover:bg-white hover:text-[#16181B] transition-all cursor-pointer shrink-0 self-start md:self-auto shadow-sm"
              >
                <Mouse className="w-3.5 h-3.5" />
                <span>Explorar modelos ↓</span>
              </button>

            </div>
          </div>

          {/* 4 Metric Highlights Strip debajo de la foto */}
          <div className="mt-8 pt-6 border-t border-[#16181B]/10 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="bg-white border border-[#16181B]/10 rounded-xl p-4 shadow-xs">
              <div className="text-2xl font-black text-[#16181B] tabular-nums">
                9 Modelos
              </div>
              <div className="text-xs text-[#5A606A] mt-0.5">
                Catálogo cerrado de 50 a 165 m²
              </div>
            </div>

            <div className="bg-white border border-[#16181B]/10 rounded-xl p-4 shadow-xs">
              <div className="text-2xl font-black text-[#16181B]">
                Madera Técnica
              </div>
              <div className="text-xs text-[#5A606A] mt-0.5">
                Precisión industrial y bioconfort
              </div>
            </div>

            <div className="bg-white border border-[#16181B]/10 rounded-xl p-4 shadow-xs">
              <div className="text-2xl font-black text-[#0DA836] tabular-nums">
                Hasta -85%
              </div>
              <div className="text-xs text-[#5A606A] mt-0.5">
                Menor demanda térmica estimada*
              </div>
            </div>

            <div className="bg-white border border-[#16181B]/10 rounded-xl p-4 shadow-xs">
              <div className="text-2xl font-black text-[#16181B] tabular-nums">
                ~6 Meses
              </div>
              <div className="text-xs text-[#5A606A] mt-0.5">
                Montaje rápido en parcela
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEGURIDAD ANTES DE CONSTRUIR */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              SEGURIDAD ANTES DE CONSTRUIR
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
              Una casa no se elige solo por sus metros.
            </h2>
            <p className="text-base text-[#5A606A] leading-relaxed">
              Quien decide autopromover busca una vivienda que encaje con su parcela, su presupuesto y su forma de vivir. Pero también necesita saber qué incluye, cuánto puede adaptar, qué pasos vienen después y cómo evitar decisiones que encarecen el proyecto.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('how-it-works')}
            className="text-sm font-bold text-[#16181B] hover:text-[#0DA836] transition-colors inline-flex items-center gap-1.5 self-start lg:self-auto cursor-pointer"
          >
            <span>Descubre cómo funciona Medgón</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">01</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Partes de un modelo estudiado, no de una hoja en blanco.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              La ingeniería estructural y el modelado térmico ya están resueltos. Evitas ensayos y costes imprevistos de diseño preliminar.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">02</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Adaptas distribución, acabados y partidas.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Flexibilidad en las estancias de vida diaria, manteniendo fija la ubicación óptima de ventanas y cuartos técnicos.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">03</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Entiendes el proceso antes de tomar decisiones.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Nuestra oficina técnica te orienta de forma previa sobre soleamiento, desniveles de parcela y compatibilidad municipal.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">04</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Construyes para vivir bien y gastar menos durante décadas.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Viviendas diseñadas para 30 años de vida útil inicial, con prolongación de otros 20 años considerada en el modelado Passivhaus.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CATÁLOGO RESIDENCIAL 2026 */}
      <section id="catalogo-2026" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            CATÁLOGO RESIDENCIAL 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Un modelo de partida. Tu manera de vivir.
          </h2>
          <p className="text-base text-[#5A606A] leading-relaxed">
            Cada vivienda Medgón nace de una base arquitectónica optimizada. Eso permite avanzar con más claridad y mantener margen para adaptar aquello que realmente importa.
          </p>
        </div>

        {/* 9 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allModelsList.map((m) => (
            <article
              key={m.id}
              className="bg-white border border-[#16181B]/10 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#16181B]/30 hover:shadow-md transition-all group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={m.heroImage}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#16181B]/85 text-white text-xs font-bold px-2.5 py-1 rounded">
                    {m.m2Utiles} m² útiles
                  </div>
                  {m.id === 'mg-128' && (
                    <div className="absolute top-3 left-3 bg-[#0DA836] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                      Referencia
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#16181B]">
                      {m.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed line-clamp-3">
                    {m.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => onNavigate('model-detail', m.id)}
                  className="w-full py-2.5 text-xs font-bold text-center text-[#16181B] bg-[#FAF8F5] hover:bg-[#16181B] hover:text-white border border-[#16181B]/15 rounded transition-colors cursor-pointer"
                >
                  Ver modelo &rarr;
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Banner: ¿No sabes qué modelo encaja con tu terreno? */}
        <div className="mt-12 p-8 sm:p-10 bg-[#FAF8F5] border border-[#16181B]/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-xl font-bold text-[#16181B]">
              ¿No sabes qué modelo encaja con tu terreno?
            </h3>
            <p className="text-sm text-[#5A606A]">
              Revisamos la normativa urbanística municipal, el soleamiento y los accesos de tu parcela sin compromiso.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            No sé qué modelo encaja conmigo
          </button>
        </div>
      </section>

      {/* 4. CALIDAD DE VIDA REAL */}
      <section className="bg-[#FAF8F5] py-16 border-y border-[#16181B]/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              CALIDAD DE VIDA REAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
              No es solo una casa eficiente. Es una forma distinta de vivir.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2.5">
              <h3 className="text-base font-bold text-[#16181B]">
                Confort estable
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                Temperaturas más equilibradas durante todo el año, con menos dependencia de calefacción y refrigeración.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2.5">
              <h3 className="text-base font-bold text-[#16181B]">
                Aire más saludable
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                Ventilación controlada para renovar el aire interior y mejorar la salubridad del hogar de forma continua.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2.5">
              <h3 className="text-base font-bold text-[#16181B]">
                Construcción en madera técnica
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                Un sistema preciso, industrializado y basado en materiales naturales con base estructural rígida.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2.5">
              <h3 className="text-base font-bold text-[#16181B]">
                Decisión a largo plazo
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                Una vivienda concebida para reducir consumo, mantenimiento e incertidumbre a lo largo del tiempo.
              </p>
            </div>
          </div>

          <p className="text-[11px] text-[#8E95A2] pt-2">
            *Las prestaciones finales y el ahorro térmico dependen del proyecto definitivo, el clima local, la parcela, la orientación y los hábitos de uso de cada vivienda.
          </p>
        </div>
      </section>

      {/* 5. INGENIERÍA SIN JERGA (Passivhaus explicado de forma sencilla) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            INGENIERÍA SIN JERGA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Passivhaus, explicado de forma sencilla.
          </h2>
          <p className="text-base text-[#5A606A] leading-relaxed">
            Passivhaus no es una etiqueta decorativa. Es una metodología de diseño y construcción que busca reducir al máximo la demanda energética y mantener un ambiente interior confortable y saludable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
            <span className="text-xs font-bold text-[#0DA836] block">1</span>
            <h3 className="text-base font-bold text-[#16181B]">Aislamiento continuo</h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Muros multicapa con fibra de madera y celulosa para proteger del frío y del calor exterior.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
            <span className="text-xs font-bold text-[#0DA836] block">2</span>
            <h3 className="text-base font-bold text-[#16181B]">Hermeticidad controlada</h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Envolvente estanca verificada mediante test Blower Door certificado en cada obra montada.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
            <span className="text-xs font-bold text-[#0DA836] block">3</span>
            <h3 className="text-base font-bold text-[#16181B]">Eliminación de puentes térmicos</h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Diseño sin fugas térmicas en esquinas, encuentros con solera y forjados de planta.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
            <span className="text-xs font-bold text-[#0DA836] block">4</span>
            <h3 className="text-base font-bold text-[#16181B]">Carpinterías de altas prestaciones</h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Triple vidrio bajo emisivo con gas argón y perfilería hermética de máxima capacidad aislante.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
            <span className="text-xs font-bold text-[#0DA836] block">5</span>
            <h3 className="text-base font-bold text-[#16181B]">VMC con recuperación de calor</h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Ventilación continua 24 horas que filtra polvo y polen recuperando más del 90% del calor.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
            <span className="text-xs font-bold text-[#0DA836] block">6</span>
            <h3 className="text-base font-bold text-[#16181B]">Diseño bioclimático adaptado</h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Aprovechamiento solar en invierno y protección frente a sobrecalentamiento en verano.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PASO A PASO TRANSPARENTE */}
      <section id="como-funciona" className="bg-[#FAF8F5] py-16 border-y border-[#16181B]/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              PASO A PASO TRANSPARENTE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
              De la parcela a tu casa, sin pasos ocultos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2">
              <span className="text-2xl font-black text-[#16181B] block">01</span>
              <h3 className="text-sm font-bold text-[#16181B]">Cuéntanos tu idea</h3>
              <p className="text-xs text-[#5A606A] leading-relaxed">
                Conocemos tus necesidades familiares, el uso previsto y la localización de tu parcela.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2">
              <span className="text-2xl font-black text-[#16181B] block">02</span>
              <h3 className="text-sm font-bold text-[#16181B]">Revisamos parcela y modelo</h3>
              <p className="text-xs text-[#5A606A] leading-relaxed">
                La oficina técnica estudia pendientes, accesos y soleamiento para validar la compatibilidad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2">
              <span className="text-2xl font-black text-[#16181B] block">03</span>
              <h3 className="text-sm font-bold text-[#16181B]">Definimos adaptaciones y alcance</h3>
              <p className="text-xs text-[#5A606A] leading-relaxed">
                Ajustamos la tabiquería interior y elegimos la modalidad de contratación que necesitas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2">
              <span className="text-2xl font-black text-[#16181B] block">04</span>
              <h3 className="text-sm font-bold text-[#16181B]">Desarrollamos proyecto y fabricación</h3>
              <p className="text-xs text-[#5A606A] leading-relaxed">
                Digitalización técnica BIM y manufactura con madera técnica en la fábrica de Palencia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#16181B]/10 space-y-2">
              <span className="text-2xl font-black text-[#16181B] block">05</span>
              <h3 className="text-sm font-bold text-[#16181B]">Montaje y entrega</h3>
              <p className="text-xs text-[#5A606A] leading-relaxed">
                Estructura hermética montada en días en parcela, finalizando la vivienda en unos 6 meses de obra.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#5A606A] max-w-2xl">
              Cada proyecto requiere estudio técnico, urbanístico y económico. La claridad antes de empezar es parte esencial del proceso Medgón.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              Quiero estudiar mi parcela
            </button>
          </div>
        </div>
      </section>

      {/* 7. SOLUCIÓN INTEGRAL DE ENVOLVENTE MEDGÓN  */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            SOLUCIÓN INTEGRAL DE ENVOLVENTE MEDGÓN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Modalidades de contratación .
          </h2>
          <p className="text-base text-[#5A606A] leading-relaxed">
            Estructuramos nuestro sistema de industrialización en madera técnica en cuatro alcances definidos para adaptarnos a tu caso particular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-4">
            <span className="text-xs font-bold text-[#8E95A2] uppercase">Modalidad 01</span>
            <h3 className="text-lg font-bold text-[#16181B]">Suministro de Estructura</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La base estructural de la vivienda pasiva. Suministro mecanizado para constructoras o montadores externos homologados.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2 border-t border-[#16181B]/10">
              <li>• Fabricación en taller en Carrión de los Condes.</li>
              <li>• Estructura técnica de madera y forjados.</li>
              <li>• Suministro sin montaje para terceros.</li>
              <li>• Precisión milimétrica de ingeniería digital.</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-4">
            <span className="text-xs font-bold text-[#8E95A2] uppercase">Modalidad 02</span>
            <h3 className="text-lg font-bold text-[#16181B]">Suministro + Montaje</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Estructura mecanizada y montada en parcela por los equipos técnicos oficiales de Medgón.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2 border-t border-[#16181B]/10">
              <li>• Transporte y montaje oficial en parcela.</li>
              <li>• Envolvente hermética protegida en días.</li>
              <li>• Carpinterías de alta gama instaladas.</li>
              <li>• Sin instalaciones, sin fachada ni cubierta.</li>
            </ul>
          </div>

          <div className="p-6 bg-white border-2 border-[#16181B] rounded-lg space-y-4 relative shadow-sm">
            <div className="absolute -top-3 right-4 bg-[#F35843] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
              Recomendada
            </div>
            <span className="text-xs font-bold text-[#8E95A2] uppercase">Modalidad 03</span>
            <h3 className="text-lg font-bold text-[#16181B]">Suministro + Montaje + Instalaciones</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La envolvente técnica completa con las partidas críticas resueltas en una sola contratación.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2 border-t border-[#16181B]/10">
              <li>• Estructura industrializada y montaje completo.</li>
              <li>• Preinstalaciones integradas en cámaras técnicas.</li>
              <li>• Cubierta aislada e impermeabilizada.</li>
              <li>• Fachada arquitectónica industrializada incluida.</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-[#16181B]/10 rounded-lg space-y-4">
            <span className="text-xs font-bold text-[#8E95A2] uppercase">Modalidad 04</span>
            <h3 className="text-lg font-bold text-[#16181B]">Llave en Mano</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Servicio total de principio a fin para autopromotores en nuestro radio de acción operativo.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2 border-t border-[#16181B]/10">
              <li>• Todo incluido: desde cimentación hasta llaves.</li>
              <li>• Radio habitual: 150 km desde Palencia.</li>
              <li>• Cobertura también con asociados en Cataluña.</li>
              <li>• Un único contrato y garantía integral.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. TRANSPARENCIA DIRECTA (Preguntas Frecuentes) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            TRANSPARENCIA DIRECTA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Las preguntas que conviene responder antes de construir.
          </h2>
        </div>

        <div className="space-y-3 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-[#16181B]/10 rounded-lg bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-bold text-base text-[#16181B] flex justify-between items-center gap-4 cursor-pointer hover:bg-[#FAF8F5]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5A606A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0DA836]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#5A606A] leading-relaxed border-t border-[#16181B]/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. DIVULGACIÓN TÉCNICA (Crónicas de ingeniería Passivhaus) */}
      <section className="bg-[#FAF8F5] py-16 border-y border-[#16181B]/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
                DIVULGACIÓN TÉCNICA
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#16181B] mt-1">
                Crónicas de ingeniería Passivhaus.
              </h2>
              <p className="text-sm text-[#5A606A] mt-1">
                Artículos, análisis de consumo real y guías prácticas para el autopromotor.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('blog')}
              className="text-xs font-bold text-[#16181B] hover:text-[#0DA836] transition-colors"
            >
              Acceder al blog completo &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="p-5 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
              <span className="text-[10px] text-[#8E95A2] uppercase">4 Oct, 2026</span>
              <h3 className="text-sm font-bold text-[#16181B] hover:text-[#0DA836] cursor-pointer">
                Todo es relativo
              </h3>
              <p className="text-xs text-[#5A606A] line-clamp-2">
                Análisis de ciclo de vida y criterios de elección de materiales biofílicos en viviendas unifamiliares.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="text-xs font-bold text-[#0DA836] pt-1 block"
              >
                Leer artículo &rarr;
              </button>
            </article>

            <article className="p-5 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
              <span className="text-[10px] text-[#8E95A2] uppercase">4 Oct, 2026</span>
              <h3 className="text-sm font-bold text-[#16181B] hover:text-[#0DA836] cursor-pointer">
                Los tropiezos son descontados
              </h3>
              <p className="text-xs text-[#5A606A] line-clamp-2">
                Cómo la estandarización y el mecanizado en taller evitan imprevistos en obra.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="text-xs font-bold text-[#0DA836] pt-1 block"
              >
                Leer artículo &rarr;
              </button>
            </article>

            <article className="p-5 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
              <span className="text-[10px] text-[#8E95A2] uppercase">4 Oct, 2026</span>
              <h3 className="text-sm font-bold text-[#16181B] hover:text-[#0DA836] cursor-pointer">
                El inicio
              </h3>
              <p className="text-xs text-[#5A606A] line-clamp-2">
                Los pasos previos fundamentales al iniciar la autopromoción de una casa pasiva.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="text-xs font-bold text-[#0DA836] pt-1 block"
              >
                Leer artículo &rarr;
              </button>
            </article>

            <article className="p-5 bg-white border border-[#16181B]/10 rounded-lg space-y-2">
              <span className="text-[10px] text-[#8E95A2] uppercase">12 Mar, 2026</span>
              <h3 className="text-sm font-bold text-[#16181B] hover:text-[#0DA836] cursor-pointer">
                Ingeniería Passivhaus
              </h3>
              <p className="text-xs text-[#5A606A] line-clamp-2">
                La experiencia de vivir en una vivienda de consumo casi nulo con ventilación continua.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="text-xs font-bold text-[#0DA836] pt-1 block"
              >
                Leer artículo &rarr;
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* 9.5 SOLUCIONES ESPECIALIZADAS PARA PARTICULARES (B2C & AI SEO) */}
      <SpecializedSolutionsSection 
        onNavigate={onNavigate}
        onSelectSolutionForContact={(solutionName) => {
          setFormData(prev => ({ ...prev, modeloInteres: solutionName }));
        }}
      />

      {/* 10. OFICINA TÉCNICA MEDGÓN (Formulario oficial) */}
      <section id="solicitar-informacion" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836] block">
              OFICINA TÉCNICA MEDGÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
              Hablemos de tu terreno y de tu futura vivienda.
            </h2>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              Si dispones de parcela o estás valorando una opción concreta, revisamos contigo soleamiento, accesos y modelo compatible.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#16181B]/10 text-sm text-[#16181B]">
              <div>
                <strong>Fábrica:</strong> Carrión de los Condes, Palencia (España)
              </div>
              <div>
                <strong>Teléfono:</strong> <a href="tel:979881010" className="text-[#0DA836] font-semibold hover:underline">979 88 10 10</a>
              </div>
              <div>
                <strong>Email técnico:</strong> <a href="mailto:informacion@medgon.com" className="text-[#0DA836] font-semibold hover:underline">informacion@medgon.com</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-[#16181B]/10 rounded-xl p-6 sm:p-10 shadow-xs">
              {formSubmitted ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#0DA836] mx-auto" />
                  <h3 className="text-xl font-bold text-[#16181B]">
                    ¡Solicitud de estudio recibida!
                  </h3>
                  <p className="text-sm text-[#5A606A]">
                    Nuestro equipo técnico de Carrión de los Condes revisará los datos de tu parcela y se pondrá en contacto contigo en breve.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#0DA836] hover:underline pt-2 cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Nombre y apellidos
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="600 000 000"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Situación de la parcela
                    </label>
                    <select
                      value={formData.parcelaSituacion}
                      onChange={(e) => setFormData({ ...formData, parcelaSituacion: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded bg-white focus:outline-none focus:border-[#16181B]"
                    >
                      <option value="">Selecciona tu situación</option>
                      <option value="en_propiedad">Dispongo de parcela en propiedad</option>
                      <option value="en_proceso_compra">En proceso de compra o arras</option>
                      <option value="buscando_terreno">Buscando terreno activamente</option>
                      <option value="sin_terreno">Aún no dispongo de parcela</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Modelo de catálogo de interés
                    </label>
                    <select
                      value={formData.modeloInteres}
                      onChange={(e) => setFormData({ ...formData, modeloInteres: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded bg-white focus:outline-none focus:border-[#16181B]"
                    >
                      <option value="Aún no lo sé / Deseo orientación">Aún no lo sé / Deseo orientación</option>
                      <option value="Derecho de vuelo en madera (Ampliación sobre azotea)">Derecho de vuelo en madera (Ampliación sobre azotea)</option>
                      <option value="Fachadas industrializadas (Envolventes Passivhaus)">Fachadas industrializadas (Envolventes Passivhaus)</option>
                      <option value="Cubiertas de madera de alta precisión (Leica 3D)">Cubiertas de madera de alta precisión (Leica 3D)</option>
                      <option value="MG 50">Modelo MG 50 (50 m²)</option>
                      <option value="MG 87">Modelo MG 87 (87 m²)</option>
                      <option value="MG 100">Modelo MG 100 (100 m²)</option>
                      <option value="MG 105 Calzada">MG 105 Calzada (105 m²)</option>
                      <option value="MG 120">Modelo MG 120 (120 m²)</option>
                      <option value="MG 128 Equilibrio">MG 128 Equilibrio (128 m²)</option>
                      <option value="MG 130">Modelo MG 130 (130 m²)</option>
                      <option value="MG 148 Villoldo">MG 148 Villoldo (148 m²)</option>
                      <option value="MG 165">Modelo MG 165 (165 m²)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors cursor-pointer"
                  >
                    Solicitar estudio técnico preliminar &rarr;
                  </button>

                  <p className="text-[11px] text-[#8E95A2] text-center pt-1">
                    Asesoramiento inicial sin compromiso contractual. Tratamiento seguro de datos según RGPD.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
