import React from 'react';
import { CalculationResult } from '../types';
import { Leaf, TrendingUp, Zap, Euro, ShieldCheck, TreePine, Award } from 'lucide-react';

interface EnergySavingsSimulatorProps {
  result: CalculationResult;
}

export const EnergySavingsSimulator: React.FC<EnergySavingsSimulatorProps> = ({ result }) => {
  const { m2 } = result;

  // Typical energy consumption:
  // CTE standard house: ~100 kWh/m²/year for climate control + ACS
  // Medgón Passivhaus: ~15 kWh/m²/year climate control + ~15 kWh/m² ACS = ~30 kWh/m²/year
  const standardAnnualKwh = m2 * 100;
  const passivhausAnnualKwh = m2 * 30;
  const kwhSavedAnnual = standardAnnualKwh - passivhausAnnualKwh;

  // Average electricity price with aerotermia cop 4.0: ~0.18 €/kWh
  const avgCostPerKwh = 0.18;
  const standardAnnualCost = standardAnnualKwh * avgCostPerKwh;
  const passivhausAnnualCost = passivhausAnnualKwh * avgCostPerKwh;
  const annualSavingsEuro = Math.round(standardAnnualCost - passivhausAnnualCost);

  const savings10Years = annualSavingsEuro * 10;
  const savings30Years = Math.round(annualSavingsEuro * 30 * 1.35); // Factoring modest inflation/energy rise

  // CO2 sequestered by timber structure (~0.9 tons CO2 per m² timber construction)
  const co2SequesteredTons = Math.round(m2 * 0.85);

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase text-[#2F5300] tracking-wider bg-[#E1F7C3] px-2.5 py-0.5 rounded-md">
            Simulador de Retorno Energético
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Ahorro Económico y Huella Ecológica
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-1">
            Una vivienda Passivhaus reduce hasta un 85% la demanda energética frente a la construcción tradicional.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#E1F7C3] px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-[#1D3300] border border-[#C5F092] self-start sm:self-auto shadow-2xs">
          <Award className="w-4 h-4 text-[#569900]" />
          <span>Passivhaus Certificable</span>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {/* Metric 1: Annual € Savings */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-300/80 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2F5300] uppercase tracking-wide bg-[#E1F7C3] px-2.5 py-1 rounded-md">
                Ahorro Estimado Anual
              </span>
              <Euro className="w-5 h-5 text-[#569900]" />
            </div>
            <div className="mt-3">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                ~{annualSavingsEuro.toLocaleString('es-ES')} €
                <span className="text-sm font-bold text-slate-600 font-sans"> / año</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                Frente a una vivienda de {m2} m² de código técnico estándar (CTE convencional).
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
            Factura mensual de clima: solo ~20-35 €/mes.
          </div>
        </div>

        {/* Metric 2: 30 Years Cumulative in Medgon Green */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1D3300] via-[#2F5300] to-[#427500] text-white flex flex-col justify-between shadow-md border border-[#1D3300]">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E1F7C3] uppercase tracking-wide bg-white/15 px-2.5 py-1 rounded-md">
                Ahorro a 30 Años
              </span>
              <TrendingUp className="w-5 h-5 text-[#E1F7C3]" />
            </div>
            <div className="mt-3">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                ~{savings30Years.toLocaleString('es-ES')} €
              </div>
              <p className="text-xs sm:text-sm text-white/90 mt-2 leading-relaxed">
                Capital acumulado que permanece en tu bolsillo frente a las facturas convencionales.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/20 text-xs sm:text-sm font-semibold text-[#E1F7C3]">
            A 10 años: ~{savings10Years.toLocaleString('es-ES')} € de ahorro acumulado.
          </div>
        </div>

        {/* Metric 3: Carbon Offset */}
        <div className="p-5 rounded-2xl bg-[#F2FBE5] border border-[#C5F092] flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#1D3300] uppercase tracking-wide bg-[#E1F7C3] px-2.5 py-1 rounded-md">
                CO₂ Fijado en Madera
              </span>
              <TreePine className="w-5 h-5 text-[#569900]" />
            </div>
            <div className="mt-3">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                ~{co2SequesteredTons} Toneladas
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                De CO₂ retenidas durante toda la vida útil en la estructura de madera de {m2} m².
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#C5F092] text-xs sm:text-sm text-[#2F5300] font-bold">
            Huella de carbono neta negativa en fabricación.
          </div>
        </div>
      </div>

      {/* Comparison Bars */}
      <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-300 space-y-4">
        <div className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
          Comparativa de Consumo y Demanda Energética Anual ({m2} m²):
        </div>

        {/* Traditional */}
        <div>
          <div className="flex justify-between text-xs sm:text-sm text-slate-700 font-medium mb-1.5">
            <span>Construcción Tradicional CTE (~100 kWh/m²/año)</span>
            <span className="font-mono font-bold text-slate-900">~{standardAnnualKwh.toLocaleString('es-ES')} kWh/año</span>
          </div>
          <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full w-full" />
          </div>
        </div>

        {/* Passivhaus */}
        <div>
          <div className="flex justify-between text-xs sm:text-sm text-slate-900 font-bold mb-1.5">
            <span className="flex items-center gap-1.5 text-[#2F5300]">
              <ShieldCheck className="w-4 h-4 text-[#569900]" />
              Medgón Madera Passivhaus (~30 kWh/m²/año)
            </span>
            <span className="font-mono font-extrabold text-[#2F5300]">~{passivhausAnnualKwh.toLocaleString('es-ES')} kWh/año (-70% a -85%)</span>
          </div>
          <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#569900] rounded-full w-[30%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
