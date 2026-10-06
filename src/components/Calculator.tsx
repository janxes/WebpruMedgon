import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { HouseConfig, CalculationResult } from '../types';
import { 
  Sun, 
  Cpu, 
  Volume2, 
  Info, 
  Sparkles, 
  Check, 
  Building2, 
  HelpCircle, 
  Image as ImageIcon, 
  FileText,
  BedDouble,
  Bed,
  RotateCcw,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Compass,
  MapPin,
  Hammer,
  KeyRound,
  CheckCircle2
} from 'lucide-react';
import { ModelGallery } from './ModelGallery';

interface CalculatorProps {
  config: HouseConfig;
  onChange: (newConfig: HouseConfig) => void;
  result: CalculationResult;
}

export type BedroomFilter = 'all' | 1 | 2 | 3 | 4 | 5;

export interface ModelPreset {
  m2: number;
  modelCode: string;
  label: string;
  desc: string;
  hasGallery: boolean;
  bgImage: string;
  bedrooms: number[];
  bedroomLabel: string;
  tag?: string;
}

const PRESETS: ModelPreset[] = [
  { 
    m2: 87, 
    modelCode: 'MG87',
    label: 'MG87 (87 m²)', 
    desc: 'Lo esencial • 1 o 2 dormitorios • Suite con vestidor', 
    hasGallery: true,
    bgImage: '/MG87/castilian_wheat_house.jpg',
    bedrooms: [1, 2],
    bedroomLabel: '1 - 2 Dorm.',
    tag: 'Compacto',
  },
  { 
    m2: 100, 
    modelCode: 'MG100',
    label: 'MG100 (100 m²)', 
    desc: 'Equilibrio ideal • 2 dormitorios y 2 baños en planta', 
    hasGallery: true,
    bgImage: '/MG100/MG_100_Exterior.png',
    bedrooms: [2],
    bedroomLabel: '2 Dorm.',
    tag: 'Top Ventas',
  },
  { 
    m2: 105, 
    modelCode: 'MG105',
    label: 'MG105 (105 m²)', 
    desc: 'Estilo industrial • 2 a 3 dorm. con suite y cuarto técnico', 
    hasGallery: true,
    bgImage: '/MG105/industrial_luminous_house_exterior.jpg',
    bedrooms: [2, 3],
    bedroomLabel: '2 - 3 Dorm.',
    tag: 'Favorito',
  },
  { 
    m2: 128, 
    modelCode: 'MG128',
    label: 'MG128 (128 m²)', 
    desc: 'Gran amplitud • 3 a 4 dorm. con cubierta plana Boho', 
    hasGallery: true,
    bgImage: '/MG128/boho_autumn_exterior.jpg',
    bedrooms: [3, 4],
    bedroomLabel: '3 - 4 Dorm.',
    tag: 'Cubierta Plana',
  },
  { 
    m2: 148, 
    modelCode: 'MG148',
    label: 'MG148 (148 m²)', 
    desc: 'Máximo confort • 4 dormitorios en distribución en L', 
    hasGallery: true,
    bgImage: '/MG148/l_shaped_farmhouse_golden_hour.jpg',
    bedrooms: [4],
    bedroomLabel: '4 Dorm.',
    tag: 'Familiar en L',
  },
  { 
    m2: 165, 
    modelCode: 'MG165',
    label: 'MG165 (165 m²)', 
    desc: 'Vivienda de alta gama • 4 a 5 dormitorios con amplios porches', 
    hasGallery: true,
    bgImage: '/MG165/coastal_l_shaped_home.jpg',
    bedrooms: [4, 5],
    bedroomLabel: '4 - 5 Dorm.',
    tag: 'Premium',
  },
];

const BEDROOM_FILTER_OPTIONS: { id: BedroomFilter; label: string; countLabel: string }[] = [
  { id: 'all', label: 'Todos', countLabel: '6' },
  { id: 1, label: '1 Dormitorio', countLabel: '1' },
  { id: 2, label: '2 Dormitorios', countLabel: '3' },
  { id: 3, label: '3 Dormitorios', countLabel: '2' },
  { id: 4, label: '4 Dormitorios', countLabel: '3' },
  { id: 5, label: '5 Dormitorios', countLabel: '1' },
];

