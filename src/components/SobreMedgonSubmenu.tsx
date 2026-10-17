import React from 'react';
import { ChevronRight } from 'lucide-react';

export type SobreMedgonViewKey = 
  | 'sobre-medgon'
  | 'nuestro-sistema'
  | 'nuestro-proposito'
  | 'oficina-tecnica'
  | 'habitat-medgon'
  | 'rsc'
  | 'id-innovacion'
  | 'inversion';

interface SobreMedgonSubmenuProps {
  currentView: SobreMedgonViewKey;
  onNavigate: (view: string, modelId?: string) => void;
}

export const SOBRE_MEDGON_SUBMENU_ITEMS: { 
  key: SobreMedgonViewKey; 
  label: string; 
  shortLabel: string; 
  badge?: string; 
}[] = [
  { key: 'sobre-medgon', label: 'Quiénes Somos & Trayectoria', shortLabel: 'Quiénes Somos' },
  { key: 'nuestro-sistema', label: 'Nuestro Sistema Constructivo', shortLabel: 'Nuestro Sistema', badge: 'Kerto Ripa' },
  { key: 'nuestro-proposito', label: 'Nuestro Propósito y Valores', shortLabel: 'Nuestro Propósito' },
  { key: 'oficina-tecnica', label: 'Oficina Técnica e Ingeniería BIM', shortLabel: 'Oficina Técnica', badge: 'BIM' },
  { key: 'habitat-medgon', label: 'Hábitat Medgón (Bioconfort y Salud)', shortLabel: 'Hábitat Medgón' },
  { key: 'rsc', label: 'RSC y Objetivos de Desarrollo Sostenible', shortLabel: 'RSC & ODS', badge: 'ISO 14064' },
  { key: 'id-innovacion', label: 'I+D+i y Tecnología de Vanguardia', shortLabel: 'I+D+i', badge: 'FEDER' },
  { key: 'inversion', label: 'Inversión Industrial y Competitividad', shortLabel: 'Inversión', badge: 'Reindus' },
];

export const SobreMedgonSubmenu: React.FC<SobreMedgonSubmenuProps> = ({ currentView, onNavigate }) => {
  const currentItem = SOBRE_MEDGON_SUBMENU_ITEMS.find(item => item.key === currentView) || SOBRE_MEDGON_SUBMENU_ITEMS[0];

  return (
    <nav aria-label="Submenú Sobre Medgón" className="border-b border-[#16181B]/10 pb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('sobre-medgon')}
            className="text-xs font-bold uppercase tracking-widest text-[#8E95A2] hover:text-[#16181B] transition-colors cursor-pointer"
          >
            Sobre Medgón
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#8E95A2]" />
          <span className="text-xs font-bold text-[#16181B]">
            {currentItem.label}
          </span>
          {currentItem.badge && (
            <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.5 rounded ml-1">
              {currentItem.badge}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-[#FAF8F5] p-1.5 rounded-xl border border-[#16181B]/10 text-xs">
          {SOBRE_MEDGON_SUBMENU_ITEMS.map((item) => {
            const isActive = currentView === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onNavigate(item.key)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'font-bold text-[#16181B] bg-white shadow-2xs'
                    : 'font-semibold text-[#5A606A] hover:text-[#16181B] hover:bg-black/5'
                }`}
              >
                <span>{item.shortLabel}</span>
                {item.badge && (
                  <span className={`text-[9px] font-bold px-1 py-0.2 rounded ${
                    isActive ? 'bg-[#0DA836]/15 text-[#0DA836]' : 'bg-black/5 text-[#8E95A2]'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
