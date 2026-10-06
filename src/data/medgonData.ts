import { HouseConfig, CalculationResult, ScopeItem, TechnicalConcept } from '../types';

export const MEDGON_PRICING = {
  compactMinM2: 80,
  compactMaxM2: 105,
  compactRate: 1720, // 80 - 105 m²

  mediumMinM2: 106,
  mediumMaxM2: 135,
  mediumRate: 1520, // 106 - 135 m²

  largeMinM2: 136,
  largeRate: 1400, // > 135 m²

  finishesMinRate: 180,
  finishesMaxRate: 200,
  finishesDefaultRate: 190,

  projectFees: 12500, // Fixed technical fees

  extras: {
    photovoltaic: 22500,
    domotics: 7500,
    audio: 2000,
  },

  vatWorks: 0.10, // 10% IVA autopromotor
  vatFees: 0.21,  // 21% IVA honorarios técnicos
};

export function getMedgonRatePerM2(m2: number): { rate: number; category: 'compact' | 'medium' | 'large' | 'micro'; label: string } {
  if (m2 <= 105) {
    return {
      rate: MEDGON_PRICING.compactRate,
      category: 'compact',
      label: 'Vivienda compacta (80 - 105 m²)',
    };
  } else if (m2 <= 135) {
    return {
      rate: MEDGON_PRICING.mediumRate,
      category: 'medium',
      label: 'Vivienda mediana (106 - 135 m²)',
    };
  } else {
    return {
      rate: MEDGON_PRICING.largeRate,
      category: 'large',
      label: 'Vivienda amplia (> 135 m²)',
    };
  }
}

export function calculateBudget(config: HouseConfig): CalculationResult {
  const { m2, finishesRate, includePhotovoltaic, includeDomotics, includeAudio } = config;
  const rateInfo = getMedgonRatePerM2(m2);

  // 1. Fase Medgón
  const medgonBase = m2 * rateInfo.rate;
  const medgonMin3 = medgonBase * 0.97;
  const medgonMax3 = medgonBase * 1.03;

  // 2. Bolsa para acabados
  const safeFinishesRate = Math.min(200, Math.max(180, finishesRate || 190));
  const finishesBase = m2 * safeFinishesRate;

  // 3. Inversión total construcción (Fase Medgón + Acabados)
  const constructionBase = medgonBase + finishesBase;
  const constructionMin3 = medgonMin3 + (m2 * 180);
  const constructionMax3 = medgonMax3 + (m2 * 200);
  const constructionRatePerM2 = constructionBase / m2;

  // 4. Honorarios Técnicos
  const projectFeesBase = MEDGON_PRICING.projectFees;
  const projectFeesPerM2 = projectFeesBase / m2;

  // 5. Extras
  const pvCost = includePhotovoltaic ? MEDGON_PRICING.extras.photovoltaic : 0;
  const domoticsCost = includeDomotics ? MEDGON_PRICING.extras.domotics : 0;
  const audioCost = includeAudio ? MEDGON_PRICING.extras.audio : 0;
  const totalExtras = pvCost + domoticsCost + audioCost;

  // 6. IVA calculations
  const medgonVat = medgonBase * MEDGON_PRICING.vatWorks;
  const finishesVat = finishesBase * MEDGON_PRICING.vatWorks;
  const extrasVat = totalExtras * MEDGON_PRICING.vatWorks;
  const feesVat = projectFeesBase * MEDGON_PRICING.vatFees;
  const totalVat = medgonVat + finishesVat + extrasVat + feesVat;

  const grandTotalBase = constructionBase + projectFeesBase + totalExtras;
  const grandTotalWithVat = grandTotalBase + totalVat;

  return {
    m2,
    category: rateInfo.category,
    categoryLabel: rateInfo.label,
    medgonRatePerM2: rateInfo.rate,
    medgonBase,
    medgonMin3,
    medgonMax3,
    finishesRatePerM2: safeFinishesRate,
    finishesBase,
    constructionBase,
    constructionMin3,
    constructionMax3,
    constructionRatePerM2,
    projectFeesBase,
    projectFeesPerM2,
    extras: {
      photovoltaic: pvCost,
      domotics: domoticsCost,
      audio: audioCost,
      total: totalExtras,
    },
    vat: {
      medgonVat,
      finishesVat,
      extrasVat,
      feesVat,
      totalVat,
    },
    grandTotalBase,
    grandTotalWithVat,
  };
}

