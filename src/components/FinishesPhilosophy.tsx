import React from 'react';
import { PiggyBank, Sparkles, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FinishesPhilosophy: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
      <div className="max-w-5xl">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold uppercase text-[#2F5300] tracking-wider bg-[#E1F7C3] px-2.5 py-0.5 rounded-md">
            Filosofía y Transparencia
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          ¿Por qué Medgón no ejecuta los acabados superficiales?
        </h2>

        <p className="text-sm sm:text-base text-slate-700 mt-2 leading-relaxed">
          No incluir suelos, alicatados ni pintura en el paquete industrializado es una <strong>decisión estratégica y económica orientada al beneficio directo de tu bolsillo</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {/* Reason 1: Cost Savings / No Markup */}
          <div className="p-5 rounded-2xl bg-[#F2FBE5] border border-[#C5F092] flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#569900] text-white flex items-center justify-center font-bold shadow-xs">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3.5">
                1. Ahorro de Intermediación (20% – 30%)
              </h3>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Una constructora general aplica un recargo del 20% al 30% sobre cada azulejo, puerta o bote de pintura. Al contratar directamente a gremios locales, <strong>pagas el precio real de mercado</strong> sin sobrecostes opacos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#C5F092] text-xs sm:text-sm font-bold text-[#2F5300] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#569900]" />
              Máxima eficiencia de presupuesto
            </div>
          </div>

          {/* Reason 2: Freedom of Design */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-amber-950 mt-3.5">
                2. Libertad Total de Diseño
              </h3>
              <p className="text-sm text-amber-950 leading-relaxed mt-2">
                Sin ataduras a un catálogo cerrado ni sobreprecios por cambios de diseño. Puedes elegir cualquier pavimento cerámico, parquet de madera natural o microcemento comprándolo donde decidas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200 text-xs sm:text-sm font-bold text-amber-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              100% personalización a tu medida
            </div>
          </div>

          {/* Reason 3: Local Economy */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-300 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3.5">
                3. Gremios Locales de Confianza
              </h3>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Fomenta la economía local y asegura cercanía inmediata ante cualquier retoque o mantenimiento futuro. Los instaladores de tu zona te ofrecen agilidad y trato directo.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Soporte post-obra directo y ágil
            </div>
          </div>
        </div>

        {/* Technical Guarantee Quote */}
        <div className="mt-5 p-4 rounded-xl bg-slate-100 border border-slate-300 text-xs sm:text-sm text-slate-800 flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-[#569900] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Garantía y Entrega Medgón:</strong> Entregamos el corazón técnico terminado al 100%: tabiquería de yeso laminado lista para pintar, tomas de fontanería y electricidad colocadas en su punto exacto y suelo radiante nivelado para recibir directamente el pavimento.
          </div>
        </div>
      </div>
    </div>
  );
};
