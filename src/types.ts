export type HouseCategory = 'compact' | 'medium' | 'large' | 'micro';

export interface HouseConfig {
  m2: number;
  finishesRate: number; // 180 to 200 €/m²
  includePhotovoltaic: boolean; // +22.500 €
  includeDomotics: boolean; // +7.500 €
  includeAudio: boolean; // +2.000 €
  includeVat: boolean; // Toggle VAT view
  selectedModelId?: string;
}

export interface CalculationResult {
  m2: number;
  category: HouseCategory;
  categoryLabel: string;
  medgonRatePerM2: number;
  medgonBase: number;
  medgonMin3: number;
  medgonMax3: number;
  
  finishesRatePerM2: number;
  finishesBase: number;
  
  constructionBase: number;
  constructionMin3: number;
  constructionMax3: number;
  constructionRatePerM2: number;
  
  projectFeesBase: number;
  projectFeesPerM2: number;
  
  extras: {
    photovoltaic: number;
    domotics: number;
    audio: number;
    total: number;
  };
  
  vat: {
    medgonVat: number;
    finishesVat: number;
    extrasVat: number;
    feesVat: number;
    totalVat: number;
  };
  
  grandTotalBase: number;
  grandTotalWithVat: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'advisor';
  content: string;
  timestamp: string;
}

export interface ScopeItem {
  id: string;
  category: string;
  item: string;
  includedInMedgon: boolean;
  responsibility: 'Medgón (Industrializado)' | 'Cliente (Gremios Locales)';
  description: string;
  iconName: string;
}

export interface TechnicalConcept {
  id: string;
  title: string;
  analogy: string;
  technicalDetails: string;
  benefits: string[];
  icon: string;
}
