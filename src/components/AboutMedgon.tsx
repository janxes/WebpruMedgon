import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  TreePine, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Scale, 
  Sparkles, 
  Wind, 
  Flame, 
  VolumeX, 
  Home, 
  Smartphone, 
  Droplet, 
  Maximize2, 
  FileCheck, 
  Building2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface AboutMedgonProps {
  onGoToCalculator: () => void;
  onAskAdvisor: (question?: string) => void;
}

export const AboutMedgon: React.FC<AboutMedgonProps> = ({
  onGoToCalculator,
  onAskAdvisor,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const advantages = [
    {
      id: 'ahorro',
      category: 'ahorro',
      categoryLabel: 'Ahorro & Energía',
      title: 'Ahorro en energía',
      subtitle: 'Hasta 70% menos en calefacción y climatización',
      desc: 'La vivienda se construye con los criterios Passivhaus, con mucho aislamiento (24 cm en muros y tejado). Eso significa que gastas hasta un 70% menos en calefacción y aire acondicionado comparado con una casa “normal”.',
      metric: '24 cm aislamiento',
      metricLabel: 'Envolvente continua térmica',
      icon: Zap,
      accentColor: 'border-emerald-500 text-emerald-600 bg-emerald-50',
    },
    {
      id: 'confort',
      category: 'confort',
      categoryLabel: 'Confort & Bienestar',
      title: 'Confort todo el año',
      subtitle: '20-22 °C constantes y silencio absoluto',
      desc: 'El aislamiento y la hermeticidad hacen que en casa siempre tengas una temperatura agradable y además te aísles del ruido exterior.',
      metric: '20-22 °C',
      metricLabel: 'Estabilidad térmica sin oscilaciones',
      icon: ShieldCheck,
      accentColor: 'border-blue-500 text-blue-600 bg-blue-50',
    },
    {
      id: 'sostenibilidad',
      category: 'sostenibilidad',
      categoryLabel: 'Sostenibilidad',
      title: 'Materiales naturales y sostenibles',
      subtitle: 'Madera de bosques sostenibles con sello PEFC',
      desc: 'Usamos madera de bosques gestionados de forma responsable (con sello PEFC). Es una construcción respetuosa con el medio ambiente.',
      metric: 'Sello PEFC',
      metricLabel: 'Madera certificada y captura de CO₂',
      icon: TreePine,
      accentColor: 'border-[#427500] text-[#427500] bg-[#6BBE00]/10',
    },
    {
      id: 'ventanas',
      category: 'confort',
      categoryLabel: 'Aislamiento Acústico & Térmico',
      title: 'Ventanas premium',
      subtitle: 'Carpinterías de PVC triple cristal y doble cámara',
      desc: 'Carpinterías de PVC con triple cristal y doble cámara. Eso se traduce en mejor aislamiento, menor ruido y mayor ahorro.',
      metric: 'Triple Vidrio',
      metricLabel: 'Doble cámara con gas argón',
      icon: Maximize2,
      accentColor: 'border-indigo-500 text-indigo-600 bg-indigo-50',
    },
    {
      id: 'persianas',
      category: 'tecnologia',
      categoryLabel: 'Domótica & Hermeticidad',
      title: 'Persianas automáticas',
      subtitle: 'Control inteligente sin filtraciones de aire',
      desc: 'Persianas motorizadas, con opción de controlarlas desde el móvil o mediante domótica. Menor infiltraciones de aire desde el exterior.',
      metric: '100% Motorizadas',
      metricLabel: 'Sin cajón pasante ni fugas de aire',
      icon: Smartphone,
      accentColor: 'border-cyan-500 text-cyan-600 bg-cyan-50',
    },
    {
      id: 'aire',
      category: 'confort',
      categoryLabel: 'Salud & Calidad de Aire',
      title: 'Aire limpio y reciclado',
      subtitle: 'Ventilación mecánica VMC continua 24 horas',
      desc: 'Instalamos un sistema de ventilación que renueva el aire de toda la vivienda sin perder la energía acumulada y que funciona 24h. Siempre respiras aire fresco.',
      metric: 'Recuperador >90%',
      metricLabel: 'Filtros F7 anti-polen y alérgenos',
      icon: Wind,
      accentColor: 'border-teal-500 text-teal-600 bg-teal-50',
    },
    {
      id: 'clima_radiante',
      category: 'confort',
      categoryLabel: 'Climatización Invisible',
      title: 'Calefacción y climatización radiante',
      subtitle: 'Calor y refrescamiento invisible en techos y paredes',
      desc: 'Instalada en techos y paredes. Te da calor uniforme en toda la casa, sin radiadores ni zonas frías. También en techos y paredes, para refrescar la casa en verano sin las molestias del aire acondicionado.',
      metric: 'Cero Corrientes',
      metricLabel: 'Calor uniforme sin zonas frías',
      icon: Sparkles,
      accentColor: 'border-amber-500 text-amber-600 bg-amber-50',
    },
    {
      id: 'aerotermia',
      category: 'ahorro',
      categoryLabel: 'Eficiencia Energética',
      title: 'Energía eficiente con aerotermia',
      subtitle: 'Máximo rendimiento con mínimo consumo eléctrico',
      desc: 'El sistema de calefacción y refrigeración funciona con aerotermia, mucho más eficiente y con menor gasto.',
      metric: 'COP > 4.0',
      metricLabel: 'Por cada 1 kW eléctrico produce 4 kW térmicos',
      icon: Flame,
      accentColor: 'border-orange-500 text-orange-600 bg-orange-50',
    },
    {
      id: 'muros',
      category: 'construccion',
      categoryLabel: 'Resistencia & Seguridad',
      title: 'Muros resistentes y silenciosos',
      subtitle: 'Placas Fermacell de fibra-yeso de alta densidad',
      desc: 'Las paredes llevan placas especiales (Fermacell) que aíslan mejor del ruido, resisten golpes, aguantan el fuego y funcionan incluso en zonas húmedas.',
      metric: 'Placas Fermacell',
      metricLabel: 'Ignífugas, hidrófugas y anti-impacto',
      icon: VolumeX,
      accentColor: 'border-slate-500 text-slate-700 bg-slate-100',
    },
    {
      id: 'obra_limpia',
      category: 'construccion',
      categoryLabel: 'Economía Circular',
      title: 'Obra más limpia y económica',
      subtitle: 'Montaje en seco sin vertidos ni residuos',
      desc: 'Al ser un sistema en seco, generamos menos residuos y se ahorra en contenedores y costes de gestión.',
      metric: '-80% Residuos',
      metricLabel: 'Menos contenedores y ahorro en vertedero',
      icon: Droplet,
      accentColor: 'border-lime-600 text-lime-700 bg-lime-50',
    },
    {
      id: 'estructura_ligera',
      category: 'construccion',
      categoryLabel: 'Ahorro Estructural',
      title: 'Estructura más ligera',
      subtitle: 'Menor peso propio que reduce costes de cimentación',
      desc: 'Al pesar menos que una construcción convencional, se puede reducir la cimentación, lo que también baja costes.',
      metric: '-50% Peso',
      metricLabel: 'Menor volumen de hormigón en losa',
      icon: Scale,
      accentColor: 'border-sky-500 text-sky-600 bg-sky-50',
    },
    {
      id: 'plazos',
      category: 'construccion',
      categoryLabel: 'Velocidad & Certeza',
      title: 'Plazos de obra más cortos',
      subtitle: 'Entrega de un 30% a un 50% más rápida',
      desc: 'La construcción es industrializada y en seco, por eso se puede terminar la casa un 30-50% más rápido.',
      metric: '30-50% más rápido',
      metricLabel: 'Envolvente cerrada en días',
      icon: Clock,
      accentColor: 'border-purple-500 text-purple-600 bg-purple-50',
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
    <div className="space-y-10 pb-8">
      {/* 1. SECCIÓN INTRODUCCIÓN & MANIFIESTO MEDGÓN */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Cabecera institucional con acento corporativo Medgón */}
        <div className="bg-gradient-to-r from-[#1D3300] via-[#2F5300] to-[#427500] text-white p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6BBE00]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#6BBE00]/20 border border-[#6BBE00]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#B9F55C] tracking-wide">
              <Building2 className="w-4 h-4" />
              <span>Manifiesto de Empresa • Edificación del Siglo XXI</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Durante 20 años, la construcción tradicional aceptó el caos como algo &quot;normal&quot;. <br className="hidden sm:inline" />
              <span className="text-[#B9F55C]">En Medgón nos negamos.</span>
            </h1>
            
            <p className="text-emerald-100 text-base sm:text-lg font-light leading-relaxed">
              No solo construimos casas; ingeniamos certeza. Al llevar la obra al taller, nuestro sistema industrializado garantiza precisión milimétrica y ensambla tu hogar en días. Cambiamos la improvisación del barro por la perfección de la fabricación CNC.
            </p>
          </div>
        </div>

        {/* Segundo bloque del Manifiesto y Métricas Clave de Confianza */}
        <div className="p-6 sm:p-10 space-y-8 bg-slate-50/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="border-l-4 border-[#6BBE00] pl-4 sm:pl-5 space-y-3">
                <p className="font-medium text-slate-900 text-base sm:text-lg">
                  La confianza no se promete, se demuestra. Llevamos dos décadas en esto, y catorce apostando exclusivamente por el estándar más vanguardista: <strong className="text-[#2F5300]">Passivhaus</strong>.
                </p>
                <p>
                  Que nuestros clientes nos recomienden es nuestro mayor orgullo. Hemos ejecutado <strong className="text-slate-900">más de 200 test blower door</strong>, blindando la hermeticidad que protege su salud y logra la ansiada certificación.
                </p>
                <p>
                  No exigimos fe ciega: cada vivienda es verificable en la base de datos pública Passivhaus. Detrás de cada proyecto hay <strong className="text-slate-900">más de 40 personas</strong> obsesionadas con tu habitabilidad. No construimos para el ayer, sino para el siglo XXI. Tu salud, confort, economía, legado y paz mental son nuestro compromiso.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://passivehouse-database.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#427500] hover:text-[#2F5300] bg-white px-3.5 py-2 rounded-lg border border-slate-200 hover:border-[#6BBE00] shadow-2xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verificar proyectos en la Base de Datos Oficial Passivhaus</span>
                </a>
                <button
                  onClick={() => onAskAdvisor('¿Cuántos años de experiencia tiene Medgón y cuántos test blower door habéis realizado?')}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#6BBE00]" />
                  <span>Preguntar al Asesor Técnico</span>
                </button>
              </div>
            </div>

            {/* Tarjetas de Métricas de Garantía */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2F5300]">20</div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Años de Trayectoria</div>
                <div className="text-[11px] text-slate-500">Fabricación industrializada de certeza</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#427500]">14</div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Años Passivhaus</div>
                <div className="text-[11px] text-slate-500">Exclusividad en máxima eficiencia</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-700">+200</div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Test Blower Door</div>
                <div className="text-[11px] text-slate-500">Hermeticidad récord verificada</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">+40</div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Especialistas</div>
                <div className="text-[11px] text-slate-500">Equipo técnico y producción CNC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADAPTACIÓN A LA NORMATIVA DEL FUTURO (GARANTÍA CERO OBSOLESCENCIA) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#427500] bg-[#6BBE00]/10 px-2.5 py-0.5 rounded-md">
              <Calendar className="w-3.5 h-3.5" />
              <span>Horizonte Normativo Europeo 2028 - 2030</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Viviendas Adaptadas a la Normativa del Futuro: Cero Obsolescencia
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl">
              La vivienda que construimos con el sistema Medgón <strong className="text-slate-900">ya se adapta a las exigencias comunitarias del mañana</strong>, por lo que nunca tendrás una casa obsoleta, desfasada energéticamente o con sanciones por incumplimiento de normativas ambientales.
            </p>
          </div>

          <div className="shrink-0 bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-right hidden sm:block">
            <span className="text-[11px] uppercase font-bold text-emerald-800 block">Inversión Blindada</span>
            <span className="text-xs font-medium text-emerald-700">Máximo valor de tasación futuro</span>
          </div>
        </div>

        {/* Tabla / Tarjetas de Análisis Regulatorio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Tarjeta 1: Edificios Cero Emisiones */}
          <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-white to-slate-50 space-y-4 flex flex-col justify-between shadow-2xs hover:border-[#6BBE00] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                  EPBD • Directiva Europea
                </span>
                <span className="text-xs font-semibold text-slate-500">2028 Públicos / 2030 Todos</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                Edificios de Cero Emisiones (ZEB)
              </h3>
              
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-900 block mb-1">Estado y horizonte regulatorio:</span>
                  La directiva exige este estándar desde <strong>2028</strong> para edificios nuevos propiedad de organismos públicos y desde <strong>2030</strong> para todos los edificios nuevos. Incluye muy alta eficiencia y ausencia total de emisiones de carbono procedentes de combustibles fósiles in situ.
                </div>

                <div className="bg-[#6BBE00]/10 p-3 rounded-lg border border-[#6BBE00]/30 text-slate-800">
                  <span className="font-bold text-[#2F5300] block mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#427500]" />
                    Qué prepara y garantiza Medgón:
                  </span>
                  Verificación del edificio completo: demanda ultra-baja, instalaciones de aerotermia de alta eficiencia, ACS y energía primaria. <span className="font-medium text-[#1D3300]">Passivhaus no equivale automáticamente a cero emisiones:</span> en Medgón aseguramos el equilibrio completo para que tu hogar nazca cumpliendo este horizonte sin reformas futuras.
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 italic">
              Resultado: Vivienda 100% eléctrica y renovable, sin calderas de gas ni emisiones contaminantes directas.
            </div>
          </div>

          {/* Tarjeta 2: Huella de Carbono de Ciclo de Vida (PCG) */}
          <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-white to-slate-50 space-y-4 flex flex-col justify-between shadow-2xs hover:border-[#6BBE00] transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
                  Potencial Calentamiento Global (PCG)
                </span>
                <span className="text-xs font-semibold text-slate-500">2028 &gt;1.000m² / 2030 Todos</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-[#427500]" />
                Huella de Carbono de Ciclo de Vida (ACV)
              </h3>
              
              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-900 block mb-1">Estado y horizonte regulatorio:</span>
                  Cálculo y declaración obligatoria desde <strong>2028</strong> en edificios nuevos de más de 1.000 m² útiles y desde <strong>2030</strong> en todas las viviendas nuevas.
                </div>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-slate-800">
                  <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    Qué prepara y garantiza Medgón:
                  </span>
                  Medición integral y controlada: materiales certificados, fabricación CNC de precisión en taller con mínimo residuo, transporte optimizado, montaje en seco, sustituciones y fin de vida. <span className="font-medium text-blue-950">No solo el carbono de la madera:</span> auditamos todo el ciclo para garantizar un impacto ambiental mínimo y medible.
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 italic">
              Resultado: Huella de carbono positiva o neutra gracias al uso de madera PEFC que captura toneladas de CO₂.
            </div>
          </div>
        </div>

        {/* Resumen de Seguridad Patrimonial */}
        <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#427500] shrink-0 font-bold">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">¿Por qué es crucial para ti como propietario?</h4>
              <p className="text-xs text-slate-600">
                Las viviendas convencionales requerirán costosas reformas antes de 2030 para no depreciarse en el mercado inmobiliario o sufrir recargos fiscales. Con Medgón tu inversión está blindada desde el día uno.
              </p>
            </div>
          </div>
          <button
            onClick={() => onAskAdvisor('¿Cómo garantiza Medgón que la vivienda cumple la directiva europea 2030 de cero emisiones y huella de carbono?')}
            className="shrink-0 text-xs font-semibold text-[#2F5300] bg-white border border-slate-300 hover:border-[#6BBE00] px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>Ver detalles con Asesor IA</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3. VENTAJAS SISTEMA CONSTRUCTIVO MEDGÓN */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#427500] bg-[#6BBE00]/10 px-2.5 py-0.5 rounded-md mb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Diferencial Técnico & Constructivo</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              12 Ventajas del Sistema Constructivo Medgón
            </h2>
            <p className="text-sm text-slate-600">
              Ingeniería industrializada en madera pensada para maximizar tu confort diario, ahorrar mes a mes y construir sin imprevistos.
            </p>
          </div>

          {/* Filtros rápidos por categoría */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all shrink-0 ${
                  filterCategory === cat.id
                    ? 'bg-[#2F5300] text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de las 12 Ventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAdvantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:shadow-sm hover:border-[#6BBE00]/80 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 group-hover:text-[#427500] transition-colors">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                        {adv.categoryLabel}
                      </span>
                    </div>
                    <div className={`p-2 rounded-lg border ${adv.accentColor} transition-transform group-hover:scale-110`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#2F5300] transition-colors flex items-center gap-1.5">
                      <span className="text-[#6BBE00]">✅</span>
                      <span>{adv.title}</span>
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {adv.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{adv.metric}</span>
                    <span className="text-[10px] text-slate-500">{adv.metricLabel}</span>
                  </div>
                  <button
                    onClick={() => onAskAdvisor(`Explícame en detalle la ventaja "${adv.title}" del sistema Medgón`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-[#427500] p-1"
                    title="Preguntar detalles al Asesor IA"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BANNER DE ACCIÓN: CALCULADORA Y ASESOR */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B9F55C]">
            <Sparkles className="w-4 h-4" />
            <span>Presupuesto Cerrado de Fábrica</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            ¿Listo para calcular el coste exacto de tu vivienda Passivhaus?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Simula las dimensiones de tu hogar, analiza las partidas exactas que ejecuta Medgón y compara el ahorro energético en tiempo real.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            onClick={onGoToCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6BBE00] hover:bg-[#5ca500] text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all transform active:scale-95 text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Ir a la Calculadora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onAskAdvisor('¿Qué pasos debo seguir para empezar a construir mi vivienda con Medgón?')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium px-5 py-3 rounded-xl border border-slate-700 transition-colors text-sm"
          >
            <Sparkles className="w-4 h-4 text-[#6BBE00]" />
            <span>Consultar al Asesor</span>
          </button>
        </div>
      </section>
    </div>
  );
};
