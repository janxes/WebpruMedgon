import React from 'react';
import { 
  Building2, 
  School, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Leaf, 
  Award, 
  ChevronRight, 
  Heart, 
  Zap, 
  VolumeX, 
  Layers, 
  Boxes,
  FileText
} from 'lucide-react';
import { ProductosSubmenu } from './ProductosSubmenu';

interface ProductViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const EdificiosTerciariosView: React.FC<ProductViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <ProductosSubmenu currentProduct="productos-terciario" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <School className="w-3.5 h-3.5" />
            <span>Equipamientos Públicos · Educativo · Sanitario · Oficinas</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Edificios de uso terciario.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Fabricamos edificios para necesidades tanto empresariales como de uso público, con <strong>casos de éxito demostrados en áreas sensibles como la infancia y la sanidad</strong> bajo criterios Passivhaus.
          </p>
        </div>

        {/* Imagen Destacada Principal */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/edificios-uso-terciario.webp"
            alt="Edificios de uso terciario y educativo construidos en madera técnica por Medgón"
            className="w-full h-[360px] sm:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Arquitectura Dotacional y Corporativa Descarbonizada
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Espacios diáfanos con forjados Kerto Ripa de hasta 18 m y calidad ambiental sin emisiones
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Métricas Clave */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">Hasta 18 m</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Luces Libres Diáfanas</p>
          <p className="text-xs text-[#5A606A]">Forjados cajón Kerto Ripa sin necesidad de pilares intermedios para aulas y salas magnas.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">0% COVs</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Aire Libre de Tóxicos</p>
          <p className="text-xs text-[#5A606A]">Madera natural y aislamientos minerales sin emisiones volátiles, ideal para la salud de niños y pacientes.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">Período Vacacional</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Montaje Exprés</p>
          <p className="text-xs text-[#5A606A]">Ejecución en semanas durante meses de verano sin interferir con el calendario escolar ni laboral.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">BREEAM / LEED</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Máxima Puntuación</p>
          <p className="text-xs text-[#5A606A]">Estructuras certificadas con huella de carbono negativa para auditorías ESG corporativas.</p>
        </div>
      </section>

      {/* 3. Caso de Éxito: Colegio Libre Waldorf en Aravaca (Madrid) */}
      <section className="bg-[#16181B] text-white rounded-3xl p-6 sm:p-12 lg:p-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78E639]/15 text-[#78E639] text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>CASO DE ÉXITO DESTACADO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Colegio Libre Waldorf en Aravaca (Madrid)
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E0] leading-relaxed">
              En este proyecto educativo de referencia en Madrid, Medgón fabricó la estructura de madera industrializada cumpliendo los estrictos requerimientos de salud biológica, ergonomía y serenidad acústica exigidos por la pedagogía Waldorf.
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              El uso de madera técnica vista combinada con ventilación VMC y aislamiento continuo de fibra de madera proporcionó un clima interior templado y silencioso, reduciendo drásticamente las bajas escolares y el gasto en climatización invernal.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Uso</span>
                <p className="text-sm font-bold text-white">Educación Infantil y Primaria</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Acústica</span>
                <p className="text-sm font-bold text-white">Absorción y calma sonora</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Ejecución</span>
                <p className="text-sm font-bold text-white">Rápida sin ruidos de obra</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/colegio-waldorf-aravaca.webp"
                alt="Colegio Waldorf Aravaca Madrid edificación de madera Medgón"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tipologías de Edificios Terciarios Desarrolladas por Medgón */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Sectores de Aplicación
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Soluciones industrializadas para cada necesidad empresarial o comunitaria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Educativo & Escuelas Infantiles</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Guarderías, colegios e institutos donde los niños pasan más de 8 horas al día. La madera técnica genera un entorno seguro y biológicamente amigable que favorece la concentración.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Montaje en verano sin perturbar el curso</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Ventilación continua con filtrado polínico</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Clínicas y Espacios Sociosanitarios</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Residencias de mayores, centros de día y clínicas médicas. Los estudios demuestran que los entornos de madera reducen la frecuencia cardíaca y aceleran los procesos de recuperación.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Aislamiento acústico entre habitaciones</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Control higrotérmico natural del aire</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Oficinas y Sedes Corporativas</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Edificios corporativos representativos que transmiten los valores ecológicos de la compañía y ofrecen a los trabajadores un entorno biofílico donde se reduce el estrés.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Alineado con directivas europeas CSRD</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Espacios flexibles adaptables a nuevas demandas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Tecnología Kerto Ripa para Grandes Luces */}
      <section className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#16181B]/10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              Tecnología de Vanguardia Homologada
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16181B]">
              Forjados Kerto Ripa: la clave técnica para espacios terciarios diáfanos
            </h2>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              Medgón es fabricante certificado oficial en España de elementos estructurales <strong>Kerto® Ripa de Metsä Wood</strong>. Estos forjados nervados de madera microlaminada permiten salvar vanos de hasta 18 metros con un peso propio mínimo y sin deformaciones en el tiempo.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-[#16181B] border border-[#16181B]/10">
                Luz libre hasta 18 m
              </span>
              <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-[#16181B] border border-[#16181B]/10">
                Paso de instalaciones integrado
              </span>
              <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-[#16181B] border border-[#16181B]/10">
                Certificación ETA europea
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <img
              src="/certificado-kerto-ripa.png"
              alt="Certificado oficial Kerto Ripa Medgón Metsä Wood"
              className="max-h-36 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Banner */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Oficina Técnica Terciaria
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Tienes un proyecto dotacional, educativo o empresarial?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            Nuestros ingenieros estructurales analizan las luces, cargas y plazos de tu proyecto para ofrecerte la solución industrializada más eficiente.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Consultar con Oficina Técnica
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
