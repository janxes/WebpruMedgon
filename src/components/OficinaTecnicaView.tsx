import React from 'react';
import { 
  Building2, 
  Cpu, 
  Layers, 
  Compass, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Phone, 
  Mail, 
  FileCheck, 
  Monitor, 
  Ruler, 
  Users, 
  Boxes,
  Zap,
  ExternalLink
} from 'lucide-react';

interface OficinaTecnicaViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

import { SobreMedgonSubmenu } from './SobreMedgonSubmenu';

export const OficinaTecnicaView: React.FC<OficinaTecnicaViewProps> = ({ onNavigate }) => {
  const softwareStack = [
    {
      name: 'Cadwork 3D',
      category: 'Modelado BIM Estructural',
      desc: 'Modelamos cada pieza, encuentro y mecanizado con tolerancias milimétricas en 3D antes de enviar las instrucciones a los centros de mecanizado CNC.',
      highlight: 'Modelado al milímetro'
    },
    {
      name: 'Dlubal & Timbertech',
      category: 'Cálculo Estructural de Madera',
      desc: 'Software líder internacional en análisis de elementos finitos y cálculo normativo según Eurocódigo 5 y CTE para pórticos, celosías, forjados y entramados.',
      highlight: 'Cálculo según Eurocódigo 5'
    },
    {
      name: 'PHPP (Passivhaus Planning Package)',
      category: 'Simulación Energética Certificada',
      desc: 'Cálculo del balance térmico, demanda de calefacción/refrigeración (≤ 15 kWh/m²a), sobrecalentamiento y hermeticidad de la envolvente.',
      highlight: 'Certificación Passivhaus'
    },
    {
      name: 'BIM / IFC Interoperabilidad',
      category: 'Coordinación con Proyectistas',
      desc: 'Intercambio abierto de modelos IFC con los estudios de arquitectura para una perfecta sincronización con instalaciones y cimentación.',
      highlight: 'Coordinación sin colisiones'
    }
  ];

  const servicesForProfessionals = [
    {
      num: '01',
      title: 'Acompañamiento Integral en Proyecto y Obra',
      desc: 'Te acompañamos desde la fase de anteproyecto con el know-how de nuestra oficina técnica. Proyectarás de forma eficiente pensando directamente en su posterior industrialización.'
    },
    {
      num: '02',
      title: 'Adaptamos Nuestro Sistema a tu Diseño',
      desc: 'No limitamos la creatividad del arquitecto: adaptamos los muros de entramado ligero, forjados Kerto Ripa y cubiertas a las geometrías de tu proyecto.'
    },
    {
      num: '03',
      title: 'Servicios Especializados en Fachadas y Cubiertas',
      desc: 'Ofrecemos actuaciones parciales de envolventes de madera y cubiertas calculadas con tecnología 3D, hibridando con estructuras tradicionales y ajustando costes.'
    },
    {
      num: '04',
      title: 'Control Estricto de Costes y Plazos',
      desc: 'El modelado digital exhaustivo permite ofrecer un presupuesto cerrado y un cronograma de fabricación y montaje exacto sin desviaciones.'
    }
  ];

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. SUBMENU SUPERIOR UNIFICADO DE SOBRE MEDGÓN */}
      <SobreMedgonSubmenu currentView="oficina-tecnica" onNavigate={onNavigate} />

      {/* 1. HERO OFICINA TÉCNICA */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>INGENIERÍA BIM, CÁLCULO ESTRUCTURAL Y MODELADO PHPP</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Oficina técnica.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            El equipo técnico de <strong>MEDGÓN</strong> está especializado en <strong>arquitectura Passivhaus y estructuras de madera</strong>. Supervisa todo el proceso, tanto en fase de proyecto como de obra, para garantizar la calidad del producto final mediante programas específicos BIM.
          </p>
        </div>

        {/* Hero Visual Spread con Fotografía de la Oficina Técnica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-[#16181B]/15 bg-[#16181B] shadow-xl group">
            <img
              src="/oficina-tecnica-medgon.jpg"
              alt="Equipo de la Oficina Técnica Medgón trabajando en modelado 3D BIM y cálculo de estructuras de madera"
              className="w-full h-[360px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white p-2">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-[#0DA836] text-white">
                Palencia · Carrión de los Condes
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-1">
                Equipo Multidisciplinar Especializado
              </h3>
              <p className="text-xs text-white/80 max-w-xl">
                Arquitectos, ingenieros estructurales y especialistas Passivhaus coordinados para optimizar recursos y elevar la calidad de cada proyecto.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-[#0DA836] uppercase tracking-wider block">
                Metodología BIM
              </span>
              <h3 className="text-xl font-bold text-[#16181B]">
                Alta calidad, tiempos reducidos y costes muy controlados
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                El equipo multidisciplinar de la oficina técnica Medgón nos permite abordar cada proyecto desde múltiples perspectivas, garantizando soluciones integrales y adaptadas a las necesidades específicas de cada cliente.
              </p>
              <div className="pt-2 border-t border-[#16181B]/10 space-y-2 text-xs text-[#16181B] font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Adaptamos nuestro sistema al proyecto del arquitecto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Modelamos el proyecto en Cadwork 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Cálculo de estructuras en Dlubal y Timbertech</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <span>Cálculo energético y balance en PHPP</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#16181B]/10 rounded-xl flex items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[#0DA836] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#16181B]">
                    Certificación Passivhaus Tradesperson & Designer
                  </div>
                  <div className="text-[11px] text-[#5A606A]">
                    Técnicos homologados por el Passivhaus Institut
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SOFTWARE Y CAPACIDADES TÉCNICAS */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Tecnología y Herramientas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Software de vanguardia para una fabricación de precisión.
          </h2>
          <p className="text-base text-[#5A606A] leading-relaxed">
            Eliminamos cualquier margen de improvisación en obra mediante simulación digital y cálculo estructural paramétrico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {softwareStack.map((s, idx) => (
            <div 
              key={idx}
              className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-3 shadow-2xs hover:border-[#0DA836]/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded inline-block">
                  {s.highlight}
                </span>
                <h3 className="text-lg font-bold text-[#16181B]">
                  {s.name}
                </h3>
                <span className="text-xs text-[#8E95A2] font-semibold block">
                  {s.category}
                </span>
                <p className="text-xs text-[#5A606A] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICIOS A ESTUDIOS DE ARQUITECTURA, INGENIERÍA Y PROMOTORES */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0DA836]">
            <Boxes className="w-4 h-4" />
            <span>Colaboración B2B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Servicios a estudios de arquitectura, ingeniería y promotores.
          </h2>
          <p className="text-base text-[#5A606A] leading-relaxed">
            Nuestros especialistas en arquitectura, ingeniería, diseño y gestión de proyectos aseguran que todos los aspectos del proceso de construcción se coordinen de manera efectiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesForProfessionals.map((srv) => (
            <div 
              key={srv.num}
              className="p-6 bg-white border border-[#16181B]/10 rounded-xl space-y-2 shadow-2xs"
            >
              <span className="text-xl font-black text-[#16181B] block">
                {srv.num}
              </span>
              <h3 className="text-base font-bold text-[#16181B]">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-[#16181B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-bold text-[#78E639] uppercase tracking-wider">
            Consultoría Técnica Directa
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            ¿Tienes un proyecto y quieres consultar su viabilidad en madera?
          </h3>
          <p className="text-xs text-[#CBD5E0]">
            Envíanos tus planos o programa una reunión técnica con nuestros ingenieros.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-7 py-3.5 text-xs sm:text-sm font-bold text-[#16181B] bg-[#78E639] hover:bg-white rounded transition-colors cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
        >
          <span>Contactar con la oficina técnica</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
