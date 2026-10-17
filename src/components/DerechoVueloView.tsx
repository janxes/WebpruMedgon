import React from 'react';
import { 
  Building2, 
  Layers, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Leaf, 
  Award, 
  ChevronRight, 
  Zap, 
  Scale, 
  Coins,
  Compass,
  FileText
} from 'lucide-react';
import { ProductosSubmenu } from './ProductosSubmenu';

interface ProductViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const DerechoVueloView: React.FC<ProductViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <ProductosSubmenu currentProduct="productos-derecho-vuelo" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Remontas Urbanas · Marca Especializada Altior</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Derecho de vuelo en madera.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Somos especialistas en proyectos de <strong>ampliación de superficie construida de edificios sobre azoteas</strong> o «derecho a vuelo», sumando más alturas con soluciones innovadoras de madera técnica para revivir edificios consolidados.
          </p>
        </div>

        {/* Imagen Destacada Principal */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/derecho-de-vuelo-madera.jpg"
            alt="Remonta de madera técnica sobre azotea de edificio urbano existente Medgón Altior"
            className="w-full h-[360px] sm:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Marca Registrada Altior by Medgón
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Nuevos áticos de lujo y ampliaciones de vivienda sin desalojar el edificio ni sobrecargar cimientos
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Métricas Clave */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">1/5 Peso</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Ligereza Extrema</p>
          <p className="text-xs text-[#5A606A]">Pesa solo una quinta parte del hormigón, permitiendo recrecer alturas sin reforzar zapatas existentes.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">Sin Desalojo</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Cero Molestias</p>
          <p className="text-xs text-[#5A606A]">Montaje en seco con grúa desde la calle, permitiendo a los vecinos seguir habitando sus viviendas.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">+40%</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Revalorización Patrimonial</p>
          <p className="text-xs text-[#5A606A]">Crea nuevos áticos de alto valor de mercado y financia mejoras comunitarias (ascensor, fachada).</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">Passivhaus</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Nueva Cubierta Térmica</p>
          <p className="text-xs text-[#5A606A]">La remonta aísla la cubierta original, reduciendo el gasto energético de los pisos inferiores.</p>
        </div>
      </section>

      {/* 3. Qué es el Derecho de Vuelo y por qué la Madera es la única solución viable */}
      <section className="bg-[#16181B] text-white rounded-3xl p-6 sm:p-12 lg:p-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78E639]/15 text-[#78E639] text-xs font-bold">
              <Scale className="w-3.5 h-3.5" />
              <span>INGENIERÍA ESTRUCTURAL ALTIOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              ¿Por qué el derecho de vuelo se realiza en madera técnica?
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E0] leading-relaxed">
              El «derecho de vuelo» es la facultad jurídica y urbanística de elevar una o más plantas sobre un edificio ya existente. Sin embargo, en fincas antiguas de hormigón o muros de carga de ladrillo, <strong>la normativa prohíbe añadir cargas excesivas</strong> que pongan en peligro la cimentación.
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              La madera técnica industrializada Medgón resuelve esta encrucijada técnica: al pesar un 80% menos que el hormigón, permite elevar nuevas viviendas completas con aislamiento Passivhaus sin necesidad de costosas obras de recalce en los cimientos del edificio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Seguridad</span>
                <p className="text-sm font-bold text-white">Cálculo de cargas visado</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Montaje rápido</span>
                <p className="text-sm font-bold text-white">Estructura montada en días</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Financiación</span>
                <p className="text-sm font-bold text-white">Costea mejoras de la finca</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
              Marca Registrada Altior
            </span>
            <h3 className="text-xl font-bold text-white">
              Especialistas en Regeneración de Azoteas
            </h3>
            <p className="text-xs text-[#CBD5E0] leading-relaxed">
              Altior es la división especializada de Medgón dedicada exclusivamente al derecho de vuelo urbano. Gestionamos desde el estudio de viabilidad urbanística y estructural hasta la fabricación y montaje con grúa pluma en calles de difícil acceso.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 bg-[#78E639] text-[#16181B] font-bold text-xs rounded-xl hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
            >
              Pedir estudio Altior &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 4. Las 3 Fases del Proyecto de Derecho de Vuelo */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Proceso de Ejecución Altior
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Cómo convertimos una azotea en nuevos metros habitables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Estudio Urbanístico y Estructural</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Comprobamos la ordenanza municipal (alturas permitidas y volumetría) y calculamos la capacidad portante de la estructura existente con catas no destructivas y modelado BIM.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Informe de viabilidad técnica y normativa</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Acuerdo comunitario con la propiedad</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Fabricación Robotizada en Taller</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Los muros de entramado, forjados de suelo y cubiertas se prefabrican en nuestra fábrica climatizada de Palencia. Cada elemento sale etiquetado con precisión milimétrica.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Carpinterías y aislamientos preinstalados</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Control estricto de estanqueidad</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Izado con Grúa y Montaje Hermético</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              En unas pocas jornadas se izan los paneles directamente a la azotea y se ensambla la estructura estanca al agua. Se garantiza la protección total frente a lluvias desde el primer día.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Mínima ocupación de vía pública</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Sin obras húmedas que ensucien el inmueble</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Consulta de Viabilidad Altior
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Quieres saber si tu azotea o edificio puede elevarse?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            Envíanos la referencia catastral o dirección de tu edificio y nuestro equipo de ingenieros y juristas valorará la viabilidad de remonta sin coste.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Consultar viabilidad de mi azotea
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
