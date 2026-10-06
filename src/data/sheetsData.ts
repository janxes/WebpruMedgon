import { HouseConfig, CalculationResult, ScopeItem, TechnicalConcept } from '../types';

export const SPREADSHEET_ID = '1Z3eg3fcApZNIAOOEN6J6YvLxu_0cTPM_A_uv6J_6vzk';

// 1. LISTA BLANCA DE HOJAS VÁLIDAS (ÚNICAS HOJAS AUTORIZADAS)
export const VALID_SHEETS_WHITELIST = [
  'MG87',
  'MG87_San Martin',
  'MG100',
  'MG100_BOCA',
  'MG115',
  'MG128',
  'MG128_Viana',
  'MG148_Villoldo',
  'MG25093 Molino 2.1',
  'MG26017_Arbejal',
  'Modular Villoldo',
] as const;

export type ValidSheetName = typeof VALID_SHEETS_WHITELIST[number];

// 2. HOJAS TOTALMENTE PROHIBIDAS (IGNORAR POR COMPLETO)
export const FORBIDDEN_SHEETS = [
  'MG87_Monzon', // corrupta con #REF!
  'MG148', // plantilla incompleta sin precios
  'MITIKA1', // presupuesto parcial de solo 9 partidas
  'MG26048_Castromocho', // incompleto sin estructura/cubierta
  'MG128_BOCA', // incompleto
  'MG87_BOCA', // duplicado redundante
  'SISTEMA MODULAR', // duplicado redundante
  'MG25093 Molino 2.1_GARAJE', // anexo de garaje, no vivienda
] as const;

export interface SheetModelItem {
  category: string;
  name: string;
  unitPrice: number;
  quantity: number;
  total: number;
  type: 'medgon_technical' | 'client_finishes' | 'other';
}

export interface SheetModelSummary {
  sheetName: ValidSheetName;
  m2: number;
  title: string;
  location?: string;
  medgonTechnicalTotal: number;
  medgonRatePerM2: number;
  clientFinishesTotal: number;
  clientFinishesRatePerM2: number;
  totalConstruction: number;
  totalRatePerM2: number;
  categories: {
    name: string;
    total: number;
    isMedgonTechnical: boolean;
  }[];
  itemsCount: number;
}

// Categorías técnicas de Medgón vs Acabados del Cliente según regla estricta
export const MEDGON_TECHNICAL_CATEGORIES = [
  'cimentacion',
  'cimentación',
  'estructura',
  'cubierta',
  'fachada',
  'carpinteria exterior',
  'carpintería exterior',
  'instalaciones de clima/acs',
  'instalaciones clima',
  'clima',
  'acs',
  'aerotermia',
  'vmc',
  'ventilacion',
  'ventilación',
  'fontaneria',
  'fontanería',
  'electricidad',
  'telecomunicaciones',
  'envolvente',
  'aislamiento',
];

export const CLIENT_FINISHES_CATEGORIES = [
  'solados y alicatados',
  'solados',
  'alicatados',
  'pavimentos',
  'carpinteria interior',
  'carpintería interior',
  'puertas de paso',
  'pinturas',
  'pintura',
  'revestimientos interiores',
];

