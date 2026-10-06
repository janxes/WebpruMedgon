import React, { useState } from 'react';
import { SCOPE_ITEMS } from '../data/medgonData';
import { CheckCircle2, XCircle, Info, ShieldCheck, Palette, Filter } from 'lucide-react';

export const ScopeComparisonTable: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'medgon' | 'client'>('all');

  const filteredItems = SCOPE_ITEMS.filter((item) => {
    if (filter === 'medgon') return item.includedInMedgon;
    if (filter === 'client') return !item.includedInMedgon;
    return true;
  });

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            Tabla de Alcance y Responsabilidades
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Delimitación técnica exacta: qué incluye Medgón y qué gestionas con gremios locales
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-300 self-start sm:self-auto">
          <button
            id="filter-all"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
              filter === 'all' ? 'bg-[#569900] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Todas ({SCOPE_ITEMS.length})
          </button>
          <button
            id="filter-medgon"
            onClick={() => setFilter('medgon')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
              filter === 'medgon' ? 'bg-[#569900] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Medgón (9)
          </button>
          <button
            id="filter-client"
            onClick={() => setFilter('client')}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all ${
              filter === 'client' ? 'bg-amber-700 text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Cliente (6)
          </button>
        </div>
      </div>

      {/* Two Column Visual Cards Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="p-4 rounded-xl bg-[#F2FBE5] border border-[#C5F092]">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
            <span className="w-2.5 h-2.5 rounded-full bg-[#569900]" />
            Fase Técnica Medgón (Incluida en Presupuesto)
          </div>
          <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
            El <strong>corazón industrializado de alta eficiencia</strong>: cimentación a libros abiertos, estructura hermética en madera contralaminada y entramado ligero, aislamiento natural de fibra de madera, cubierta Passivhaus, carpinterías de triple vidrio, suelo radiante/refrescante con aerotermia y ventilación mecánica de doble flujo con recuperación de calor.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
          <div className="flex items-center gap-2 font-bold text-amber-950 text-sm sm:text-base">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            A Cargo del Cliente (Bolsa de Acabados ~180-200 €/m²)
          </div>
          <p className="text-xs sm:text-sm text-slate-800 mt-2 leading-relaxed">
            Acabados superficiales a tu gusto: pavimentos, alicatados, sanitarios, pintura interior y puertas de paso. Contratados directamente por ti con gremios de tu zona para <strong>ahorrar entre un 20% y un 30% en comisiones de constructora</strong>.
          </p>
        </div>
      </div>

      {/* Mobile Accessible Rows (Visible only on small screens < sm) - 1 columna, cada concepto en una fila */}
      <div className="sm:hidden mt-5 space-y-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-xl border transition-all flex flex-col space-y-2.5 ${
              item.includedInMedgon
                ? 'bg-[#F9FDF5] border-[#C5F092]/90 shadow-2xs'
                : 'bg-amber-50/40 border-amber-200/80 shadow-2xs'
            }`}
          >
            {/* Fila 1: Concepto / Partida */}
            <div className="flex items-start gap-2">
              {item.includedInMedgon ? (
                <CheckCircle2 className="w-5 h-5 text-[#569900] mt-0.5 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              )}
              <h4 className="font-bold text-sm text-slate-900 leading-snug">
                {item.item}
              </h4>
            </div>

            {/* Fila 2: Categoría */}
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {item.category}
            </div>

            {/* Fila 3: Ejecuta: Medgón / Cliente */}
            <div className="text-xs text-slate-800 flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-slate-700">Ejecuta:</span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                  item.includedInMedgon
                    ? 'bg-[#E1F7C3] text-[#1D3300] border border-[#C5F092]'
                    : 'bg-amber-100 text-amber-900 border border-amber-200'
                }`}
              >
                {item.includedInMedgon ? 'Medgón' : 'Cliente (Gremios Locales)'}
              </span>
            </div>

            {/* Fila 4: Etiqueta Detalle y Beneficio Técnico */}
            <div className="text-xs font-bold text-slate-800 pt-0.5">
              Detalle y Beneficio Técnico:
            </div>

            {/* Fila 5: Descripción / Beneficio Técnico */}
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop / Tablet Table (Hidden on small mobile screens) */}
      <div className="hidden sm:block mt-5 overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-bold border-b border-slate-300">
                <th className="py-3 px-4">Partida / Capítulo</th>
                <th className="py-3 px-4 hidden sm:table-cell">Categoría</th>
                <th className="py-3 px-4 text-center">Responsable</th>
                <th className="py-3 px-4">Detalle y Beneficio Técnico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    <div className="flex items-start gap-2.5">
                      {item.includedInMedgon ? (
                        <CheckCircle2 className="w-5 h-5 text-[#569900] mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                      )}
                      <span className="text-sm sm:text-base">{item.item}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs sm:text-sm text-slate-600 font-medium hidden sm:table-cell">
                    {item.category}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${
                        item.includedInMedgon
                          ? 'bg-[#E1F7C3] text-[#1D3300] border border-[#C5F092]'
                          : 'bg-amber-100 text-amber-900 border border-amber-200'
                      }`}
                    >
                      {item.responsibility}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 leading-relaxed text-xs sm:text-sm max-w-md">
                    <span>{item.description}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
