import React, { useState } from 'react';
import { 
  Building2, 
  TreePine, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock, 
  Zap, 
  Wind, 
  Maximize2, 
  Smartphone, 
  Flame, 
  VolumeX, 
  Droplet, 
  Scale, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface AboutMedgonViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const AboutMedgonView: React.FC<AboutMedgonViewProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const advantages = [
    {
      id: 'ahorro',
      category: 'ahorro',
      categoryLabel: 'Ahorro & Energía',
      title: 'Ahorro en energía',
      subtitle: 'Hasta 85% menos en climatización',
      desc: 'Construcción bajo los principios del estándar Passivhaus, con un aislamiento térmico continuo (hasta 24 cm en muros y cubierta) que reduce drásticamente la factura de luz.',
      metric: 'Hasta -85%',
      metricLabel: 'Demanda de calefacción',
      icon: Zap,
    },
    {
      id: 'confort',
      category: 'confort',
      categoryLabel: 'Confort & Bienestar',
      title: 'Confort térmico continuo',
      subtitle: '20-22 °C constantes todo el año',
      desc: 'El aislamiento continuo y la ausencia de puentes térmicos mantienen una temperatura estable y placentera en invierno y verano, sin corrientes ni paredes frías.',
      metric: '20-22 °C',
      metricLabel: 'Estabilidad térmica',
      icon: ShieldCheck,
    },
    {
      id: 'sostenibilidad',
      category: 'sostenibilidad',
      categoryLabel: 'Sostenibilidad',
      title: 'Madera de bosques sostenibles',
      subtitle: 'Certificación de custodia PEFC',
      desc: 'Estructura en madera técnica procedente de explotaciones forestales sostenibles. Un material noble que fija CO2 y contribuye activamente al cuidado del planeta.',
      metric: 'PEFC',
      metricLabel: 'Madera certificada',
      icon: TreePine,
    },
    {
      id: 'ventanas',
      category: 'confort',
      categoryLabel: 'Aislamiento',
      title: 'Carpinterías de altas prestaciones',
      subtitle: 'Triple vidrio bajo emisivo con gas argón',
      desc: 'Ventanas Passivhaus con triple acristalamiento que garantizan silencio acústico absoluto y un aislamiento térmico impenetrable frente al exterior.',
      metric: 'Ug ≤ 0.6',
      metricLabel: 'Transmitancia del vidrio',
      icon: Maximize2,
    },
    {
      id: 'persianas',
      category: 'confort',
      categoryLabel: 'Hermeticidad',
      title: 'Protección solar motorizada',
      subtitle: 'Sin puentes térmicos ni filtraciones',
      desc: 'Sistemas de oscurecimiento y control solar integrados en el diseño exterior sin cajón pasante tradicional, evitando cualquier fuga de aire.',
      metric: '100% Hermético',
      metricLabel: 'Sin fugas de aire',
      icon: Smartphone,
    },
    {
      id: 'aire',
      category: 'confort',
      categoryLabel: 'Salud',
      title: 'Ventilación continua con recuperación',
      subtitle: 'VMC de doble flujo Zehnder 24 horas',
      desc: 'El sistema renueva el 100% del aire de la vivienda continuamente, filtrando polen, polvo y ácaros, recuperando más del 90% del calor interior.',
      metric: '>90% Calor',
      metricLabel: 'Recuperación entálpica',
      icon: Wind,
    },
    {
      id: 'clima_radiante',
      category: 'confort',
      categoryLabel: 'Climatización',
      title: 'Suelo radiante / refrescante',
      subtitle: 'Distribución térmica homogénea',
      desc: 'Calefacción invisible y uniforme sin radiadores que ocupen espacio, con refrescamiento suave en los meses más calurosos del verano.',
      metric: 'Invisible',
      metricLabel: 'Cero corrientes de aire',
      icon: Sparkles,
    },
    {
      id: 'aerotermia',
      category: 'ahorro',
      categoryLabel: 'Eficiencia',
      title: 'Aerotermia de alta eficiencia',
      subtitle: 'Máximo rendimiento con mínimo consumo',
      desc: 'Bomba de calor aerotérmica para agua caliente sanitaria y climatización, aprovechando la energía contenida en el aire exterior.',
      metric: 'COP > 4.0',
      metricLabel: 'Alta eficiencia estacional',
      icon: Flame,
    },
    {
      id: 'muros',
      category: 'construccion',
      categoryLabel: 'Solidez',
      title: 'Muros multicapa de gran densidad',
      subtitle: 'Placas de fibra-yeso Fermacell',
      desc: 'Revestimiento interior con paneles de fibra-yeso de alta resistencia mecánica, excelente comportamiento al fuego y aislamiento acústico superior.',
      metric: 'Fermacell',
      metricLabel: 'Resistencia & Acústica',
      icon: VolumeX,
    },
    {
      id: 'obra_limpia',
      category: 'construccion',
      categoryLabel: 'Precisión',
      title: 'Construcción en seco y limpia',
      subtitle: 'Menos residuos y máximo rigor',
      desc: 'Al ensamblar componentes industrializados fabricados en taller, reducimos en un 80% los residuos de obra y eliminamos las humedades de mortero.',
      metric: '-80%',
      metricLabel: 'Residuos en parcela',
      icon: Droplet,
    },
    {
      id: 'estructura_ligera',
      category: 'construccion',
      categoryLabel: 'Ingeniería',
      title: 'Optimización de cimentación',
      subtitle: 'Estructura ligera de gran resistencia',
      desc: 'La madera técnica ofrece una relación peso/resistencia muy superior al hormigón y al ladrillo, lo que optimiza las dimensiones de la losa de cimentación.',
      metric: '-50%',
      metricLabel: 'Carga sobre el terreno',
      icon: Scale,
    },
    {
      id: 'plazos',
      category: 'construccion',
      categoryLabel: 'Plazos',
      title: 'Certeza en plazos de ejecución',
      subtitle: 'Obra en parcela en unos 6 meses',
      desc: 'La fabricación en paralelo en fábrica mientras se tramita la licencia permite montar la envolvente en días y entregar la vivienda sin retrasos meteorológicos.',
      metric: '~6 meses',
      metricLabel: 'Plazo en obra',
      icon: Clock,
    },
  ];

  const categories = [
    { id: 'all', label: 'Todas las Ventajas (12)' },
    { id: 'ahorro', label: 'Ahorro & Energía' },
    { id: 'confort', label: 'Confort & Salud' },
    { id: 'construccion', label: 'Construcción & Rapidez' },
    { id: 'sostenibilidad', label: 'Materiales & Sostenibilidad' },
  ];

  const filteredAdvantages = filterCategory === 'all' 
    ? advantages 
    : advantages.filter(a => a.category === filterCategory);

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 1. Header Hero */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Carrión de los Condes · Palencia · España
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16181B] leading-[1.1]">
          Acerca de Medgón.
        </h1>
        <p className="text-base sm:text-xl text-[#5A606A] leading-relaxed">
          Más de 20 años transformando el sector de la edificación en España mediante ingeniería en madera técnica, fabricación robotizada y el máximo rigor del estándar Passivhaus.
        </p>
      </div>

      {/* 2. Manifiesto & Historia */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            NUESTRO ORIGEN Y PROPÓSITO
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Cambiamos la incertidumbre del barro por la precisión milimétrica del taller.
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#5A606A] leading-relaxed">
            <p>
              Durante décadas, la edificación tradicional aceptó las desviaciones en obra, los sobrecostes imprevistos y los retrasos meteorológicos como algo inevitable. En Medgón decidimos que una vivienda unifamiliar debía construirse con el mismo nivel de exactitud y control de calidad que la industria automotriz o aeroespacial.
            </p>
            <p>
              En nuestras instalaciones industriales de <strong>Carrión de los Condes (Palencia)</strong>, contamos con centros de mecanizado por control numérico (CNC) y personal técnico altamente especializado que modela cada viga, forjado y panel de fachada en un entorno cubierto y climatizado.
            </p>
            <p>
              El resultado: viviendas unifamiliares con un estándar de confort inalcanzable para la obra convencional, presupuestos cerrados y una huella de carbono negativa gracias a la madera técnica certificada PEFC.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#16181B]">
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] border border-[#16181B]/10 px-3 py-2 rounded">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Passivhaus Designer Certificado</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] border border-[#16181B]/10 px-3 py-2 rounded">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Madera con Sello PEFC</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] border border-[#16181B]/10 px-3 py-2 rounded">
              <CheckCircle2 className="w-4 h-4 text-[#0DA836]" />
              <span>Garantía de Ensayos Blower Door</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-sm relative group">
            <img 
              src="/MG87/castilian_wheat_house.jpg" 
              alt="Instalaciones y viviendas industrializadas Medgón Passivhaus" 
              className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6 sm:p-8 text-white">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#78E639]">
                  Planta de Producción Industrializada
                </span>
                <p className="text-sm font-medium text-white/90 mt-1">
                  Carrión de los Condes (Palencia). Mecanizado digital de madera técnica en atmósfera controlada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Las 4 Cifras Clave */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-8 sm:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#16181B] tabular-nums">
              +20
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#16181B]">
              Años de Experiencia
            </div>
            <div className="text-xs text-[#5A606A]">
              Especializados en madera técnica y Passivhaus.
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#0DA836] tabular-nums">
              ≤ 0.6
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#16181B]">
              Renovaciones n50
            </div>
            <div className="text-xs text-[#5A606A]">
              Hermeticidad certificada por Blower Door.
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#16181B] tabular-nums">
              ~6
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#16181B]">
              Meses en Parcela
            </div>
            <div className="text-xs text-[#5A606A]">
              Plazo medio de obra tras licencia municipal.
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#0DA836] tabular-nums">
              -85%
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#16181B]">
              Demanda Energética
            </div>
            <div className="text-xs text-[#5A606A]">
              Frente a una vivienda tradicional en España.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Las 12 Ventajas Técnicas para la Familia */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              POR QUÉ ELEGIR MEDGÓN
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
              12 ventajas reales para quien autopromueve.
            </h2>
            <p className="text-sm text-[#5A606A]">
              Beneficios concretos en salud, silencio, ahorro económico y tranquilidad durante el proceso constructivo.
            </p>
          </div>

          {/* Categorías de Filtro */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilterCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-colors cursor-pointer ${
                  filterCategory === c.id
                    ? 'bg-[#16181B] text-white'
                    : 'bg-[#FAF8F5] text-[#5A606A] hover:text-[#16181B] border border-[#16181B]/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAdvantages.map((a) => {
            const IconComponent = a.icon;
            return (
              <div 
                key={a.id} 
                className="bg-white border border-[#16181B]/10 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-[#16181B]/30 hover:shadow-xs transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#16181B]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded">
                      {a.categoryLabel}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#16181B]">
                      {a.title}
                    </h3>
                    <p className="text-xs font-medium text-[#0DA836] mt-0.5">
                      {a.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#5A606A] leading-relaxed">
                    {a.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16181B]/10 flex items-center justify-between text-xs">
                  <span className="font-extrabold text-[#16181B] tabular-nums">{a.metric}</span>
                  <span className="text-[#8E95A2]">{a.metricLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Fábrica Abierta: Ven a conocernos */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            TRANSPARENCIA TOTAL
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#16181B]">
            Ven a visitar nuestra fábrica en Carrión de los Condes.
          </h3>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Te mostramos en persona los centros de mecanizado CNC, el insuflado de madera y cómo se fabrica la envolvente de tu futuro hogar. Concerta una visita técnica con nuestros arquitectos e ingenieros.
          </p>
          <div className="pt-2 text-xs text-[#16181B] space-y-1">
            <div><strong>Ubicación:</strong> Polígono Industrial, 34120 Carrión de los Condes (Palencia)</div>
            <div><strong>Teléfono directo:</strong> 979 88 10 10 · <strong>Email:</strong> informacion@medgon.com</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="px-6 py-3.5 text-sm font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
        >
          Solicitar visita o estudio &rarr;
        </button>
      </section>

    </div>
  );
};
