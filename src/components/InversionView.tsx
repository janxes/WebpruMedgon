import React from 'react';
import { 
  Building2, 
  Coins, 
  CheckCircle2, 
  Cpu, 
  Factory, 
  Layers, 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  ArrowRight,
  TrendingUp,
  MapPin,
  Calendar,
  Briefcase
} from 'lucide-react';
import { SobreMedgonSubmenu } from './SobreMedgonSubmenu';

interface InversionViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const InversionView: React.FC<InversionViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <SobreMedgonSubmenu currentView="inversion" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Coins className="w-3.5 h-3.5" />
            <span>INVERSIÓN INDUSTRIAL · PROGRAMA REINDUS & COMPETITIVIDAD</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Inversión productiva y modernización industrial.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            La innovación y el liderazgo de Medgón se sustentan en una <strong>apuesta decidida y continua por la reinversión</strong> en tecnología, ampliación de capacidad fabril y robotización industrial en Carrión de los Condes (Palencia).
          </p>

          <div className="inline-flex flex-wrap items-center gap-2 pt-1">
            <span className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#16181B]/10 text-xs font-bold text-[#16181B] flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#0DA836]" />
              Ministerio de Industria, Comercio y Turismo
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#16181B]/10 text-xs font-bold text-[#16181B] flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#0DA836]" />
              Programa REINDUS
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#16181B]/10 text-xs font-bold text-[#16181B] flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#0DA836]" />
              Inversión en PYMES
            </span>
          </div>
        </div>

        {/* Imagen Destacada de Inversión PYMES */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/inversion-pymes.webp"
            alt="Proyectos de Inversión en PYMES y Modernización Industrial Medgón Passivhaus"
            className="w-full h-[320px] sm:h-[460px] lg:h-[540px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Desarrollo Fabril en Castilla y León
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Cofinanciación pública e inversión de capital propio para liderar la construcción con madera técnica
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Proyectos Oficiales Financiados */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Marco Institucional y Expedientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Programas oficiales de apoyo a la competitividad industrial
          </h2>
          <p className="text-[#5A606A] max-w-3xl leading-relaxed">
            Las inversiones estratégicas ejecutadas por Medgón cuentan con el respaldo de programas públicos orientados a la reindustrialización, transición ecológica y modernización tecnológica de instalaciones productivas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tarjeta 1: Expediente RCI REINDUS */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#16181B]/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-[#0DA836]/15 text-[#0DA836] text-xs font-bold font-mono">
                  EXP: RCI-040000-2017-210
                </span>
                <span className="text-xs text-[#8E95A2] font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  REINDUS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#16181B]">
                Traslado y Ampliación de Planta Industrial
              </h3>

              <div className="p-4 rounded-xl bg-white border border-[#16181B]/10 space-y-2">
                <p className="text-xs font-bold text-[#0DA836] uppercase tracking-wider">
                  Resolución Oficial de Financiación
                </p>
                <p className="text-sm font-semibold text-[#16181B] leading-relaxed">
                  "El proyecto ha recibido financiación del Ministerio de Industria, Comercio y Turismo dentro del Programa de Reindustrialización y Fomento de la Competitividad Industrial."
                </p>
              </div>

              <p className="text-sm text-[#5A606A] leading-relaxed">
                Este proyecto supuso un punto de inflexión histórico para Medgón, permitiendo el traslado desde instalaciones primitivas a la moderna factoría actual en el Polígono Industrial de Carrión de los Condes, dotada de más de 3.000 m² de superficie de fabricación cubierta, climatización biofílica y naves de ensamblaje en seco.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#5A606A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span><strong>Ampliación de capacidad productiva:</strong> Capacidad para prefabricar más de 60 viviendas Passivhaus y 15.000 m² de envolvente al año.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#5A606A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span><strong>Creación de empleo técnico local:</strong> Atracción y arraigo de ingenieros, arquitectos técnicos y operarios especializados en madera estructural en el entorno rural palentino.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#5A606A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span><strong>Instalación de puente grúa y logística de gran tonelaje:</strong> Carga de paneles de hasta 12 metros de longitud bajo techo protegido de intemperie.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#16181B]/10 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#0DA836]" />
              <span className="text-xs font-medium text-[#5A606A]">Polígono Industrial, Nave 50 · 34120 Carrión de los Condes (Palencia)</span>
            </div>
          </div>

          {/* Tarjeta 2: Maquinaria Industrial y Línea Weinmann / Hundegger */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#16181B]/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-[#0DA836]/15 text-[#0DA836] text-xs font-bold font-mono">
                  EQUIPAMIENTO & ROBÓTICA
                </span>
                <span className="text-xs text-[#8E95A2] font-semibold flex items-center gap-1">
                  <Factory className="w-3.5 h-3.5" />
                  INDUSTRIA 4.0
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#16181B]">
                Proyectos de Adquisición de Maquinaria Industrial
              </h3>

              <div className="rounded-xl overflow-hidden border border-[#16181B]/10 bg-white">
                <img
                  src="/proyectos-adquisicion-maquinaria-industrial.jpg"
                  alt="Proyectos de adquisición de maquinaria industrial de alta precisión Medgón"
                  className="w-full h-44 object-cover"
                />
              </div>

              <p className="text-sm text-[#5A606A] leading-relaxed">
                Inversiones focalizadas en maquinaria de control numérico (CNC) de 5 ejes, mesas automatizadas de enmarcado y clavado robotizado, y sistemas de insuflado de aislamiento de fibra de madera y celulosa con pesaje volumétrico computerizado.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#5A606A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span><strong>Tolerancias milimétricas (&lt; 1 mm):</strong> Ajustes perfectos sin necesidad de cortes ni rectificados en obra.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#5A606A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span><strong>Mesas hidráulicas de volteo:</strong> Fabricación ergonómica y segura de forjados y cerramientos de doble cara.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#5A606A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span><strong>Control automático de densidad de aislamiento:</strong> Ausencia de puentes térmicos y asentamientos por gravedad.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#16181B]/10 flex items-center gap-3">
              <Cpu className="w-4 h-4 text-[#0DA836]" />
              <span className="text-xs font-medium text-[#5A606A]">Integración directa Cadwork BIM a control numérico (CAM)</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Panel de Impacto de las Inversiones */}
      <section className="bg-[#16181B] text-white p-8 sm:p-12 lg:p-16 rounded-3xl space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Retorno Social, Técnico y Ambiental
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Resultados de la modernización continuada de Medgón
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Cada euro invertido en nuestra factoría se traduce en mayor seguridad para los trabajadores, mayor rapidez en montaje para los clientes y una huella de carbono radicalmente inferior.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#78E639]">+3.000 m²</span>
            <h4 className="text-sm font-bold text-white">Superficie Productiva Cubierta</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Instalaciones 100% protegidas de humedad y lluvia durante el ensamblaje de muros y forjados.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#78E639]">&lt; 1 mm</span>
            <h4 className="text-sm font-bold text-white">Precisión en Corte y Mecanizado</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Erradicación de holguras y garantía de estanqueidad al aire antes del test Blower Door.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#78E639]">100%</span>
            <h4 className="text-sm font-bold text-white">Residuos de Madera Valorizados</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Serrín y recortes reaprovechados íntegramente como biomasa térmica para calefacción de la nave.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#78E639]">60+</span>
            <h4 className="text-sm font-bold text-white">Viviendas Passivhaus / Año</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Capacidad instalada escalable para responder a la creciente demanda de edificación sostenible.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">Transparencia y Solvencia Industrial</h4>
            <p className="text-xs text-white/70">
              Medgón cumple con todas las exigencias de publicidad y justificación técnica impuestas por la Unión Europea y el Ministerio de Industria.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <img 
              src="/inversion-pymes-medgon.jpg" 
              alt="Logo Inversión PYMES Medgón"
              className="h-12 w-auto object-contain rounded bg-white p-1"
            />
          </div>
        </div>
      </section>

      {/* 4. Llamada a la Acción (CTA) */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Visitas Técnicas a Fábrica
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#16181B]">
            ¿Quieres conocer nuestra factoría e instalaciones en persona?
          </h3>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Recibimos a arquitectos, promotores y clientes particulares para mostrar en directo los procesos de robotización, control de calidad y montaje de módulos en Carrión de los Condes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0DA836] text-white font-bold hover:bg-[#0b8e2e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Solicitar Visita Técnica</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('oficina-tecnica')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#16181B]/15 text-[#16181B] font-bold hover:bg-black/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Ver Oficina Técnica</span>
          </button>
        </div>
      </section>

    </div>
  );
};
