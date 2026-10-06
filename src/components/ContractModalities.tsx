import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Hammer, 
  Cpu, 
  KeyRound, 
  ShieldCheck, 
  Info, 
  Users, 
  Building2,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

interface ContractModalitiesProps {
  compact?: boolean;
}

export const ContractModalities: React.FC<ContractModalitiesProps> = ({ compact = false }) => {
  const [selectedZone, setSelectedZone] = useState<'all' | 'in_radius' | 'out_radius'>('all');

  const modalities = [
    {
      id: 'suministro',
      title: 'Suministro de Estructuras Medgón',
      badge: 'Base Estructural',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      icon: Building2,
      subtitle: 'La base de una vivienda pasiva de alto rendimiento. Para constructores o montadores externos homologados.',
      bullets: [
        'Fabricación mecanizada en taller (Palencia).',
        'Estructura técnica de madera y entramado ligero.',
        'Suministro directo para montaje por terceros.',
        'Control milimétrico sin desviaciones en seco.',
      ],
      availabilityInRadius: true,
      availabilityOutRadius: true,
      outRadiusNote: 'Con acompañamiento de uno de nuestros técnicos para asistir en montaje y consultas.',
      highlight: false,
    },
    {
      id: 'suministro_montaje',
      title: 'Suministro + Montaje',
      altTitle: 'Envolvente Estanca • Montaje de Estructura',
      badge: 'Envolvente Estanca',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      icon: Hammer,
      subtitle: 'Estructura fabricada y ensamblada en parcela por nuestros equipos técnicos oficiales.',
      bullets: [
        'Fabricación y transporte especializado.',
        'Montaje de envolvente hermética en días.',
        'Carpinterías exteriores de alta gama colocadas.',
        'Sin instalaciones, sin fachada exterior ni cubierta.',
      ],
      availabilityInRadius: true,
      availabilityOutRadius: false,
      outRadiusNote: 'Solo disponible en Palencia y provincias limítrofes.',
      highlight: false,
    },
    {
      id: 'suministro_montaje_instalaciones',
      title: 'Suministro + Montaje + Instalaciones',
      badge: 'Envolvente Completa',
      badgeColor: 'bg-[#E1F7C3] text-[#1D3300] border-[#C5F092]',
      icon: Cpu,
      subtitle: 'La envolvente completa con las partidas críticas resueltas para evitar conflictos entre gremios.',
      bullets: [
        'Estructura industrializada y montaje completo.',
        'Preinstalaciones integradas en cámaras técnicas.',
        'Cubierta aislada y estanca terminada.',
        'Fachada arquitectónica industrializada incluida.',
      ],
      availabilityInRadius: true,
      availabilityOutRadius: false,
      outRadiusNote: 'Solo disponible en Palencia y provincias limítrofes.',
      highlight: true,
    },
    {
      id: 'llave_en_mano',
      title: 'Llave en Mano',
      altTitle: 'Gestión Integral',
      badge: 'Gestión Integral',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      icon: KeyRound,
      subtitle: 'Servicio total de principio a fin para autopromotores en Palencia y provincias limítrofes.',
      bullets: [
        'Todo incluido: desde cimentación hasta llaves.',
        'Ámbito operativo: Palencia y provincias limítrofes (Burgos, Cantabria, León y Valladolid).',
        'Un único interlocutor técnico y contractual.',
      ],
      availabilityInRadius: true,
      availabilityOutRadius: false,
      outRadiusNote: 'Exclusivo para autopromotores en Palencia y provincias limítrofes.',
      highlight: false,
    },
  ];

  return (
    <div id="section-modalidades-contrato" className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm scroll-mt-6">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#F2FBE5] text-[#2F5300] border border-[#C5F092] text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Modalidades de Contratación & Alcance Geográfico</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            Tipos de Contrato según la Ubicación de la Vivienda
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
            Elige la fórmula contractual que mejor encaje con tu proyecto según la distancia a nuestros centros operativos.
          </p>
        </div>

        {/* Geographic Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-300 self-start lg:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setSelectedZone('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedZone === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Todas (4)
          </button>
          <button
            type="button"
            onClick={() => setSelectedZone('in_radius')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              selectedZone === 'in_radius'
                ? 'bg-[#2F5300] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5F092]" />
            <span>Palencia y limítrofes</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedZone('out_radius')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              selectedZone === 'out_radius'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <span>Resto de zonas</span>
          </button>
        </div>
      </div>

      {/* Official Clarification Banners (User exact text) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {/* Dentro del radio de acción */}
        <div className={`p-4 sm:p-4.5 rounded-xl border transition-all ${
          selectedZone === 'out_radius'
            ? 'bg-slate-50 border-slate-200 opacity-60'
            : 'bg-[#F2FBE5] border-[#C5F092] ring-1 ring-[#569900]/20'
        }`}>
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#569900] text-white flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase text-[#2F5300] tracking-wider block">
                Radio de Acción Operativo
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                Palencia y Provincias Limítrofes
              </h4>
              <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                Dentro de <strong>Palencia y provincias limítrofes (Burgos, Cantabria, León y Valladolid)</strong>: estamos abiertos a todas las posibilidades y podemos abordar cualquiera de las <strong>4 modalidades</strong> que ofrecemos (Suministro, Suministro + Montaje, Suministro + Montaje + Instalaciones o Llave en Mano).
              </p>
            </div>
          </div>
        </div>

        {/* Para el resto de localizaciones */}
        <div className={`p-4 sm:p-4.5 rounded-xl border transition-all ${
          selectedZone === 'in_radius'
            ? 'bg-slate-50 border-slate-200 opacity-60'
            : 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-500/20'
        }`}>
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-700 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase text-amber-900 tracking-wider block">
                Fuera de Provincias Limítrofes
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                Resto de España & Localizaciones Lejanas
              </h4>
              <p className="text-xs text-slate-800 mt-1.5 leading-relaxed">
                Para el resto de localizaciones (más allá de provincias limítrofes a Palencia): de momento se ofrece la opción básica de <strong>Suministro de estructuras</strong>, acompañada por uno de <strong>nuestros técnicos para asistir y asesorar en el montaje y resolver consultas técnicas</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of the 4 Contract Modalities */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {modalities.map((item, index) => {
          const isAvailableForZone = selectedZone === 'all' || 
            (selectedZone === 'in_radius' && item.availabilityInRadius) ||
            (selectedZone === 'out_radius' && item.availabilityOutRadius);

          const isFaded = !isAvailableForZone;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`flex flex-col justify-between rounded-xl border p-4.5 transition-all ${
                isFaded 
                  ? 'opacity-40 bg-slate-50 border-slate-200 grayscale-30' 
                  : item.highlight
                    ? 'bg-white border-[#569900] ring-2 ring-[#569900]/30 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div>
                {/* Header card */}
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-2.5">
                  <span className="text-[11px] font-mono font-bold text-slate-500">
                    Modalidad 0{index + 1}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  {item.altTitle && (
                    <span className="text-[11px] font-semibold text-slate-600 block mt-0.5">
                      {item.altTitle}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-700 mt-2 pb-3 border-b border-slate-100 leading-relaxed italic">
                  &ldquo;{item.subtitle}&rdquo;
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mt-3 text-xs text-slate-700">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#569900] shrink-0 mt-0.5" />
                      <span className="leading-tight">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Geographic Availability Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] font-bold">
                  {item.availabilityOutRadius ? (
                    <span className="text-[#2F5300] bg-[#F2FBE5] border border-[#C5F092] px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#569900]" />
                      <span>Todas las localizaciones</span>
                    </span>
                  ) : (
                    <span className="text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>Palencia y provincias limítrofes</span>
                    </span>
                  )}
                </div>
                {item.availabilityOutRadius && (
                  <p className="text-[10px] text-slate-600 mt-1 leading-snug">
                    {item.outRadiusNote}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info Callout */}
      <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#569900] shrink-0" />
          <span>
            <strong>¿Dudas sobre tu localidad?</strong> Consúltale directamente a nuestro Asesor Técnico para comprobar el radio exacto a tu parcela.
          </span>
        </div>
        <a
          href="#section-partidas-modelo"
          className="inline-flex items-center gap-1 font-bold text-[#2F5300] hover:text-[#569900] hover:underline shrink-0"
        >
          <span>Ver desglose de partidas por modelo</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