export const Calculator: React.FC<CalculatorProps> = ({ config, onChange, result }) => {
  const [showGallery, setShowGallery] = useState<boolean>(true);
  const [bedroomFilter, setBedroomFilter] = useState<BedroomFilter>('all');
  const [selectedZone, setSelectedZone] = useState<'in_radius' | 'out_radius'>('in_radius');
  const [activeModality, setActiveModality] = useState<string>('suministro_montaje_instalaciones');
  const [isExtrasAccordionOpen, setIsExtrasAccordionOpen] = useState<boolean>(false);

  const selectedModelPreset = useMemo(() => {
    return PRESETS.find((p) => p.m2 === config.m2) || PRESETS[1];
  }, [config.m2]);

  const filteredPresets = useMemo(() => {
    if (bedroomFilter === 'all') return PRESETS;
    return PRESETS.filter((p) => p.bedrooms.includes(bedroomFilter));
  }, [bedroomFilter]);

  const handleSelectBedroomFilter = (filter: BedroomFilter) => {
    setBedroomFilter(filter);
    if (filter !== 'all') {
      const matching = PRESETS.filter((p) => p.bedrooms.includes(filter));
      const isCurrentMatch = matching.some((p) => p.m2 === config.m2);
      if (!isCurrentMatch && matching.length > 0) {
        handleM2Change(matching[0].m2);
      }
    }
  };

  const chipsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollChipsLeft, setCanScrollChipsLeft] = useState(false);
  const [canScrollChipsRight, setCanScrollChipsRight] = useState(false);

  const updateChipsScrollLimits = useCallback(() => {
    const el = chipsScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollChipsLeft(scrollLeft > 4);
    setCanScrollChipsRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateChipsScrollLimits();
    const handleResize = () => updateChipsScrollLimits();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateChipsScrollLimits]);

  const handleScrollChips = (direction: 'left' | 'right') => {
    const el = chipsScrollRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -180 : 180;
    el.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(updateChipsScrollLimits, 250);
  };

  const handleM2Change = (val: number) => {
    const safeVal = Math.max(60, Math.min(450, val));
    onChange({ ...config, m2: safeVal });
    if (safeVal === 87 || safeVal === 100 || safeVal === 105 || safeVal === 115 || safeVal === 120 || safeVal === 128 || safeVal === 148 || safeVal === 165) {
      setShowGallery(true);
    }
  };

  const toggleExtra = (key: 'includePhotovoltaic' | 'includeDomotics' | 'includeAudio') => {
    onChange({ ...config, [key]: !config[key] });
  };

  const activeExtrasCount = [config.includePhotovoltaic, config.includeDomotics, config.includeAudio].filter(Boolean).length;

  // Calculation of the 4 contract modalities based on result and m2
  const modalityPricing = useMemo(() => {
    // 1. Suministro Estructura (~33.3% of Medgon technical phase, 64.800 € for 128 m²)
    const suministroTotal = Math.round(result.medgonBase * (64800 / 194560));
    const suministroRate = Math.round(suministroTotal / result.m2);
    const suministroMin = Math.round(suministroTotal * 0.97);
    const suministroMax = Math.round(suministroTotal * 1.03);

    // 2. Suministro + Montaje (~51.8% of Medgon technical phase, 100.800 € for 128 m²)
    const montajeTotal = Math.round(result.medgonBase * (100800 / 194560));
    const montajeRate = Math.round(montajeTotal / result.m2);
    const montajeMin = Math.round(montajeTotal * 0.97);
    const montajeMax = Math.round(montajeTotal * 1.03);

    // 3. Suministro + Montaje + Instalaciones (100% of Medgon technical phase, 194.560 € for 128 m²)
    const instalacionesTotal = Math.round(result.medgonBase);
    const instalacionesRate = Math.round(result.medgonRatePerM2);
    const instalacionesMin = Math.round(result.medgonMin3);
    const instalacionesMax = Math.round(result.medgonMax3);

    // 4. Llave en Mano (Medgon technical phase + Acabados interiores, 218.880 € for 128 m²)
    const llaveEnManoTotal = Math.round(result.constructionBase);
    const llaveEnManoRate = Math.round(result.constructionRatePerM2);
    const llaveEnManoMin = Math.round(result.constructionMin3);
    const llaveEnManoMax = Math.round(result.constructionMax3);

    return {
      suministro: {
        total: suministroTotal,
        rate: suministroRate,
        min: suministroMin,
        max: suministroMax,
      },
      suministro_montaje: {
        total: montajeTotal,
        rate: montajeRate,
        min: montajeMin,
        max: montajeMax,
      },
      suministro_montaje_instalaciones: {
        total: instalacionesTotal,
        rate: instalacionesRate,
        min: instalacionesMin,
        max: instalacionesMax,
      },
      llave_en_mano: {
        total: llaveEnManoTotal,
        rate: llaveEnManoRate,
        min: llaveEnManoMin,
        max: llaveEnManoMax,
      },
    };
  }, [result]);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            1. Configuración de tu Vivienda
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal leading-relaxed">
            Filtra por dormitorios y selecciona tu modelo (todos los precios + IVA).
          </p>
        </div>
      </div>

      <div className="space-y-4 mt-2">
        {/* 1. Apartado de Dormitorios y Modelos Oficiales más Vendidos */}
        <div>
          {/* Header & Bedroom Filter Chips Bar */}
          <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-[#569900]" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  ¿Cuántos dormitorios buscas?
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  (Filtra modelos por habitaciones)
                </span>
              </div>
              {bedroomFilter !== 'all' && (
                <button
                  type="button"
                  id="btn-filter-reset-all"
                  onClick={() => handleSelectBedroomFilter('all')}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#427500] hover:text-[#2F5300] hover:underline cursor-pointer self-start sm:self-auto"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Ver todos ({PRESETS.length} modelos)</span>
                </button>
              )}
            </div>

            {/* Chips row with displacement arrows and limit elimination */}
            <div className="relative flex items-center group/chips">
              {/* Left displacement arrow - ELIMINATED at start limit */}
              {canScrollChipsLeft && (
                <button
                  type="button"
                  id="btn-chips-scroll-left"
                  onClick={() => handleScrollChips('left')}
                  className="absolute left-0 z-20 h-full px-1 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent flex items-center justify-center text-slate-700 hover:text-black transition-all"
                  aria-label="Desplazar dormitorios a la izquierda"
                >
                  <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-300 flex items-center justify-center hover:bg-slate-100 hover:border-[#569900]">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </div>
                </button>
              )}

              <div
                ref={chipsScrollRef}
                onScroll={updateChipsScrollLimits}
                className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin scroll-smooth w-full px-1"
              >
                {BEDROOM_FILTER_OPTIONS.map((opt) => {
                  const isActive = bedroomFilter === opt.id;
                  return (
                    <button
                      key={String(opt.id)}
                      type="button"
                      id={`btn-filter-bedrooms-${opt.id}`}
                      onClick={() => handleSelectBedroomFilter(opt.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#2F5300] text-white shadow-sm ring-2 ring-[#569900]/40 scale-[1.02]'
                          : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs'
                      }`}
                    >
                      <Bed className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5F092]' : 'text-slate-400'}`} />
                      <span>{opt.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold leading-none ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {opt.countLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right displacement arrow - ELIMINATED at end limit */}
              {canScrollChipsRight && (
                <button
                  type="button"
                  id="btn-chips-scroll-right"
                  onClick={() => handleScrollChips('right')}
                  className="absolute right-0 z-20 h-full px-1 bg-gradient-to-l from-slate-50 via-slate-50/95 to-transparent flex items-center justify-center text-slate-700 hover:text-black transition-all"
                  aria-label="Desplazar dormitorios a la derecha"
                >
                  <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-300 flex items-center justify-center hover:bg-slate-100 hover:border-[#569900]">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              )}
            </div>

            {/* Status helper text */}
            {bedroomFilter !== 'all' && (
              <div className="mt-2.5 pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <span>
                  Mostrando <strong>{filteredPresets.length} {filteredPresets.length === 1 ? 'modelo' : 'modelos'}</strong> con <strong>{bedroomFilter} {bedroomFilter === 1 ? 'dormitorio' : 'dormitorios'}</strong>.
                </span>
                <span className="text-[11px] text-slate-500 hidden md:inline">
                  Haz clic en cualquier modelo para seleccionarlo
                </span>
              </div>
            )}
          </div>

          {/* Title for Models Grid */}
          <div className="flex items-center justify-between px-1 mt-3.5 mb-2">
            <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">
              {bedroomFilter === 'all'
                ? 'Catálogo de modelos más vendidos'
                : `Modelos recomendados con ${bedroomFilter} ${bedroomFilter === 1 ? 'dormitorio' : 'dormitorios'}`}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {filteredPresets.length} de {PRESETS.length} modelos
            </span>
          </div>

          {/* Presets Grid */}
          <div className={`grid gap-2.5 ${filteredPresets.length === 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
            {filteredPresets.map((preset) => {
              const isSelected = config.m2 === preset.m2;
              const hasGallery = preset.hasGallery;
              return (
                <button
                  key={preset.m2}
                  type="button"
                  id={`btn-preset-${preset.m2}`}
                  onClick={() => handleM2Change(preset.m2)}
                  className={`p-3.5 rounded-xl border text-left transition-all relative group overflow-hidden ${
                    isSelected
                      ? 'border-[#569900] ring-2 ring-[#569900] shadow-md scale-[1.01]'
                      : 'border-slate-300/80 hover:border-[#569900]/70 hover:shadow-sm'
                  }`}
                >
                  {/* Background image of the model exterior */}
                  {preset.bgImage && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url("${preset.bgImage}")` }}
                    />
                  )}

                  {/* Dark gradient overlay for optimal text contrast and readability */}
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-t from-black/85 via-black/70 to-black/60 backdrop-blur-[0.5px]'
                        : 'bg-gradient-to-t from-black/80 via-black/65 to-black/50 group-hover:from-black/85 group-hover:via-black/70 group-hover:to-black/55'
                    }`}
                  />

                  {/* Bedroom count badge (Top Left) */}
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded bg-black/65 backdrop-blur-xs text-white text-[10px] font-bold border border-white/20 shadow-2xs">
                    <Bed className="w-3 h-3 text-[#A4E556]" />
                    <span>{preset.bedroomLabel}</span>
                  </div>

                  {/* Active state green accent pill OR tag (Top Right) */}
                  {isSelected ? (
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#569900] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs z-10">
                      Seleccionado
                    </div>
                  ) : preset.tag ? (
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-xs text-slate-200 text-[10px] font-semibold border border-white/10 z-10">
                      {preset.tag}
                    </div>
                  ) : null}

                  {/* Content with high contrast white text and drop shadows */}
                  <div className="relative z-10 mt-6">
                    <div className="text-sm font-bold text-white drop-shadow-md flex items-center gap-1.5">
                      {preset.label}
                    </div>
                    <div className={`text-xs mt-1 text-slate-100/90 font-medium drop-shadow leading-snug ${hasGallery ? 'pr-6' : ''}`}>
                      {preset.desc}
                    </div>
                  </div>

                  {hasGallery && (
                    <div
                      className={`absolute bottom-2.5 right-2.5 p-1.5 rounded-lg transition-all z-10 ${
                        isSelected
                          ? 'bg-[#569900] text-white shadow-md scale-105'
                          : 'bg-black/60 text-white/90 group-hover:bg-[#569900] group-hover:text-white group-hover:scale-105 backdrop-blur-xs border border-white/20'
                      }`}
                      title="Ver fotos y plano oficial de este modelo"
                      aria-label="Ver fotos y plano"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Official Model Gallery (Expanded on Click for MG87, MG100, MG105, MG128, MG148, MG165) */}
        {(config.m2 === 87 || config.m2 === 100 || config.m2 === 105 || config.m2 === 128 || config.m2 === 148 || config.m2 === 165) && showGallery && (
          <div className="pt-4 border-t border-slate-200">
            <ModelGallery modelKey={config.m2 === 87 ? 'MG87' : config.m2 === 100 ? 'MG100' : config.m2 === 105 ? 'MG105' : config.m2 === 128 ? 'MG128' : config.m2 === 148 ? 'MG148' : config.m2 === 165 ? 'MG165' : 'MG100'} />
          </div>
        )}

        {/* 2. Modalidades de Contratación & Radio de Acción */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#569900]" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  2. Modalidades de Contrato y Radio de Acción
                </h4>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Alcance operativo según la localización geográfica de la parcela
              </p>
            </div>

            {/* Selector de zona geográfica */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold shrink-0">
              <button
                type="button"
                id="btn-zone-in-radius"
                onClick={() => setSelectedZone('in_radius')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedZone === 'in_radius'
                    ? 'bg-[#2F5300] text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Palencia y limítrofes
              </button>
              <button
                type="button"
                id="btn-zone-out-radius"
                onClick={() => {
                  setSelectedZone('out_radius');
                  setActiveModality('suministro');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedZone === 'out_radius'
                    ? 'bg-amber-800 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Resto de zonas
              </button>
            </div>
          </div>

          {/* Banner con aclaración oficial exacta */}
          {selectedZone === 'in_radius' ? (
            <div className="p-3.5 sm:p-4 bg-[#F2FBE5] rounded-xl border border-[#C5F092] text-xs text-slate-800 leading-relaxed shadow-2xs">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-white border border-[#C5F092] flex items-center justify-center shrink-0 mt-0.5 text-[#569900]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-900 block text-xs sm:text-sm font-bold">
                    Radio de acción: Palencia y provincias limítrofes (Burgos, Cantabria, León y Valladolid)
                  </strong>
                  <p className="text-slate-700 mt-1 leading-relaxed">
                    Disponibles las <strong>4 modalidades oficiales</strong> para tu proyecto. Elige una modalidad abajo para ver qué incluye:
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-3.5 sm:p-4 bg-amber-50 rounded-xl border border-amber-300 text-xs text-slate-800 leading-relaxed shadow-2xs">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-white border border-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-amber-700">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-amber-950 block text-xs sm:text-sm font-bold">
                    Resto de localizaciones (más allá de provincias limítrofes a Palencia):
                  </strong>
                  <p className="text-slate-800 mt-1 leading-relaxed">
                    Disponible únicamente la opción 1 de <strong>Suministro de estructuras</strong>, con el acompañamiento de uno de nuestros técnicos para ayudar al montaje al constructor principal del proyecto.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Selector de modalidades con cálculo en tiempo real */}
          <div className="flex flex-col gap-2 mt-3">
            {[
              { 
                id: 'suministro', 
                label: '1. Suministro Estructura', 
                total: modalityPricing.suministro.total,
                rate: modalityPricing.suministro.rate,
                availableInOutRadius: true 
              },
              { 
                id: 'suministro_montaje', 
                label: '2. Suministro + Montaje', 
                total: modalityPricing.suministro_montaje.total,
                rate: modalityPricing.suministro_montaje.rate,
                availableInOutRadius: false 
              },
              { 
                id: 'suministro_montaje_instalaciones', 
                label: '3. + Montaje + Instalaciones', 
                total: modalityPricing.suministro_montaje_instalaciones.total,
                rate: modalityPricing.suministro_montaje_instalaciones.rate,
                availableInOutRadius: false 
              },
              { 
                id: 'llave_en_mano', 
                label: '4. Llave en Mano', 
                total: modalityPricing.llave_en_mano.total,
                rate: modalityPricing.llave_en_mano.rate,
                availableInOutRadius: false 
              },
            ]
              .filter((mod) => selectedZone === 'in_radius' || mod.availableInOutRadius)
              .map((mod) => {
                const isSelected = activeModality === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    id={`btn-modality-${mod.id}`}
                    onClick={() => setActiveModality(mod.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900'
                        : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm sm:text-base font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {mod.label}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${isSelected ? 'bg-[#569900]' : 'bg-[#569900]'}`} />
                    </div>
                    <div className="flex items-baseline justify-between mt-1.5">
                      <span className={`text-lg sm:text-xl font-black font-mono tracking-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {mod.total.toLocaleString('es-ES')} €
                      </span>
                      <span className={`text-xs sm:text-sm font-mono font-bold ${isSelected ? 'text-[#C5F092]' : 'text-[#569900]'}`}>
                        {mod.rate.toLocaleString('es-ES')} €/m²
                      </span>
                    </div>
                  </button>
                );
              })}
          </div>

          {/* Tarjeta con el detalle exacto de la modalidad */}
          <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            {activeModality === 'suministro' && (
              <div className="space-y-2.5">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      1. Suministro de Estructuras Medgón
                    </h5>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 shrink-0">
                      Base Estructural
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Horquilla estimada (±3%): <span className="font-mono font-bold text-slate-700">{modalityPricing.suministro.min.toLocaleString('es-ES')} € – {modalityPricing.suministro.max.toLocaleString('es-ES')} € + IVA</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pt-1 border-t border-slate-200">
                  <span className="text-xl font-black text-slate-900 font-mono tracking-tight">
                    {modalityPricing.suministro.total.toLocaleString('es-ES')} € <span className="text-xs font-semibold text-slate-500">+ IVA</span>
                  </span>
                  <span className="text-xs font-bold text-[#569900] font-mono">
                    {modalityPricing.suministro.rate.toLocaleString('es-ES')} €/m² + IVA
                  </span>
                </div>

                <p className="text-slate-600 italic leading-relaxed">
                  Fabricación mecanizada CNC en taller de la estructura técnica de madera. Ideal para constructores o montadores externos homologados.
                </p>

                <ul className="space-y-1 text-slate-700">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Fabricación mecanizada en taller (Palencia).</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Estructura técnica de madera y entramado ligero.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Suministro directo para montaje por terceros.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Control milimétrico sin desviaciones en seco.</li>
                </ul>
              </div>
            )}

            {activeModality === 'suministro_montaje' && (
              <div className="space-y-2.5">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      2. Suministro + Montaje (Envolvente Estanca)
                    </h5>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 shrink-0">
                      Montaje Oficial
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Horquilla estimada (±3%): <span className="font-mono font-bold text-slate-700">{modalityPricing.suministro_montaje.min.toLocaleString('es-ES')} € – {modalityPricing.suministro_montaje.max.toLocaleString('es-ES')} € + IVA</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pt-1 border-t border-slate-200">
                  <span className="text-xl font-black text-slate-900 font-mono tracking-tight">
                    {modalityPricing.suministro_montaje.total.toLocaleString('es-ES')} € <span className="text-xs font-semibold text-slate-500">+ IVA</span>
                  </span>
                  <span className="text-xs font-bold text-[#569900] font-mono">
                    {modalityPricing.suministro_montaje.rate.toLocaleString('es-ES')} €/m² + IVA
                  </span>
                </div>

                <p className="text-slate-600 italic leading-relaxed">
                  Estructura fabricada y ensamblada en parcela por nuestros equipos técnicos oficiales.
                </p>

                <ul className="space-y-1 text-slate-700">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Fabricación y transporte especializado.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Montaje de envolvente hermética en días.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Carpinterías exteriores de alta gama colocadas.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Sin instalaciones, sin fachada exterior ni cubierta.</li>
                </ul>
              </div>
            )}

            {activeModality === 'suministro_montaje_instalaciones' && (
              <div className="space-y-2.5">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      3. Suministro + Montaje + Instalaciones
                    </h5>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E1F7C3] text-[#1D3300] border border-[#C5F092] shrink-0">
                      Envolvente Completa
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Horquilla estimada (±3%): <span className="font-mono font-bold text-slate-700">{modalityPricing.suministro_montaje_instalaciones.min.toLocaleString('es-ES')} € – {modalityPricing.suministro_montaje_instalaciones.max.toLocaleString('es-ES')} € + IVA</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pt-1 border-t border-slate-200">
                  <span className="text-xl font-black text-slate-900 font-mono tracking-tight">
                    {modalityPricing.suministro_montaje_instalaciones.total.toLocaleString('es-ES')} € <span className="text-xs font-semibold text-slate-500">+ IVA</span>
                  </span>
                  <span className="text-xs font-bold text-[#569900] font-mono">
                    {modalityPricing.suministro_montaje_instalaciones.rate.toLocaleString('es-ES')} €/m² + IVA
                  </span>
                </div>

                <p className="text-slate-600 italic leading-relaxed">
                  La envolvente completa con las partidas críticas resueltas para evitar conflictos entre gremios.
                </p>

                <ul className="space-y-1 text-slate-700">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Estructura industrializada y montaje completo.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Preinstalaciones integradas en cámaras técnicas.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Cubierta aislada y estanca terminada.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Fachada arquitectónica industrializada incluida.</li>
                </ul>
              </div>
            )}

            {activeModality === 'llave_en_mano' && (
              <div className="space-y-2.5">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      4. Llave en Mano (Gestión Integral)
                    </h5>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200 shrink-0">
                      Todo Incluido
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Horquilla estimada (±3%): <span className="font-mono font-bold text-slate-700">{modalityPricing.llave_en_mano.min.toLocaleString('es-ES')} € – {modalityPricing.llave_en_mano.max.toLocaleString('es-ES')} € + IVA</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pt-1 border-t border-slate-200">
                  <span className="text-xl font-black text-slate-900 font-mono tracking-tight">
                    {modalityPricing.llave_en_mano.total.toLocaleString('es-ES')} € <span className="text-xs font-semibold text-slate-500">+ IVA</span>
                  </span>
                  <span className="text-xs font-bold text-[#569900] font-mono">
                    {modalityPricing.llave_en_mano.rate.toLocaleString('es-ES')} €/m² + IVA
                  </span>
                </div>

                <p className="text-slate-600 italic leading-relaxed">
                  Servicio total de principio a fin para autopromotores en Palencia y provincias limítrofes.
                </p>

                <ul className="space-y-1 text-slate-700">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Todo incluido: desde cimentación hasta llaves.</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Ámbito operativo: Palencia y provincias limítrofes (Burgos, Cantabria, León y Valladolid).</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0" /> Un único interlocutor técnico y contractual.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 3. Equipamiento Opcional de Sostenibilidad y Confort (Modo Acordeón Replegado) */}
        <div className="pt-6 border-t border-slate-200">
          <button
            type="button"
            id="btn-toggle-extras-accordion"
            onClick={() => setIsExtrasAccordionOpen((prev) => !prev)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200 transition-all text-left group cursor-pointer"
            aria-expanded={isExtrasAccordionOpen}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-[#569900] group-hover:border-[#569900]/50 transition-colors shadow-2xs">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    3. Equipamiento Opcional de Sostenibilidad y Confort
                  </span>
                  {activeExtrasCount > 0 ? (
                    <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-[#E1F7C3] text-[#1D3300] border border-[#C5F092]">
                      {activeExtrasCount} activado{activeExtrasCount > 1 ? 's' : ''}
                    </span>
                  ) : (
                    <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      Opcional
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
                  Fotovoltaica (+22.500 €), Domótica (+7.500 €) y Audio multizona (+2.000 €)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pl-2 text-slate-500 group-hover:text-slate-900 transition-colors shrink-0">
              <span className="text-xs font-semibold hidden sm:inline">
                {isExtrasAccordionOpen ? 'Plegar' : 'Desplegar'}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-600 transition-transform duration-200 ${
                  isExtrasAccordionOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {/* Acordeón desplegable (cerrado por defecto) */}
          {isExtrasAccordionOpen && (
            <div className="mt-3.5 space-y-3">
              {/* Solar PV */}
              <div
                id="card-extra-pv"
                onClick={() => toggleExtra('includePhotovoltaic')}
                className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-all ${
                  config.includePhotovoltaic
                    ? 'bg-[#F2FBE5] border-[#569900] text-slate-900 ring-2 ring-[#569900]'
                    : 'bg-slate-50 border-slate-300 hover:border-slate-400 text-slate-800'
                }`}
              >
                <div>
                  <div className="text-sm sm:text-base font-bold flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-600 shrink-0" />
                    Instalación Fotovoltaica Completa (+22.500 € + IVA)
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Paneles solares de alto rendimiento con inversor inteligente
                  </div>
                </div>
                <div className={`w-12 h-6.5 rounded-full relative transition-colors shrink-0 ml-3 ${
                  config.includePhotovoltaic ? 'bg-[#569900]' : 'bg-slate-300'
                }`}>
                  <div className={`absolute top-0.5 w-5.5 h-5.5 bg-white rounded-full transition-transform shadow-xs ${
                    config.includePhotovoltaic ? 'right-0.5' : 'left-0.5'
                  }`} />
                </div>
              </div>

              {/* Domotics */}
              <div
                id="card-extra-domotics"
                onClick={() => toggleExtra('includeDomotics')}
                className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-all ${
                  config.includeDomotics
                    ? 'bg-[#F2FBE5] border-[#569900] text-slate-900 ring-2 ring-[#569900]'
                    : 'bg-slate-50 border-slate-300 hover:border-slate-400 text-slate-800'
                }`}
              >
                <div>
                  <div className="text-sm sm:text-base font-bold flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-indigo-600 shrink-0" />
                    Sistema de Domótica Integrada (+7.500 € + IVA)
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Control centralizado y remoto de clima, persianas motorizadas y monitorización
                  </div>
                </div>
                <div className={`w-12 h-6.5 rounded-full relative transition-colors shrink-0 ml-3 ${
                  config.includeDomotics ? 'bg-[#569900]' : 'bg-slate-300'
                }`}>
                  <div className={`absolute top-0.5 w-5.5 h-5.5 bg-white rounded-full transition-transform shadow-xs ${
                    config.includeDomotics ? 'right-0.5' : 'left-0.5'
                  }`} />
                </div>
              </div>

              {/* Audio */}
              <div
                id="card-extra-audio"
                onClick={() => toggleExtra('includeAudio')}
                className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-all ${
                  config.includeAudio
                    ? 'bg-[#F2FBE5] border-[#569900] text-slate-900 ring-2 ring-[#569900]'
                    : 'bg-slate-50 border-slate-300 hover:border-slate-400 text-slate-800'
                }`}
              >
                <div>
                  <div className="text-sm sm:text-base font-bold flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-purple-600 shrink-0" />
                    Sistema de Audio Multizona (+2.000 € + IVA)
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Sonido envolvente integrado en estancias principales
                  </div>
                </div>
                <div className={`w-12 h-6.5 rounded-full relative transition-colors shrink-0 ml-3 ${
                  config.includeAudio ? 'bg-[#569900]' : 'bg-slate-300'
                }`}>
                  <div className={`absolute top-0.5 w-5.5 h-5.5 bg-white rounded-full transition-transform shadow-xs ${
                    config.includeAudio ? 'right-0.5' : 'left-0.5'
                  }`} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. Honorarios Técnicos (Fijo transparente) */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-100 p-4 rounded-xl border border-slate-300">
          <div>
            <div className="text-sm sm:text-base font-bold text-slate-900">
              4. Honorarios de Proyecto y Dirección Técnica
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Proyecto visado + Arquitecto (DO) + Aparejador (DEO) + Coordinación de Seguridad
            </div>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono">
              12.500 € <span className="text-xs font-normal text-slate-600">+ IVA</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold">
              (~{Math.round(result.projectFeesPerM2)} €/m²)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
