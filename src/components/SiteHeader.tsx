import React, { useState } from 'react';
import { CATALOG_MODELS } from '../data/modelsCatalog';
import { Code, ChevronDown, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface SiteHeaderProps {
  currentView: string;
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  currentView,
  onNavigate,
  onOpenExportModal,
}) => {
  const [isCatalogDropdownOpen, setIsCatalogDropdownOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const modelsList = Object.values(CATALOG_MODELS);

  const handleModelClick = (modelId: string) => {
    setIsCatalogDropdownOpen(false);
    setIsMobileDrawerOpen(false);
    onNavigate('model-detail', modelId);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#16181B]/10 transition-shadow duration-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Brand Logo Image */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center text-left cursor-pointer border-none bg-transparent p-0 group"
            aria-label="Medgón Passivhaus Inicio"
          >
            <img
              src="/logo-medgon.png"
              alt="Medgón Passivhaus"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              loading="eager"
            />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Navegación principal">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'home' ? 'text-[#16181B] border-b-2 border-[#16181B]' : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Inicio
            </button>

            {/* Catalog Dropdown with Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setIsCatalogDropdownOpen(true)}
              onMouseLeave={() => setIsCatalogDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  currentView === 'catalog' || currentView === 'model-detail'
                    ? 'text-[#16181B] border-b-2 border-[#16181B]'
                    : 'text-[#5A606A] hover:text-[#16181B]'
                }`}
              >
                <span>Modelos</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCatalogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isCatalogDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#16181B]/10 shadow-xl rounded-md py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-[#16181B]/5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#8E95A2]">
                    <span>Catálogo de Viviendas</span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsCatalogDropdownOpen(false);
                        onNavigate('catalog');
                      }}
                      className="text-[#0DA836] hover:underline cursor-pointer"
                    >
                      Ver todos ({modelsList.length})
                    </button>
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1">
                    {modelsList.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => handleModelClick(m.id)}
                        className="w-full px-4 py-2.5 flex items-center justify-between text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group"
                      >
                        <div>
                          <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                            {m.name}
                          </span>
                          <span className="ml-2 text-xs text-[#5A606A] tabular-nums">
                            {m.m2Construidos} m²
                          </span>
                        </div>
                        <span className="text-xs text-[#8E95A2] tabular-nums">
                          {m.bedrooms} dorm · {m.bathrooms} bñ
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => onNavigate('how-it-works')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'how-it-works' ? 'text-[#16181B] border-b-2 border-[#16181B]' : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Cómo funciona
            </button>

            <button
              type="button"
              onClick={() => onNavigate('siem')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'siem' ? 'text-[#16181B] border-b-2 border-[#16181B]' : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Contratos
            </button>

            <button
              type="button"
              onClick={() => onNavigate('passivhaus-tech')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'passivhaus-tech' ? 'text-[#16181B] border-b-2 border-[#16181B]' : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Passivhaus
            </button>

            <button
              type="button"
              onClick={() => onNavigate('blog')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'blog' ? 'text-[#16181B] border-b-2 border-[#16181B]' : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Blog
            </button>

            <button
              type="button"
              onClick={() => onNavigate('sobre-medgon')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'sobre-medgon' ? 'text-[#16181B] border-b-2 border-[#16181B]' : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Sobre Medgón
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'contact' ? 'text-[#16181B] border-b-2 border-[#16181B]' : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* Zone 3: Primary Action - Hablemos de tu proyecto */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowUpRight className="w-4 h-4 hidden sm:inline" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="xl:hidden p-2 text-[#16181B] hover:bg-[#FAF8F5] rounded transition-colors cursor-pointer"
              aria-label="Abrir menú móvil"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Accessible off-canvas menu) */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#16181B]/10 mb-6">
                <div className="flex items-center">
                  <img
                    src="/logo-medgon.png"
                    alt="Medgón Passivhaus"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1 text-[#5A606A] hover:text-[#16181B] cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onNavigate('home');
                  }}
                  className="block w-full text-left font-bold text-base text-[#16181B] py-1"
                >
                  Inicio
                </button>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('catalog');
                    }}
                    className="block w-full text-left font-bold text-base text-[#16181B] py-1"
                  >
                    Modelos
                  </button>
                  <div className="pl-3 mt-2 border-l-2 border-[#E4C59E] space-y-2">
                    {modelsList.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => handleModelClick(m.id)}
                        className="block w-full text-left text-sm text-[#5A606A] hover:text-[#0DA836] py-0.5"
                      >
                        {m.name} · {m.m2Construidos} m² ({m.bedrooms} dorm)
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onNavigate('how-it-works');
                  }}
                  className={`block w-full text-left font-bold text-base py-1 ${
                    currentView === 'how-it-works' ? 'text-[#0DA836]' : 'text-[#16181B]'
                  }`}
                >
                  Cómo funciona
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onNavigate('siem');
                  }}
                  className="block w-full text-left font-bold text-base text-[#16181B] py-1"
                >
                  Contratos
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onNavigate('passivhaus-tech');
                  }}
                  className="block w-full text-left font-bold text-base text-[#16181B] py-1"
                >
                  Passivhaus
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onNavigate('blog');
                  }}
                  className="block w-full text-left font-bold text-base text-[#16181B] py-1"
                >
                  Blog
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onNavigate('sobre-medgon');
                  }}
                  className={`block w-full text-left font-bold text-base py-1 ${
                    currentView === 'sobre-medgon' ? 'text-[#0DA836]' : 'text-[#16181B]'
                  }`}
                >
                  Sobre Medgón
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    onNavigate('contact');
                  }}
                  className="block w-full text-left font-bold text-base text-[#F35843] py-1"
                >
                  Contacto
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#16181B]/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  onNavigate('contact');
                }}
                className="w-full py-2.5 text-xs font-bold text-white bg-[#16181B] rounded text-center block"
              >
                Hablemos de tu proyecto
              </button>
              <div className="text-[11px] text-[#8E95A2] text-center">
                Carrión de los Condes (Palencia) · Tel: 979 88 10 10
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
