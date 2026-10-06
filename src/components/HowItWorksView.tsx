import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Sliders, 
  FileCheck, 
  Factory, 
  Home, 
  ShieldCheck, 
  RotateCw, 
  Maximize2,
  Clock,
  Sparkles
} from 'lucide-react';

interface HowItWorksViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 1. Header Hero */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Metodología & Certeza Constructiva
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16181B] leading-[1.1]">
          Cómo funciona Medgón.
        </h1>
        <p className="text-base sm:text-xl text-[#5A606A] leading-relaxed">
          Un proceso pensado para autopromotores: desde el estudio preliminar de tu parcela hasta la entrega de llaves, con costes cerrados y plazos verificables.
        </p>
      </div>

      {/* 2. Los 4 Principios de Seguridad antes de Construir */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            SEGURIDAD ANTES DE CONSTRUIR
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#16181B]">
            Una casa no se elige solo por sus metros.
          </h2>
          <p className="text-sm sm:text-base text-[#5A606A] leading-relaxed">
            Quien decide autopromover busca una vivienda que encaje con su parcela, su presupuesto y su forma de vivir. Pero también necesita saber qué incluye, cuánto puede adaptar, qué pasos vienen después y cómo evitar decisiones que encarecen el proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">01</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Partes de un modelo estudiado, no de una hoja en blanco.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              La ingeniería estructural y el modelado térmico ya están resueltos. Evitas ensayos costosos, errores sobre plano e imprevistos de diseño preliminar.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">02</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Adaptas distribución, acabados y partidas.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Flexibilidad en las estancias de vida diaria (dormitorios, salón-cocina), manteniendo fija la ubicación óptima de ventanas y cuartos técnicos.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">03</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Entiendes el proceso antes de tomar decisiones.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Nuestra oficina técnica te orienta de forma previa sobre soleamiento, desniveles de parcela, accesos de grúa y compatibilidad municipal.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-3">
            <span className="text-2xl font-black text-[#16181B] block">04</span>
            <h3 className="text-base font-bold text-[#16181B]">
              Construyes para vivir bien y gastar menos durante décadas.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              Viviendas diseñadas para 30 años de vida útil inicial, con prolongación de otros 20 años considerada en el modelado térmico Passivhaus.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Las 5 Fases del Proyecto Paso a Paso */}
      <section className="space-y-8 bg-[#FAF8F5] p-8 sm:p-12 rounded-2xl border border-[#16181B]/10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            DE LA IDEA A LA ENTREGA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#16181B]">
            El paso a paso cronológico con Medgón.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl border border-[#16181B]/10">
            <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#16181B] font-black text-lg shrink-0">
              1
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#16181B] flex items-center gap-2">
                <span>Estudio Preliminar de Parcela y Viabilidad</span>
                <span className="text-xs font-semibold text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded">Fase 0</span>
              </h3>
              <p className="text-sm text-[#5A606A] leading-relaxed">
                Revisamos la orientación solar, la topografía y desniveles, los accesos para el transporte especial y la grúa, y la normativa urbanística de tu municipio (retranqueos a linderos, ocupación máxima y alturas permitidas). Te confirmamos si el modelo encaja antes de incurrir en gastos mayores.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl border border-[#16181B]/10">
            <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#16181B] font-black text-lg shrink-0">
              2
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#16181B] flex items-center gap-2">
                <span>Elección de Modelo y Adaptación Interior</span>
                <span className="text-xs font-semibold text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded">Diseño</span>
              </h3>
              <p className="text-sm text-[#5A606A] leading-relaxed">
                Seleccionas el modelo del catálogo (de 50 a 165 m²) que mejor responda a las necesidades de tu familia. Adaptamos la distribución interior de dormitorios, estudio y salón-cocina, y volteamos en espejo la vivienda si la orientación de la parcela lo aconseja.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl border border-[#16181B]/10">
            <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#16181B] font-black text-lg shrink-0">
              3
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#16181B] flex items-center gap-2">
                <span>Presupuesto Cerrado y Reserva de Fabricación</span>
                <span className="text-xs font-semibold text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded">Certeza</span>
              </h3>
              <p className="text-sm text-[#5A606A] leading-relaxed">
                Definimos el alcance contractual exacto (modalidad SIEM) y formalizamos la reserva con 5.000 € para fijar el cupo de fabricación en nuestra planta robotizada de Carrión de los Condes y congelar el precio de los materiales.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl border border-[#16181B]/10">
            <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#16181B] font-black text-lg shrink-0">
              4
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#16181B] flex items-center gap-2">
                <span>Fabricación Industrializada en Taller Climatizado</span>
                <span className="text-xs font-semibold text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded">Fábrica Palencia</span>
              </h3>
              <p className="text-sm text-[#5A606A] leading-relaxed">
                Mientras se tramita la licencia o se ejecuta la cimentación en parcela, mecanizamos toda la estructura con centros de mecanizado CNC de alta precisión. La madera técnica y los aislamientos se montan en seco, sin lluvia ni humedades de obra.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-xl border border-[#16181B]/10">
            <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#16181B] font-black text-lg shrink-0">
              5
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#16181B] flex items-center gap-2">
                <span>Montaje Rápido en Parcela y Ensayo Blower Door</span>
                <span className="text-xs font-semibold text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded">~6 meses</span>
              </h3>
              <p className="text-sm text-[#5A606A] leading-relaxed">
                Nuestros equipos oficiales montan la envolvente hermética en días. Realizamos el test Blower Door para certificar n50 ≤ 0.6 ren/h y procedemos a la finalización de la vivienda, reduciendo el tiempo total de obra a solo ~6 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tabla Clave: Qué es Personalizable vs Límites Técnicos Fijos */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            CRITERIO ARQUITECTÓNICO & ENERGÉTICO
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#16181B]">
            Qué puedes personalizar y qué permanece fijo en catálogo.
          </h2>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Para garantizar el precio cerrado y la certificación energética Passivhaus sin sobrecostes, nuestro sistema establece límites técnicos claros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Personalizable */}
          <div className="p-8 bg-white border border-[#16181B]/15 rounded-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0DA836]/10 flex items-center justify-center text-[#0DA836]">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#16181B]">
                  Elementos 100% Personalizables
                </h3>
                <span className="text-xs text-[#0DA836] font-semibold">Flexibilidad para tu estilo de vida</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#5A606A]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <span><strong>Distribución de tabiquería interior:</strong> número y tamaño de dormitorios, vestidores o zona de teletrabajo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <span><strong>Concepto salón-cocina:</strong> abierta con isla, semi-integrada o cerrada con puerta corredera.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <span><strong>Volteado y orientación:</strong> la casa puede rotarse o voltearse en espejo horizontal para captar el sol de tu terreno.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <span><strong>Porches y pérgolas:</strong> adición de zonas exteriores cubiertas en madera técnica para sombreamiento estival.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <span><strong>Acabados interiores:</strong> tipos de tarima, cerámicas, sanitarios y carpintería interior según tus preferencias.</span>
              </li>
            </ul>
          </div>

          {/* Card Límites Fijos */}
          <div className="p-8 bg-[#FAF8F5] border border-[#16181B]/15 rounded-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#16181B]/10 flex items-center justify-center text-[#16181B]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#16181B]">
                  Límites Técnicos Fijos
                </h3>
                <span className="text-xs text-[#5A606A] font-semibold">Garantía de rendimiento y coste</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#5A606A]">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16181B] shrink-0 mt-2" />
                <span><strong>Posición de baños y cuarto de instalaciones:</strong> los patinillos y bajantes están optimizados para minimizar pérdidas de calor y recorridos de agua caliente.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16181B] shrink-0 mt-2" />
                <span><strong>Huecos de ventanas y puertas exteriores:</strong> calculados con el software PHPP para maximizar la captación solar en invierno y evitar puentes térmicos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16181B] shrink-0 mt-2" />
                <span><strong>Luz estructural de la envolvente:</strong> las dimensiones exteriores del catálogo están estandarizadas para el aprovechamiento óptimo de los paneles de madera sin mermas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16181B] shrink-0 mt-2" />
                <span><strong>Hermeticidad certificada:</strong> la capa de estanqueidad de fábrica no admite perforaciones no controladas durante la obra.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Banner de Asesoramiento Técnico Gratuito */}
      <section className="bg-[#16181B] text-white p-8 sm:p-12 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            OFICINA TÉCNICA MEDGÓN
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            ¿Tienes una parcela y quieres saber si encaja un modelo Medgón?
          </h3>
          <p className="text-sm text-[#A0AEC0] leading-relaxed">
            Envíanos la referencia catastral o ubicación de tu terreno y nuestros ingenieros estudiarán el soleamiento y los accesos sin ningún compromiso.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-sm font-bold text-[#16181B] bg-white hover:bg-[#E4C59E] rounded transition-colors cursor-pointer"
          >
            Hablemos de tu proyecto &rarr;
          </button>
          <button
            type="button"
            onClick={() => onNavigate('catalog')}
            className="px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 rounded transition-colors cursor-pointer"
          >
            Ver modelos disponibles
          </button>
        </div>
      </section>

    </div>
  );
};
