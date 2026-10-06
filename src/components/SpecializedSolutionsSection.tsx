import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ScanLine, 
  Compass, 
  FileText,
  BadgeCheck
} from 'lucide-react';

interface SpecializedSolutionsSectionProps {
  onNavigate: (view: string, modelId?: string) => void;
  onSelectSolutionForContact?: (solutionName: string) => void;
}

interface SolutionItem {
  id: 'derecho-vuelo' | 'fachadas' | 'cubiertas';
  badge: string;
  title: string;
  shortSubtitle: string;
  image: string;
  imageAlt: string;
  b2cAudience: string;
  leadParagraph: string;
  coreExplanation: string[];
  features: { title: string; description: string }[];
  brandHighlight?: string;
  metaTitle: string;
  metaDescription: string;
  searchIntent: string;
  targetKeywords: string[];
}

export const SpecializedSolutionsSection: React.FC<SpecializedSolutionsSectionProps> = ({
  onNavigate,
  onSelectSolutionForContact,
}) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'seo-capsules'>('cards');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const solutions: SolutionItem[] = [
    {
      id: 'derecho-vuelo',
      badge: 'Ampliación en Altura · Solución B2C',
      title: 'Derecho de vuelo en madera',
      shortSubtitle: 'Suma más alturas o construye tu ático sobre azoteas existentes sin sobrecargar la estructura',
      image: '/derecho-de-vuelo-madera.jpg',
      imageAlt: 'Ampliación de vivienda y ático sobre azotea con estructura ligera de madera técnica y grandes ventanales',
      b2cAudience: 'Para propietarios particulares, copropietarios y comunidades que desean ampliar su vivienda, crear un nuevo ático exclusivo o rentabilizar el espacio superior de su inmueble.',
      leadParagraph: 'Somos especialistas en proyectos de ampliación de la superficie construida de edificios sobre azoteas o “derecho a vuelo”, sumando más alturas con soluciones innovadoras de madera técnica. Realizamos el cálculo de estructuras en madera para revivir edificios antiguos y realizar una mejora significativa en espacios urbanos complejos.',
      coreExplanation: [
        'La madera técnica y el CLT pesan hasta 5 veces menos que el hormigón tradicional, lo que hace viable sobrelevar edificios antiguos sin necesidad de costosos refuerzos en la cimentación existente.',
        'Esta metodología no solo optimiza los tiempos de construcción con montaje en seco, sino que también mejora la eficiencia energética de todo el inmueble y moderniza la estética del edificio.',
        'La construcción prefabricada industrializada implica la fabricación de componentes en un entorno controlado en taller robotizado, lo que reduce drásticamente los errores, defectos de construcción y ruidos para los vecinos.',
      ],
      features: [
        {
          title: 'Ligereza estructural certificada',
          description: 'Cálculo de cargas milimétrico para añadir una o dos plantas completas con total seguridad técnica sobre forjados existentes.',
        },
        {
          title: 'Montaje en seco en pocos días',
          description: 'Estructuras y cerramientos mecanizados en fábrica que se ensamblan con grúa en jornadas récord, minimizando molestias en la comunidad.',
        },
        {
          title: 'Confort térmico Passivhaus',
          description: 'Envolvente continua que reduce hasta un 85% la demanda energética del nuevo ático, disfrutando de climatización natural.',
        },
      ],
      brandHighlight: 'Descubre nuestra marca y división especializada de Derecho a Vuelo.',
      metaTitle: 'Derecho de Vuelo y Remontas de Madera | Ampliación de Azoteas Medgón',
      metaDescription: 'Amplía tu vivienda o edificio sumando alturas con madera técnica. Solución ligera, rápida y Passivhaus para particulares. Pide tu estudio estructural.',
      searchIntent: 'Propietarios particulares y comunidades que buscan cómo ampliar metros habitables en azotea o construir un ático ligero de madera.',
      targetKeywords: [
        'derecho de vuelo residencial',
        'remonta de edificios madera',
        'ampliación en azotea particular',
        'ático de madera técnica',
        'sobrelevación ligera Passivhaus'
      ],
    },
    {
      id: 'fachadas',
      badge: 'Envolventes Eficientes · Construcción Híbrida',
      title: 'Fachadas industrializadas',
      shortSubtitle: 'Aislamiento continuo sin puentes térmicos y acabados de diseño para tu nueva vivienda o rehabilitación',
      image: '/fachadas-industrializadas-madera.png',
      imageAlt: 'Fachadas industrializadas prefabricadas en madera técnica con acabados minerales y madera natural',
      b2cAudience: 'Para particulares autopromotores y propietarios que renuevan su fachada buscando confort térmico permanente, ausencia de humedades y rapidez de ejecución.',
      leadParagraph: 'Realizamos fachadas industrializadas que se integran perfectamente en la construcción híbrida, combinando el uso de materiales prefabricados de madera técnica con técnicas tradicionales y acabados de vanguardia.',
      coreExplanation: [
        'Esta metodología no solo optimiza los tiempos de construcción, sino que también mejora de manera radical la eficiencia energética y la estética del edificio.',
        'La construcción prefabricada implica la fabricación de componentes en un entorno controlado y seco, lo que reduce la posibilidad de errores y defectos de construcción habituales en la albañilería tradicional.',
        'Proporciona una envolvente estanca al aire y transpirable al vapor, eliminando condensaciones interiores, manchas de moho y corrientes térmicas molestas.',
      ],
      features: [
        {
          title: 'Integración híbrida versátil',
          description: 'Combina con estructuras de hormigón, acero o muros tradicionales, admitiendo acabados en mortero de cal, madera ventilada o composite.',
        },
        {
          title: 'Cero puentes térmicos',
          description: 'Aislamiento biofílico continuo y carpinterías integradas herméticamente en fábrica siguiendo el estándar Passivhaus.',
        },
        {
          title: 'Aislamiento acústico superior',
          description: 'La densidad y multicapa de la madera técnica amortiguan el ruido del tráfico y del entorno para un descanso reparador.',
        },
      ],
      metaTitle: 'Fachadas Industrializadas de Madera | Envolventes Eficientes Medgón',
      metaDescription: 'Fachadas prefabricadas de madera técnica para particulares y autopromotores. Máximo aislamiento Passivhaus y rápida instalación sin puentes térmicos.',
      searchIntent: 'Particulares que autopromueven o rehabilitan su casa y buscan una fachada de alta eficiencia energética sin obras húmedas interminables.',
      targetKeywords: [
        'fachadas industrializadas madera',
        'envolvente térmica Passivhaus',
        'fachada prefabricada vivienda unifamiliar',
        'construcción híbrida madera',
        'rehabilitación térmica fachada particular'
      ],
    },
    {
      id: 'cubiertas',
      badge: 'Estructuras y Tejados a Medida · Tecnología 3D',
      title: 'Cubiertas de madera de alta precisión',
      shortSubtitle: 'Cálculo, diseño y mecanizado CNC con escaneado tridimensional de Leica Geosystems',
      image: '/cubiertas-de-madera-leica.jpg',
      imageAlt: 'Estructura y cubierta de madera vista con vigas mecanizadas y tecnología de escaneado 3D Leica',
      b2cAudience: 'Para propietarios que construyen su vivienda unifamiliar o rehabilitan el tejado de su casa de pueblo o chalet, exigiendo durabilidad, estética de madera vista y estanqueidad.',
      leadParagraph: 'Cálculo, diseño y fabricación de Cubiertas de Madera: ofrecemos soluciones integrales para estructuras y cubiertas de madera técnica, tanto en obra nueva como en rehabilitación integral. Contamos con la última tecnología de Leica Geosystems.',
      coreExplanation: [
        'Analizamos cada encuentro de la estructura y diseñamos de manera óptima en modelado 3D BIM. Por eso las piezas que se elaboran en fábrica robotizada son ultra precisas y fiables al milímetro.',
        'Gracias a nuestro proceso de industrialización optimizamos los tiempos de entrega, garantizamos un montaje más seguro y reducimos drásticamente los días de obra abierta frente a la lluvia.',
        'La medición previa con escáner láser Leica Geosystems captura desplomes y variaciones del edificio real, evitando rectificaciones sobre la marcha en obra.',
      ],
      features: [
        {
          title: 'Escaneado 3D Leica Geosystems',
          description: 'Toma de datos milimétrica de muros y forjados existentes. La cubierta encaja en obra con precisión de relojería suiza.',
        },
        {
          title: 'Mecanizado CNC automatizado',
          description: 'Cortes, cajeados y ensambles realizados por robot en fábrica. Máxima solidez estructural sin holguras ni desajustes.',
        },
        {
          title: 'Techo protegido en días',
          description: 'Instalación ultrarrápida que evita exponer el interior de la vivienda al agua durante semanas de obra tradicional.',
        },
      ],
      metaTitle: 'Cubiertas de Madera a Medida | Estructuras y Escaneado 3D Leica',
      metaDescription: 'Cálculo y fabricación de cubiertas de madera para particulares con tecnología Leica 3D. Rehabilitación y obra nueva con máxima precisión y rapidez.',
      searchIntent: 'Propietarios particulares que buscan cambiar el tejado, renovar la cubierta con madera vista o encargar una estructura de cubierta de alta precisión.',
      targetKeywords: [
        'cubiertas de madera particulares',
        'cálculo estructuras madera Leica',
        'cambio de tejado madera unifamiliar',
        'vigas de madera vista cubierta',
        'cubiertas prefabricadas precisión 3D'
      ],
    },
  ];

  return (
    <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Encabezado Principal Orientado a B2C y AI SEO */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#16181B]/10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES ESPECIALIZADAS PARA PROPIETARIOS PARTICULARES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Derecho de vuelo, fachadas industrializadas y cubiertas de madera.
          </h2>
          <p className="text-base text-[#5A606A] leading-relaxed">
            Más allá de nuestros modelos residenciales completos, en Medgón ponemos nuestra ingeniería en madera técnica al servicio de particulares que desean <strong>sumar más alturas en su azotea</strong>, <strong>renovar la fachada con máximo aislamiento Passivhaus</strong> o <strong>instalar una cubierta de ultra precisión</strong> calculada con tecnología Leica Geosystems.
          </p>
        </div>

        {/* Pestañas de Vista: Galería Comercial vs. Fichas AI SEO & Metadatos */}
        <div className="flex items-center bg-[#FAF8F5] p-1.5 rounded-xl border border-[#16181B]/10 shrink-0 self-start md:self-end">
          <button
            type="button"
            onClick={() => setActiveTab('cards')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cards'
                ? 'bg-[#16181B] text-white shadow-xs'
                : 'text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Soluciones para particulares</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('seo-capsules')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'seo-capsules'
                ? 'bg-[#16181B] text-white shadow-xs'
                : 'text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Fichas AI SEO y Metadatos</span>
          </button>
        </div>
      </div>

      {/* VISTA 1: TARJETAS COMERCIALES B2C CON FOTOGRAFÍAS ESPECÍFICAS */}
      {activeTab === 'cards' && (
        <div className="space-y-12">
          {solutions.map((item, index) => (
            <article 
              key={item.id}
              className="bg-white border border-[#16181B]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Columna de Fotografía Relevante */}
                <div className={`lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] overflow-hidden bg-[#FAF8F5] ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Badge flotante sobre la foto */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-[#16181B]/85 backdrop-blur-md text-white border border-white/10">
                      {item.badge}
                    </span>
                    {item.id === 'cubiertas' && (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-[#0DA836] text-white flex items-center gap-1 shadow-sm">
                        <ScanLine className="w-3.5 h-3.5" />
                        <span>Leica 3D</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs text-white/90 font-medium line-clamp-2 backdrop-blur-xs bg-black/30 p-2 rounded">
                      {item.shortSubtitle}
                    </p>
                  </div>
                </div>

                {/* Columna de Contenido B2C + AI SEO */}
                <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="space-y-4">
                    
                    {/* Indicador de Público B2C */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0DA836]">
                      <BadgeCheck className="w-4 h-4 text-[#0DA836] shrink-0" />
                      <span>{item.b2cAudience}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16181B] tracking-tight">
                      {item.title}
                    </h3>

                    {/* Texto optimizado para AI SEO y compresión clara */}
                    <p className="text-sm sm:text-base text-[#16181B] font-medium leading-relaxed">
                      {item.leadParagraph}
                    </p>

                    <div className="space-y-2 text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                      {item.coreExplanation.map((p, pIdx) => (
                        <p key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0DA836] shrink-0 mt-2" />
                          <span>{p}</span>
                        </p>
                      ))}
                    </div>

                    {/* Beneficios Clave en Cuadrícula */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="p-3 bg-[#FAF8F5] border border-[#16181B]/5 rounded-lg space-y-1">
                          <h4 className="text-xs font-bold text-[#16181B] flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836] shrink-0" />
                            <span>{feat.title}</span>
                          </h4>
                          <p className="text-[11px] text-[#5A606A] leading-normal">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Llamada de marca específica si existe */}
                    {item.brandHighlight && (
                      <div className="p-3 bg-[#0DA836]/10 border border-[#0DA836]/20 rounded-lg flex items-center justify-between gap-3 text-xs text-[#16181B]">
                        <span className="font-bold text-[#0DA836]">
                          ★ {item.brandHighlight}
                        </span>
                        <span className="text-[11px] text-[#5A606A]">
                          Ingeniería certificada Medgón
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Acciones para el propietario particular */}
                  <div className="pt-4 border-t border-[#16181B]/10 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href="#solicitar-informacion"
                      onClick={() => onSelectSolutionForContact?.(item.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#16181B] hover:bg-[#0DA836] rounded transition-colors cursor-pointer"
                    >
                      <span>Consultar viabilidad para mi vivienda</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <div className="flex items-center gap-3 text-xs text-[#5A606A]">
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0DA836]" />
                        Estudio inicial sin compromiso
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline">Fabricación robotizada Palencia</span>
                    </div>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>
      )}

      {/* VISTA 2: FICHAS TÉCNICAS AI SEO & METADATOS OPTIMIZADOS */}
      {activeTab === 'seo-capsules' && (
        <div className="space-y-8">
          
          <div className="p-4 bg-[#FAF8F5] border border-[#16181B]/10 rounded-xl flex items-start gap-3">
            <Search className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#5A606A]">
              <p className="font-bold text-[#16181B]">
                Optimización para Motores de Respuestas de Inteligencia Artificial (AEO / GEO) y Google Search
              </p>
              <p>
                Cada bloque ha sido redactado con densidad de entidades, respuestas directas para fragmentos destacados (featured snippets) e intenciones de búsqueda de propietarios particulares (B2C). A continuación se detallan los metatítulos y meta descripciones listos para indexación o campañas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-[#16181B]/15 rounded-xl p-6 space-y-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Encabezado de la cápsula */}
                  <div className="flex items-center justify-between border-b border-[#16181B]/10 pb-3">
                    <span className="text-xs font-bold text-[#0DA836] uppercase tracking-wider">
                      {item.badge.split('·')[0]}
                    </span>
                    <span className="text-[10px] text-[#8E95A2] font-mono">
                      schema: Service
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#16181B]">
                    {item.title}
                  </h3>

                  {/* Metatítulo */}
                  <div className="p-3 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#16181B]">Metatítulo recomendado:</span>
                      <span className="text-[10px] text-[#8E95A2] font-mono">
                        {item.metaTitle.length} caracteres (óptimo 50-60)
                      </span>
                    </div>
                    <p className="text-xs text-[#16181B] font-semibold leading-relaxed">
                      {item.metaTitle}
                    </p>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.metaTitle, `title-${item.id}`)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#0DA836] hover:underline font-bold pt-1 cursor-pointer"
                    >
                      {copiedKey === `title-${item.id}` ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar título</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Meta descripción */}
                  <div className="p-3 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#16181B]">Meta descripción recomendada:</span>
                      <span className="text-[10px] text-[#8E95A2] font-mono">
                        {item.metaDescription.length} caracteres (óptimo 140-160)
                      </span>
                    </div>
                    <p className="text-xs text-[#5A606A] leading-relaxed">
                      {item.metaDescription}
                    </p>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.metaDescription, `desc-${item.id}`)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#0DA836] hover:underline font-bold pt-1 cursor-pointer"
                    >
                      {copiedKey === `desc-${item.id}` ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>¡Copiada!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar descripción</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Intención de Búsqueda */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#16181B] block">
                      Intención de búsqueda B2C:
                    </span>
                    <p className="text-xs text-[#5A606A] leading-relaxed">
                      {item.searchIntent}
                    </p>
                  </div>

                  {/* Palabras Clave y Entidades Semánticas */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-[#16181B] block">
                      Entidades semánticas y keywords:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.targetKeywords.map((kw, kIdx) => (
                        <span 
                          key={kIdx}
                          className="px-2 py-0.5 text-[10px] font-medium bg-[#16181B]/5 text-[#16181B] rounded border border-[#16181B]/10"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-[#16181B]/10">
                  <a
                    href="#solicitar-informacion"
                    onClick={() => {
                      setActiveTab('cards');
                      onSelectSolutionForContact?.(item.title);
                    }}
                    className="block text-center w-full py-2 px-3 text-xs font-bold text-[#16181B] bg-[#FAF8F5] hover:bg-[#16181B] hover:text-white rounded border border-[#16181B]/10 transition-colors cursor-pointer"
                  >
                    Ver detalles y consultar &rarr;
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* Cápsula de autoridad técnica Medgón */}
      <div className="p-6 bg-[#16181B] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-bold text-[#78E639] uppercase tracking-wider">
            Ingeniería de Madera Estructural en Palencia
          </div>
          <h4 className="text-lg sm:text-xl font-bold">
            ¿Quieres saber si tu azotea, fachada o cubierta es apta para madera técnica?
          </h4>
          <p className="text-xs text-[#CBD5E0]">
            Nuestros ingenieros revisan planos de arquitectura, cargas admisibles y normativa urbanística municipal.
          </p>
        </div>
        <a
          href="#solicitar-informacion"
          className="shrink-0 px-6 py-3 text-xs font-bold text-[#16181B] bg-[#78E639] hover:bg-white rounded transition-colors cursor-pointer"
        >
          Hablar con la oficina técnica &rarr;
        </a>
      </div>

    </section>
  );
};
