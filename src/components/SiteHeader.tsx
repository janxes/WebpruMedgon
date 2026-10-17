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
  const [isProductosDropdownOpen, setIsProductosDropdownOpen] = useState(false);
  const [isSobreMedgonDropdownOpen, setIsSobreMedgonDropdownOpen] = useState(false);
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
            className="flex items-center text-left cursor-pointer border-none bg-transparent p-0 group shrink-0"
            aria-label="Medgón Passivhaus Inicio"
          >
            <img
              src="/logo-medgon.png"
              alt="Medgón Passivhaus"
              className="h-8 xs:h-9 sm:h-12 max-w-[140px] sm:max-w-none w-auto object-contain transition-transform group-hover:scale-105 duration-200"
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

            {/* Productos Dropdown with Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductosDropdownOpen(true)}
              onMouseLeave={() => setIsProductosDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => onNavigate('productos')}
                className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  ['productos', 'productos-unifamiliares', 'productos-terciario', 'productos-plurifamiliares', 'productos-derecho-vuelo', 'productos-fachadas', 'productos-cubiertas'].includes(currentView)
                    ? 'text-[#16181B] border-b-2 border-[#16181B]'
                    : 'text-[#5A606A] hover:text-[#16181B]'
                }`}
              >
                <span>Productos</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductosDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Submenu Dropdown */}
              {isProductosDropdownOpen && (
                <div className="absolute top-full left-0 w-84 bg-white border border-[#16181B]/10 shadow-xl rounded-md py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-[#16181B]/5 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#8E95A2]">
                    <span>Productos y Soluciones</span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsProductosDropdownOpen(false);
                        onNavigate('productos');
                      }}
                      className="text-[#0DA836] hover:underline cursor-pointer"
                    >
                      Ver todos &rarr;
                    </button>
                  </div>
                  <div className="py-1">
                    <button
                      type="button"
                      onClick={() => {
                        setIsProductosDropdownOpen(false);
                        onNavigate('productos-unifamiliares');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'productos-unifamiliares' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                        Viviendas unifamiliares y en promoción
                      </span>
                      <span className="text-[11px] text-[#5A606A]">
                        A medida y promociones Passivhaus industrializadas
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsProductosDropdownOpen(false);
                        onNavigate('productos-terciario');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'productos-terciario' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                        Edificios de uso terciario
                      </span>
                      <span className="text-[11px] text-[#5A606A]">
                        Colegios, guarderías, centros sanitarios y oficinas
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsProductosDropdownOpen(false);
                        onNavigate('productos-plurifamiliares');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'productos-plurifamiliares' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                        Edificios plurifamiliares en altura
                      </span>
                      <span className="text-[11px] text-[#5A606A]">
                        Estructura completa de madera y construcción híbrida
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsProductosDropdownOpen(false);
                        onNavigate('productos-derecho-vuelo');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'productos-derecho-vuelo' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          Derecho de vuelo
                        </span>
                        <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.2 rounded">
                          Altior
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Ampliación de más alturas sobre azoteas urbanas
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsProductosDropdownOpen(false);
                        onNavigate('productos-fachadas');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'productos-fachadas' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                        Fachadas industrializadas
                      </span>
                      <span className="text-[11px] text-[#5A606A]">
                        Envolventes herméticas continuas sin puentes térmicos
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsProductosDropdownOpen(false);
                        onNavigate('productos-cubiertas');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'productos-cubiertas' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          Cubiertas de madera
                        </span>
                        <span className="text-[10px] font-bold text-[#8E95A2] bg-[#16181B]/5 px-1.5 py-0.2 rounded">
                          Leica 3D
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Estructuras mecanizadas CNC para obra nueva y reforma
                      </span>
                    </button>

                    <div className="pt-1 mt-1 border-t border-[#16181B]/5 px-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsProductosDropdownOpen(false);
                          onNavigate('catalog');
                        }}
                        className="w-full p-2 text-left text-xs font-bold text-[#0DA836] hover:bg-[#FAF8F5] rounded transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>Casas de catálogo (Modelos cerrados)</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

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

            {/* Proyectos Nav Link */}
            <button
              type="button"
              onClick={() => onNavigate('proyectos')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentView === 'proyectos' || currentView === 'proyecto-detalle'
                  ? 'text-[#16181B] border-b-2 border-[#16181B]'
                  : 'text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Proyectos
            </button>

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

            {/* Sobre Medgón Dropdown with Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setIsSobreMedgonDropdownOpen(true)}
              onMouseLeave={() => setIsSobreMedgonDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => onNavigate('sobre-medgon')}
                className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  ['sobre-medgon', 'nuestro-sistema', 'nuestro-proposito', 'oficina-tecnica', 'habitat-medgon', 'rsc', 'id-innovacion', 'inversion'].includes(currentView)
                    ? 'text-[#16181B] border-b-2 border-[#16181B]'
                    : 'text-[#5A606A] hover:text-[#16181B]'
                }`}
              >
                <span>Sobre Medgón</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSobreMedgonDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Submenu Dropdown */}
              {isSobreMedgonDropdownOpen && (
                <div className="absolute top-full left-0 w-84 bg-white border border-[#16181B]/10 shadow-xl rounded-md py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-[#16181B]/5 text-xs font-bold uppercase tracking-wider text-[#8E95A2]">
                    Sobre Medgón
                  </div>
                  <div className="py-1">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('sobre-medgon');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'sobre-medgon' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                        Quiénes Somos & Trayectoria
                      </span>
                      <span className="text-[11px] text-[#5A606A]">
                        Historia desde 2005, planta en Palencia y equipo
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('nuestro-sistema');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'nuestro-sistema' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          Nuestro Sistema
                        </span>
                        <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.2 rounded">
                          Marcado CE
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Entramado ligero & Forjados Kerto Ripa
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('nuestro-proposito');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'nuestro-proposito' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                        Nuestro Propósito
                      </span>
                      <span className="text-[11px] text-[#5A606A]">
                        Misión, visión, valores y sostenibilidad
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('oficina-tecnica');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'oficina-tecnica' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          Oficina Técnica
                        </span>
                        <span className="text-[10px] font-bold text-[#8E95A2] bg-[#16181B]/5 px-1.5 py-0.2 rounded">
                          BIM & PHPP
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Cadwork 3D, Dlubal y soporte a proyectistas
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('habitat-medgon');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'habitat-medgon' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          Hábitat Medgón
                        </span>
                        <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.2 rounded">
                          Bioconfort
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Salud biológica, aire limpio VMC y domótica
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('rsc');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'rsc' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          RSC & ODS
                        </span>
                        <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.2 rounded">
                          ISO 14064
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Plan de Igualdad, Huella de Carbono MITECO y ODS
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('id-innovacion');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'id-innovacion' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          I+D+i Innovación
                        </span>
                        <span className="text-[10px] font-bold text-[#8E95A2] bg-[#16181B]/5 px-1.5 py-0.2 rounded">
                          FEDER / ICE
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Proyectos IGES, SOCAI con IA y robótica CNC
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSobreMedgonDropdownOpen(false);
                        onNavigate('inversion');
                      }}
                      className={`w-full px-4 py-2 flex flex-col text-left text-sm hover:bg-[#FAF8F5] transition-colors cursor-pointer group ${
                        currentView === 'inversion' ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors">
                          Inversión Industrial
                        </span>
                        <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.2 rounded">
                          Reindus
                        </span>
                      </div>
                      <span className="text-[11px] text-[#5A606A]">
                        Planta en Carrión de los Condes y Fondos FEDER
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>

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

          {/* Zone 3: Primary Action - Hablemos de tu proyecto (compacto en móvil) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1 px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-sm font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors cursor-pointer shadow-xs active:scale-95 whitespace-nowrap shrink-0"
            >
              <span className="hidden sm:inline">Hablemos de tu proyecto</span>
              <span className="sm:hidden">Hablemos</span>
              <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="xl:hidden p-1.5 sm:p-2 text-[#16181B] hover:bg-[#FAF8F5] rounded transition-colors cursor-pointer shrink-0"
              aria-label="Abrir menú móvil"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
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

                {/* Submenú Móvil Productos */}
                <div className="py-2 border-y border-[#16181B]/5 my-1 space-y-1 bg-[#FAF8F5]/60 rounded-lg p-2.5">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#8E95A2] mb-1">
                    <span>Productos Medgón</span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsMobileDrawerOpen(false);
                        onNavigate('productos');
                      }}
                      className="text-[#0DA836] font-bold"
                    >
                      Ver todos &rarr;
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('productos-unifamiliares');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors ${
                      currentView === 'productos-unifamiliares' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    Viviendas unifamiliares
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('productos-terciario');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors ${
                      currentView === 'productos-terciario' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    Edificios de uso terciario
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('productos-plurifamiliares');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors ${
                      currentView === 'productos-plurifamiliares' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    Edificios plurifamiliares en altura
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('productos-derecho-vuelo');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors flex items-center justify-between ${
                      currentView === 'productos-derecho-vuelo' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    <span>Derecho de vuelo</span>
                    <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.5 rounded">
                      Altior
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('productos-fachadas');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors ${
                      currentView === 'productos-fachadas' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    Fachadas industrializadas
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('productos-cubiertas');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors flex items-center justify-between ${
                      currentView === 'productos-cubiertas' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    <span>Cubiertas de madera</span>
                    <span className="text-[10px] font-bold text-[#8E95A2] bg-[#16181B]/5 px-1.5 py-0.5 rounded">
                      Leica 3D
                    </span>
                  </button>
                </div>

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
                    onNavigate('proyectos');
                  }}
                  className={`block w-full text-left font-bold text-base py-1 ${
                    currentView === 'proyectos' || currentView === 'proyecto-detalle' ? 'text-[#0DA836]' : 'text-[#16181B]'
                  }`}
                >
                  Proyectos
                </button>

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

                {/* Submenú Móvil Sobre Medgón */}
                <div className="py-2 border-y border-[#16181B]/5 my-1 space-y-1 bg-[#FAF8F5]/60 rounded-lg p-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8E95A2] mb-1">
                    Sobre Medgón
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('sobre-medgon');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors ${
                      currentView === 'sobre-medgon' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    Quiénes Somos & Trayectoria
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('nuestro-sistema');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors flex items-center justify-between ${
                      currentView === 'nuestro-sistema' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    <span>Nuestro Sistema</span>
                    <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.5 rounded">
                      Kerto CE
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('nuestro-proposito');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors ${
                      currentView === 'nuestro-proposito' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    Nuestro Propósito
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('oficina-tecnica');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors flex items-center justify-between ${
                      currentView === 'oficina-tecnica' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    <span>Oficina Técnica</span>
                    <span className="text-[10px] font-bold text-[#8E95A2] bg-[#16181B]/5 px-1.5 py-0.5 rounded">
                      BIM & PHPP
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onNavigate('habitat-medgon');
                    }}
                    className={`block w-full text-left font-bold text-sm py-1.5 px-2 rounded transition-colors flex items-center justify-between ${
                      currentView === 'habitat-medgon' ? 'bg-white text-[#0DA836] shadow-2xs' : 'text-[#16181B] hover:bg-white'
                    }`}
                  >
                    <span>Hábitat Medgón</span>
                    <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-1.5 py-0.5 rounded">
                      I+D+i
                    </span>
                  </button>
                </div>

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
