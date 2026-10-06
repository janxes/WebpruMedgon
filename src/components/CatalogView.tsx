import React, { useState } from 'react';
import { CATALOG_MODELS, ModelData } from '../data/modelsCatalog';
import { Filter, ArrowRight, ShieldCheck, Check, Clock } from 'lucide-react';

interface CatalogViewProps {
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ onNavigate, onOpenExportModal }) => {
  const [bedroomFilter, setBedroomFilter] = useState<number | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'m2-asc' | 'm2-desc'>('m2-asc');

  const allModels = Object.values(CATALOG_MODELS);

  const filteredModels = allModels
    .filter((m) => {
      if (bedroomFilter === 'all') return true;
      if (bedroomFilter === 4) return m.bedrooms >= 4;
      return m.bedrooms === bedroomFilter;
    })
    .sort((a, b) => {
      if (sortOrder === 'm2-asc') return a.m2Construidos - b.m2Construidos;
      return b.m2Construidos - a.m2Construidos;
    });

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Lockup */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Catálogo B2C de Viviendas Industrializadas
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181B]">
          Modelos Estandarizados en Madera Técnica Passivhaus
        </h1>
        <p className="text-base sm:text-lg text-[#5A606A] leading-relaxed">
          Nueve modelos optimizados en taller robotizado para garantizar certidumbre absoluta en costes (1.700 - 1.900 €/m² + IVA) y plazos de ejecución de 6 meses.
        </p>
      </div>

      {/* Filter and Sorting Bar (Single-line controls with clean state) */}
      <div className="p-4 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg flex flex-wrap items-center justify-between gap-4">
        
        {/* Bedroom filter segmented tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5A606A] mr-1">
            Dormitorios:
          </span>
          {[
            { label: 'Todos los modelos', value: 'all' as const },
            { label: '1 Dormitorio', value: 1 },
            { label: '2 Dormitorios', value: 2 },
            { label: '3 Dormitorios', value: 3 },
            { label: '4+ Dormitorios', value: 4 },
          ].map((tab) => (
            <button
              key={String(tab.value)}
              type="button"
              onClick={() => setBedroomFilter(tab.value)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                bedroomFilter === tab.value
                  ? 'bg-[#16181B] text-white shadow-xs'
                  : 'bg-white text-[#5A606A] hover:text-[#16181B] border border-[#16181B]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5A606A]">
            Ordenar:
          </span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
            className="px-3 py-1.5 text-xs font-semibold bg-white border border-[#16181B]/10 rounded text-[#16181B] cursor-pointer"
          >
            <option value="m2-asc">Menor a mayor superficie (m²)</option>
            <option value="m2-desc">Mayor a menor superficie (m²)</option>
          </select>
        </div>

      </div>

      {/* Model Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredModels.map((m) => (
          <article
            key={m.id}
            id={m.id}
            className="bg-white border border-[#16181B]/10 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#16181B]/30 hover:shadow-md transition-all group"
          >
            <div>
              {/* Image Container with surface tag */}
              <div className="relative h-64 overflow-hidden bg-[#FAF8F5]">
                <img
                  src={m.heroImage}
                  alt={`${m.name} render exterior`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[#16181B]/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded">
                  {m.m2Construidos} m²
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#16181B] text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
                  {m.plants > 1 ? `${m.plants} Plantas` : 'Planta Única'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-bold text-[#16181B] tracking-tight">
                      {m.name}
                    </h2>
                    <span className="text-xs text-[#0DA836] font-semibold">
                      {m.style}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed line-clamp-3">
                  {m.description}
                </p>

                {/* Specs metadata */}
                <div className="pt-2 border-t border-[#16181B]/10 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-[#FAF8F5] rounded">
                    <span className="text-[#8E95A2] block text-[10px] uppercase">Construidos</span>
                    <strong className="text-[#16181B] tabular-nums font-bold">{m.m2Construidos} m²</strong>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded">
                    <span className="text-[#8E95A2] block text-[10px] uppercase">Dormitorios</span>
                    <strong className="text-[#16181B] tabular-nums font-bold">{m.bedrooms} dorm</strong>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded">
                    <span className="text-[#8E95A2] block text-[10px] uppercase">Baños</span>
                    <strong className="text-[#16181B] tabular-nums font-bold">{m.bathrooms} bñ</strong>
                  </div>
                </div>

                {/* Highlights bullet list */}
                <ul className="space-y-1.5 text-xs text-[#5A606A] pt-1">
                  {m.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#0DA836] shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Footer with Price and CTA */}
            <div className="p-6 pt-0 border-t border-[#16181B]/5 mt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#8E95A2] font-semibold block">
                  Fase Técnica Orientativa
                </span>
                <span className="text-sm font-extrabold text-[#16181B] tabular-nums">
                  {m.priceEstimateMin.toLocaleString('es-ES')} - {m.priceEstimateMax.toLocaleString('es-ES')} €
                </span>
                <span className="text-[10px] text-[#8E95A2] block">+ IVA (6 meses)</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('model-detail', m.id)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#16181B] hover:bg-[#0DA836] rounded transition-colors cursor-pointer"
              >
                Ficha Técnica &rarr;
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Technical boundaries notice box */}
      <div className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-lg font-bold text-[#16181B]">
            Regla de Catálogo: Personalización Interior vs Límites Fijos
          </h3>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Todos los modelos permiten distribución libre de dormitorios y salón-cocina, así como volteado en espejo sobre tu parcela. Las ventanas exteriores, baños e instalaciones permanecen fijos para garantizar el aislamiento Passivhaus y el precio cerrado.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 text-xs font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
        >
          Consultar con Oficina Técnica &rarr;
        </button>
      </div>

    </div>
  );
};
