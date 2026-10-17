import React from 'react';
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Leaf, 
  Award, 
  ChevronRight, 
  Zap, 
  Volume2, 
  Boxes,
  Compass,
  FileText
} from 'lucide-react';
import { ProductosSubmenu } from './ProductosSubmenu';

interface ProductViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const EdificiosPlurifamiliaresView: React.FC<ProductViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <ProductosSubmenu currentProduct="productos-plurifamiliares" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Construcción en Altura · Residencial Colectivo · BTR & VPO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Edificios plurifamiliares en altura.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Fabricamos tanto <strong>edificios completos de estructura de madera técnica en altura</strong> como cerramientos y forjados para favorecer la <strong>construcción híbrida</strong> (núcleos de hormigón con envolvente ligera de madera).
          </p>
        </div>

        {/* Imagen Destacada Principal */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/edificios-plurifamiliares-altura.jpg"
            alt="Edificio plurifamiliar en altura construido con entramado y paneles de madera técnica Medgón"
            className="w-full h-[360px] sm:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Descarbonización de la Vivienda Colectiva
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Hasta un 60% menos de peso en cimentación y entrega hasta 12 meses antes que la obra tradicional
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Métricas Clave */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">-60%</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Carga en Cimentación</p>
          <p className="text-xs text-[#5A606A]">La ligereza del entramado y Kerto minimiza costes de pilotaje y excavación.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">10-12 Meses</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Ahorro en Plazo Total</p>
          <p className="text-xs text-[#5A606A]">Retorno de inversión acelerado para promotores y comercialización anticipada.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">CTE DB-HR</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Aislamiento Acústico</p>
          <p className="text-xs text-[#5A606A]">Soluciones ensayadas en laboratorio para ruido aéreo e impacto entre viviendas.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">Construcción Híbrida</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Máxima Flexibilidad</p>
          <p className="text-xs text-[#5A606A]">Perfecta compatibilidad con núcleos húmedos, cajas de ascensores y garajes.</p>
        </div>
      </section>

      {/* 3. Caso de Éxito Real: 4 VPO en Villamuriel de Cerrato (Palencia) */}
      <section className="bg-[#16181B] text-white rounded-3xl p-6 sm:p-12 lg:p-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78E639]/15 text-[#78E639] text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>CASO DE ÉXITO MEDGÓN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Promoción de 4 VPO en Villamuriel de Cerrato (Palencia)
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E0] leading-relaxed">
              En Villamuriel de Cerrato se demostró que la construcción industrializada en madera técnica y el estándar Passivhaus son perfectamente viables y rentables en el sector de la <strong>Vivienda de Protección Oficial (VPO)</strong>.
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              El proyecto resolvió la envolvente térmica continua y la estructura portante en tiempo récord, permitiendo a los adjudicatarios disfrutar de viviendas con consumos energéticos casi nulos (menos de 20 € al mes en calefacción) con los máximos estándares de calidad.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Tipología</span>
                <p className="text-sm font-bold text-white">Vivienda Protegida (VPO)</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Estándar</span>
                <p className="text-sm font-bold text-white">Passivhaus Certificado</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Impacto</span>
                <p className="text-sm font-bold text-white">Pobreza energética cero</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/sistema-forjado-estructuras.webp"
                alt="Estructura industrializada para edificación residencial colectiva en madera Medgón"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ventajas para Promotores Inmobiliarios y Constructoras */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Propuesta de Valor B2B
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Por qué los fondos y promotores eligen el sistema plurifamiliar Medgón
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Descarbonización & ESG Reales</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La madera actúa como sumidero natural de carbono. Cada metro cúbico de madera técnica almacena aproximadamente 1 tonelada de CO₂, facilitando la consecución de sellos Verdes, BREEAM, LEED y Taxonomía Europea.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Acceso preferente a financiación verde bancaria</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Cumplimiento anticipado de normativas de huella de carbono</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Industrialización y Certeza</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La escasez de mano de obra cualificada en obra se soluciona trasladando el 80% de los trabajos a fábrica automatizada. Los muros llegan con aislamiento, rastreles e impermeabilizaciones ya integrados.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Menor siniestralidad laboral al trabajar en seco a cota cero</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Plazos de entrega contractuales inamovibles</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Soluciones Acústicas Ensayadas</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Los encuentros entre forjados y medianeras incorporan bandas elásticas desolidarizadoras y capas de masa suspendida para superar con holgura los 50 dBA exigidos por el CTE DB-HR.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Ensayos acústicos in situ disponibles</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Excelente aislamiento a impacto entre plantas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Área de Promociones Plurifamiliares
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Planificando una promoción colectiva, cooperativa o BTR?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            Nuestros ingenieros calculan la viabilidad técnica y económica para incorporar madera técnica a tu edificio plurifamiliar.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Solicitar reunión técnica
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
