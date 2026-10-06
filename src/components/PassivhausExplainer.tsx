import React from 'react';
import { TECHNICAL_CONCEPTS } from '../data/medgonData';
import { Boxes, Wind, Flame, AppWindow, Layers, CheckCircle2, Shield, Sparkles } from 'lucide-react';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Boxes: <Boxes className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  AppWindow: <AppWindow className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
};

export const PassivhausExplainer: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="pb-5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold uppercase text-[#2F5300] tracking-wider bg-[#E1F7C3] px-2.5 py-0.5 rounded-md">
            Guía Técnica Clara y Accesible
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          La Tecnología Passivhaus Explicada sin Tecnicismos
        </h2>
        <p className="text-sm sm:text-base text-slate-700 mt-1.5 leading-relaxed max-w-4xl">
          Pilares fundamentales que hacen de una vivienda Medgón un hogar ultra eficiente, saludable, silencioso y con una temperatura homogénea todo el año.
        </p>
      </div>

      {/* Concept Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {TECHNICAL_CONCEPTS.map((concept) => (
          <div
            key={concept.id}
            className="flex flex-col justify-between p-5 rounded-2xl bg-slate-50 border border-slate-300/80 hover:border-[#569900] transition-all shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#569900] text-white flex items-center justify-center font-bold shadow-xs">
                  {ICONS_MAP[concept.icon] || <Shield className="w-6 h-6" />}
                </div>
                <span className="text-xs font-bold text-slate-700 px-2.5 py-1 bg-slate-200 rounded-lg uppercase tracking-wide">
                  Passivhaus
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3.5">
                {concept.title}
              </h3>

              {/* Analogy Badge */}
              <div className="mt-3 p-3 bg-[#F2FBE5] text-slate-900 text-xs sm:text-sm font-medium rounded-xl border border-[#C5F092] flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#569900] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Analogía: <strong>"{concept.analogy}"</strong></span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {concept.technicalDetails}
              </p>
            </div>

            {/* Benefits list */}
            <div className="mt-4 pt-3.5 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Beneficios Directos:
              </div>
              <ul className="space-y-1.5">
                {concept.benefits.map((b, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#569900] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
