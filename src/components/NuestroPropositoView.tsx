import React from 'react';
import { 
  Target, 
  Eye, 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Compass, 
  Leaf, 
  Zap, 
  Building2, 
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2,
  TrendingUp,
  Heart
} from 'lucide-react';

import { SobreMedgonSubmenu } from './SobreMedgonSubmenu';

interface NuestroPropositoViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const NuestroPropositoView: React.FC<NuestroPropositoViewProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Compañerismo',
      desc: 'Fomentamos un ambiente de trabajo colaborativo, respetuoso y solidario donde cada persona aporta al éxito colectivo.',
      icon: Users
    },
    {
      title: 'Calidad',
      desc: 'Búsqueda constante de la excelencia en cada proceso de fabricación, acabado y certificación técnica.',
      icon: Award
    },
    {
      title: 'Innovación',
      desc: 'Adopción continua de tecnologías pioneras, modelado BIM y automatización industrial en madera técnica.',
      icon: Sparkles
    },
    {
      title: 'Compromiso',
      desc: 'Responsabilidad absoluta con nuestros clientes, plazos pactados, presupuesto cerrado y el entorno social.',
      icon: HeartHandshake
    },
    {
      title: 'Mejora Continua',
      desc: 'Evolución constante de nuestros procesos, minimizando mermas y maximizando la eficiencia energética.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. SUBMENU SUPERIOR UNIFICADO DE SOBRE MEDGÓN */}
      <SobreMedgonSubmenu currentView="nuestro-proposito" onNavigate={onNavigate} />

      {/* 1. HERO DE NUESTRO PROPÓSITO */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Target className="w-3.5 h-3.5" />
            <span>MISIÓN, VISIÓN Y COMPROMISO SOCIAL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Nuestro propósito.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Mejorar la eficiencia, calidad, sostenibilidad y seguridad en el proceso de construcción mediante la innovación y la industrialización, con un objetivo claro: <strong>que las personas que habitan los edificios que construimos puedan vivir mejor gastando menos energía.</strong>
          </p>
        </div>

        {/* Declaración Destacada del Propósito */}
        <div className="p-8 sm:p-12 bg-[#16181B] text-white rounded-2xl relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
              El Compromiso Medgón
            </span>
            <blockquote className="text-xl sm:text-3xl font-extrabold leading-snug">
              «En Medgón, nos comprometemos a transformar la industria de la construcción a través de la industrialización de edificios.»
            </blockquote>
            <p className="text-sm sm:text-base text-[#CBD5E0] leading-relaxed">
              Nuestra misión es proporcionar soluciones innovadoras y sostenibles que mejoren la eficiencia, la calidad y la rapidez en la edificación, contribuyendo activamente al desarrollo de comunidades más seguras, funcionales y sostenibles. Nos esforzamos por brindar productos de alta calidad y valor añadido, manteniendo siempre un firme compromiso con la responsabilidad social y ambiental.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Leaf className="w-96 h-96 text-white" />
          </div>
        </div>
      </section>

      {/* 2. VALORES FUNDAMENTALES */}
      <section className="space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Cultura Corporativa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Nuestros valores.
          </h2>
          <p className="text-base text-[#5A606A] leading-relaxed">
            Cinco pilares irrenunciables que guían cada decisión en nuestra planta de Carrión de los Condes y en cada proyecto que entregamos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/15 bg-white shadow-md">
              <img
                src="/valores-medgon.jpg"
                alt="Infografía de Valores Medgón: Compañerismo, Calidad, Innovación, Compromiso y Mejora Continua"
                className="w-full h-auto object-contain p-4"
              />
              <div className="bg-[#FAF8F5] p-3 text-center border-t border-[#16181B]/10">
                <span className="text-xs font-bold text-[#16181B]">
                  Los 5 Valores Medgón Passivhaus
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-2xs hover:border-[#0DA836]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0DA836]/10 text-[#0DA836]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#16181B]">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed pl-11">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. VISIÓN DE FUTURO */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0DA836]">
            <Eye className="w-4 h-4" />
            <span>Nuestra Visión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Referentes nacionales en construcción industrializada y hábitats saludables.
          </h2>
          <p className="text-sm sm:text-base text-[#5A606A] leading-relaxed">
            Buscamos ser reconocidos a nivel nacional por nuestra excelencia en soluciones industrializadas, estableciendo nuevos estándares de eficiencia, sostenibilidad e innovación en la industria de la edificación.
          </p>
          <p className="text-sm sm:text-base text-[#5A606A] leading-relaxed">
            Aspiramos a ser pioneros en la creación de entornos habitables de alta calidad, funcionales y respetuosos con el medio ambiente, y a seguir siendo un socio confiable y colaborativo para nuestros clientes, arquitectos, promotores y comunidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-[#0DA836]" />
            <h3 className="text-sm font-bold text-[#16181B]">
              Comunidades Más Seguras
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Edificaciones saludables con materiales nobles que fijan carbono y proporcionan ambientes limpios sin toxinas.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2 shadow-2xs">
            <Zap className="w-5 h-5 text-[#0DA836]" />
            <h3 className="text-sm font-bold text-[#16181B]">
              Descarbonización Real
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Consumo casi nulo y madera procedente de bosques con gestión forestal sostenible certificada PEFC y FSC.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2 shadow-2xs">
            <Users className="w-5 h-5 text-[#0DA836]" />
            <h3 className="text-sm font-bold text-[#16181B]">
              Alianza con Profesionales
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              Colaboramos estrechamente con arquitectos y proyectistas, integrando la ingeniería de taller en su visión de diseño.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-[#16181B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-bold text-[#78E639] uppercase tracking-wider">
            Transformando la Construcción
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            ¿Compartes nuestra visión de una edificación sostenible?
          </h3>
          <p className="text-xs text-[#CBD5E0]">
            Hablemos de cómo hacer realidad tu proyecto bajo el estándar Passivhaus.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-7 py-3.5 text-xs sm:text-sm font-bold text-[#16181B] bg-[#78E639] hover:bg-white rounded transition-colors cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
        >
          <span>Hablemos de tu proyecto</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
