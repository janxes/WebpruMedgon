import React from 'react';
import { 
  TreePine, 
  Wind, 
  Flame, 
  AppWindow, 
  ShieldCheck, 
  Layers, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PassivhausTechViewProps {
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const PassivhausTechView: React.FC<PassivhausTechViewProps> = ({
  onNavigate,
  onOpenExportModal,
}) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Header Lockup */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Física de la Edificación & Sostenibilidad Real
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181B]">
          Madera Técnica & Estándar Passivhaus
        </h1>
        <p className="text-base sm:text-lg text-[#5A606A] leading-relaxed">
          Por qué la construcción industrializada en madera técnica lidera la arquitectura del siglo XXI y por qué las viviendas convencionales nacerán obsoletas ante la directiva europea 2028-2030.
        </p>
      </div>

      {/* Vocabulary Clarification Box */}
      <div className="p-6 bg-[#FAF8F5] border-l-4 border-l-[#0DA836] border border-[#16181B]/10 rounded-r-lg space-y-2">
        <h3 className="text-base font-bold text-[#16181B]">
          Criterio Terminológico Medgón: Construcción Industrializada vs Casas Prefabricadas
        </h3>
        <p className="text-sm text-[#5A606A] leading-relaxed">
          En Medgón no fabricamos "casas prefabricadas". Diseñamos y producimos <strong>construcción industrializada con estructura de madera técnica</strong> de alta ingeniería. La precisión milimétrica del corte por control numérico (CNC) en entorno climatizado elimina la humedad de obra, los puentes térmicos y los defectos del ladrillo y hormigón in situ.
        </p>
      </div>

      {/* 5 Pillars of Passivhaus Standard */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#5A606A]">
            Los 5 Principios Físicos
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16181B] mt-1">
            Cómo Logramos Ahorrar el 85% de la Energía
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white border border-[#16181B]/10 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#0DA836]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">
              1. Aislamiento Térmico Continuo
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Envolvente completa rellena con fibra de madera insuflada de alta densidad y sistema SATE exterior. Un abrigo térmico que mantiene el calor en invierno y el frescor en verano sin fisuras.
            </p>
            <div className="text-xs font-semibold text-[#0DA836]">Sin puentes térmicos</div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-[#16181B]/10 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#0DA836]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">
              2. Hermeticidad al Aire (Blower Door)
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Membranas de estanqueidad continuas verificadas mediante ensayo de presurización Blower Door. Garantizamos un valor n50 ≤ 0.6 ren/h, evitando fugas de aire incontroladas.
            </p>
            <div className="text-xs font-semibold text-[#0DA836]">n50 ≤ 0.6 ren/h verificado</div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-[#16181B]/10 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#0DA836]">
              <AppWindow className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">
              3. Ventanas Passivhaus Triple Vidrio
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Carpinterías exteriores con cámaras de gas argón y factor solar optimizado (Ug ≤ 0.6 W/m²K). Eliminan el efecto "pared fría" y garantizan silencio acústico absoluto.
            </p>
            <div className="text-xs font-semibold text-[#0DA836]">Gas argón + Rotura térmica</div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white border border-[#16181B]/10 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#0DA836]">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">
              4. Ventilación Mecánica con VMC Zehnder
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Los pulmones de la casa: renueva el aire interior las 24 horas del día con filtros de polen y contaminación F7/G4, recuperando más del 90% del calor del aire expulsado.
            </p>
            <div className="text-xs font-semibold text-[#0DA836]">&gt;90% recuperación entálpica</div>
          </div>

          {/* Pillar 5 */}
          <div className="bg-white border border-[#16181B]/10 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#0DA836]">
              <TreePine className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">
              5. Huella de Carbono Negativa (Madera PEFC)
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La madera técnica es el único material de construcción que secuestra carbono en lugar de emitirlo. Cada metro cúbico de madera fija cerca de 1 tonelada de CO₂ de la atmósfera.
            </p>
            <div className="text-xs font-semibold text-[#0DA836]">Sostenibilidad certificada</div>
          </div>

          {/* Pillar 6 */}
          <div className="bg-white border border-[#16181B]/10 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#0DA836]">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">
              Aerotermia + Suelo Radiante Refrescante
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Bomba de calor termodinámica de alta eficiencia (COP &gt; 4.5) combinada con suelo radiante. Calor uniforme en invierno y suave refrescamiento sin corrientes de aire en verano.
            </p>
            <div className="text-xs font-semibold text-[#0DA836]">Confort térmico 21°C constante</div>
          </div>

        </div>
      </div>

      {/* European Directive EPBD 2028-2030 Alert Banner */}
      <div className="bg-[#16181B] text-white rounded-xl p-8 sm:p-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F35843] text-white text-xs font-bold uppercase rounded">
          Horizonte 2028 - 2030
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold">
          La Directiva Europea de Eficiencia en Edificios (EPBD)
        </h3>
        <p className="text-sm text-[#CBD5E0] max-w-3xl leading-relaxed">
          La Unión Europea exigirá que todas las viviendas nuevas a partir de 2028-2030 sean de emisiones cero (ZEB) y midan el Potencial de Calentamiento Global de su ciclo de vida. Construir en ladrillo u hormigón convencional hoy significa construir un activo que perderá valor de mercado en menos de una década. Medgón ya cumple estos requerimientos hoy en su fábrica de Carrión de los Condes.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate('catalog')}
            className="px-5 py-2.5 text-xs font-bold bg-white text-[#16181B] hover:bg-[#F5E7D3] rounded transition-colors cursor-pointer"
          >
            Ver Viviendas Preparadas para 2030 &rarr;
          </button>
        </div>
      </div>

    </div>
  );
};
