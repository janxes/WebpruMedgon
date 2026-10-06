import React from 'react';
import { 
  Building2, 
  TreePine, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock, 
  Factory, 
  Compass, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';

interface SobreMedgonViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const SobreMedgonView: React.FC<SobreMedgonViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      
      {/* 1. HERO EDITORIAL */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            <span>01 · Identidad & Trayectoria</span>
            <span aria-hidden="true">·</span>
            <span>Carrión de los Condes (Palencia)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#16181B] leading-[1.05] text-balance">
            Sobre Medgón.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Pioneros en la industrialización de viviendas en madera técnica bajo estándar Passivhaus en España. Unimos la física de la edificación con el mecanizado de alta precisión en taller.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#8E95A2]">
            <span className="bg-[#FAF8F5] px-3 py-1.5 rounded border border-[#16181B]/10 text-[#16181B]">
              Fundación: 2005
            </span>
            <span className="bg-[#FAF8F5] px-3 py-1.5 rounded border border-[#16181B]/10 text-[#16181B]">
              Fábrica: Polígono Industrial, Carrión de los Condes
            </span>
            <span className="bg-[#FAF8F5] px-3 py-1.5 rounded border border-[#16181B]/10 text-[#16181B]">
              Cobertura: Península Ibérica
            </span>
          </div>
        </div>

        {/* Hero Image Spread con Composición Asimétrica */}
        <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 group">
          <img
            src="/MG87/castilian_wheat_house.jpg"
            alt="Instalaciones y concepto arquitectónico Medgón Passivhaus"
            className="w-full h-[400px] sm:h-[550px] lg:h-[620px] object-cover group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-12 text-white">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
                [Texto ficticio / Pie de foto editable]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Ingeniería estructural y fabricación climatizada en Palencia
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                [Espacio para redactar la descripción de la planta de Carrión de los Condes: más de 20 años optimizando el corte digital de vigas, paneles sándwich y forjados con certificación de estanqueidad.]
              </p>
            </div>
          </div>
        </div>

        {/* Cifras de Impacto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-b border-[#16181B]/10 pb-12">
          <div className="space-y-1">
            <span className="text-xs text-[#8E95A2] uppercase tracking-wider block">Trayectoria</span>
            <div className="text-3xl sm:text-4xl font-black text-[#16181B] tabular-nums">+20 años</div>
            <p className="text-xs text-[#5A606A]">[Texto ficticio: Dedicados a la madera técnica]</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-[#8E95A2] uppercase tracking-wider block">Hermeticidad</span>
            <div className="text-3xl sm:text-4xl font-black text-[#0DA836] tabular-nums">≤ 0,6 ren/h</div>
            <p className="text-xs text-[#5A606A]">[Texto ficticio: Ensayo Blower Door en cada obra]</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-[#8E95A2] uppercase tracking-wider block">Sostenibilidad</span>
            <div className="text-3xl sm:text-4xl font-black text-[#16181B] tabular-nums">100% PEFC</div>
            <p className="text-xs text-[#5A606A]">[Texto ficticio: Madera de bosques certificados]</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-[#8E95A2] uppercase tracking-wider block">Plazo en Parcela</span>
            <div className="text-3xl sm:text-4xl font-black text-[#16181B] tabular-nums">~6 meses</div>
            <p className="text-xs text-[#5A606A]">[Texto ficticio: Obra cerrada en tiempo récord]</p>
          </div>
        </div>
      </section>

      {/* 2. MANIFIESTO EDITORIAL & FILOSOFÍA */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            02 · Filosofía & Manifiesto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Cambiamos la incertidumbre del barro por la precisión milimétrica del taller.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 p-8 bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8E95A2]">
              Cita Editorial
            </div>
            <blockquote className="text-xl sm:text-2xl font-bold text-[#16181B] leading-snug">
              &ldquo;Una vivienda unifamiliar debe construirse con la misma exigencia de tolerancias, control térmico y rigor que la ingeniería contemporánea más avanzada.&rdquo;
            </blockquote>
            <div className="pt-4 border-t border-[#16181B]/10 text-xs text-[#5A606A]">
              <strong>Equipo Técnico Medgón</strong> · Carrión de los Condes
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[#5A606A] leading-relaxed">
            <div className="p-4 bg-[#FAF8F5]/60 rounded-lg border-l-4 border-l-[#0DA836] text-xs font-semibold text-[#16181B]">
              [Espacio de texto editable para la historia y visión corporativa de Medgón]
            </div>

            <p>
              Durante décadas, la autopromoción en España ha sufrido sobrecostes imprevistos, plazos dilatados y problemas de condensación derivados de la obra húmeda tradicional. En Medgón concebimos cada vivienda como un conjunto de componentes técnicos diseñados en digital y producidos en un ambiente controlado.
            </p>

            <p>
              Nuestra sede en Carrión de los Condes (Palencia) alberga el centro neurálgico de modelado BIM, cálculo de puentes térmicos en PHPP y manufactura robotizada. Al mecanizar la madera técnica sin exposición a la lluvia ni al barro, garantizamos que cada ensamblaje encaje con holguras milimétricas.
            </p>

            <p>
              Construir con Medgón significa saber exactamente qué día se monta tu casa, cuánto te va a costar desde el primer momento y cómo responderá ante el frío extremo de Castilla o el calor estival del Mediterráneo.
            </p>
          </div>
        </div>
      </section>

      {/* 3. GALERÍA DE INSTALACIONES Y TALLER (FOTOS FICTICIAS Y TEXTOS) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              03 · Planta de Producción
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
              Nuestras instalaciones en Carrión de los Condes.
            </h2>
            <p className="text-sm text-[#5A606A]">
              [Fotografías ficticias de referencia arquitectónica para sustituir por imágenes de taller, maquinaria y oficinas reales.]
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card Foto 1 */}
          <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden flex flex-col group">
            <div className="h-64 overflow-hidden relative bg-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Maquinaria CNC y mecanizado de madera técnica"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#16181B]/80 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                Mecanizado CNC
              </div>
            </div>
            <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#16181B]">
                  Línea de Corte Digital Robotizado
                </h3>
                <p className="text-xs text-[#5A606A] mt-1 leading-relaxed">
                  [Texto ficticio: Centros de control numérico que ejecutan los cortes de vigas y forjados con tolerancias de medio milímetro, listos para su encaje en obra.]
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#8E95A2] pt-2 border-t border-[#16181B]/5 block">
                Fábrica Palencia · Sección 01
              </span>
            </div>
          </div>

          {/* Card Foto 2 */}
          <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden flex flex-col group">
            <div className="h-64 overflow-hidden relative bg-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
                alt="Montaje de paneles de entramado ligero y aislamiento"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#0DA836] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                Ensamblaje en Seco
              </div>
            </div>
            <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#16181B]">
                  Mesas de Envolvente y Hermeticidad
                </h3>
                <p className="text-xs text-[#5A606A] mt-1 leading-relaxed">
                  [Texto ficticio: Incorporación de láminas inteligentes de estanqueidad al aire, aislamiento continuo de fibra de madera y precintado verificado en taller.]
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#8E95A2] pt-2 border-t border-[#16181B]/5 block">
                Fábrica Palencia · Sección 02
              </span>
            </div>
          </div>

          {/* Card Foto 3 */}
          <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden flex flex-col group">
            <div className="h-64 overflow-hidden relative bg-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                alt="Oficina técnica de arquitectura y cálculo Passivhaus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#16181B]/80 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                Oficina Técnica BIM
              </div>
            </div>
            <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#16181B]">
                  Ingeniería & Modelado Passivhaus
                </h3>
                <p className="text-xs text-[#5A606A] mt-1 leading-relaxed">
                  [Texto ficticio: Arquitectos e ingenieros Passivhaus Designers que modelan cada proyecto en 3D para resolver nudos críticos antes de fabricar.]
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#8E95A2] pt-2 border-t border-[#16181B]/5 block">
                Fábrica Palencia · Sección 03
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. HITOS HISTÓRICOS / TIMELINE EDITABLE */}
      <section className="space-y-10 bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-8 sm:p-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            04 · Cronología de Innovación
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Evolución y consolidación de Medgón.
          </h2>
          <p className="text-sm text-[#5A606A]">
            [Hitos temporales ficticios listos para editar según la cronología oficial de la compañía.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4">
          
          <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-2">
            <span className="text-2xl font-black text-[#16181B] block">2005</span>
            <h3 className="text-sm font-bold text-[#16181B]">Fundación en Carrión</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Inicio de actividad centrado en estructuras de madera y cubiertas técnicas en Castilla y León.]
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-2">
            <span className="text-2xl font-black text-[#16181B] block">2012</span>
            <h3 className="text-sm font-bold text-[#16181B]">Entramado Ligero</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Transición hacia sistemas completos de entramado ligero industrializado en taller cerrado.]
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-2">
            <span className="text-2xl font-black text-[#0DA836] block">2016</span>
            <h3 className="text-sm font-bold text-[#16181B]">Passivhaus Designer</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Certificación oficial del equipo técnico y adopción del estándar alemán Passivhaus como norma base.]
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-2">
            <span className="text-2xl font-black text-[#16181B] block">2021</span>
            <h3 className="text-sm font-bold text-[#16181B]">Robotización CNC</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Ampliación de la planta de producción con maquinaria de corte por control numérico de última generación.]
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-[#16181B] space-y-2 relative shadow-xs">
            <span className="text-2xl font-black text-[#16181B] block">2026</span>
            <h3 className="text-sm font-bold text-[#16181B]">Catálogo Residencial</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Lanzamiento de la gama estandarizada MG 50 a MG 165 para autopromotores en toda España.]
            </p>
          </div>

        </div>
      </section>

      {/* 5. EL EQUIPO HUMANO (TEXTOS Y FOTOS FICTICIAS) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              05 · Capital Humano
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
              El equipo detrás de cada vivienda.
            </h2>
            <p className="text-sm text-[#5A606A]">
              [Perfiles ficticios con nombres, fotos y cargos que podrás personalizar con los miembros reales de la empresa.]
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Miembro 1 */}
          <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden p-5 space-y-4">
            <div className="h-60 rounded-lg overflow-hidden bg-[#FAF8F5] grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Dirección General"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#16181B]">[Nombre y Apellido]</h3>
              <div className="text-xs font-semibold text-[#0DA836]">Dirección General & Fundador</div>
              <p className="text-xs text-[#5A606A] pt-1 leading-relaxed">
                [Texto ficticio: 20 años liderando la ingeniería en madera y la industrialización de viviendas en España.]
              </p>
            </div>
          </div>

          {/* Miembro 2 */}
          <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden p-5 space-y-4">
            <div className="h-60 rounded-lg overflow-hidden bg-[#FAF8F5] grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Responsable Oficina Técnica"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#16181B]">[Nombre y Apellido]</h3>
              <div className="text-xs font-semibold text-[#0DA836]">Passivhaus Designer & Arquitectura</div>
              <p className="text-xs text-[#5A606A] pt-1 leading-relaxed">
                [Texto ficticio: Especialista en modelado higrotérmico PHPP, eliminación de puentes térmicos y diseño bioclimático.]
              </p>
            </div>
          </div>

          {/* Miembro 3 */}
          <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden p-5 space-y-4">
            <div className="h-60 rounded-lg overflow-hidden bg-[#FAF8F5] grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                alt="Jefe de Fabricación"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#16181B]">[Nombre y Apellido]</h3>
              <div className="text-xs font-semibold text-[#0DA836]">Jefatura de Producción & CNC</div>
              <p className="text-xs text-[#5A606A] pt-1 leading-relaxed">
                [Texto ficticio: Coordinador de corte robotizado, calibración de tolerancias y control de calidad en planta climatizada.]
              </p>
            </div>
          </div>

          {/* Miembro 4 */}
          <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden p-5 space-y-4">
            <div className="h-60 rounded-lg overflow-hidden bg-[#FAF8F5] grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Responsable de Montaje"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#16181B]">[Nombre y Apellido]</h3>
              <div className="text-xs font-semibold text-[#0DA836]">Dirección de Montaje en Parcela</div>
              <p className="text-xs text-[#5A606A] pt-1 leading-relaxed">
                [Texto ficticio: Supervisión de cuadrillas oficiales en obra, pruebas de presurización Blower Door y sellado hermético.]
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. COMPROMISO AMBIENTAL & SELLOS */}
      <section className="bg-white border border-[#16181B]/10 rounded-2xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            06 · Certificaciones & Garantías
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#16181B]">
            Avales técnicos independientes.
          </h2>
          <p className="text-sm text-[#5A606A]">
            [Espacio para logotipos y descripciones de sellos oficiales.]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#16181B]/10 space-y-3">
            <Award className="w-8 h-8 text-[#0DA836]" />
            <h3 className="text-base font-bold text-[#16181B]">Passivhaus Institut</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Cumplimiento estricto del estándar de consumo casi nulo más exigente a nivel internacional, auditado por técnicos titulados.]
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#16181B]/10 space-y-3">
            <TreePine className="w-8 h-8 text-[#0DA836]" />
            <h3 className="text-base font-bold text-[#16181B]">Custodia PEFC</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Certificación de trazabilidad que garantiza que el 100% de la madera procede de bosques gestionados de forma sostenible.]
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] rounded-xl border border-[#16181B]/10 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#0DA836]" />
            <h3 className="text-base font-bold text-[#16181B]">Test Blower Door</h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              [Texto ficticio: Certificado individual de estanqueidad n50 inferior a 0,6 renovaciones por hora entregado con cada vivienda montada.]
            </p>
          </div>
        </div>
      </section>

      {/* 7. VISITA A FÁBRICA / CTA FINAL */}
      <section className="bg-[#16181B] text-white p-8 sm:p-14 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#78E639]/20 text-[#78E639] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
            <Factory className="w-4 h-4" />
            <span>Puertas Abiertas para Autopromotores</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ven a conocer nuestra planta en Carrión de los Condes.
          </h3>

          <p className="text-sm text-[#A0AEC0] leading-relaxed">
            Antes de construir, te invitamos a caminar por el taller, ver cómo cortamos la madera técnica por control numérico y comprobar cómo se aíslan los muros en persona.
          </p>

          <div className="pt-2 text-xs text-[#CBD5E0] space-y-1">
            <div><strong>Ubicación:</strong> Polígono Industrial, 34120 Carrión de los Condes (Palencia)</div>
            <div><strong>Teléfono:</strong> <a href="tel:979881010" className="text-[#78E639] hover:underline font-bold">979 88 10 10</a> · <strong>Email:</strong> informacion@medgon.com</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-sm font-bold text-[#16181B] bg-white hover:bg-[#E4C59E] rounded transition-colors text-center cursor-pointer shadow-xs whitespace-nowrap"
          >
            Concertar visita técnica &rarr;
          </button>
          <button
            type="button"
            onClick={() => onNavigate('catalog')}
            className="px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 rounded transition-colors text-center cursor-pointer whitespace-nowrap"
          >
            Ver modelos de catálogo
          </button>
        </div>
      </section>

    </div>
  );
};
