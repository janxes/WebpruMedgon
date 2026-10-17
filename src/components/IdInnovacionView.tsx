import React from 'react';
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Award, 
  ShieldCheck, 
  Boxes
} from 'lucide-react';
import { SobreMedgonSubmenu } from './SobreMedgonSubmenu';

interface IdInnovacionViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const IdInnovacionView: React.FC<IdInnovacionViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <SobreMedgonSubmenu currentView="id-innovacion" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>INVESTIGACIÓN, DESARROLLO E INNOVACIÓN (I+D+i)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Tecnología Medgón de construcción innovadora.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Garantizar la máxima calidad en todas las etapas de un proyecto es el objetivo principal de Medgón. Lo conseguimos mediante la <strong>inversión continua en I+D+i</strong>, robótica CNC de 5 ejes, algoritmos de optimización estructural y domótica integral.
          </p>
        </div>

        {/* Imagen Destacada Fondos Europeos FEDER */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/union-europea-feder-medgon.jpg"
            alt="Planes estratégicos de I+D de Medgón cofinanciados por la Unión Europea y Fondos FEDER"
            className="w-full h-[320px] sm:h-[460px] lg:h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Vanguardia Tecnológica en Construcción Industrializada
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Innovación continua en procesos, materiales biofílicos y sensorización inteligente de edificios
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Pilares Tecnológicos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
            <Boxes className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#16181B]">Robotización CNC 5 Ejes</h3>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Centros de mecanizado de control numérico que ejecutan cajeados, espigas, colas de milano y cortes milimétricos según modelos BIM exportados de Cadwork. Precisión industrial que erradica la improvisación en obra.
          </p>
          <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Tolerancias inferiores a 1 mm</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Etiquetado por código QR para trazabilidad total</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#16181B]">Inteligencia Artificial y BIM</h3>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Investigamos algoritmos de IA predictiva aplicados al diseño óptimo del entramado ligero, reducción de mermas de madera y simulación termo-higrométrica avanzada de encuentros constructivos.
          </p>
          <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Cálculo automático de puentes térmicos en 3D</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Optimización de corte que minimiza desperdicios</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#16181B]/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#16181B]">Domótica y Edificios Inteligentes</h3>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Creamos espacios que respiran y se auto-regulan. Sensores embebidos que monitorizan la concentración de CO₂, temperatura, humedad relativa, presión y consumos eléctricos en tiempo real.
          </p>
          <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Regulación automática de la ventilación VMC</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Gestión de persianas para control solar pasivo</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Proyectos de I+D Destacados */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Cartera de Innovación
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Grandes proyectos de I+D desarrollados por Medgón
          </h2>
          <p className="text-sm text-[#5A606A]">
            Iniciativas de investigación financiadas por organismos autonómicos, nacionales y europeos para liderar la transformación digital del sector:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Proyecto IGES */}
          <div className="bg-white border border-[#16181B]/10 rounded-2xl overflow-hidden shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4 p-6">
              <div className="rounded-xl overflow-hidden border border-[#16181B]/10 bg-[#FAF8F5]">
                <img
                  src="/iges-banner-web.webp"
                  alt="Proyecto IGES Medgón Gestión Inteligente de Edificios Sostenibles"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0DA836]/10 text-[#0DA836]">
                  Proyecto I+D
                </span>
                <h3 className="text-xl font-bold text-[#16181B]">
                  Proyecto IGES: Gestión Inteligente de Edificios
                </h3>
                <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                  Desarrollo de una plataforma integral para la monitorización energética, confort biológico y mantenimiento predictivo en edificios industrializados en madera mediante IoT y pasarelas de comunicación abiertas.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-[#16181B]/5 text-xs text-[#8E95A2]">
              Cofinanciado por el Fondo Europeo de Desarrollo Regional (FEDER)
            </div>
          </div>

          {/* Proyecto SOCAI */}
          <div className="bg-white border border-[#16181B]/10 rounded-2xl overflow-hidden shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4 p-6">
              <div className="rounded-xl overflow-hidden border border-[#16181B]/10 bg-[#FAF8F5]">
                <img
                  src="/banner-proyecto-socai.jpg"
                  alt="Proyecto SOCAI Inteligencia Artificial en Madera Medgón"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0DA836]/10 text-[#0DA836]">
                  Proyecto I+D
                </span>
                <h3 className="text-xl font-bold text-[#16181B]">
                  Proyecto SOCAI: Soluciones con Inteligencia Artificial
                </h3>
                <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                  Aplicación de algoritmos de inteligencia artificial para la generación automática de nudos estructurales, cálculo de empotramientos y optimización del ensamblado de paneles ligeros en taller.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-[#16181B]/5 text-xs text-[#8E95A2]">
              Instituto para la Competitividad Empresarial (ICE) · Junta de Castilla y León
            </div>
          </div>

        </div>
      </section>

      {/* 4. Alianzas Estratégicas y Ecosistema de Innovación */}
      <section className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#16181B]/10 space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Innovación Abierta y Colaborativa
          </span>
          <h2 className="text-3xl font-bold text-[#16181B]">
            AEICE Hub, Proyecto CLIC y Centros Tecnológicos
          </h2>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Medgón forma parte activa de los principales clústeres de edificación eficiente y economía circular de España. Colaboramos con universidades, centros tecnológicos y el clúster <strong>AEICE (Hábitat Eficiente)</strong> en proyectos de construcción limpia, industrializada y circular (Proyecto CLIC).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-5 rounded-xl border border-[#16181B]/10 space-y-2">
            <span className="text-xs font-bold uppercase text-[#0DA836]">Economía Circular</span>
            <h4 className="text-sm font-bold text-[#16181B]">Proyecto CLIC</h4>
            <p className="text-xs text-[#5A606A]">Ecodiseño de componentes desmontables y reutilizables al final de la vida útil del edificio.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#16181B]/10 space-y-2">
            <span className="text-xs font-bold uppercase text-[#0DA836]">Clúster Hábitat</span>
            <h4 className="text-sm font-bold text-[#16181B]">AEICE Hub Open Innovation</h4>
            <p className="text-xs text-[#5A606A]">Ecosistema de cocreación técnica con empresas de carpintería, vidrio y ventilación VMC.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#16181B]/10 space-y-2">
            <span className="text-xs font-bold uppercase text-[#0DA836]">Patentes & Normas</span>
            <h4 className="text-sm font-bold text-[#16181B]">Homologación Kerto & ETA</h4>
            <p className="text-xs text-[#5A606A]">Ensayos de carga estática y dinámica en colaboración con laboratorios acreditados europeos.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA Final */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Colaboración en Innovación
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Eres investigador, arquitecto o centro tecnológico?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            En Medgón estamos siempre abiertos a nuevos consorcios de I+D+i, tesis doctorales y proyectos pioneros en construcción descarbonizada.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Contactar con Departamento I+D+i
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
