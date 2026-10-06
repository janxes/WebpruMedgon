import React, { useState, useMemo } from 'react';
import { HouseConfig, CalculationResult } from '../types';
import { 
  OFFICIAL_SHEET_MODELS, 
  getSheetModelForM2,
  SheetModelSummary,
  ValidSheetName
} from '../data/sheetsData';
import { 
  FileSpreadsheet, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Boxes, 
  Home, 
  AppWindow, 
  Wind, 
  Flame, 
  Droplets, 
  Zap, 
  Palette, 
  DoorClosed, 
  Info, 
  ArrowRight,
  TrendingDown,
  ChevronDown
} from 'lucide-react';

interface ModelPartidasBreakdownProps {
  config: HouseConfig;
  result: CalculationResult;
  onSelectModel?: (m2: number) => void;
}

export const ModelPartidasBreakdown: React.FC<ModelPartidasBreakdownProps> = ({
  config,
  result,
  onSelectModel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // Available models to compare in the breakdown
  const AVAILABLE_CATALOG_MODELS = [
    { code: 'MG87', m2: 87, label: 'MG87 (87 m²)' },
    { code: 'MG100', m2: 100, label: 'MG100 (100 m²)' },
    { code: 'MG105', m2: 105, label: 'MG105 (105 m²)' },
    { code: 'MG128', m2: 128, label: 'MG128 (128 m²)' },
    { code: 'MG148', m2: 148, label: 'MG148 (148 m²)' },
    { code: 'MG165', m2: 165, label: 'MG165 (165 m²)' },
  ];

  // Active model is synchronized with config.m2 by default
  const activeModelSummary: SheetModelSummary = useMemo(() => {
    return getSheetModelForM2(config.m2);
  }, [config.m2]);

  const [filterType, setFilterType] = useState<'all' | 'medgon' | 'client'>('all');

  const filteredCategories = useMemo(() => {
    if (!activeModelSummary?.categories) return [];
    if (filterType === 'medgon') {
      return activeModelSummary.categories.filter((c) => c.isMedgonTechnical);
    }
    if (filterType === 'client') {
      return activeModelSummary.categories.filter((c) => !c.isMedgonTechnical);
    }
    return activeModelSummary.categories;
  }, [activeModelSummary, filterType]);

  const medgonCategoriesCount = activeModelSummary?.categories?.filter((c) => c.isMedgonTechnical).length || 0;
  const clientCategoriesCount = activeModelSummary?.categories?.filter((c) => !c.isMedgonTechnical).length || 0;

  // Icon selector based on category text
  const getCategoryIcon = (name: string, isMedgon: boolean) => {
    const lower = name.toLowerCase();
    if (lower.includes('cimentaci')) return Layers;
    if (lower.includes('estructura') || lower.includes('madera')) return Boxes;
    if (lower.includes('cubierta') || lower.includes('tejado')) return Home;
    if (lower.includes('fachada') || lower.includes('sate')) return ShieldCheck;
    if (lower.includes('carpinter') && isMedgon) return AppWindow;
    if (lower.includes('clima') || lower.includes('aerotermia') || lower.includes('calefac')) return Flame;
    if (lower.includes('vmc') || lower.includes('ventilac')) return Wind;
    if (lower.includes('fontaner')) return Droplets;
    if (lower.includes('electric') || lower.includes('telecom')) return Zap;
    if (lower.includes('solado') || lower.includes('alicatad') || lower.includes('pavimento')) return Sparkles;
    if (lower.includes('pintura')) return Palette;
    if (lower.includes('puerta') || (lower.includes('carpinter') && !isMedgon)) return DoorClosed;
    return isMedgon ? Building2 : Sparkles;
  };

  return (
    <div id="section-partidas-modelo" className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-6">
      {/* Header Styled like Google Spreadsheet Source in Screenshot (Modo Acordeón Replegado) */}
      <button
        type="button"
        id="btn-toggle-partidas-breakdown"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left transition-colors hover:bg-slate-800/90 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#569900] text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Desglose de Partidas y Capítulos: {activeModelSummary.title} ({activeModelSummary.m2} m²)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Haz clic para consultar las partidas oficiales y mediciones de fábrica
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-lg border border-slate-700 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A4E556]" />
            <span>{isOpen ? 'Plegar desglose' : 'Ver desglose completo'}</span>
          </div>
          <div className={`w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A4E556]' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>

      {isOpen && (
        <>
          {/* Model Selector Bar within Calculator */}
          <div className="px-4 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span>Capítulos del modelo:</span>
          <span className="text-slate-500 font-normal hidden md:inline">
            (Cambia de modelo para ver cómo varía cada partida según la superficie)
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
          {AVAILABLE_CATALOG_MODELS.map((item) => {
            const isSelected = config.m2 === item.m2;
            return (
              <button
                key={item.code}
                type="button"
                id={`btn-partidas-model-${item.m2}`}
                onClick={() => onSelectModel && onSelectModel(item.m2)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2F5300] text-white shadow-2xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {item.code} ({item.m2} m²)
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Economic Summary Cards (Alcance Medgón vs Bolsa Acabados vs Total) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Card 1: Medgón Industrializado */}
          <div className="p-4 bg-[#F2FBE5] rounded-xl border border-[#C5F092] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase text-[#2F5300] tracking-wide flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  1. Fase Técnica Medgón
                </span>
                <span className="text-[11px] font-bold text-[#1D3300] bg-white px-2 py-0.5 rounded border border-[#C5F092]">
                  {activeModelSummary.medgonRatePerM2.toLocaleString('es-ES')} €/m²
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-mono">
                {activeModelSummary.medgonTechnicalTotal.toLocaleString('es-ES')} €
                <span className="text-xs font-normal text-slate-600 ml-1">+ IVA</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 mt-2 pt-2 border-t border-[#C5F092]/60 leading-snug">
              Cimentación, estructura de madera LVL, envolvente continua, carpintería triple vidrio, aerotermia y VMC.
            </p>
          </div>

          {/* Card 2: Bolsa de Acabados Cliente */}
          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase text-amber-900 tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  2. Bolsa Acabados Cliente
                </span>
                <span className="text-[11px] font-bold text-amber-950 bg-white px-2 py-0.5 rounded border border-amber-200">
                  {activeModelSummary.clientFinishesRatePerM2.toLocaleString('es-ES')} €/m²
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-mono">
                {activeModelSummary.clientFinishesTotal.toLocaleString('es-ES')} €
                <span className="text-xs font-normal text-slate-600 ml-1">estimado</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 mt-2 pt-2 border-t border-amber-200 leading-snug">
              Solados, alicatados, puertas de paso y pintura interior gestionados libremente con gremios locales (ahorro 20-30%).
            </p>
          </div>

          {/* Card 3: Inversión Construcción Total */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase text-slate-700 tracking-wide flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#569900]" />
                  3. Construcción Total
                </span>
                <span className="text-[11px] font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {activeModelSummary.totalRatePerM2.toLocaleString('es-ES')} €/m²
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#2F5300] mt-2 font-mono">
                {activeModelSummary.totalConstruction.toLocaleString('es-ES')} €
                <span className="text-xs font-normal text-slate-600 ml-1">llave en mano</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 mt-2 pt-2 border-t border-slate-200 leading-snug">
              Vivienda completamente construida y rematada, combinando la precisión de Medgón con la agilidad local.
            </p>
          </div>
        </div>

        {/* Filter Pills for the Itemized Categories */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Capítulos del presupuesto:
            </span>
            <span className="text-xs text-slate-500">
              ({filteredCategories.length} partidas mostradas)
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start sm:self-auto">
            <button
              type="button"
              id="btn-partidas-filter-all"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({activeModelSummary.categories.length})
            </button>
            <button
              type="button"
              id="btn-partidas-filter-medgon"
              onClick={() => setFilterType('medgon')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'medgon'
                  ? 'bg-[#569900] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fase Medgón ({medgonCategoriesCount})
            </button>
            <button
              type="button"
              id="btn-partidas-filter-client"
              onClick={() => setFilterType('client')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'client'
                  ? 'bg-amber-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bolsa Cliente ({clientCategoriesCount})
            </button>
          </div>
        </div>

        {/* Itemized Categories List */}
        <div className="space-y-1 sm:space-y-1.5">
          {filteredCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.name, cat.isMedgonTechnical);
            const pctOfTotal = ((cat.total / activeModelSummary.totalConstruction) * 100).toFixed(1);
            const ratePerM2 = Math.round(cat.total / activeModelSummary.m2);

            return (
              <div
                key={idx}
                className="py-1.5 sm:py-2 px-3 sm:px-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition-colors flex items-center justify-between gap-2.5 sm:gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    cat.isMedgonTechnical
                      ? 'bg-[#E1F7C3] text-[#1D3300]'
                      : 'bg-amber-100 text-amber-900'
                  }`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  <div className="min-w-0 leading-tight">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                        {cat.name}
                      </span>
                      <span
                        className={`text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                          cat.isMedgonTechnical
                            ? 'bg-[#E1F7C3] text-[#1D3300]'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {cat.isMedgonTechnical ? 'Medgón' : 'Cliente'}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block leading-tight mt-0.5">
                      Repercusión: {ratePerM2} €/m² • {pctOfTotal}% de la construcción
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0 leading-tight">
                  <span className="font-mono font-extrabold text-xs sm:text-base text-slate-900 block leading-tight">
                    {cat.total.toLocaleString('es-ES')} €
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 block leading-tight mt-0.5 text-right">
                    {cat.isMedgonTechnical ? '+ IVA autopromotor' : 'precio final gremios'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pedagogical Transparency Footer */}
        <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-700">
          <Info className="w-4 h-4 text-[#569900] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-900">¿Por qué este desglose aporta tanta claridad?</strong>
            <p className="mt-0.5">
              Al separar con absoluta transparencia la <strong>fase técnica crítica industrializada</strong> (donde Medgón garantiza hermeticidad Passivhaus, aislamiento sin puentes térmicos y climatización de alta eficiencia) de la <strong>bolsa de acabados</strong>, cada cliente tiene el control directo de su inversión, eligiendo los materiales visibles a su gusto y ahorrando los márgenes de intermediación de una constructora tradicional.
            </p>
          </div>
        </div>
      </div>
    </>
  )}
</div>
  );
};
