import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  TreePine, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Scale, 
  Flame, 
  Zap, 
  Clock, 
  Leaf, 
  Compass, 
  Maximize2, 
  FileCheck2,
  Phone,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SobreMedgonSubmenu } from './SobreMedgonSubmenu';

interface NuestroSistemaViewProps {
  onNavigate: (view: string, modelId?: string) => void;
}

export const NuestroSistemaView: React.FC<NuestroSistemaViewProps> = ({ onNavigate }) => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);

  // Capas técnicas del muro de entramado ligero Medgón
  const wallLayers = [
    {
      num: '01',
      name: 'Revestimiento Exterior Flexible',
      detail: 'Mortero mineral transpirable sobre SATE, fachada ventilada de madera tratada o aplacado cerámico.',
      role: 'Protección intemperie y estética'
    },
    {
      num: '02',
      name: 'Tablero Estructural Exterior',
      detail: 'Tablero de fibras hidrófugo y transpirable que arriostra la estructura y permite la difusión de vapor.',
      role: 'Arriostramiento y transpirabilidad'
    },
    {
      num: '03',
      name: 'Entramado de Madera Técnica & Fibra Insuflada',
      detail: 'Montantes de madera técnica certificada con fibra de madera insuflada de alta densidad (16-24 cm).',
      role: 'Estructura portante y aislamiento biofílico'
    },
    {
      num: '04',
      name: 'Lámina Inteligente de Hermeticidad al Aire',
      detail: 'Membrana reguladora de vapor continuo. Garantiza el valor Blower Door n50 ≤ 0,6 ren/h del estándar Passivhaus.',
      role: 'Estanqueidad al aire y cero humedades'
    },
    {
      num: '05',
      name: 'Cámara Técnica de Instalaciones (Trasdosado)',
      detail: 'Espacio seco de 40 a 50 mm para tuberías, cableado eléctrico y domótica sin perforar la barrera hermética.',
      role: 'Instalaciones sin puentes térmicos'
    },
    {
      num: '06',
      name: 'Acabado Interior',
      detail: 'Placas de yeso laminado de alta resistencia o paneles de madera vista natural según diseño de interiores.',
      role: 'Bioconfort y acabado estético'
    }
  ];

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      {/* 0. SUBMENU SUPERIOR UNIFICADO DE SOBRE MEDGÓN */}
      <SobreMedgonSubmenu currentView="nuestro-sistema" onNavigate={onNavigate} />

      {/* 1. HERO EDITORIAL DEL SISTEMA CONSTRUCTIVO */}
      <section className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>INGENIERÍA INDUSTRIALIZADA EN MADERA TÉCNICA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Nuestro sistema.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Construimos todos nuestros edificios con <strong>entramado ligero de madera</strong> y forjados patentados <strong>Kerto Ripa</strong> con <strong>Marcado CE</strong>. Un sistema viable y probado para cualquier tipo de construcción: desde viviendas unifamiliares de alta gama hasta edificios plurifamiliares en altura.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="bg-[#FAF8F5] px-3.5 py-2 rounded-lg border border-[#16181B]/10 text-[#16181B] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#0DA836]" />
              Patente Metsä Wood & Marcado CE
            </span>
            <span className="bg-[#FAF8F5] px-3.5 py-2 rounded-lg border border-[#16181B]/10 text-[#16181B] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0DA836]" />
              Estándar Passivhaus Certificado
            </span>
            <span className="bg-[#FAF8F5] px-3.5 py-2 rounded-lg border border-[#16181B]/10 text-[#16181B] flex items-center gap-1.5">
              <TreePine className="w-4 h-4 text-[#0DA836]" />
              100% Madera Sostenible PEFC
            </span>
          </div>
        </div>

        {/* Cifras de Alto Rendimiento Industrial */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-[#16181B]/10">
          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Ligereza Estructural</span>
            <div className="text-3xl font-black text-[#16181B] tabular-nums">1/5 peso</div>
            <p className="text-xs text-[#5A606A]">Respecto al hormigón tradicional, reduciendo cimentación.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Luz Libre Kerto Ripa</span>
            <div className="text-3xl font-black text-[#0DA836] tabular-nums">Hasta 18 m</div>
            <p className="text-xs text-[#5A606A]">En cubiertas diáfanas sin columnas ni apoyos intermedios.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Aislamiento Continuo</span>
            <div className="text-3xl font-black text-[#16181B] tabular-nums">Fibra vegetal</div>
            <p className="text-xs text-[#5A606A]">Insuflado térmico de madera biofílica en cavidades.</p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-1 shadow-xs">
            <span className="text-[11px] font-bold text-[#8E95A2] uppercase tracking-wider block">Hermeticidad Passivhaus</span>
            <div className="text-3xl font-black text-[#16181B] tabular-nums">≤ 0,6 ren/h</div>
            <p className="text-xs text-[#5A606A]">Test Blower Door con láminas inteligentes de vapor.</p>
          </div>
        </div>
      </section>

      {/* 2. PILAR 1: MUROS DE ENTRAMADO LIGERO DE MADERA */}
      <section className="space-y-10 pt-4">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Pilar Estructural 01
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Muros de entramado ligero de madera.
          </h2>
          <p className="text-base sm:text-lg text-[#5A606A] leading-relaxed">
            Construimos todos nuestros edificios con entramado ligero de madera. Este sistema es viable y altamente eficiente para cualquier tipo de construcción, desde viviendas unifamiliares aisladas hasta promociones residenciales y edificios plurifamiliares en altura.
          </p>
        </div>

        {/* Composición Visual con Fotografía Real de Entramado Ligero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#16181B]/15 bg-[#16181B] shadow-md group">
              <img
                src="/entramado-ligero.jpg"
                alt="Muro de entramado ligero de madera técnica en proceso de fabricación industrializada Medgón"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-[#0DA836] text-white">
                  Fábrica Carrión de los Condes
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Mecanizado milimétrico y control higrométrico estricto
                </h3>
                <p className="text-xs text-white/80">
                  Montantes de madera técnica ensamblados bajo atmósfera seca y controlada.
                </p>
              </div>
            </div>

            {/* Caja de Hermeticidad y Control de Humedad */}
            <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-xl space-y-3">
              <h3 className="text-sm font-bold text-[#16181B] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0DA836]" />
                <span>Hermeticidad de la envolvente y control de humedad</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
                Para garantizar la estanqueidad de la envolvente, su hermeticidad y el control riguroso de la humedad, se utilizan <strong>láminas reguladoras de vapor y de estanqueidad al aire</strong> en toda la cara interior. Esto impide condensaciones intersticiales, previene patologías y mantiene el aire interior 100% puro y saludable.
              </p>
            </div>
          </div>

          {/* Lista de Características Oficiales del Entramado Ligero */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border-b border-[#16181B]/10 pb-3">
              <h3 className="text-lg font-bold text-[#16181B]">
                Características del sistema:
              </h3>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 bg-white border border-[#16181B]/10 rounded-xl space-y-1.5 shadow-2xs hover:border-[#0DA836]/40 transition-colors">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16181B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <h4>Sistema altamente industrializado y tecnológico</h4>
                </div>
                <p className="text-xs text-[#5A606A] leading-relaxed pl-6">
                  Muy extendido y contrastado en países del centro y norte de Europa, Japón y Norteamérica. En Medgón lo ejecutamos con control numérico en planta para una precisión milimétrica.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#16181B]/10 rounded-xl space-y-1.5 shadow-2xs hover:border-[#0DA836]/40 transition-colors">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16181B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <h4>Eficiencia energética con aislamiento insuflado</h4>
                </div>
                <p className="text-xs text-[#5A606A] leading-relaxed pl-6">
                  Insuflamos fibra de madera en las cavidades del entramado. Al ser un material continuo, rellena cualquier intersticio eliminando puentes térmicos y ofreciendo un desfase térmico inigualable.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#16181B]/10 rounded-xl space-y-1.5 shadow-2xs hover:border-[#0DA836]/40 transition-colors">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16181B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <h4>Ligereza y menor carga sobre el terreno</h4>
                </div>
                <p className="text-xs text-[#5A606A] leading-relaxed pl-6">
                  Es un sistema constructivo notablemente más ligero que el tradicional de fábrica u hormigón. Permite cimentaciones menos invasivas y resulta idóneo para parcelas complejas o ampliaciones.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#16181B]/10 rounded-xl space-y-1.5 shadow-2xs hover:border-[#0DA836]/40 transition-colors">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16181B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <h4>Flexibilidad arquitectónica y diseño a medida</h4>
                </div>
                <p className="text-xs text-[#5A606A] leading-relaxed pl-6">
                  La madera es un material extraordinariamente versátil que permite una gran flexibilidad en el diseño y construcción de diferentes edificaciones, adaptándose a las necesidades de cada propietario.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#16181B]/10 rounded-xl space-y-1.5 shadow-2xs hover:border-[#0DA836]/40 transition-colors">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16181B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <h4>Sostenibilidad y huella de carbono negativa</h4>
                </div>
                <p className="text-xs text-[#5A606A] leading-relaxed pl-6">
                  La madera es un recurso renovable y sostenible que fija CO₂. La madera que utilizamos en Medgón siempre proviene de explotaciones gestionadas responsablemente con sellos PEFC y FSC.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#16181B]/10 rounded-xl space-y-1.5 shadow-2xs hover:border-[#0DA836]/40 transition-colors">
                <div className="flex items-center gap-2 font-bold text-sm text-[#16181B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0" />
                  <h4>Rapidez de montaje y obra en seco</h4>
                </div>
                <p className="text-xs text-[#5A606A] leading-relaxed pl-6">
                  Debido a la ligereza y precisión de las piezas, las estructuras de entramado ligero se ensamblan en plazos récord en comparación con métodos tradicionales pesados.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Explorador Interactivo de Estratigrafía del Muro */}
        <div className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0DA836]">
                Detalle Constructivo
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16181B]">
                Estratigrafía multicapa del muro exterior Medgón
              </h3>
            </div>
            <span className="text-xs text-[#5A606A]">
              Selecciona una capa para consultar su función técnica:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {wallLayers.map((layer, idx) => (
              <button
                key={layer.num}
                type="button"
                onClick={() => setSelectedLayerIndex(idx)}
                className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                  selectedLayerIndex === idx
                    ? 'bg-[#16181B] text-white border-[#16181B] shadow-sm'
                    : 'bg-white text-[#16181B] border-[#16181B]/10 hover:border-[#16181B]/30'
                }`}
              >
                <div className={`text-xs font-black mb-1 ${selectedLayerIndex === idx ? 'text-[#78E639]' : 'text-[#8E95A2]'}`}>
                  Capa {layer.num}
                </div>
                <div className="text-xs font-bold line-clamp-2">
                  {layer.name}
                </div>
              </button>
            ))}
          </div>

          {/* Detalle de la capa seleccionada */}
          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#0DA836]">
              <span>Capa {wallLayers[selectedLayerIndex].num} · {wallLayers[selectedLayerIndex].role}</span>
              <span className="text-[#8E95A2] font-normal">Estándar Passivhaus Certificado</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#16181B]">
              {wallLayers[selectedLayerIndex].name}
            </h4>
            <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed">
              {wallLayers[selectedLayerIndex].detail}
            </p>
          </div>
        </div>
      </section>

      {/* 3. PILAR 2: FORJADOS DE KERTO RIPA (METSÄ WOOD & MARCADO CE) */}
      <section className="space-y-10 pt-4">
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181B] text-white text-xs font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-[#78E639]" />
            <span>Patente Exclusiva & Marcado CE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#16181B]">
            Forjados de Kerto Ripa.
          </h2>
          <p className="text-base sm:text-lg text-[#5A606A] leading-relaxed">
            <strong>Medgón tiene el Marcado CE para la producción del sistema Kerto Ripa Elements</strong>, un sistema creado y patentado por <strong>Metsä Wood</strong>. La producción del Kerto Ripa no es la fabricación de un forjado cualquiera: al haber adquirido el ETA (Evaluación Técnica Europea), nos comprometemos a fabricar con las exigencias y tolerancias estrictas de la patente.
          </p>
        </div>

        {/* Tarjeta Destacada de Patente y Certificación Oficial */}
        <div className="bg-[#16181B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#78E639]/20 border border-[#78E639]/40 text-[#78E639] text-xs font-bold uppercase">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Certificación Oficial ETA & CE Concedida a Medgón</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ingeniería de Madera Microlaminada (LVL) con Unión Estructural
              </h3>

              <p className="text-sm sm:text-base text-[#CBD5E0] leading-relaxed">
                El panel <strong>Kerto-Ripa</strong> es un elemento de construcción de madera estructural de alto rendimiento, combinado con <strong>paneles Kerto Q</strong> y <strong>costillas Kerto S</strong> mediante adhesivo estructural cruzado. Puede utilizarse tanto como <strong>elemento de suelo (forjado intermedio)</strong> como de <strong>cubierta</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-[#78E639] uppercase tracking-wide">
                    Solución de Suelo
                  </div>
                  <div className="text-xl font-black text-white">Hasta 8 metros</div>
                  <p className="text-xs text-[#A0AEC0]">
                    Pisos intermedios de gran envergadura (7.900 mm) con máxima rigidez y nula vibración.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-[#78E639] uppercase tracking-wide">
                    Solución de Cubierta
                  </div>
                  <div className="text-xl font-black text-white">Hasta 18 metros</div>
                  <p className="text-xs text-[#A0AEC0]">
                    Luces continuas que permiten eliminar columnas interiores y maximizar la libertad de diseño.
                  </p>
                </div>
              </div>

              <div className="text-xs text-[#A0AEC0] pt-1">
                La industrialización del sistema y el uso de la madera como material principal permiten ejecutar forjados y cubiertas de una forma <strong>rápida, eficiente y segura</strong>.
              </div>
            </div>

            {/* Fotografía del Certificado Oficial Metsä Wood */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-3 rounded-2xl border-4 border-white/20 shadow-2xl max-w-sm w-full">
                <img
                  src="/certificado-kerto-ripa.png"
                  alt="Certificado oficial Kerto Ripa CE concedido a Medgón por Metsä Wood"
                  className="w-full h-auto rounded-lg object-contain"
                />
                <div className="pt-2 text-center">
                  <span className="text-[11px] font-bold text-[#16181B] block">
                    Marcado CE Kerto Ripa Elements
                  </span>
                  <span className="text-[10px] text-[#5A606A]">
                    European Technical Assessment (ETA)
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Ficha Técnica de Dimensiones & Propiedades Kerto Ripa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-[#16181B]/10 pb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#16181B]">
                Ficha Técnica Kerto Ripa (Metsä Wood)
              </h3>
              <span className="text-xs font-mono text-[#0DA836]">Normativa EN 14374</span>
            </div>

            <div className="overflow-hidden border border-[#16181B]/15 rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-[#16181B]/10">
                  <tr className="bg-[#FAF8F5]">
                    <td className="py-3 px-4 font-bold text-[#16181B]">Uso típico</td>
                    <td className="py-3 px-4 text-[#5A606A]">Suelos (pisos intermedios) y cubiertas diáfanas</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#16181B]">Material estructural</td>
                    <td className="py-3 px-4 text-[#5A606A]">Madera microlaminada Kerto LVL con adhesivo cruzado</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="py-3 px-4 font-bold text-[#16181B]">Altura del forjado</td>
                    <td className="py-3 px-4 text-[#5A606A]">200 – 400 mm (según cálculo de sobrecarga y luz)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#16181B]">Envergadura (Luz libre)</td>
                    <td className="py-3 px-4 font-bold text-[#0DA836]">Hasta 7.900 mm en suelos · Hasta 18.000 mm en cubierta</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="py-3 px-4 font-bold text-[#16181B]">Espesor de paneles</td>
                    <td className="py-3 px-4 text-[#5A606A]">39 – 90 mm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#16181B]">Garantía y Patente</td>
                    <td className="py-3 px-4 text-[#5A606A]">Marcado CE europeo y ETA supervisado por Metsä Wood</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#FAF8F5] border border-[#16181B]/10 rounded-xl flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#0DA836] shrink-0 mt-0.5" />
              <div className="text-xs text-[#5A606A] leading-relaxed space-y-1">
                <span className="font-bold text-[#16181B] block">Sin pilares descolgados</span>
                <p>
                  Gracias a su extraordinaria relación resistencia/peso, Kerto Ripa elimina vigas peraltadas descolgadas en techos, logrando alturas libres limpias para paso de conductos de ventilación VMC o diseño arquitectónico contemporáneo.
                </p>
              </div>
            </div>
          </div>

          {/* Galería de Fotografías Reales de Forjados Kerto Ripa en Medgón */}
          <div className="lg:col-span-6 space-y-4">
            <div className="border-b border-[#16181B]/10 pb-3">
              <h3 className="text-lg font-bold text-[#16181B]">
                Producción en taller e instalación en obra
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden shadow-2xs group">
                <div className="h-44 overflow-hidden bg-[#FAF8F5]">
                  <img
                    src="/sistema-forjado-estructuras.webp"
                    alt="Esquema estructural del forjado Kerto Ripa de costillas y paneles cruzados"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-[#16181B]">
                    Sección estructural Kerto-Ripa
                  </h4>
                  <p className="text-[11px] text-[#5A606A]">
                    Costillas Kerto S y tableros Kerto Q ensamblados con adhesivo estructural.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#16181B]/10 rounded-xl overflow-hidden shadow-2xs group">
                <div className="h-44 overflow-hidden bg-[#FAF8F5]">
                  <img
                    src="/forjado-kerto.webp"
                    alt="Panel de forjado Kerto Ripa listo para montaje en taller de Medgón"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-[#16181B]">
                    Fabricación en entorno controlado
                  </h4>
                  <p className="text-[11px] text-[#5A606A]">
                    Encolado y prensado robotizado sin desviaciones dimensionales.
                  </p>
                </div>
              </div>

              <div className="sm:col-span-2 bg-white border border-[#16181B]/10 rounded-xl overflow-hidden shadow-2xs group">
                <div className="h-48 overflow-hidden bg-[#FAF8F5]">
                  <img
                    src="/forjado-ripa-techo.webp"
                    alt="Techo acabado con forjado Kerto Ripa visto en vivienda residencial"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[#16181B]">
                      Acabado de techo con Kerto Ripa visto
                    </h4>
                    <span className="text-[10px] font-bold text-[#0DA836] bg-[#0DA836]/10 px-2 py-0.5 rounded">
                      Calidez & Bioconfort
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5A606A] mt-0.5">
                    Aporta la textura noble y natural de la madera vista sin necesidad de falsos techos añadidos.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 4. COMPARATIVA: SISTEMA MEDGÓN VS. CONSTRUCCIÓN TRADICIONAL */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0DA836]">
            Comparativa Constructiva
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16181B] tracking-tight">
            ¿Por qué elegir el sistema industrializado de Medgón?
          </h2>
          <p className="text-xs sm:text-sm text-[#5A606A]">
            Diferencias tangibles entre nuestra metodología en madera técnica y la edificación convencional de obra húmeda:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2 shadow-2xs">
            <Clock className="w-5 h-5 text-[#0DA836]" />
            <h3 className="text-sm font-bold text-[#16181B]">
              Tiempos: Hasta un 60% más rápido
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              La simultaneidad de cimentación en parcela y fabricación en taller climatizado reduce la duración de la obra a unos 6 meses, eliminando retrasos por meteorología.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2 shadow-2xs">
            <Zap className="w-5 h-5 text-[#0DA836]" />
            <h3 className="text-sm font-bold text-[#16181B]">
              Consumo: Hasta 85% menos energía
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              El aislamiento continuo de fibra de madera y la estanqueidad ensayada con Blower Door permiten alcanzar el estándar Passivhaus y un consumo casi nulo (ECCN).
            </p>
          </div>

          <div className="p-5 bg-white border border-[#16181B]/10 rounded-xl space-y-2 shadow-2xs">
            <Scale className="w-5 h-5 text-[#0DA836]" />
            <h3 className="text-sm font-bold text-[#16181B]">
              Presupuesto cerrado sin sorpresas
            </h3>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              El modelado BIM y el mecanizado por control numérico evitan imprevistos en obra. Lo que se diseña en fábrica es exactamente lo que se presupuesta y monta.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA INFERIOR: CONSULTA TÉCNICA MEDGÓN */}
      <section className="bg-[#16181B] text-white rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="max-w-2xl space-y-3 text-center lg:text-left">
          <div className="text-xs font-bold text-[#78E639] uppercase tracking-wider">
            Oficina Técnica en Carrión de los Condes (Palencia)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            ¿Quieres aplicar nuestro sistema a tu futuro proyecto?
          </h2>
          <p className="text-xs sm:text-sm text-[#CBD5E0] leading-relaxed">
            Tanto si eres particular autopromotor, arquitecto o promotor inmobiliario, nuestro equipo de ingeniería te asesora sobre la viabilidad técnica, el cálculo de cargas y el modelo que mejor encaja en tu terreno.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/80">
            <a href="tel:979881010" className="flex items-center gap-1.5 hover:text-[#78E639] transition-colors">
              <Phone className="w-4 h-4 text-[#78E639]" />
              <span>979 88 10 10</span>
            </a>
            <span className="hidden sm:inline">·</span>
            <a href="mailto:informacion@medgon.com" className="flex items-center gap-1.5 hover:text-[#78E639] transition-colors">
              <Mail className="w-4 h-4 text-[#78E639]" />
              <span>informacion@medgon.com</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold text-[#16181B] bg-[#78E639] hover:bg-white rounded transition-colors cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Hablemos de tu proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={() => onNavigate('catalog')}
            className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 rounded transition-colors cursor-pointer text-center"
          >
            Ver modelos disponibles
          </button>
        </div>
      </section>

    </div>
  );
};
