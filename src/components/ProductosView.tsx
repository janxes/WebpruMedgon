import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Home, 
  School, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Boxes,
  ExternalLink
} from 'lucide-react';
import { ProductosSubmenu, ProductViewKey } from './ProductosSubmenu';

export type ProductCategory = 
  | 'todos'
  | 'unifamiliares'
  | 'terciario'
  | 'plurifamiliares'
  | 'derecho-vuelo'
  | 'fachadas'
  | 'cubiertas';

interface ProductosViewProps {
  initialCategory?: ProductCategory;
  onNavigate: (view: string, modelId?: string) => void;
}

export const ProductosView: React.FC<ProductosViewProps> = ({ 
  initialCategory = 'todos',
  onNavigate 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const products = [
    {
      id: 'unifamiliares',
      category: 'unifamiliares' as ProductCategory,
      viewKey: 'productos-unifamiliares',
      badge: 'Residencial Passivhaus · Obra Nueva',
      title: 'Viviendas unifamiliares y en promoción',
      shortDesc: 'Viviendas de alta eficiencia energética a medida y promociones unifamiliares industrializadas.',
      image: '/viviendas-unifamiliares-promocion.webp',
      imageAlt: 'Viviendas unifamiliares industrializadas de madera técnica Medgón',
      caseStudy: 'Caso de éxito: Vivienda unifamiliar Passivhaus en Marratxí (Mallorca)',
      fullDesc: 'Fabricamos viviendas unifamiliares que combinan el confort biológico de la madera técnica con el estándar Passivhaus más estricto. Tanto si partes de un diseño exclusivo de tu arquitecto como si eliges uno de nuestros modelos de catálogo cerrado, resolvemos la ingeniería en taller para montar en parcela en tiempo récord.',
      features: [
        'Ahorro de hasta el 85% en climatización gracias a la envolvente térmica continua.',
        'Montaje de la estructura y hermeticidad en parcela en solo 6 jornadas.',
        'Plazo de entrega total de unos 6 meses con presupuesto 100% cerrado.',
        'Acabados exteriores versátiles: madera termotratada, mortero mineral o fachada ventilada.'
      ],
      tags: ['Passivhaus Classic / Plus', 'Entramado Ligero', 'Autopromotores & Promotores'],
      ctaAction: () => onNavigate('productos-unifamiliares'),
      ctaLabel: 'Ver página completa de unifamiliares'
    },
    {
      id: 'terciario',
      category: 'terciario' as ProductCategory,
      viewKey: 'productos-terciario',
      badge: 'Equipamientos & Espacios Públicos',
      title: 'Edificios de uso terciario',
      shortDesc: 'Fabricamos edificios para necesidades tanto empresariales como de uso público y dotacional.',
      image: '/edificios-uso-terciario.webp',
      imageAlt: 'Edificio terciario y educativo construido en madera técnica por Medgón',
      caseStudy: 'Caso de éxito: Colegio Libre Waldorf en Aravaca (Madrid)',
      fullDesc: 'Fabricamos edificios terciarios adaptados a normativas de alta exigencia: centros educativos, escuelas infantiles, clínicas, espacios sociosanitarios, sedes corporativas y oficinas sostenibles. La madera técnica proporciona un ambiente saludable, acústicamente absorbente y libre de compuestos orgánicos volátiles, idóneo para la infancia y el trabajo.',
      features: [
        'Espacios saludables con calidad de aire interior monitorizado y ventilación VMC.',
        'Rápida ejecución en períodos no lectivos o vacacionales, minimizando molestias.',
        'Grandes luces diáfanas gracias a forjados Kerto Ripa y vigas laminadas (hasta 18 m).',
        'Huella de carbono neutra o negativa, alineada con certificaciones BREEAM y LEED.'
      ],
      tags: ['Colegios & Guarderías', 'Centros Sanitarios', 'Oficinas Corporativas'],
      ctaAction: () => onNavigate('productos-terciario'),
      ctaLabel: 'Ver página completa de terciario'
    },
    {
      id: 'plurifamiliares',
      category: 'plurifamiliares' as ProductCategory,
      viewKey: 'productos-plurifamiliares',
      badge: 'Construcción en Altura · Residencial Colectivo',
      title: 'Edificios plurifamiliares en altura',
      shortDesc: 'Estructuras completas de madera en altura y cerramientos para construcción híbrida.',
      image: '/edificios-plurifamiliares-altura.jpg',
      imageAlt: 'Edificio plurifamiliar en altura construido con entramado y paneles de madera técnica',
      caseStudy: 'Caso de éxito: 4 VPO en Villamuriel de Cerrato (Palencia)',
      fullDesc: 'Fabricamos tanto edificios completos de estructura de madera técnica en altura como fachadas y forjados industrializados para favorecer la construcción híbrida (núcleos de hormigón o acero con envolvente ligera de madera). Una respuesta industrializada y descarbonizada para vivienda protegida (VPO), Build-to-Rent (BTR) y promociones residenciales colectivas.',
      features: [
        'Reducción de hasta un 60% del peso sobre la cimentación respecto a obra tradicional.',
        'Industrialización robotizada que reduce los plazos de obra hasta en 12 meses.',
        'Aislamiento acústico entre viviendas certificado cumpliendo DB-HR y Passivhaus.',
        'Fabricación en condiciones climatizadas que garantiza la estanqueidad y seguridad.'
      ],
      tags: ['Vivienda Colectiva', 'Construcción Híbrida', 'Promociones BTR / VPO'],
      ctaAction: () => onNavigate('productos-plurifamiliares'),
      ctaLabel: 'Ver página completa de plurifamiliares'
    },
    {
      id: 'derecho-vuelo',
      category: 'derecho-vuelo' as ProductCategory,
      viewKey: 'productos-derecho-vuelo',
      badge: 'Remontas Urbanas · Marca Altior',
      title: 'Derecho de vuelo (Remontas sobre azoteas)',
      shortDesc: 'Ampliación de superficie construida sobre azoteas existentes sumando más alturas.',
      image: '/derecho-de-vuelo-madera.jpg',
      imageAlt: 'Remonta de madera técnica sobre azotea de edificio urbano existente',
      caseStudy: 'Especialistas en remonta de edificios antiguos en entornos urbanos consolidados',
      fullDesc: 'Somos especialistas en proyectos de ampliación de la superficie construida de edificios sobre azoteas o “derecho a vuelo”, sumando más alturas con soluciones innovadoras de madera técnica. Realizamos el cálculo de estructuras en madera para revivir edificios antiguos y realizar una mejora significativa en espacios urbanos complejos.',
      features: [
        'Ligereza extrema: la madera técnica pesa 1/5 respecto al hormigón tradicional.',
        'Montaje en seco y sin necesidad de desalojar el edificio durante las obras.',
        'Mejora térmica integral del inmueble, modernizando la cubierta y la estética.',
        'Fabricación prefabricada en taller cerrado que elimina ruidos prolongados a los vecinos.'
      ],
      tags: ['Ampliación sobre Azoteas', 'Nuevos Áticos Exclusivos', 'Rehabilitación Urbana'],
      ctaAction: () => onNavigate('productos-derecho-vuelo'),
      ctaLabel: 'Ver página completa de derecho de vuelo'
    },
    {
      id: 'fachadas',
      category: 'fachadas' as ProductCategory,
      viewKey: 'productos-fachadas',
      badge: 'Envolventes Térmicas Continuas · Passivhaus',
      title: 'Fachadas industrializadas',
      shortDesc: 'Cerramientos prefabricados que se integran en la construcción híbrida sin puentes térmicos.',
      image: '/fachadas-industrializadas-madera.png',
      imageAlt: 'Fachada industrializada en madera técnica montada en obra híbrida',
      caseStudy: 'Integración en obra nueva y rehabilitación térmica integral de envolventes',
      fullDesc: 'Realizamos fachadas industrializadas que se integran perfectamente en la construcción híbrida, combinando el uso de materiales prefabricados en madera técnica con técnicas tradicionales. Proporcionan una envolvente hermética al aire y libre de puentes térmicos en carpinterías y encuentros.',
      features: [
        'Aislamiento continuo con fibra de madera insuflada y carpinterías herméticas de fábrica.',
        'Compatibilidad total con morteros minerales, aplacados cerámicos o fachadas ventiladas.',
        'Fabricación en entorno controlado que reduce a cero los defectos de obra húmeda.',
        'Ahorro térmico inmediato y erradicación total de humedades por condensación.'
      ],
      tags: ['Cero Puentes Térmicos', 'Envolvente Passivhaus', 'Construcción Híbrida'],
      ctaAction: () => onNavigate('productos-fachadas'),
      ctaLabel: 'Ver página completa de fachadas'
    },
    {
      id: 'cubiertas',
      category: 'cubiertas' as ProductCategory,
      viewKey: 'productos-cubiertas',
      badge: 'Estructuras de Ultra Precisión · Leica 3D',
      title: 'Cubiertas de madera mecanizadas',
      shortDesc: 'Cálculo, diseño y mecanizado CNC de cubiertas con tecnología de escaneado Leica 3D.',
      image: '/cubiertas-de-madera-leica.jpg',
      imageAlt: 'Estructura de cubierta de madera mecanizada por control numérico con tecnología Leica',
      caseStudy: 'Toma de datos con escáner láser 3D Leica Geosystems y mecanizado milimétrico',
      fullDesc: 'Ofrecemos soluciones integrales para estructuras y cubiertas de madera, tanto en obra nueva como en rehabilitación. Analizamos cada encuentro de la estructura y diseñamos de manera óptima en modelado 3D BIM. Las piezas se elaboran en fábrica robotizada para un encaje ultra preciso y seguro.',
      features: [
        'Escáner tridimensional Leica Geosystems para capturar deformaciones y desplomes reales.',
        'Corte y mecanizado robotizado CNC: ensambles perfectos sin ajustes improvisados en obra.',
        'Cierre de cubierta en tiempo récord, protegiendo la vivienda frente a las lluvias.',
        'Vigas vistas de madera laminada con calidez biofílica y resistencia estructural.'
      ],
      tags: ['Tecnología Leica 3D', 'Mecanizado CNC', 'Rehabilitación y Obra Nueva'],
      ctaAction: () => onNavigate('productos-cubiertas'),
      ctaLabel: 'Ver página completa de cubiertas'
    }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      
      {/* 0. SUBMENU SUPERIOR UNIFICADO DE PRODUCTOS */}
      <ProductosSubmenu currentProduct="productos" onNavigate={onNavigate} />

      {/* 1. HERO PRODUCTOS */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Boxes className="w-3.5 h-3.5" />
            <span>SOLUCIONES INDUSTRIALIZADAS EN MADERA TÉCNICA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Nuestros productos.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Soluciones estructurales y de envolvente para cualquier escala arquitectónica: desde <strong>viviendas unifamiliares Passivhaus</strong> hasta <strong>colegios, edificios en altura, remontas sobre azoteas, fachadas industrializadas y cubiertas de ultra precisión</strong>.
          </p>
        </div>

        {/* Selector de Filtros por Categoría */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8E95A2] mr-2">Filtrar por:</span>
          {[
            { id: 'todos', label: `Todos (${products.length})` },
            { id: 'unifamiliares', label: 'Unifamiliares' },
            { id: 'terciario', label: 'Uso Terciario' },
            { id: 'plurifamiliares', label: 'Plurifamiliares' },
            { id: 'derecho-vuelo', label: 'Derecho de Vuelo' },
            { id: 'fachadas', label: 'Fachadas' },
            { id: 'cubiertas', label: 'Cubiertas' },
          ].map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id as ProductCategory)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#16181B] text-white shadow-2xs font-bold'
                  : 'bg-[#FAF8F5] text-[#5A606A] hover:text-[#16181B] border border-[#16181B]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Métricas Generales de Producción */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-[#16181B]/10">
          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Estándar Energético</span>
            <div className="text-2xl sm:text-3xl font-black text-[#0DA836] tabular-nums">Passivhaus</div>
            <p className="text-xs text-[#5A606A]">Consumo casi nulo y ensayos de estanqueidad Blower Door.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Reducción de Plazos</span>
            <div className="text-2xl sm:text-3xl font-black text-[#16181B] tabular-nums">-60% tiempo</div>
            <p className="text-xs text-[#5A606A]">Simultaneidad de obra en parcela y mecanizado en taller.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Patentes & Certificación</span>
            <div className="text-2xl sm:text-3xl font-black text-[#16181B] tabular-nums">Kerto CE & ETA</div>
            <p className="text-xs text-[#5A606A]">Forjados homologados y madera sostenible PEFC/FSC.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Ingeniería BIM 3D</span>
            <div className="text-2xl sm:text-3xl font-black text-[#16181B] tabular-nums">Leica 3D</div>
            <p className="text-xs text-[#5A606A]">Modelado Cadwork y escaneado láser milimétrico.</p>
          </div>
        </div>
      </section>

      {/* 2. CATÁLOGO DETALLADO DE PRODUCTOS */}
      <section className="space-y-12">
        {filteredProducts.map((prod, idx) => (
          <article
            key={prod.id}
            id={prod.id}
            className="bg-white border border-[#16181B]/10 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Imagen del Producto */}
              <div className={`lg:col-span-5 relative min-h-[300px] sm:min-h-[420px] bg-[#FAF8F5] overflow-hidden ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <img
                  src={prod.image}
                  alt={prod.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-[#16181B]/85 backdrop-blur-md text-white border border-white/10">
                    {prod.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-white/90 font-medium bg-black/40 backdrop-blur-xs p-2.5 rounded-lg border border-white/10">
                    ★ {prod.caseStudy}
                  </p>
                </div>
              </div>

              {/* Contenido Técnico del Producto */}
              <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${
                idx % 2 === 1 ? 'lg:order-1' : ''
              }`}>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {prod.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#0DA836]/10 text-[#0DA836] rounded-md border border-[#0DA836]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16181B] tracking-tight">
                    {prod.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#16181B] font-medium leading-relaxed">
                    {prod.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#16181B]/10">
                    <span className="text-xs font-bold text-[#16181B] uppercase tracking-wider block">
                      Ventajas técnicas destacadas:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A606A]">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 p-2 bg-[#FAF8F5] rounded border border-[#16181B]/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="pt-4 border-t border-[#16181B]/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onNavigate(prod.viewKey)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#16181B] hover:bg-[#0DA836] rounded transition-colors cursor-pointer"
                    >
                      <span>Ver página completa</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {prod.id === 'unifamiliares' && (
                      <button
                        type="button"
                        onClick={() => onNavigate('catalog')}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0DA836] hover:bg-[#0DA836]/10 rounded border border-[#0DA836]/30 transition-colors cursor-pointer"
                      >
                        <span>Ver modelos de catálogo</span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#5A606A]">
                    <ShieldCheck className="w-4 h-4 text-[#0DA836]" />
                    <span>Ingeniería en Palencia · Marcado CE</span>
                  </div>
                </div>

              </div>

            </div>
          </article>
        ))}
      </section>

      {/* 3. TABLA COMPARATIVA DE SOLUCIONES INDUSTRIALIZADAS */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0DA836]">
            Matriz de Soluciones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16181B] tracking-tight">
            Resumen técnico por tipología de producto
          </h2>
          <p className="text-xs sm:text-sm text-[#5A606A]">
            Características clave de nuestra ingeniería aplicada a cada necesidad constructiva:
          </p>
        </div>

        <div className="overflow-x-auto border border-[#16181B]/10 rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#16181B] text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Producto</th>
                <th className="py-3 px-4">Sistema Estructural</th>
                <th className="py-3 px-4">Luces Máximas</th>
                <th className="py-3 px-4">Plazo en Parcela</th>
                <th className="py-3 px-4">Página</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#16181B]/10 text-xs">
              <tr className="hover:bg-[#FAF8F5]">
                <td className="py-3 px-4 font-bold text-[#16181B]">Unifamiliares</td>
                <td className="py-3 px-4 text-[#5A606A]">Entramado ligero & Kerto Ripa</td>
                <td className="py-3 px-4 text-[#5A606A]">Hasta 8 m</td>
                <td className="py-3 px-4 font-bold text-[#0DA836]">~6 meses total</td>
                <td className="py-3 px-4">
                  <button onClick={() => onNavigate('productos-unifamiliares')} className="text-[#0DA836] font-bold hover:underline cursor-pointer">
                    Ver ficha &rarr;
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="py-3 px-4 font-bold text-[#16181B]">Uso Terciario</td>
                <td className="py-3 px-4 text-[#5A606A]">Madera técnica & CLT</td>
                <td className="py-3 px-4 text-[#5A606A]">Hasta 18 m en cubierta</td>
                <td className="py-3 px-4 font-bold text-[#0DA836]">Períodos vacacionales</td>
                <td className="py-3 px-4">
                  <button onClick={() => onNavigate('productos-terciario')} className="text-[#0DA836] font-bold hover:underline cursor-pointer">
                    Ver ficha &rarr;
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="py-3 px-4 font-bold text-[#16181B]">Plurifamiliares</td>
                <td className="py-3 px-4 text-[#5A606A]">Madera en altura / Híbrida</td>
                <td className="py-3 px-4 text-[#5A606A]">Hasta 8 m en forjados</td>
                <td className="py-3 px-4 font-bold text-[#0DA836]">-12 meses vs tradicional</td>
                <td className="py-3 px-4">
                  <button onClick={() => onNavigate('productos-plurifamiliares')} className="text-[#0DA836] font-bold hover:underline cursor-pointer">
                    Ver ficha &rarr;
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="py-3 px-4 font-bold text-[#16181B]">Derecho de Vuelo</td>
                <td className="py-3 px-4 text-[#5A606A]">Estructura ligera ultra reducida</td>
                <td className="py-3 px-4 text-[#5A606A]">Cálculo sobre forjado existente</td>
                <td className="py-3 px-4 font-bold text-[#0DA836]">Sin desalojar finca</td>
                <td className="py-3 px-4">
                  <button onClick={() => onNavigate('productos-derecho-vuelo')} className="text-[#0DA836] font-bold hover:underline cursor-pointer">
                    Ver ficha &rarr;
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="py-3 px-4 font-bold text-[#16181B]">Fachadas</td>
                <td className="py-3 px-4 text-[#5A606A]">Envolvente de entramado cerrado</td>
                <td className="py-3 px-4 text-[#5A606A]">Modulación a medida</td>
                <td className="py-3 px-4 font-bold text-[#0DA836]">Montaje en seco inmediato</td>
                <td className="py-3 px-4">
                  <button onClick={() => onNavigate('productos-fachadas')} className="text-[#0DA836] font-bold hover:underline cursor-pointer">
                    Ver ficha &rarr;
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-[#FAF8F5]">
                <td className="py-3 px-4 font-bold text-[#16181B]">Cubiertas</td>
                <td className="py-3 px-4 text-[#5A606A]">Vigas mecanizadas CNC & Leica 3D</td>
                <td className="py-3 px-4 text-[#5A606A]">Hasta 18 m diáfanos</td>
                <td className="py-3 px-4 font-bold text-[#0DA836]">Cierre en 48 horas</td>
                <td className="py-3 px-4">
                  <button onClick={() => onNavigate('productos-cubiertas')} className="text-[#0DA836] font-bold hover:underline cursor-pointer">
                    Ver ficha &rarr;
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. CTA INFERIOR */}
      <section className="bg-[#16181B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-bold text-[#78E639] uppercase tracking-wider">
            Oficina Técnica en Palencia
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            ¿Tienes un proyecto en mente y necesitas asesoramiento técnico?
          </h3>
          <p className="text-xs text-[#CBD5E0]">
            Analizamos tu anteproyecto o parcela para recomendarte la solución óptima en madera técnica.
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