export const SCOPE_ITEMS: ScopeItem[] = [
  {
    id: 'cim',
    category: 'Cimentación y Envolvente',
    item: 'Cimentación a libros abiertos',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Losa o zapata calculada específicamente según el estudio geotécnico de tu parcela con máxima transparencia de costes.',
    iconName: 'Layers',
  },
  {
    id: 'est',
    category: 'Cimentación y Envolvente',
    item: 'Estructura industrializada de madera (LVL / Entramado ligero)',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Madera técnica certificada de alta precisión milimétrica fabricada en planta climatizada, con insuflado continuo de fibra de madera.',
    iconName: 'Boxes',
  },
  {
    id: 'fac',
    category: 'Cimentación y Envolvente',
    item: 'Fachada completa (SATE / Panel madera-cemento)',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Envolvente exterior continua que elimina el 100% de los puentes térmicos y garantiza una durabilidad extrema.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'cub',
    category: 'Cimentación y Envolvente',
    item: 'Cubierta aislada e impermeabilizada',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Aislamiento térmico superior con láminas transpirables y de estanqueidad para máxima protección climática.',
    iconName: 'Home',
  },
  {
    id: 'ven',
    category: 'Cimentación y Envolvente',
    item: 'Carpintería exterior Passivhaus (Triple vidrio + persianas motorizadas)',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Ventanas de altísima hermeticidad, triple acristalamiento con gas argón, marcos térmicos y sellado hermético perimetral.',
    iconName: 'AppWindow',
  },
  {
    id: 'vmc',
    category: 'Instalaciones Técnicas',
    item: 'Ventilación Mecánica Controlada (VMC) con recuperación de calor',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Los pulmones de la casa: renueva el aire interior 24 horas al día, filtra pólenes y contaminación, y recupera más del 90% del calor.',
    iconName: 'Wind',
  },
  {
    id: 'aero',
    category: 'Instalaciones Técnicas',
    item: 'Aerotermia con Suelo Radiante y Refrescante',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Bomba de calor de alta eficiencia para agua caliente sanitaria (ACS) y confort térmico invisible y silencioso en invierno y verano.',
    iconName: 'Flame',
  },
  {
    id: 'fon',
    category: 'Instalaciones Técnicas',
    item: 'Instalación de Fontanería completa',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Red de distribución de agua fría y caliente, desagües y tomas preparadas hasta puntos de consumo.',
    iconName: 'Droplets',
  },
  {
    id: 'elec',
    category: 'Instalaciones Técnicas',
    item: 'Instalación Eléctrica y Telecomunicaciones con mecanismos',
    includedInMedgon: true,
    responsibility: 'Medgón (Industrializado)',
    description: 'Cuadro general de protección, cableado libre de halógenos, tomas de corriente, interruptores y tomas de datos RJ45.',
    iconName: 'Zap',
  },
  {
    id: 'pav',
    category: 'Acabados Interiores (Libertad Cliente)',
    item: 'Pavimentos y Suelos interiores',
    includedInMedgon: false,
    responsibility: 'Cliente (Gremios Locales)',
    description: 'Suministro y colocación del pavimento (parquet, tarima, gres porcelánico, microcemento) según tus preferencias estéticas.',
    iconName: 'Grid',
  },
  {
    id: 'ali',
    category: 'Acabados Interiores (Libertad Cliente)',
    item: 'Alicatados de Baños y Cocina',
    includedInMedgon: false,
    responsibility: 'Cliente (Gremios Locales)',
    description: 'Revestimientos cerámicos o panelados decorativos en zonas húmedas a contratar libremente.',
    iconName: 'Sparkles',
  },
  {
    id: 'pin',
    category: 'Acabados Interiores (Libertad Cliente)',
    item: 'Pintura interior',
    includedInMedgon: false,
    responsibility: 'Cliente (Gremios Locales)',
    description: 'Acabado y color de paredes y techos de yeso laminado ejecutados por pintores de tu zona.',
    iconName: 'Palette',
  },
  {
    id: 'pue',
    category: 'Acabados Interiores (Libertad Cliente)',
    item: 'Puertas de paso interiores',
    includedInMedgon: false,
    responsibility: 'Cliente (Gremios Locales)',
    description: 'Puertas macizas o lacadas, bisagras y manivelas elegidas a tu gusto.',
    iconName: 'DoorClosed',
  },
  {
    id: 'coc',
    category: 'Mobiliario y Equipamiento',
    item: 'Mobiliario de cocina y electrodomésticos',
    includedInMedgon: false,
    responsibility: 'Cliente (Gremios Locales)',
    description: 'Muebles de cocina, encimera y electrodomésticos a medida según tu tienda de cocinas de confianza.',
    iconName: 'ChefHat',
  },
  {
    id: 'san',
    category: 'Mobiliario y Equipamiento',
    item: 'Aparatos sanitarios y grifería',
    includedInMedgon: false,
    responsibility: 'Cliente (Gremios Locales)',
    description: 'Inodoros, lavabos, platos de ducha y griferías elegidos a medida por el cliente.',
    iconName: 'Bath',
  },
];

