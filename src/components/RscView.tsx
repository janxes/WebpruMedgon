import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Leaf, 
  Globe2, 
  Users, 
  Award, 
  FileCheck2, 
  Scale
} from 'lucide-react';
import { SobreMedgonSubmenu } from './SobreMedgonSubmenu';

interface RscViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const RscView: React.FC<RscViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <SobreMedgonSubmenu currentView="rsc" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Globe2 className="w-3.5 h-3.5" />
            <span>RESPONSABILIDAD SOCIAL CORPORATIVA · AGENDA 2030</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            RSC y Objetivos de Desarrollo Sostenible.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            ¿Te has parado a pensar alguna vez en el gran impacto que tienen las empresas sobre el territorio en el que operan? En Medgón entendemos la RSC como un <strong>compromiso ético y voluntario</strong> dirigiendo nuestras actividades de forma sostenible en el entorno social, económico y medioambiental.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF8F5] border border-[#16181B]/10 text-xs font-bold text-[#16181B]">
            <span>Sentimiento de equipo:</span>
            <span className="text-[#0DA836]">#SoyMedgón</span>
          </div>
        </div>

        {/* Imagen Destacada ODS */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/ods-medgon.webp"
            alt="Contribución de Medgón a los Objetivos de Desarrollo Sostenible ODS"
            className="w-full h-[320px] sm:h-[460px] lg:h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Impacto Positivo en el Territorio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Compromiso real con las personas, el medio ambiente y la comunidad de Tierra de Campos
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Las 3 Áreas de Gestión de la RSC en Medgón */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Pilares Fundamentales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Cómo influye la RSC en la gestión diaria de Medgón
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16181B]">Área Económica Ética</h3>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              Gestión transparente, contratos estables y fomento de proveedores locales de proximidad. Promovemos un crecimiento sostenible alejado de la especulación inmobiliaria, garantizando solvencia financiera y presupuestos cerrados.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Reinversión continua en I+D y bienestar laboral</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Puntualidad de pago y relaciones de confianza</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16181B]">Área Social e Inclusiva</h3>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              Las personas en el centro. Impulsamos empleo de calidad en el entorno rural palentino, formación técnica continuada y un Plan de Igualdad pionero en el sector de la construcción para erradicar cualquier discriminación.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Igualdad efectiva de trato y oportunidades</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Prevención y seguridad en el trabajo en seco</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16181B]">Área Medioambiental</h3>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              Descarbonización real del ciclo de vida de la edificación. Calculamos, reducimos y compensamos nuestra Huella de Carbono Corporativa con certificación oficial del Ministerio de Transición Ecológica y auditoría ISO 14064.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Madera de bosques gestionados sosteniblemente (PEFC/FSC)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                <span>Residuos casi cero gracias a la industrialización</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Huella de Carbono Corporativa: Inscripción MITECO e ISO 14064 */}
      <section className="bg-[#16181B] text-white rounded-3xl p-6 sm:p-12 lg:p-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78E639]/15 text-[#78E639] text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>CERTIFICACIÓN OFICIAL DE IMPACTO CLIMÁTICO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Certificado de Huella de Carbono Corporativa (Alcance 1 + 2 + 3)
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E0] leading-relaxed">
              La <strong>Huella de Carbono Corporativa</strong> es una herramienta esencial para evaluar con rigor científico el impacto de nuestra actividad industrial y nuestra contribución real al freno del cambio climático.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                <span className="text-xs uppercase text-[#78E639] font-bold">19 de diciembre de 2023</span>
                <p className="text-sm font-semibold text-white">Inscripción oficial en MITECO</p>
                <p className="text-xs text-[#94A3B8]">Inscrita en el Registro de huella de carbono del Ministerio para la Transición Ecológica y el Reto Demográfico con alcance 1+2+3.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1">
                <span className="text-xs uppercase text-[#78E639] font-bold">18 de enero de 2024</span>
                <p className="text-sm font-semibold text-white">Verificación UNE-EN ISO 14064-1:2019</p>
                <p className="text-xs text-[#94A3B8]">Certificado de verificación de Huella de Carbono de Organización auditado y validado independientemente por OCA Global.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#78E639]/20 text-[#78E639] flex items-center justify-center">
              <FileCheck2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Transparencia Total</h3>
            <p className="text-xs text-[#CBD5E0] leading-relaxed">
              Medgón no solo predica la edificación sostenible, sino que audita el 100% de los procesos de sus plantas de fabricación para ofrecer a clientes e inversores datos certificados.
            </p>
            <div className="pt-2">
              <span className="px-3 py-1 bg-[#78E639] text-[#16181B] font-bold text-xs rounded-full inline-block">
                Alcance 1+2+3 Auditado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Plan de Igualdad en la Construcción */}
      <section className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#16181B]/10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Compromiso Social y Laboral
          </span>
          <h2 className="text-3xl font-bold text-[#16181B]">
            Primer Plan de Igualdad de Oportunidades Medgón
          </h2>
          <p className="text-sm sm:text-base text-[#5A606A] leading-relaxed">
            Medgón pasa a formar parte de las empresas pioneras que impulsan su propio <strong>Plan de Igualdad de Oportunidades en el sector de la Construcción</strong>. Elaborado con el compromiso conjunto de la Dirección y de la plantilla de Medgón S.L., establece la igualdad de oportunidades entre mujeres y hombres como principio estratégico fundamental de nuestra política de calidad y recursos humanos (Ley Orgánica 3/2007).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2">
            <CheckCircle2 className="w-5 h-5 text-[#0DA836]" />
            <h4 className="text-sm font-bold text-[#16181B]">Acceso y Contratación Igualitaria</h4>
            <p className="text-xs text-[#5A606A]">Procesos de selección ciegos basados exclusivamente en competencias técnicas y méritos profesionales.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2">
            <CheckCircle2 className="w-5 h-5 text-[#0DA836]" />
            <h4 className="text-sm font-bold text-[#16181B]">Equidad Retributiva y Promoción</h4>
            <p className="text-xs text-[#5A606A]">Auditoría salarial periódica para garantizar retribución equitativa para puestos de igual valor sin brecha de género.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2">
            <CheckCircle2 className="w-5 h-5 text-[#0DA836]" />
            <h4 className="text-sm font-bold text-[#16181B]">Conciliación y Corresponsabilidad</h4>
            <p className="text-xs text-[#5A606A]">Medidas de flexibilidad horaria y permisos para compatibilizar la vida personal, familiar y laboral.</p>
          </div>
        </div>
      </section>

      {/* 5. Acción Social y Solidaridad Comunitaria */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              Alianzas y Solidaridad
            </span>
            <h2 className="text-3xl font-bold text-[#16181B]">
              Organizaciones con las que colaboramos activamente
            </h2>
            <p className="text-sm text-[#5A606A] leading-relaxed">
              En Medgón revertimos parte del valor generado hacia proyectos de ayuda humanitaria, investigación médica e inclusión social. Hemos colaborado con entidades de referencia como la <strong>Asociación Española Contra el Cáncer (AECC)</strong>, <strong>UNICEF</strong> (campañas de emergencia para los damnificados por el terremoto de Siria y Turquía), <strong>Cruz Roja</strong> y colectivos sociales de Castilla y León.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] rounded-xl border border-[#16181B]/10 text-xs font-bold text-[#16181B]">
                <Heart className="w-4 h-4 text-[#F35843]" />
                <span>Compromiso continuo con causas humanitarias y sociales</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
              <img
                src="/solidario-medgon.webp"
                alt="Acción solidaria y colaboraciones sociales de Medgón"
                className="w-full h-[320px] sm:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Construcción Ética y Descarbonizada
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Quieres formar parte de un modelo constructivo responsable?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            Tanto si eres particular, arquitecto o promotor, construir con Medgón es apostar por la sostenibilidad real y certificada.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Contactar con Medgón
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
