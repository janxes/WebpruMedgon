import React from 'react';
import { ChevronRight } from 'lucide-react';

export type ProductViewKey = 
  | 'productos'
  | 'productos-unifamiliares'
  | 'productos-terciario'
  | 'productos-plurifamiliares'
  | 'productos-derecho-vuelo'
  | 'productos-fachadas'
  | 'productos-cubiertas';

interface ProductosSubmenuProps {
  currentProduct: ProductViewKey;
  onNavigate: (view: string, modelId?: string) => void;
}

export const PRODUCT_SUBMENU_ITEMS: { key: ProductViewKey; label: string; shortLabel: string; badge?: string }[] = [
  { key: 'productos', label: 'Todos los productos', shortLabel: 'Hub General' },
  { key: 'productos-unifamiliares', label: 'Viviendas unifamiliares', shortLabel: 'Unifamiliares' },
  { key: 'productos-terciario', label: 'Edificios terciarios', shortLabel: 'Terciario' },
  { key: 'productos-plurifamiliares', label: 'Edificios plurifamiliares', shortLabel: 'Plurifamiliares' },
  { key: 'productos-derecho-vuelo', label: 'Derecho de vuelo', shortLabel: 'Derecho de vuelo', badge: 'Altior' },
  { key: 'productos-fachadas', label: 'Fachadas industrializadas', shortLabel: 'Fachadas' },
  { key: 'productos-cubiertas', label: 'Cubiertas de madera', shortLabel: 'Cubiertas', badge: 'Leica 3D' },
];

export const ProductosSubmenu: React.FC<ProductosSubmenuProps> = ({ currentProduct, onNavigate }) => {
  const currentItem = PRODUCT_SUBMENU_ITEMS.find(item => item.key === currentProduct) || PRODUCT_SUBMENU_ITEMS[0];

  return (
    <nav aria-label="Submenú Productos Medgón" className="border-b border-[#16181B]/10 pb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('productos')}
            className="text-xs font-bold uppercase tracking-widest text-[#8E95A2] hover:text-[#16181B] transition-colors cursor-pointer"
          >
            Productos Medgón
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
          {PRODUCT_SUBMENU_ITEMS.map((item) => {
            const isActive = currentProduct === item.key;
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
