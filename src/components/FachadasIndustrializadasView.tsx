import React from 'react';
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Leaf, 
  Award, 
  ChevronRight, 
  Zap, 
  ThermometerSnowflake, 
  Eye, 
  Boxes,
  FileText
} from 'lucide-react';
import { ProductosSubmenu } from './ProductosSubmenu';

interface ProductViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const FachadasIndustrializadasView: React.FC<ProductViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <ProductosSubmenu currentProduct="productos-fachadas" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Envolventes Térmicas Continuas · Construcción Híbrida · Passivhaus</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Fachadas industrializadas.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Realizamos <strong>fachadas industrializadas en madera técnica</strong> que se integran a la perfección en la construcción híbrida, combinando materiales prefabricados de ultra precisión con técnicas tradicionales.
          </p>
        </div>

        {/* Imagen Destacada Principal */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/fachadas-industrializadas-madera.png"
            alt="Fachada industrializada en madera técnica montada en obra híbrida Medgón"
            className="w-full h-[360px] sm:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Envolventes de Altas Prestaciones Térmicas y Acústicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Cero puentes térmicos, carpinterías herméticas de fábrica y compatibilidad con cualquier acabado exterior
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Métricas Clave */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">U &lt; 0.15</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Transmitancia Térmica</p>
          <p className="text-xs text-[#5A606A]">Aislamiento masivo con fibra de madera insuflada que elimina pérdidas de calor.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">0 Puentes</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Continuidad Térmica</p>
          <p className="text-xs text-[#5A606A]">Encuentros con forjados, pilares y premarcos de carpintería 100% aislados en taller.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">100% Hermética</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Láminas y Cintas Selladas</p>
          <p className="text-xs text-[#5A606A]">Barreras de vapor inteligentes ensayadas bajo presión positiva y negativa Blower Door.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">Cualquier Revestimiento</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Flexibilidad Estética</p>
          <p className="text-xs text-[#5A606A]">Compatible con morteros SATE, fachada ventilada cerámica, chapa grecada o madera vista.</p>
        </div>
      </section>

      {/* 3. La Envolvente Híbrida: La Respuesta para Grandes Proyectos */}
      <section className="bg-[#16181B] text-white rounded-3xl p-6 sm:p-12 lg:p-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78E639]/15 text-[#78E639] text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SISTEMA DE CERRAMIENTO HÍBRIDO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Estructura pesada tradicional + Envolvente ligera industrializada
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E0] leading-relaxed">
              En edificios terciarios o residenciales en altura con estructura portante de pilares de hormigón o pórticos de acero, las fachadas industrializadas Medgón sustituyen al ladrillo tradicional de doble hoja.
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Nuestros módulos de fachada se anclan con precisión milimétrica al frente del forjado, cubriendo el canto de la losa para evitar el puente térmico más habitual de la edificación española. Los huecos de ventana llegan con las carpinterías ya selladas y las persianas motorizadas herméticas, acelerando la puesta en servicio del edificio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Cierre de fachada</span>
                <p className="text-sm font-bold text-white">1 planta cada 2 días</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Ahorro de espacio</span>
                <p className="text-sm font-bold text-white">Gana metros útiles interiores</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Seguridad en obra</span>
                <p className="text-sm font-bold text-white">Montaje protegido sin andamios</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
              Rehabilitación Energética
            </span>
            <h3 className="text-xl font-bold text-white">
              Sustitución o Sobre-envolvente en Edificios Existentes
            </h3>
            <p className="text-xs text-[#CBD5E0] leading-relaxed">
              ¿Quieres transformar la calificación energética de una torre de oficinas o residencial? Nuestras fachadas ligeras permiten renovar totalmente la piel del inmueble sin sobrecargar la estructura existente.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 bg-[#78E639] text-[#16181B] font-bold text-xs rounded-xl hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
            >
              Consultar rehabilitación energética &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 4. Anatomía de la Fachada Industrializada Medgón */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Desglose Constructivo por Capas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            Ingeniería de capas para el estándar Passivhaus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Núcleo Portante de Madera Técnica</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Montantes de madera laminada C24 o Kerto LVL calculados para soportar empujes de viento extraordinarios y cargas de peso del revestimiento exterior elegido.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Madera seca con humedad inferior al 12%</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Estabilidad dimensional absoluta sin alabeos</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Aislamiento Natural Insuflado</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Relleno continuo de cavidades mediante fibra de madera insuflada a alta densidad. Su elevada capacidad calorífica específica (2.100 J/kg·K) garantiza un excelente desfase térmico en verano.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Sin huecos ni descuelgues en el tiempo</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Material transpirable que regula la humedad</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Hermeticidad y Rotura de Puente Térmico</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Membranas inteligentes de estanqueidad al vapor y al viento selladas con cintas de última generación. Los premarcos térmicos reciben las ventanas en fábrica garantizando el test Blower Door.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Protección contra condensaciones intersticiales</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Cero filtraciones parásitas de aire frío</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Ingeniería de Envolventes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Quieres incorporar fachadas industrializadas a tu proyecto?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            Ponte en contacto con nuestro equipo técnico para calcular transmitancias, despieces y costes de suministro y montaje en obra.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Pedir presupuesto de fachadas
          </button>
          <a
            href="tel:+34979100010"
            className="px-6 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-colors cursor-pointer text-center"
          >
            Llamar al 979 10 00 10
          </a>
        </div>
      </section>

    </div>
  );
};
