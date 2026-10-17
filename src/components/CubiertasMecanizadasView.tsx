import React from 'react';
import { 
  Building2, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Leaf, 
  Award, 
  ChevronRight, 
  ScanLine, 
  Cpu, 
  Layers, 
  Compass,
  FileText
} from 'lucide-react';
import { ProductosSubmenu } from './ProductosSubmenu';

interface ProductViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const CubiertasMecanizadasView: React.FC<ProductViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. Submenú Superior Unificado */}
      <ProductosSubmenu currentProduct="productos-cubiertas" onNavigate={onNavigate} />

      {/* 1. Hero Section */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <ScanLine className="w-3.5 h-3.5" />
            <span>Estructuras de Ultra Precisión · Tecnología Leica Geosystems 3D · Mecanizado CNC</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Cubiertas de madera mecanizadas.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Cálculo, diseño y fabricación de cubiertas de madera técnica para <strong>obra nueva y rehabilitación compleja</strong> con escaneado láser 3D de Leica Geosystems y corte robotizado CNC.
          </p>
        </div>

        {/* Imagen Destacada Principal */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-lg bg-[#FAF8F5]">
          <img
            src="/cubiertas-de-madera-leica.jpg"
            alt="Estructura de cubierta de madera mecanizada por control numérico con tecnología Leica Medgón"
            className="w-full h-[360px] sm:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-[#78E639] mb-1">
              Escáner Tridimensional Leica + Centro de Mecanizado 5 Ejes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl text-balance">
              Ensamblajes de precisión milimétrica sin improvisaciones en obra y cierre hermético en 48 horas
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Métricas Clave */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">± 1 mm</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Precisión Láser</p>
          <p className="text-xs text-[#5A606A]">Nube de millones de puntos 3D que registra cualquier desplome o descuadre de muros antiguos.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">24-48 h</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Cierre Estanco al Agua</p>
          <p className="text-xs text-[#5A606A]">Montaje rápido e impermeabilización inmediata que protege el inmueble de la lluvia durante la obra.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0DA836]">CNC 5 Ejes</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Mecanizado Robotizado</p>
          <p className="text-xs text-[#5A606A]">Colas de milano, cajeados y cortes inclinados realizados en fábrica sin ajustes manuales.</p>
        </div>

        <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#16181B]">Calidez Biofílica</span>
          <p className="text-xs font-bold uppercase tracking-wider text-[#16181B]">Vigas Vistas de Madera</p>
          <p className="text-xs text-[#5A606A]">Madera laminada GL24h/GL28c certificada PEFC/FSC que embellece el espacio interior de por vida.</p>
        </div>
      </section>

      {/* 3. El Escaneo Láser 3D Leica Geosystems */}
      <section className="bg-[#16181B] text-white rounded-3xl p-6 sm:p-12 lg:p-16 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78E639]/15 text-[#78E639] text-xs font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECNOLOGÍA LEICA GEOSYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              ¿Por qué el escaneado 3D marca la diferencia en cubiertas y reformas?
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E0] leading-relaxed">
              En obras de rehabilitación o sustitución de cubiertas antiguas, <strong>los muros perimetrales nunca están a escuadra ni perfectamente nivelados</strong>. Medir con cinta métrica tradicional genera descuadres que obligan a los operarios a serrar y forzar las vigas en el tejado, arriesgando la seguridad y la durabilidad de la estructura.
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              En Medgón acudimos a la obra con el escáner láser de última generación Leica Geosystems. Capturamos una nube de millones de puntos tridimensionales que traslada la geometría real del edificio a nuestro software BIM de modelado. Cada cabrio, durmiente, lima y cumbrera se fabrica con los ángulos exactos para encajar como un mecano perfecto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Cero errores</span>
                <p className="text-sm font-bold text-white">Encaje exacto sin forzar</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Seguridad laboral</span>
                <p className="text-sm font-bold text-white">Montaje rápido sin riesgos</p>
              </div>
              <div className="border-l-2 border-[#78E639] pl-3">
                <span className="text-xs uppercase text-[#8E95A2]">Garantía técnica</span>
                <p className="text-sm font-bold text-white">Cálculo estructural visado</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
              Rehabilitación y Obra Nueva
            </span>
            <h3 className="text-xl font-bold text-white">
              Solución Integral de Cubierta
            </h3>
            <p className="text-xs text-[#CBD5E0] leading-relaxed">
              Suministramos desde la estructura portante de madera laminada vista hasta los paneles sándwich termochip con aislamiento de fibra de madera y lámina transpirable impermeable.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 bg-[#78E639] text-[#16181B] font-bold text-xs rounded-xl hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
            >
              Pedir estudio con escáner Leica &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 4. Proceso de Fabricación y Montaje */}
      <section className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Metodología de Trabajo Medgón
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16181B]">
            De la toma de datos 3D al tejado terminado
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Toma de Datos Láser Leica 3D</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Nuestro técnico especialista escanea el edificio in situ. Obtenemos cotas de apoyo, desplomes de muros y alturas exactas de cumbreras sin necesidad de andamiajes complejos.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Nube de puntos georreferenciada</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Detección de irregularidades ocultas</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Diseño BIM y Mecanizado CNC</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La oficina técnica modela la cubierta en 3D calculando sobrecargas de nieve y viento según CTE. El archivo se transfiere directamente a nuestras máquinas CNC de control numérico.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Cortes milimétricos y colas de milano</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Identificación y etiquetado de cada viga</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#0DA836]/10 text-[#0DA836] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">Montaje y Sellado Hermético</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Las piezas llegan numeradas a la obra junto con los planos de montaje. El ensamblaje se ejecuta con grúa en horas, colocando la impermeabilización de inmediato para evitar goteras.
            </p>
            <ul className="text-xs text-[#5A606A] space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Estanqueidad asegurada en tiempo récord</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836]" />
                <span>Acabado de vigas vistas de gran belleza</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Banner */}
      <section className="bg-gradient-to-r from-[#16181B] to-[#24282F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Cálculo y Fabricación de Cubiertas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Necesitas una cubierta de madera técnica para tu vivienda o reforma?
          </h2>
          <p className="text-sm text-[#CBD5E0]">
            Envíanos los planos de tu tejado o solicita el escaneado láser 3D de tu edificio. Elaboramos presupuesto y despiece técnico sin compromiso.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-[#78E639] text-[#16181B] font-bold text-sm hover:bg-[#68d12e] transition-colors cursor-pointer text-center"
          >
            Pedir estudio de cubierta
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