export const TECHNICAL_CONCEPTS: TechnicalConcept[] = [
  {
    id: 'envolvente',
    title: 'Estructura y Envolvente Hermética',
    analogy: 'El abrigo térmico de alta montaña',
    technicalDetails: 'Estructura industrializada de madera (LVL y entramado ligero) rellena con insuflado denso de fibra de madera. Garantiza continuidad térmica absoluta y test BlowerDoor n50 ≤ 0.6 ren/h.',
    benefits: [
      'Sin puentes térmicos ni condensaciones',
      'Aislamiento acústico superior del exterior',
      'Madera como sumidero natural de carbono (CO₂ negativo)',
    ],
    icon: 'Boxes',
  },
  {
    id: 'vmc',
    title: 'Ventilación Mecánica Controlada (VMC)',
    analogy: 'Los pulmones inteligentes de la vivienda',
    technicalDetails: 'Sistema de ventilación de doble flujo con recuperación entálpica de calor (>90%). Renueva el 100% del aire interior las 24 horas del día sin necesidad de abrir ventanas ni perder temperatura.',
    benefits: [
      'Aire filtrado libre de polen, polvo y ácaros (ideal para alergias)',
      'Nivel de CO₂ siempre bajo (<800 ppm), mayor descanso y concentración',
      'Ahorro del 90% de la energía de ventilación',
    ],
    icon: 'Wind',
  },
  {
    id: 'aerotermia',
    title: 'Aerotermia + Suelo Radiante / Refrescante',
    analogy: 'La climatización invisible y de ultra bajo consumo',
    technicalDetails: 'Bomba de calor aire-agua que aprovecha la energía termodinámica del aire exterior con un COP superior a 4.5. Distribuye calor en invierno y refrescamiento suave en verano mediante suelo radiante.',
    benefits: [
      'Rendimiento energético excepcional (por cada 1 kW consumido entrega hasta 4.5 kW de calor)',
      'Máximo confort descalzo sin corrientes de aire',
      'Generación de Agua Caliente Sanitaria integrada',
    ],
    icon: 'Flame',
  },
  {
    id: 'carpinteria',
    title: 'Carpintería Exterior Passivhaus',
    analogy: 'El escudo transparente de triple cristal',
    technicalDetails: 'Ventanas de PVC o aluminio con rotura de puente térmico, triple acristalamiento bajo emisivo con cámaras rellenas de gas argón (Ug ≤ 0.6 W/m²K) y persianas térmicas motorizadas herméticas.',
    benefits: [
      'Eliminación del efecto pared fría junto a las ventanas',
      'Aislamiento acústico frente a ruidos de tráfico y viento',
      'Ganancia solar pasiva en invierno y control solar en verano',
    ],
    icon: 'AppWindow',
  },
  {
    id: 'cimentacion',
    title: 'Cimentación a Libros Abiertos',
    analogy: 'Transparencia técnica desde el primer metro cúbico',
    technicalDetails: 'Cimentación calculada de forma rigurosa y ejecutada bajo el modelo de libros abiertos: costes de hormigón, ferralla y movimiento de tierras sin márgenes opacos ni sobrecostes imprevistos.',
    benefits: [
      'Presupuesto claro y adaptado al estudio geotécnico real',
      'Aislamiento bajo losa para evitar pérdidas al terreno',
      'Garantía estructural total coordinada con la madera',
    ],
    icon: 'Layers',
  },
];

export const FREQUENT_QUESTIONS = [
  '¿Por qué Medgón no quedará obsoleto ante la normativa europea 2028-2030?',
  '¿Cuáles son las 12 ventajas del sistema constructivo Medgón?',
  '¿Cuántos años de experiencia y test Blower Door avalan a Medgón?',
  '¿Puedo modificar la distribución interior y las ventanas?',
  '¿Puedo añadir un porche a mi casa?',
  '¿El tejado y las tejas entran en el precio?',
  '¿Qué es la VMC?',
  '¿Qué es la aerotermia?',
  '¿Dónde construís?',
  '¿Qué incluye Medgón y por qué no hacéis acabados interiores?',
  '¿Ayudáis a elegir parcela y qué compromiso exige?',
  '¿Cómo conseguís una buena relación calidad-precio?',
  '¿Cuáles son los plazos de entrega?',
  '¿Cómo se gestionan los pagos?',
  '¿Cuánto cuesta el metro cuadrado?',
  'Modelos por dormitorios (1, 2, 3, 4 dorm.)',
  '¿Hacéis proyectos a medida fuera de catálogo?',
];

