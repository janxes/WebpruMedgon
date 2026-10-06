import React, { useState } from 'react';
import { Home, Sparkles, ShieldCheck, TreePine, Calculator, MessageSquareText, Layers, Menu, X, ChevronRight, Building2 } from 'lucide-react';
import { MedgonLogo } from './MedgonLogo';

interface NavbarProps {
  activeTab: 'about' | 'calculator' | 'scope' | 'passivhaus' | 'advisor';
  setActiveTab: (tab: 'about' | 'calculator' | 'scope' | 'passivhaus' | 'advisor') => void;
  onOpenAdvisor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenAdvisor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: 'about' | 'calculator' | 'scope' | 'passivhaus' | 'advisor') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab === 'advisor') {
      onOpenAdvisor();
    }
  };

  const navItems = [
    {
      id: 'calculator',
      label: 'Calculadora',
      desc: 'Configuración paramétrica y presupuesto',
      icon: Calculator,
      tab: 'calculator' as const,
    },
    {
      id: 'scope',
      label: 'Partidas y Alcance',
      desc: 'Desglose detallado de partidas Medgón',
      icon: Layers,
      tab: 'scope' as const,
    },
    {
      id: 'passivhaus',
      label: 'Tecnología Passivhaus',
      desc: 'Estándar, confort y hermeticidad',
      icon: ShieldCheck,
      tab: 'passivhaus' as const,
    },
    {
      id: 'about',
      label: 'Sobre Medgón',
      desc: '20 años, normativa 2030 y 12 ventajas del sistema',
      icon: Building2,
      tab: 'about' as const,
    },
    {
      id: 'advisor',
      label: 'Asesor Técnico IA',
      desc: 'Consultas sobre costes, plazos y normativa',
      icon: Sparkles,
      tab: 'advisor' as const,
      isSpecial: true,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 text-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-6">
          {/* Logo and Navigation Tabs */}
          <div className="flex items-center gap-6">
            {/* Brand Identity with Official Medgon Passivhaus Logo */}
            <div
              id="brand-header-logo"
              className="flex items-center cursor-pointer py-1.5 group shrink-0"
              onClick={() => handleTabClick('calculator')}
              title="Medgón Passivhaus - Calculadora y Asesoría Técnica"
            >
              <MedgonLogo className="h-10 sm:h-12 w-auto max-w-[180px] sm:max-w-[240px] transition-transform group-hover:scale-[1.02]" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
              {navItems.filter(item => item.id !== 'advisor').map((item) => {
                const isActive = activeTab === item.tab;
                return (
                  <button
                    key={item.id}
                    id={`nav-tab-${item.id}`}
                    onClick={() => handleTabClick(item.tab)}
                    className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium tracking-normal transition-all ${
                      isActive
                        ? 'bg-[#569900] text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick CTA, ID Badge & Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden lg:flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-600">
              <span className="font-bold text-slate-800 mr-1">ID:</span> PR-2026-MED
            </div>
            
            <button
              id="btn-quick-ask-advisor"
              onClick={() => handleTabClick('advisor')}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 bg-[#569900] hover:bg-[#427500] text-white text-xs font-semibold tracking-normal rounded-md shadow-xs transition-all active:scale-95"
            >
              <MessageSquareText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Consultar Asesor</span>
              <span className="sm:hidden">Asesor</span>
            </button>

            {/* Hamburger Button for Mobile / Small Screens */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 transition-colors focus:outline-hidden active:scale-95"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-150"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <div className="text-[11px] font-bold tracking-wider uppercase text-slate-600 px-3 pb-1">
              Apartados y Secciones
            </div>
            
            <div className="grid grid-cols-1 gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.tab;
                return (
                  <button
                    key={`mobile-${item.id}`}
                    id={`mobile-nav-tab-${item.id}`}
                    onClick={() => handleTabClick(item.tab)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                      isActive
                        ? item.isSpecial
                          ? 'bg-amber-700 text-white font-bold shadow-xs'
                          : 'bg-[#569900] text-white font-bold shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : item.isSpecial
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-200 text-[#2F5300]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className={`text-sm ${isActive ? 'text-white' : 'font-semibold text-slate-900'}`}>
                          {item.label}
                        </div>
                        <div className={`text-xs ${isActive ? 'text-white/80' : 'text-slate-600'}`}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
