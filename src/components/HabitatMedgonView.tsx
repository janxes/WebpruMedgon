import React from 'react';
import { 
  Heart, 
  Wind, 
  Sun, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Phone, 
  Mail, 
  Sparkles, 
  Eye, 
  Home, 
  Layers, 
  Thermometer,
  Zap,
  Leaf
} from 'lucide-react';

interface HabitatMedgonViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

import { SobreMedgonSubmenu } from './SobreMedgonSubmenu';

export const HabitatMedgonView: React.FC<HabitatMedgonViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. SUBMENU SUPERIOR UNIFICADO DE SOBRE MEDGÓN */}
      <SobreMedgonSubmenu currentView="habitat-medgon" onNavigate={onNavigate} />

      {/* 1. HERO HÁBITAT MEDGÓN */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5" />
            <span>SALUD, BIOCONFORT E INNOVACIÓN DOMÓTICA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Hábitat Medgón.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            En el sector de la edificación, el término <strong>«hábitat»</strong> define el entorno construido en el que las personas vivimos, trabajamos y crecemos. En Medgón queremos dar respuesta a las necesidades profundas de quienes habitan cada espacio.
          </p>
        </div>

        {/* Declaración Lema Central */}
        <div className="p-8 sm:p-12 bg-[#16181B] text-white rounded-2xl relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
                La Nueva Filosofía del Hogar
              </span>
              <blockquote className="text-2xl sm:text-4xl font-extrabold leading-snug text-balance">
                «Antes éramos nosotros los que cuidábamos de los edificios, ahora son ellos los que cuidan de nosotros.»
              </blockquote>
              <p className="text-sm sm:text-base text-[#CBD5E0] leading-relaxed">
                Nuestras casas no son solo estructuras bien aisladas: son ecosistemas biológicos inteligentes que filtran continuamente el aire, mantienen temperaturas estables de forma pasiva y reducen el estrés mediante el contacto visual y táctil con la madera natural.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm text-center space-y-3 max-w-xs">
                <img
                  src="/sello-habitat-medgon.webp"
                  alt="Sello oficial Hábitat Medgón"
                  className="w-28 h-28 mx-auto object-contain"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-white block">
                  Sello Hábitat Medgón
                </span>
                <p className="text-[11px] text-white/70">
                  Estándar interno de bioconfort y monitorización saludable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOS DOS PILARES DE HÁBITAT MEDGÓN */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Pilar A: Investigación, Desarrollo e Innovación */}
        <div className="bg-white border border-[#16181B]/10 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0DA836]">
              <Cpu className="w-4 h-4" />
              <span>Pilar 01 · I+D+i</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#16181B] tracking-tight">
              Investigación, Desarrollo e Innovación
            </h3>

            <p className="text-sm text-[#5A606A] leading-relaxed">
              Incorporamos a nuestros edificios la última tecnología como <strong>sensores ambientales, domótica avanzada y placas fotovoltaicas integradas</strong> con el objetivo de crear espacios inteligentes, autosuficientes y energéticamente eficientes.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#16181B]">
              <div className="flex items-start gap-2.5 p-3 bg-[#FAF8F5] rounded-lg border border-[#16181B]/5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong>Monitorización continua de CO₂ y humedad:</strong> Sensores interiores que regulan automáticamente la ventilación.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#FAF8F5] rounded-lg border border-[#16181B]/5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong>Autoconsumo solar fotovoltaico:</strong> Producción renovable in situ para cubrir la mínima demanda eléctrica residual.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#FAF8F5] rounded-lg border border-[#16181B]/5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong>Gestión domótica inteligente:</strong> Control de persianas, sombreado solar dinámico y climatización desde smartphone.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#16181B]/10">
            <img
              src="/investigacion-desarrollo-innovacion.webp"
              alt="Gráfico I+D+i Medgón de investigación, desarrollo e innovación"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Pilar B: Salud y Confort Biológico */}
        <div className="bg-white border border-[#16181B]/10 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0DA836]">
              <Wind className="w-4 h-4" />
              <span>Pilar 02 · Bienestar</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-[#16181B] tracking-tight">
              Salud y Confort Biológico
            </h3>

            <p className="text-sm text-[#5A606A] leading-relaxed">
              Mediante sistemas de <strong>Ventilación Mecánica Controlada (VMC) de alto rendimiento con intercambiador de doble flujo</strong>, se asegura una muy alta calidad del aire sin pérdidas energéticas.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#16181B]">
              <div className="flex items-start gap-2.5 p-3 bg-[#FAF8F5] rounded-lg border border-[#16181B]/5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong>Filtrado de aire de alta eficiencia (F7/G4):</strong> Retiene polen, ácaros, polvo fino, esporas y neutraliza la acumulación de gas radón.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#FAF8F5] rounded-lg border border-[#16181B]/5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong>Intercambiador térmico &gt;90%:</strong> El aire viciado cede su calor al aire entrante limpio, ventilando 24 horas al día sin abrir ventanas ni enfriar la casa.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-[#FAF8F5] rounded-lg border border-[#16181B]/5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <strong>Silencio acústico envolvente:</strong> La hermeticidad Passivhaus y el aislamiento multicapa de fibra de madera amortiguan los ruidos del exterior.
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#0DA836]/10 border border-[#0DA836]/20 rounded-xl space-y-1 text-xs text-[#16181B]">
            <span className="font-bold text-[#0DA836] block">
              Temperatura constante 20-22 °C los 365 días del año
            </span>
            <p className="text-[#5A606A]">
              Sin paredes frías, sin corrientes molestas y con una humedad relativa equilibrada entre el 40% y el 60% para proteger vías respiratorias.
            </p>
          </div>
        </div>

      </section>

      {/* 3. CTA FINAL */}
      <section className="bg-[#16181B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-bold text-[#78E639] uppercase tracking-wider">
            Arquitectura Saludable
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            ¿Quieres vivir en un hogar que cuide activamente de ti?
          </h3>
          <p className="text-xs text-[#CBD5E0]">
            Descubre nuestros modelos industrializados de catálogo o cuéntanos tu proyecto a medida.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-7 py-3.5 text-xs sm:text-sm font-bold text-[#16181B] bg-[#78E639] hover:bg-white rounded transition-colors cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
        >
          <span>Hablemos de tu proyecto</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