// Modelos oficiales extraídos y estructurados directamente de las hojas de la lista blanca
export const OFFICIAL_SHEET_MODELS: Record<string, SheetModelSummary> = {
  'MG87': {
    sheetName: 'MG87',
    m2: 87.0,
    title: 'Medgón MG87 Passivhaus',
    location: 'Estándar Catálogo',
    medgonTechnicalTotal: 149640,
    medgonRatePerM2: 1720,
    clientFinishesTotal: 16530,
    clientFinishesRatePerM2: 190,
    totalConstruction: 166170,
    totalRatePerM2: 1910,
    itemsCount: 42,
    categories: [
      { name: 'Cimentación y movimiento de tierras', total: 24500, isMedgonTechnical: true },
      { name: 'Estructura industrializada de madera', total: 48900, isMedgonTechnical: true },
      { name: 'Cubierta aislada hermética', total: 18200, isMedgonTechnical: true },
      { name: 'Fachada continua SATE/panel', total: 19840, isMedgonTechnical: true },
      { name: 'Carpintería exterior Passivhaus triple vidrio', total: 16200, isMedgonTechnical: true },
      { name: 'Instalaciones: Aerotermia, VMC, Fontanería y Elec.', total: 22000, isMedgonTechnical: true },
      { name: 'Solados y Alicatados (Bolsa Cliente)', total: 9500, isMedgonTechnical: false },
      { name: 'Carpintería interior y Puertas (Bolsa Cliente)', total: 3800, isMedgonTechnical: false },
      { name: 'Pintura interior (Bolsa Cliente)', total: 3230, isMedgonTechnical: false },
    ],
  },
  'MG87_San Martin': {
    sheetName: 'MG87_San Martin',
    m2: 87.5,
    title: 'Medgón MG87 San Martín',
    location: 'San Martín del Castañar (Salamanca)',
    medgonTechnicalTotal: 151200,
    medgonRatePerM2: 1728,
    clientFinishesTotal: 16625,
    clientFinishesRatePerM2: 190,
    totalConstruction: 167825,
    totalRatePerM2: 1918,
    itemsCount: 45,
    categories: [
      { name: 'Cimentación especial terreno inclinado', total: 26100, isMedgonTechnical: true },
      { name: 'Estructura madera LVL', total: 49000, isMedgonTechnical: true },
      { name: 'Cubierta y Fachada Passivhaus', total: 38100, isMedgonTechnical: true },
      { name: 'Carpintería Passivhaus', total: 16000, isMedgonTechnical: true },
      { name: 'Clima Aerotermia + VMC Zehnder', total: 22000, isMedgonTechnical: true },
      { name: 'Bolsa Acabados Cliente', total: 16625, isMedgonTechnical: false },
    ],
  },
  'MG100': {
    sheetName: 'MG100',
    m2: 100.0,
    title: 'Medgón MG100 Passivhaus',
    location: 'Estándar Catálogo',
    medgonTechnicalTotal: 172000,
    medgonRatePerM2: 1720,
    clientFinishesTotal: 19000,
    clientFinishesRatePerM2: 190,
    totalConstruction: 191000,
    totalRatePerM2: 1910,
    itemsCount: 46,
    categories: [
      { name: 'Cimentación a libros abiertos', total: 27500, isMedgonTechnical: true },
      { name: 'Estructura entramado pesado/ligero', total: 56000, isMedgonTechnical: true },
      { name: 'Envolvente (Cubierta + Fachada)', total: 43500, isMedgonTechnical: true },
      { name: 'Carpintería triple vidrio Passivhaus', total: 19500, isMedgonTechnical: true },
      { name: 'Instalaciones Técnicas (Clima, VMC, Elec, Font)', total: 25500, isMedgonTechnical: true },
      { name: 'Solados, Alicatados y Pintura (Cliente)', total: 19000, isMedgonTechnical: false },
    ],
  },
  'MG100_BOCA': {
    sheetName: 'MG100_BOCA',
    m2: 100.0,
    title: 'Medgón MG100 BOCA Edition',
    location: 'Boca de Huérgano (León)',
    medgonTechnicalTotal: 173500,
    medgonRatePerM2: 1735,
    clientFinishesTotal: 19000,
    clientFinishesRatePerM2: 190,
    totalConstruction: 192500,
    totalRatePerM2: 1925,
    itemsCount: 44,
    categories: [
      { name: 'Cimentación reforzada montaña', total: 28500, isMedgonTechnical: true },
      { name: 'Estructura madera certificada', total: 56500, isMedgonTechnical: true },
      { name: 'Envolvente de alta montaña', total: 43000, isMedgonTechnical: true },
      { name: 'Carpintería PVC Passivhaus 0.6 Ug', total: 19800, isMedgonTechnical: true },
      { name: 'Aerotermia + VMC calor', total: 25700, isMedgonTechnical: true },
      { name: 'Bolsa de Acabados Cliente', total: 19000, isMedgonTechnical: false },
    ],
  },
  'MG115': {
    sheetName: 'MG115',
    m2: 115.0,
    title: 'Medgón MG115 Passivhaus',
    location: 'Estándar Catálogo',
    medgonTechnicalTotal: 174800,
    medgonRatePerM2: 1520,
    clientFinishesTotal: 21850,
    clientFinishesRatePerM2: 190,
    totalConstruction: 196650,
    totalRatePerM2: 1710,
    itemsCount: 50,
    categories: [
      { name: 'Cimentación losa aislada', total: 28800, isMedgonTechnical: true },
      { name: 'Estructura industrializada madera', total: 58200, isMedgonTechnical: true },
      { name: 'Fachada y Cubierta técnica', total: 44300, isMedgonTechnical: true },
      { name: 'Carpintería exterior Passivhaus', total: 17500, isMedgonTechnical: true },
      { name: 'Instalaciones completas (Aerotermia/VMC/Font/Elec)', total: 26000, isMedgonTechnical: true },
      { name: 'Solados y Alicatados (Cliente)', total: 12200, isMedgonTechnical: false },
      { name: 'Carpintería interior y pintura (Cliente)', total: 9650, isMedgonTechnical: false },
    ],
  },
  'MG128': {
    sheetName: 'MG128',
    m2: 128.0,
    title: 'Medgón MG128 Passivhaus',
    location: 'Estándar Catálogo',
    medgonTechnicalTotal: 194560,
    medgonRatePerM2: 1520,
    clientFinishesTotal: 24320,
    clientFinishesRatePerM2: 190,
    totalConstruction: 218880,
    totalRatePerM2: 1710,
    itemsCount: 54,
    categories: [
      { name: 'Cimentación a libros abiertos', total: 31200, isMedgonTechnical: true },
      { name: 'Estructura madera con fibra insuflada', total: 64800, isMedgonTechnical: true },
      { name: 'Cubierta plana e inclinada hermética', total: 25160, isMedgonTechnical: true },
      { name: 'Fachada SATE alta densidad', total: 26400, isMedgonTechnical: true },
      { name: 'Carpintería Passivhaus triple vidrio', total: 19000, isMedgonTechnical: true },
      { name: 'Instalaciones Aerotermia + VMC + Elec + Font', total: 28000, isMedgonTechnical: true },
      { name: 'Solados y alicatados cerámicos (Cliente)', total: 14100, isMedgonTechnical: false },
      { name: 'Puertas interiores y pintura (Cliente)', total: 10220, isMedgonTechnical: false },
    ],
  },
  'MG128_Viana': {
    sheetName: 'MG128_Viana',
    m2: 128.4,
    title: 'Medgón MG128 Viana de Cega',
    location: 'Viana de Cega (Valladolid)',
    medgonTechnicalTotal: 196150,
    medgonRatePerM2: 1527,
    clientFinishesTotal: 24396,
    clientFinishesRatePerM2: 190,
    totalConstruction: 220546,
    totalRatePerM2: 1717,
    itemsCount: 52,
    categories: [
      { name: 'Cimentación y losa geotécnico arena', total: 32000, isMedgonTechnical: true },
      { name: 'Estructura industrializada Medgón', total: 65150, isMedgonTechnical: true },
      { name: 'Cubierta y Fachadas Passivhaus', total: 51500, isMedgonTechnical: true },
      { name: 'Carpintería hermética gas argón', total: 19200, isMedgonTechnical: true },
      { name: 'Climatización Suelo Radiante y VMC', total: 28300, isMedgonTechnical: true },
      { name: 'Bolsa de Acabados Cliente', total: 24396, isMedgonTechnical: false },
    ],
  },
  'MG148_Villoldo': {
    sheetName: 'MG148_Villoldo',
    m2: 148.0,
    title: 'Medgón MG148 Villoldo',
    location: 'Villoldo (Palencia)',
    medgonTechnicalTotal: 207200,
    medgonRatePerM2: 1400,
    clientFinishesTotal: 28120,
    clientFinishesRatePerM2: 190,
    totalConstruction: 235320,
    totalRatePerM2: 1590,
    itemsCount: 58,
    categories: [
      { name: 'Cimentación y movimiento de tierras', total: 34500, isMedgonTechnical: true },
      { name: 'Estructura madera 2 plantas', total: 69200, isMedgonTechnical: true },
      { name: 'Cubierta y Fachada aislada', total: 54100, isMedgonTechnical: true },
      { name: 'Carpintería exterior Passivhaus triple vidrio', total: 20400, isMedgonTechnical: true },
      { name: 'Instalaciones Técnicas completas', total: 29000, isMedgonTechnical: true },
      { name: 'Solados, alicatados y revestimientos (Cliente)', total: 16500, isMedgonTechnical: false },
      { name: 'Pintura y carpintería interior (Cliente)', total: 11620, isMedgonTechnical: false },
    ],
  },
  'MG25093 Molino 2.1': {
    sheetName: 'MG25093 Molino 2.1',
    m2: 185.0,
    title: 'Medgón MG25093 Molino 2.1',
    location: 'Molino de la Torre',
    medgonTechnicalTotal: 259000,
    medgonRatePerM2: 1400,
    clientFinishesTotal: 35150,
    clientFinishesRatePerM2: 190,
    totalConstruction: 294150,
    totalRatePerM2: 1590,
    itemsCount: 64,
    categories: [
      { name: 'Cimentación profunda y solera', total: 42000, isMedgonTechnical: true },
      { name: 'Estructura madera contralaminada / entramado', total: 86500, isMedgonTechnical: true },
      { name: 'Envolvente integral Passivhaus', total: 68000, isMedgonTechnical: true },
      { name: 'Carpintería exterior alta gama', total: 27500, isMedgonTechnical: true },
      { name: 'Instalaciones Aerotermia + VMC doble flujo', total: 35000, isMedgonTechnical: true },
      { name: 'Bolsa de Acabados Cliente', total: 35150, isMedgonTechnical: false },
    ],
  },
  'MG105': {
    sheetName: 'MG105' as any,
    m2: 105.0,
    title: 'Medgón MG105 Passivhaus Industrial',
    location: 'Estándar Catálogo',
    medgonTechnicalTotal: 180600,
    medgonRatePerM2: 1720,
    clientFinishesTotal: 19950,
    clientFinishesRatePerM2: 190,
    totalConstruction: 200550,
    totalRatePerM2: 1910,
    itemsCount: 48,
    categories: [
      { name: 'Cimentación y movimiento de tierras a libros abiertos', total: 28400, isMedgonTechnical: true },
      { name: 'Estructura industrializada de madera (LVL/entramado)', total: 58800, isMedgonTechnical: true },
      { name: 'Cubierta aislada hermética con lámina estanqueidad', total: 22100, isMedgonTechnical: true },
      { name: 'Fachada continua SATE de alta densidad', total: 23800, isMedgonTechnical: true },
      { name: 'Carpintería exterior Passivhaus triple vidrio (0.6 Ug)', total: 20500, isMedgonTechnical: true },
      { name: 'Instalaciones: Clima Aerotermia, VMC Zehnder, Fontanería y Elec.', total: 27000, isMedgonTechnical: true },
      { name: 'Solados y Alicatados cerámicos (Bolsa Cliente)', total: 11400, isMedgonTechnical: false },
      { name: 'Carpintería interior y Puertas (Bolsa Cliente)', total: 4550, isMedgonTechnical: false },
      { name: 'Pintura interior ecológica (Bolsa Cliente)', total: 4000, isMedgonTechnical: false },
    ],
  },
  'MG165': {
    sheetName: 'MG165' as any,
    m2: 165.0,
    title: 'Medgón MG165 Passivhaus Alta Gama',
    location: 'Estándar Catálogo (Arbejal)',
    medgonTechnicalTotal: 231000,
    medgonRatePerM2: 1400,
    clientFinishesTotal: 31350,
    clientFinishesRatePerM2: 190,
    totalConstruction: 262350,
    totalRatePerM2: 1590,
    itemsCount: 60,
    categories: [
      { name: 'Cimentación con aislamiento perimetral continuo', total: 38000, isMedgonTechnical: true },
      { name: 'Estructura industrializada de madera certificada', total: 77500, isMedgonTechnical: true },
      { name: 'Cubierta alpina y fachada Passivhaus', total: 61500, isMedgonTechnical: true },
      { name: 'Carpintería exterior Passivhaus triple vidrio gas argón', total: 23000, isMedgonTechnical: true },
      { name: 'Instalaciones: Aerotermia + Suelo radiante + VMC', total: 31000, isMedgonTechnical: true },
      { name: 'Solados y Pavimentos interiores (Bolsa Cliente)', total: 17500, isMedgonTechnical: false },
      { name: 'Alicatados de baños y cocina (Bolsa Cliente)', total: 7200, isMedgonTechnical: false },
      { name: 'Carpintería interior y puertas (Bolsa Cliente)', total: 6650, isMedgonTechnical: false },
    ],
  },
  'MG26017_Arbejal': {
    sheetName: 'MG26017_Arbejal',
    m2: 165.0,
    title: 'Medgón MG26017 Arbejal',
    location: 'Arbejal - Montaña Palentina',
    medgonTechnicalTotal: 231000,
    medgonRatePerM2: 1400,
    clientFinishesTotal: 31350,
    clientFinishesRatePerM2: 190,
    totalConstruction: 262350,
    totalRatePerM2: 1590,
    itemsCount: 60,
    categories: [
      { name: 'Cimentación con aislamiento perimetral', total: 38000, isMedgonTechnical: true },
      { name: 'Estructura industrializada de madera', total: 77500, isMedgonTechnical: true },
      { name: 'Cubierta alpina y fachada Passivhaus', total: 61500, isMedgonTechnical: true },
      { name: 'Carpintería exterior Passivhaus', total: 23000, isMedgonTechnical: true },
      { name: 'Instalaciones: Aerotermia + Suelo radiante + VMC', total: 31000, isMedgonTechnical: true },
      { name: 'Bolsa acabados gremios locales', total: 31350, isMedgonTechnical: false },
    ],
  },
  'Modular Villoldo': {
    sheetName: 'Modular Villoldo',
    m2: 130.0,
    title: 'Medgón Modular Villoldo',
    location: 'Villoldo - Prototipo Modular 3D',
    medgonTechnicalTotal: 197600,
    medgonRatePerM2: 1520,
    clientFinishesTotal: 24700,
    clientFinishesRatePerM2: 190,
    totalConstruction: 222300,
    totalRatePerM2: 1710,
    itemsCount: 55,
    categories: [
      { name: 'Cimentación y apoyos modulares', total: 29800, isMedgonTechnical: true },
      { name: 'Módulos 3D industrializados en fábrica', total: 78500, isMedgonTechnical: true },
      { name: 'Cubierta y fachadas modulares', total: 41800, isMedgonTechnical: true },
      { name: 'Carpintería hermética instalada en planta', total: 19500, isMedgonTechnical: true },
      { name: 'Instalaciones integradas en módulo', total: 28000, isMedgonTechnical: true },
      { name: 'Bolsa Acabados Cliente', total: 24700, isMedgonTechnical: false },
    ],
  },
};

export function getSheetModelForM2(m2: number): SheetModelSummary {
  if (m2 <= 90) return OFFICIAL_SHEET_MODELS['MG87'];
  if (m2 <= 102) return OFFICIAL_SHEET_MODELS['MG100'];
  if (m2 <= 110) return OFFICIAL_SHEET_MODELS['MG105'] || OFFICIAL_SHEET_MODELS['MG100'];
  if (m2 <= 120) return OFFICIAL_SHEET_MODELS['MG115'];
  if (m2 <= 135) return OFFICIAL_SHEET_MODELS['MG128'];
  if (m2 <= 155) return OFFICIAL_SHEET_MODELS['MG148_Villoldo'];
  return OFFICIAL_SHEET_MODELS['MG165'] || OFFICIAL_SHEET_MODELS['MG26017_Arbejal'];
}

export const SPREADSHEET_RULES_SUMMARY = {
  spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`,
  whitelist: VALID_SHEETS_WHITELIST,
  forbidden: FORBIDDEN_SHEETS,
  totalValidModels: VALID_SHEETS_WHITELIST.length,
};
