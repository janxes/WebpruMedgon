import React, { useState } from 'react';
import { CalculationResult, HouseConfig } from '../types';
import { Copy, Check, Printer, Sparkles, AlertCircle, ArrowUpRight, TrendingDown, Layers, Palette, Wrench } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BudgetSummaryProps {
  result: CalculationResult;
  config: HouseConfig;
  onAskAdvisor: (customPrompt?: string) => void;
}

export const BudgetSummary: React.FC<BudgetSummaryProps> = ({ result, config, onAskAdvisor }) => {
  const [copied, setCopied] = useState(false);

  const formatEuro = (amount: number) => {
    return Math.round(amount).toLocaleString('es-ES') + ' €';
  };

  const handleCopy = () => {
    const textToCopy = `========================================================
PRESUPUESTO ESTIMADO MEDGÓN - VIVIENDA PASSIVHAUS (${result.m2} m²)
========================================================

1. RESUMEN RÁPIDO DE INVERSIÓN (Horquilla ±3%):
   • Fase Medgón (Envolvente + Instalaciones): ${formatEuro(result.medgonBase)} + IVA (aprox. ${result.medgonRatePerM2} €/m² + IVA)
     [Horquilla estimada: ${formatEuro(result.medgonMin3)} - ${formatEuro(result.medgonMax3)}]
   • Bolsa sugerida para Acabados (Suelos, pintura, puertas): ${formatEuro(result.finishesBase)} (aprox. ${result.finishesRatePerM2} €/m²)
   • Inversión total construcción estimada: ${formatEuro(result.constructionBase)} (aprox. ${Math.round(result.constructionRatePerM2)} €/m² llave en mano terminado)
     [Horquilla construcción: ${formatEuro(result.constructionMin3)} - ${formatEuro(result.constructionMax3)}]
   • Honorarios de Proyecto y Dirección Técnica: 12.500 € + IVA (~${Math.round(result.projectFeesPerM2)} €/m²)
${result.extras.total > 0 ? `   • Extras de Sostenibilidad seleccionados: ${formatEuro(result.extras.total)} + IVA\n` : ''}
   -----------------------------------------------------
   • TOTAL BASE IMPONIBLE: ${formatEuro(result.grandTotalBase)}
   • TOTAL CON IVA ESTIMADO: ${formatEuro(result.grandTotalWithVat)}

2. QUÉ INCLUYE LA FASE TÉCNICA MEDGÓN:
   - Cimentación a libros abiertos
   - Estructura industrializada de madera (LVL/entramado con insuflado de fibra de madera)
   - Fachada completa (SATE / panel madera-cemento) sin puentes térmicos
   - Cubierta aislada e impermeabilizada
   - Carpintería exterior Passivhaus (triple vidrio PVC/aluminio + persianas motorizadas)
   - Instalaciones completas: Aerotermia con suelo radiante/refrescante, VMC con recuperación de calor, Fontanería y Electricidad/telecomunicaciones con mecanismos

3. POR QUÉ MEDGÓN NO EJECUTA LOS ACABADOS:
   No incluir suelos ni pintura es una ventaja económica: evita sobrecostes de intermediación de constructora (ahorro de un 20-30%) y te otorga total libertad de elección con gremios locales.

Nota informativa: En relación al modelo de vivienda seleccionado, y conforme a la normativa de edificación aplicable en su zona, le informamos que puede elegir entre tres tipos de cubierta (dos aguas, un agua o bien cubierta plana). Le indicamos que la elección de una u otra opción implicará una ligera variación en el presupuesto final, debido a las diferencias de diseño y de materiales empleados en cada solución.
========================================================`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Percentage calculations
  const totalBase = result.grandTotalBase;
  const pctMedgon = Math.round((result.medgonBase / totalBase) * 100);
  const pctFinishes = Math.round((result.finishesBase / totalBase) * 100);
  const pctFees = Math.round((result.projectFeesBase / totalBase) * 100);
  const pctExtras = Math.round((result.extras.total / totalBase) * 100);

  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-xs print:shadow-none print:border-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-xs sm:text-sm font-bold uppercase text-[#2F5300] tracking-wider bg-[#E1F7C3] px-2.5 py-0.5 rounded-md">
              Desglose de Presupuesto
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-200 text-slate-800">
              Horquilla ±3%
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Presupuesto Vivienda {result.m2} m²
          </h2>
        </div>

        <div className="flex items-center gap-2.5 print:hidden">
          <button
            id="btn-copy-budget"
            onClick={handleCopy}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 border border-slate-300 shadow-2xs"
            title="Copiar desglose completo al portapapeles"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#569900]" />
                <span className="text-[#569900]">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-700" />
                <span>Copiar</span>
              </>
            )}
          </button>

          <button
            id="btn-print-budget"
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all border border-slate-300 shadow-2xs"
            title="Imprimir o guardar como PDF"
          >
            <Printer className="w-4 h-4 text-slate-700" />
            <span className="hidden sm:inline">Imprimir</span>
          </button>
        </div>
      </div>

      {/* Main Budget Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {/* Card 1: Fase Medgón */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-300/80 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-sm sm:text-base font-bold text-slate-900">
              <span className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#569900]" />
                Fase Medgón Industrializada
              </span>
              <span className="font-mono bg-[#E1F7C3] text-[#1D3300] px-2.5 py-1 rounded-lg text-xs sm:text-sm font-extrabold">
                {result.medgonRatePerM2} €/m² + IVA
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                {formatEuro(result.medgonBase)}
              </span>
              <span className="text-sm font-bold text-slate-600">
                + IVA
              </span>
            </div>

            {/* Horquilla ±3% */}
            <div className="mt-3.5 pt-3.5 border-t border-slate-200 flex items-center justify-between text-sm text-slate-800">
              <span className="text-xs sm:text-sm text-slate-600 font-medium">Horquilla estimada (±3%):</span>
              <span className="font-mono font-extrabold text-slate-900">
                {formatEuro(result.medgonMin3)} – {formatEuro(result.medgonMax3)} + IVA
              </span>
            </div>
          </div>

          <div className="mt-3 bg-white/70 p-3 rounded-xl border border-slate-200">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Incluye:</strong> Cimentación a libros abiertos, estructura de madera, fibra de madera, fachada SATE, cubierta aislada, triple vidrio Passivhaus, aerotermia y VMC.
            </p>
            <a
              href="#section-partidas-modelo"
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#2F5300] hover:text-[#569900] hover:underline"
            >
              <span>Ver partidas y capítulos de este modelo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Bolsa para Acabados */}
        <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-sm sm:text-base font-bold text-amber-950">
              <span className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-amber-800" />
                Bolsa Sugerida Acabados
              </span>
              <span className="font-mono bg-amber-200/80 text-amber-950 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-extrabold">
                ~{result.finishesRatePerM2} €/m² + IVA
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-950 font-mono tracking-tight">
                {formatEuro(result.finishesBase)}
              </span>
              <span className="text-sm font-bold text-amber-800">
                + IVA estim.
              </span>
            </div>

            <div className="mt-3.5 pt-3.5 border-t border-amber-200 flex items-center justify-between text-sm text-amber-950">
              <span className="text-xs sm:text-sm text-amber-800 font-medium">Rango orientativo:</span>
              <span className="font-mono font-extrabold text-amber-950">
                {formatEuro(result.m2 * 180)} – {formatEuro(result.m2 * 200)} + IVA
              </span>
            </div>
          </div>

          <div className="mt-3 bg-white/70 p-3 rounded-xl border border-amber-200">
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              A cargo del cliente con gremios de confianza locales (suelos, pintura interior, alicatados y puertas de paso). <strong>Sin sobrecostes de constructora.</strong>
            </p>
            <a
              href="#section-partidas-modelo"
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-amber-900 hover:text-amber-950 hover:underline"
            >
              <span>Ver partidas de acabados de este modelo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Key Metric: Total Inversión Construcción in Medgon Green */}
      <div className="mt-5 p-6 rounded-2xl bg-gradient-to-br from-[#1D3300] via-[#2F5300] to-[#427500] text-white shadow-md border border-[#1D3300]">
        <div className="flex flex-col items-start gap-2.5">
          <div>
            <div className="text-xs sm:text-sm font-bold tracking-wider text-[#E1F7C3] uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A4E556] animate-pulse" />
              Inversión Construcción Estimada (Llave en Mano Terminado)
            </div>
            <div className="text-sm sm:text-base text-white/90 font-medium mt-1">
              Fase Medgón + Bolsa de Acabados completada
            </div>
          </div>

          <div className="text-left mt-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight">
              {formatEuro(result.constructionBase)}
            </div>
            <div className="text-sm sm:text-base font-bold text-[#E1F7C3] mt-1">
              aprox. {Math.round(result.constructionRatePerM2)} €/m² + IVA
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-sm text-white font-medium">
          <span className="text-white/80">Horquilla total construcción (±3% + acabados):</span>
          <span className="font-mono font-bold text-[#E1F7C3] text-base sm:text-lg">
            {formatEuro(result.constructionMin3)} – {formatEuro(result.constructionMax3)} + IVA
          </span>
        </div>
      </div>

      {/* Additional Items: Fees & Extras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {/* Project Fees */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-slate-700" />
              Honorarios Proyecto & Dirección
            </span>
            <span className="text-sm sm:text-base font-mono font-extrabold text-slate-900">
              {formatEuro(result.projectFeesBase)} + IVA
            </span>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
            Proyecto visado, Arquitecto (DO), Aparejador (DEO) y Seg. y Salud (~{Math.round(result.projectFeesPerM2)} €/m² + IVA).
          </div>
        </div>

        {/* Extras Summary */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              Extras Seleccionados
            </span>
            <span className="text-sm sm:text-base font-mono font-extrabold text-slate-900">
              {result.extras.total > 0
                ? `${formatEuro(result.extras.total)} + IVA`
                : '0 € (Ninguno)'}
            </span>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
            {result.extras.total > 0 ? (
              <span className="text-[#2F5300] font-bold">
                {[
                  result.extras.photovoltaic ? 'Solar FV (+22.500 € + IVA)' : null,
                  result.extras.domotics ? 'Domótica (+7.500 € + IVA)' : null,
                  result.extras.audio ? 'Audio (+2.000 € + IVA)' : null,
                ].filter(Boolean).join(' • ')}
              </span>
            ) : (
              'Fotovoltaica (+22.500 € + IVA), Domótica (+7.500 € + IVA), Audio (+2.000 € + IVA).'
            )}
          </div>
        </div>
      </div>

      {/* Global Inversion Total Box */}
      <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-slate-100 border border-slate-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-base sm:text-lg font-extrabold text-slate-900">
              Construcción + Acabados + Honorarios Técnicos {result.extras.total > 0 && '+ Extras'}
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-3xl sm:text-4xl font-black text-[#2F5300] font-mono">
              {formatEuro(result.grandTotalBase)} <span className="text-xl sm:text-2xl font-bold text-slate-700">+ IVA</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
              Base Imponible + IVA (Total estimado con IVA incluido: {formatEuro(result.grandTotalWithVat)})
            </div>
          </div>
        </div>

        {/* Visual Distribution Bar */}
        <div className="mt-4 pt-4 border-t border-slate-300">
          <div className="flex items-center justify-between text-xs uppercase font-bold text-slate-700 mb-2">
            <span>Distribución de la inversión</span>
            <span>100% transparente</span>
          </div>
          <div className="h-3.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
            <div
              style={{ width: `${pctMedgon}%` }}
              className="bg-[#569900] transition-all duration-500"
              title={`Fase Medgón: ${pctMedgon}%`}
            />
            <div
              style={{ width: `${pctFinishes}%` }}
              className="bg-amber-500 transition-all duration-500"
              title={`Bolsa Acabados: ${pctFinishes}%`}
            />
            <div
              style={{ width: `${pctFees}%` }}
              className="bg-slate-500 transition-all duration-500"
              title={`Honorarios: ${pctFees}%`}
            />
            {pctExtras > 0 && (
              <div
                style={{ width: `${pctExtras}%` }}
                className="bg-indigo-600 transition-all duration-500"
                title={`Extras: ${pctExtras}%`}
              />
            )}
          </div>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-800 mt-3 font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-[#569900]" />
              <span>Fase Medgón ({pctMedgon}%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-amber-500" />
              <span>Acabados locales ({pctFinishes}%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-slate-500" />
              <span>Honorarios ({pctFees}%)</span>
            </div>
            {pctExtras > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-indigo-600" />
                <span>Extras ({pctExtras}%)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ask Advisor CTA */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 text-white print:hidden">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#569900] flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-5 h-5 text-[#E1F7C3]" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-bold tracking-wide">¿Tienes dudas sobre esta vivienda de {result.m2} m²?</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Consulta al Asesor Técnico IA de Medgón sobre detalles constructivos o plazos.
            </div>
          </div>
        </div>

        <button
          id="btn-ask-about-budget"
          onClick={() => onAskAdvisor(`Quiero más información sobre el presupuesto de una casa de ${result.m2} m² con Medgón.`)}
          className="px-4 py-2.5 bg-[#569900] hover:bg-[#427500] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shrink-0 active:scale-95 shadow-sm"
        >
          Consultar Asesor
        </button>
      </div>
    </div>
  );
};
