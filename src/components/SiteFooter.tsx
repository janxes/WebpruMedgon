import React from 'react';
import { CATALOG_MODELS } from '../data/modelsCatalog';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface SiteFooterProps {
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate, onOpenExportModal }) => {
  return (
    <footer className="bg-[#16181B] text-white pt-16 pb-10 border-t border-[#16181B] mt-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Factory Intro */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded px-3 py-1.5 inline-block">
              <img
                src="/logo-medgon.png"
                alt="Medgón Passivhaus"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#A0AEC0] leading-relaxed">
              Viviendas industrializadas en madera técnica con certificación Passivhaus. Fabricación milimétrica en entorno controlado en Carrión de los Condes (Palencia).
            </p>
          </div>

          {/* Column 2: Models List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4C59E] mb-4">
              Modelos
            </h4>
            <ul className="space-y-2 text-sm text-[#CBD5E0]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('model-detail', 'mg-50')}
                  className="hover:text-[#78E639] transition-colors cursor-pointer text-left"
                >
                  MG 50
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('model-detail', 'mg-87')}
                  className="hover:text-[#78E639] transition-colors cursor-pointer text-left"
                >
                  MG 87
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('model-detail', 'mg-105')}
                  className="hover:text-[#78E639] transition-colors cursor-pointer text-left"
                >
                  MG 105 Calzada
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('model-detail', 'mg-128')}
                  className="hover:text-[#78E639] transition-colors cursor-pointer text-left"
                >
                  MG 128 Equilibrio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('model-detail', 'mg-148')}
                  className="hover:text-[#78E639] transition-colors cursor-pointer text-left"
                >
                  MG 148 Villoldo
                </button>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('catalog')}
                  className="text-xs font-semibold text-[#0DA836] hover:text-[#78E639] transition-colors cursor-pointer"
                >
                  Catálogo completo &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Methodology and Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4C59E] mb-4">
              Metodología
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CBD5E0]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('siem')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tipos de Contratos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('passivhaus-tech')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Estándar Passivhaus
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('passivhaus-tech')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ventilación VMC
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dudas frecuentes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog técnico
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sobre-medgon')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre Medgón
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Central & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E4C59E] mb-4">
              Fábrica Central
            </h4>
            <div className="space-y-2.5 text-sm text-[#A0AEC0] leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E4C59E] shrink-0 mt-1" />
                <span>
                  Polígono Industrial<br />
                  34120 Carrión de los Condes (Palencia)
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#78E639] shrink-0" />
                <a href="tel:979881010" className="text-white hover:text-[#78E639] font-semibold">
                  979 88 10 10
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#78E639] shrink-0" />
                <a href="mailto:informacion@medgon.com" className="text-white hover:text-[#78E639]">
                  informacion@medgon.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Export Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
          <div>
            © 2026 Medgón Passivhaus. Todos los derechos reservados.<br />
            <span className="text-[11px] text-[#5A606A]">
              Radio operativo llave en mano: 150 km desde Palencia y asociados en Cataluña.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={() => onNavigate('passivhaus-tech')}
              className="text-[#A0AEC0] hover:text-white transition-colors cursor-pointer"
            >
              Passivhaus
            </button>
            <button
              type="button"
              onClick={() => onNavigate('siem')}
              className="text-[#A0AEC0] hover:text-white transition-colors cursor-pointer"
            >
              Contratos
            </button>
            <button
              type="button"
              onClick={onOpenExportModal}
              className="inline-flex items-center gap-1 text-[11px] text-[#A0AEC0] hover:text-[#78E639] underline decoration-[#718096] hover:decoration-[#78E639] transition-colors cursor-pointer"
              title="Ver información para exportar a WordPress y el paso a paso"
            >
              <span>Exportar a WordPress (Paso a paso)</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
