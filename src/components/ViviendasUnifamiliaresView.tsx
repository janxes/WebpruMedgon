import React from 'react';
import { 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Leaf, 
  Sun, 
  Wind, 
  Award, 
  ChevronRight, 
  Building2, 
  Phone, 
  Mail,
  Zap,
  Layers,
  ThermometerSnowflake,
  FileCheck2
} from 'lucide-react';
import { ProductosSubmenu } from './ProductosSubmenu';

interface ProductViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const ViviendasUnifamiliaresView: React.FC<ProductViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <ProductosSubmenu currentProduct="productos-unifamiliares" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Home className="w-3.5 h-3.5" />
            <span>Residencial Passivhaus · Obra Nueva y Autopromoción</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Viviendas unifamiliares y en promoción.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Construimos hogares en <strong>madera técnica Passivhaus</strong> confortables, llenos de luz natural, acústicamente serenos y biológicamente saludables.
          </p>
        </div>

        {/* Imagen Destacada Principal */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/viviendas-unifamiliares-promocion.webp"
            alt="Viviendas unifamiliares y en promoción industrializadas en madera Medgón"
            className="w-full h-[360px] sm:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Industrialización Residencial Certificada
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              De los planos de tu arquitecto al montaje hermético en parcela en solo 6 días
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Métricas y Pilares Clave */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">Hasta 85%</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Ahorro Energético</p>
          <p className="text-xs text-[#5A606A]">En calefacción y refrigeración frente a la edificación tradicional convencional.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">~6 Meses</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Plazo Total de Entrega</p>
          <p className="text-xs text-[#5A606A]">Fabricación robotizada en taller climatizado mientras se prepara la cimentación.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">Passivhaus</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Certificación Oficial</p>
          <p className="text-xs text-[#5A606A]">Pruebas Blower Door n50 &lt; 0.6 ren/h garantizadas por contrato en cada vivienda.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">100% Fijado</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Presupuesto Cerrado</p>
          <p className="text-xs text-[#5A606A]">Sin sobrecostes ni desviaciones imprevistas de materiales u obra húmeda.</p>
        </div>
      </section>

      {/* 3. Caso de Éxito Real: Marratxí (Mallorca) */}
      <section className="bg-[#16181B] text-white rounded-3xl p-6 sm:p-12 lg:p-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78E639]/15 text-[#78E639] text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>CASO DE ÉXITO MEDGÓN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Vivienda unifamiliar Passivhaus en Marratxí (Mallorca)
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E0] leading-relaxed">
              En Marratxí ejecutamos una vivienda unifamiliar de arquitectura mediterránea de alta eficiencia energética. Gracias al sistema de entramado ligero industrializado con aislamiento ecológico de fibra de madera insuflada y carpinterías de altas prestaciones integradas en taller, la vivienda se mantuvo fresca en verano sin necesidad de aire acondicionado invasivo.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Hermeticidad</span>
                <p className="text-sm font-bold text-white">0,42 ren/h Blower Door</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Estructura</span>
                <p className="text-sm font-bold text-white">Entramado ligero + Kerto</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Montaje en isla</span>
                <p className="text-sm font-bold text-white">5 jornadas completas</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/marratxi-passivhaus.webp"
                alt="Caso de éxito vivienda unifamiliar Passivhaus Marratxí Mallorca Medgón"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Las 4 Ventajas Constructivas según Medgón */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Por qué elegir el sistema Medgón
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Beneficios tangibles para tu familia y tu patrimonio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16181B]">
              1. Eficiencia energética extrema
            </h3>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              Las viviendas Passivhaus fabricadas en entornos controlados requieren una mínima cantidad de energía para mantener una temperatura interior constante de 20-22 °C todo el año. La ventilación de doble flujo con recuperación de calor renueva el aire cada 2 horas sin pérdidas térmicas.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Facturas eléctricas mínimas gracias al aislamiento continuo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Sin corrientes de aire ni paredes frías al tacto</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16181B]">
              2. Calidad constructiva robotizada
            </h3>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              La industrialización en fábrica garantiza tolerancias milimétricas en cada panel. Al fabricarse bajo cubierto libre de lluvias y humedades, los materiales conservan sus propiedades intactas y se erradican los errores típicos de la obra húmeda convencional.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Láminas herméticas y sellados verificados antes del envío</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Control de calidad y marcado CE en todos los componentes</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16181B]">
              3. Tiempos de construcción reducidos
            </h3>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              La prefabricación paralela permite fabricar los muros y forjados en nave mientras el constructor realiza los movimientos de tierras y la losa de cimentación. Cuando la solera está lista, montamos la estructura completa y la estanqueidad en cuestión de días.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Reducción de intereses de hipoteca de autopromoción</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Menor tiempo de alquiler o incertidumbre de mudanza</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16181B]">
              4. Menor impacto ambiental y huella de CO₂ negativa
            </h3>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              La madera técnica de bosques sostenibles PEFC/FSC almacena carbono en lugar de emitirlo. Mientras el hormigón y el acero generan hasta el 11% de las emisiones globales, una casa Medgón retiene toneladas de CO₂ en su estructura de por vida.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Aislamiento 100% natural de fibra de madera reciclable</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Reducción del 90% de residuos generados en parcela</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Dos Vías para Construir: Modelo de Catálogo o Proyecto a Medida */}
      <section className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#16181B]/10 space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Flexibilidad Total para Particulares
          </span>
          <h2 className="text-3xl font-bold text-[#16181B]">
            ¿Tienes ya arquitecto o prefieres un modelo cerrado?
          </h2>
          <p className="text-sm text-[#5A606A]">
            En Medgón nos adaptamos exactamente a tu situación. Podemos fabricar el proyecto exclusivo que diseñe tu arquitecto o puedes elegir uno de nuestros modelos prediseñados optimizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-[#16181B]/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0DA836]">Opción 1</span>
              <h3 className="text-xl font-bold text-[#16181B]">Modelos de Catálogo Medgón (50 a 165 m²)</h3>
              <p className="text-sm text-[#5A606A]">
                Diseños prediseñados y optimizados geométricamente por nuestra oficina técnica para maximizar el confort Passivhaus al menor coste por metro cuadrado.
              </p>
              <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Modelos MG 50, MG 87, MG 105, MG 128, MG 148 y MG 165</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Planos, renders y mediciones detalladas listas</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('catalog')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0DA836] text-white font-bold text-sm hover:bg-[#0b8f2d] transition-colors cursor-pointer"
            >
              <span>Ver catálogo de modelos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#16181B]/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Opción 2</span>
              <h3 className="text-xl font-bold text-[#16181B]">Proyecto a Medida de tu Arquitecto</h3>
              <p className="text-sm text-[#5A606A]">
                Nuestra Oficina Técnica convierte el diseño singular de tu arquitecto en despiece milimétrico industrializado. Resolvemos todos los nudos estructurales y puentes térmicos.
              </p>
              <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Libertad arquitectónica absoluta en formas y acabados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Asesoramiento técnico continuo a tu dirección facultativa</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#16181B] text-white font-bold text-sm hover:bg-[#F35843] transition-colors cursor-pointer"
            >
              <span>Enviar proyecto para estudio de viabilidad</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Banner */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Inicia tu hogar Passivhaus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Quieres construir una vivienda unifamiliar de consumo casi nulo?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            Nuestros ingenieros de edificación revisarán tu caso sin compromiso y te orientarán sobre costes, plazos y soluciones técnicas.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Solicitar asesoramiento
          </button>
          <a
            href="tel:+34979100010"
            className="px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-colors cursor-pointer text-center"
          >
            Llamar al 979 10 00 10
          </a>
        </div>
      </section>

    </div>
  );
};
