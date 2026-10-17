// Medgón Passivhaus - Real Projects Database
// Generated from official data on https://www.medgon.com/proyectos/

export type ProjectCategory = 
  | "todos"
  | "unifamiliares"
  | "plurifamiliares"
  | "terciario"
  | "derecho-vuelo";

export interface ProjectStat {
  label: string;
  value: string;
  unit?: string;
}

export interface ProjectImage {
  url: string;
  caption?: string;
}

export interface ProjectItem {
  id: string; // slug
  title: string;
  category: "unifamiliares" | "plurifamiliares" | "terciario" | "derecho-vuelo";
  categoryLabel: string;
  year: string;
  location: string;
  surface?: string;
  blowerDoor?: string;
  architect?: string;
  builder: string;
  promoter?: string;
  standard: string;
  structuralSystem: string;
  assemblyDays?: number;
  featured?: boolean;
  tagline: string;
  summary: string;
  description: string[];
  keyStats: ProjectStat[];
  technicalHighlights: string[];
  images: ProjectImage[];
}

export const PROJECTS_CATEGORIES: { id: ProjectCategory; label: string; count?: number }[] = [
  { id: "todos", label: "Todos los Proyectos" },
  { id: "unifamiliares", label: "Viviendas Unifamiliares" },
  { id: "plurifamiliares", label: "Plurifamiliares & VPO" },
  { id: "terciario", label: "Uso Terciario & Equipamientos" },
  { id: "derecho-vuelo", label: "Remontas & Derecho de Vuelo" },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    "id": "castrillo-de-murcia",
    "title": "Castrillo de Murcia",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Arquitectura Colaborativa Passivhaus",
    "builder": "Año",
    "promoter": "Proyecto",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": true,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Castrillo de Murcia es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/Castrillo-de-Murcia.jpg",
        "caption": "Fachada exterior de Castrillo de Murcia"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/2.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/3-1.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/4-1.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/5-1.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/6-1.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/7-1.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/8-1.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/2-768x1024.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/3-1-1024x768.jpeg",
        "caption": "Detalle técnico y montaje de Castrillo de Murcia (10)"
      }
    ]
  },
  {
    "id": "4-vpo-villamuriel-de-cerrato",
    "title": "4 VPO Villamuriel de Cerrato",
    "category": "plurifamiliares",
    "categoryLabel": "Edificación Plurifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "1.800 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Arquitectura Colaborativa Passivhaus",
    "builder": "Año",
    "promoter": "Proyecto",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 18,
    "featured": true,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto 4 VPO Villamuriel de Cerrato es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "1.800",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/4-VPO-Villamuriel-de-Cerrato.jpg",
        "caption": "Fachada exterior de 4 VPO Villamuriel de Cerrato"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/Castrillo-de-Murcia.jpg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/2.jpg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/3.jpeg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/4.jpeg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/5.jpeg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/6.jpeg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/7.jpeg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/8.jpeg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2025/05/9.jpeg",
        "caption": "Detalle técnico y montaje de 4 VPO Villamuriel de Cerrato (10)"
      }
    ]
  },
  {
    "id": "duquesa-de-castrejon",
    "title": "Duquesa de Castrejón",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Duquesa de Castrejón es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/07/duquesa-castrejon-portada.webp",
        "caption": "Fachada exterior de Duquesa de Castrejón"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/duquesa-de-castrejon-2.jpg",
        "caption": "Detalle técnico y montaje de Duquesa de Castrejón (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/05/edificio-altura-medgon.webp",
        "caption": "Detalle técnico y montaje de Duquesa de Castrejón (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/duquesa-de-castrejon-2-768x1024.jpg",
        "caption": "Detalle técnico y montaje de Duquesa de Castrejón (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/05/edificio-altura-medgon-768x1024.webp",
        "caption": "Detalle técnico y montaje de Duquesa de Castrejón (5)"
      }
    ]
  },
  {
    "id": "molino-de-la-hoz",
    "title": "Molino de la hoz",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Forjados y cubiertas Kerto Ripa con entramado ligero",
    "assemblyDays": 4,
    "featured": true,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Molino de la hoz es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz.webp",
        "caption": "Fachada exterior de Molino de la hoz"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-5.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-2.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-4.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-6.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-7.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-8.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-9.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-10.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/molino-de-la-hoz-11.jpg",
        "caption": "Detalle técnico y montaje de Molino de la hoz (10)"
      }
    ]
  },
  {
    "id": "casa-vona",
    "title": "Casa Vona",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Casa Vona es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-portada.jpg",
        "caption": "Fachada exterior de Casa Vona"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona1.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-2.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-3.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-4.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-5.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-6.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-7.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-8.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2019/08/Casa-Vona-9.jpg",
        "caption": "Detalle técnico y montaje de Casa Vona (10)"
      }
    ]
  },
  {
    "id": "lanera",
    "title": "Lanera",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Lanera es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-1.webp",
        "caption": "Fachada exterior de Lanera"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera.webp",
        "caption": "Detalle técnico y montaje de Lanera (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-2.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-3.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-4.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-5.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-6.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-7.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-8.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/lanera-2-1024x577.jpeg",
        "caption": "Detalle técnico y montaje de Lanera (10)"
      }
    ]
  },
  {
    "id": "autillo-de-campos",
    "title": "Autillo de Campos",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Autillo de Campos es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos.webp",
        "caption": "Fachada exterior de Autillo de Campos"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-2.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-3.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-5.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-6.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-7.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-8.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos4.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-2-1024x576.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/autillo-de-campos-3-768x1024.jpg",
        "caption": "Detalle técnico y montaje de Autillo de Campos (10)"
      }
    ]
  },
  {
    "id": "boalo",
    "title": "Boalo",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Boalo es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/boalo-principal.webp",
        "caption": "Fachada exterior de Boalo"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/boalo-2.jpg",
        "caption": "Detalle técnico y montaje de Boalo (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/boalo-2-768x1024.jpg",
        "caption": "Detalle técnico y montaje de Boalo (3)"
      }
    ]
  },
  {
    "id": "fromista",
    "title": "Frómista",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Frómista es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/fromista.webp",
        "caption": "Fachada exterior de Frómista"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/fromista-2.jpeg",
        "caption": "Detalle técnico y montaje de Frómista (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/fromista-3.jpg",
        "caption": "Detalle técnico y montaje de Frómista (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/fromista-4.jpeg",
        "caption": "Detalle técnico y montaje de Frómista (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/fromista-2-300x225.jpeg",
        "caption": "Detalle técnico y montaje de Frómista (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/fromista-3-300x225.jpg",
        "caption": "Detalle técnico y montaje de Frómista (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/fromista-4-300x225.jpeg",
        "caption": "Detalle técnico y montaje de Frómista (7)"
      }
    ]
  },
  {
    "id": "oficinas-medgon",
    "title": "Oficinas Medgón",
    "category": "terciario",
    "categoryLabel": "Uso Terciario & Equipamientos",
    "year": "2023",
    "location": "España",
    "surface": "350 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 6,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Oficinas Medgón es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "350",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon.webp",
        "caption": "Fachada exterior de Oficinas Medgón"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon2.webp",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon3.webp",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon4.webp",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon5.webp",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon6.webp",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon7.jpg",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon8.jpg",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon9.jpg",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/oficinas-medgon10.jpg",
        "caption": "Detalle técnico y montaje de Oficinas Medgón (10)"
      }
    ]
  },
  {
    "id": "grijota",
    "title": "Grijota",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Grijota es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/grijota.webp",
        "caption": "Fachada exterior de Grijota"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/grijota-2.jpeg",
        "caption": "Detalle técnico y montaje de Grijota (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/grijota-3.jpeg",
        "caption": "Detalle técnico y montaje de Grijota (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/grijota-4.jpeg",
        "caption": "Detalle técnico y montaje de Grijota (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/grijota-2-300x225.jpeg",
        "caption": "Detalle técnico y montaje de Grijota (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/grijota-3-225x300.jpeg",
        "caption": "Detalle técnico y montaje de Grijota (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/grijota-4-225x300.jpeg",
        "caption": "Detalle técnico y montaje de Grijota (7)"
      }
    ]
  },
  {
    "id": "pabellon-oncologico",
    "title": "Pabellón Oncológico",
    "category": "terciario",
    "categoryLabel": "Uso Terciario & Equipamientos",
    "year": "2023",
    "location": "Superficie",
    "surface": "350 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 6,
    "featured": true,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Pabellón Oncológico es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "350",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/05/pabellon-oncologico-aranda16.webp",
        "caption": "Fachada exterior de Pabellón Oncológico"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0208.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0207.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0206.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0205.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0204.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0202.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0201.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0200.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2018/03/IMG_0198.jpg",
        "caption": "Detalle técnico y montaje de Pabellón Oncológico (10)"
      }
    ]
  },
  {
    "id": "viviendas-tuteladas-plena-inclusion",
    "title": "Viviendas Tuteladas Plena Inclusión",
    "category": "terciario",
    "categoryLabel": "Uso Terciario & Equipamientos",
    "year": "2023",
    "location": "España",
    "surface": "350 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 6,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Viviendas Tuteladas Plena Inclusión es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "350",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion.webp",
        "caption": "Fachada exterior de Viviendas Tuteladas Plena Inclusión"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-2.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-3.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-4.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-5.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-6.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-7.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-8.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-9.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/viviendas-tuteladas-plena-inclusion-10.jpeg",
        "caption": "Detalle técnico y montaje de Viviendas Tuteladas Plena Inclusión (10)"
      }
    ]
  },
  {
    "id": "sa-pobla",
    "title": "SA Pobla",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Arquitectura Colaborativa Passivhaus",
    "builder": "Año",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto SA Pobla es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/sa-pobla-mallorca.jpg",
        "caption": "Fachada exterior de SA Pobla"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-2.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-3.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-4.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-5.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-6.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-2-1024x572.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-3-1024x600.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-4-1024x682.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/SA-POBLA-5-1024x683.jpg",
        "caption": "Detalle técnico y montaje de SA Pobla (10)"
      }
    ]
  },
  {
    "id": "29-viviendas-passivhaus",
    "title": "29 viviendas Passivhaus",
    "category": "plurifamiliares",
    "categoryLabel": "Edificación Plurifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "1.800 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 18,
    "featured": true,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto 29 viviendas Passivhaus es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "1.800",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/villimar-passivhaus.jpg",
        "caption": "Fachada exterior de 29 viviendas Passivhaus"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR-1-min-scaled.jpg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR11-min.jpeg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR10-min.jpeg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR9-min.jpeg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR8-min.jpeg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR7-min-scaled.jpg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR6-min-scaled.jpg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR5-min.jpg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/VILLIMAR4-min.jpg",
        "caption": "Detalle técnico y montaje de 29 viviendas Passivhaus (10)"
      }
    ]
  },
  {
    "id": "azahar",
    "title": "Azahar",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Arquitectura Colaborativa Passivhaus",
    "builder": "Año",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Azahar es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/azahar-mallorca.jpg",
        "caption": "Fachada exterior de Azahar"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-2.jpg",
        "caption": "Detalle técnico y montaje de Azahar (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-3.jpg",
        "caption": "Detalle técnico y montaje de Azahar (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR4.jpg",
        "caption": "Detalle técnico y montaje de Azahar (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-5.jpg",
        "caption": "Detalle técnico y montaje de Azahar (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-6.jpg",
        "caption": "Detalle técnico y montaje de Azahar (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-7-scaled.jpg",
        "caption": "Detalle técnico y montaje de Azahar (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-8-scaled.jpg",
        "caption": "Detalle técnico y montaje de Azahar (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-2-1024x659.jpg",
        "caption": "Detalle técnico y montaje de Azahar (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/AZAHAR-3-1024x684.jpg",
        "caption": "Detalle técnico y montaje de Azahar (10)"
      }
    ]
  },
  {
    "id": "ampliacion-colegio-waldorf",
    "title": "Ampliación Colegio Waldorf",
    "category": "terciario",
    "categoryLabel": "Uso Terciario & Equipamientos",
    "year": "2023",
    "location": "Superficie",
    "surface": "350 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Forjados y cubiertas Kerto Ripa con entramado ligero",
    "assemblyDays": 6,
    "featured": true,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Ampliación Colegio Waldorf es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "350",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/05/colegio-waldorf-aravaca.webp",
        "caption": "Fachada exterior de Ampliación Colegio Waldorf"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_01.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_02.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_03.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_04.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_05.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_06.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_07.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_08.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/WaldorfAravaca_09.jpg",
        "caption": "Detalle técnico y montaje de Ampliación Colegio Waldorf (10)"
      }
    ]
  },
  {
    "id": "mieres",
    "title": "Mieres",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Mieres es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/casa-mieres.jpg",
        "caption": "Fachada exterior de Mieres"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/IMG_0064.jpg",
        "caption": "Detalle técnico y montaje de Mieres (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/IMG_0063.jpg",
        "caption": "Detalle técnico y montaje de Mieres (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/IMG_0064-1024x1024.jpg",
        "caption": "Detalle técnico y montaje de Mieres (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/IMG_0063-1024x765.jpg",
        "caption": "Detalle técnico y montaje de Mieres (5)"
      }
    ]
  },
  {
    "id": "17-viviendas-villas-de-yague",
    "title": "17 viviendas, Villas de Yague",
    "category": "plurifamiliares",
    "categoryLabel": "Edificación Plurifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "1.800 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 18,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto 17 viviendas, Villas de Yague es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "1.800",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/17-viviendas-Villas-de-Yague.jpg",
        "caption": "Fachada exterior de 17 viviendas, Villas de Yague"
      }
    ]
  },
  {
    "id": "marratxi",
    "title": "Marratxi",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Arquitectura Colaborativa Passivhaus",
    "builder": "Año",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": true,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Marratxi es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/05/marratxi-passivhaus.webp",
        "caption": "Fachada exterior de Marratxi"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-2.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-3.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-4.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-5.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-casa-pasiva.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-medgon.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-passivhaus.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Marratxi-1024x663.jpeg",
        "caption": "Detalle técnico y montaje de Marratxi (10)"
      }
    ]
  },
  {
    "id": "pedro-romero",
    "title": "Pedro Romero",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Pedro Romero es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/Pedro-Romero-passivhaus.jpeg",
        "caption": "Fachada exterior de Pedro Romero"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Pedro-Romero-2.jpeg",
        "caption": "Detalle técnico y montaje de Pedro Romero (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Pedro-Romero-4.jpg",
        "caption": "Detalle técnico y montaje de Pedro Romero (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/3.jpeg",
        "caption": "Detalle técnico y montaje de Pedro Romero (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/5-1.jpeg",
        "caption": "Detalle técnico y montaje de Pedro Romero (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/7.jpg",
        "caption": "Detalle técnico y montaje de Pedro Romero (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/8.jpg",
        "caption": "Detalle técnico y montaje de Pedro Romero (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Pedro-Romero-suelo-scaled.jpg",
        "caption": "Detalle técnico y montaje de Pedro Romero (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Pedro-Romero-2-1024x768.jpeg",
        "caption": "Detalle técnico y montaje de Pedro Romero (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/Pedro-Romero-4-768x1024.jpg",
        "caption": "Detalle técnico y montaje de Pedro Romero (10)"
      }
    ]
  },
  {
    "id": "carcedo",
    "title": "Carcedo",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Carcedo es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/carcedo.jpg",
        "caption": "Fachada exterior de Carcedo"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo3.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo4.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo5.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo6.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo7.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo8.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo9.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo10.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/carcedo11.jpg",
        "caption": "Detalle técnico y montaje de Carcedo (10)"
      }
    ]
  },
  {
    "id": "villimar",
    "title": "Villimar",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "Superficie",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en Superficie",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Villimar es un referente de construcción sostenible y bioconfort en Superficie. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/villimar.jpg",
        "caption": "Fachada exterior de Villimar"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/unnamed-1.jpg",
        "caption": "Detalle técnico y montaje de Villimar (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar2.jpg",
        "caption": "Detalle técnico y montaje de Villimar (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar3.jpg",
        "caption": "Detalle técnico y montaje de Villimar (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar4.jpg",
        "caption": "Detalle técnico y montaje de Villimar (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar5.jpg",
        "caption": "Detalle técnico y montaje de Villimar (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar6.jpg",
        "caption": "Detalle técnico y montaje de Villimar (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar7.jpg",
        "caption": "Detalle técnico y montaje de Villimar (8)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar8.jpg",
        "caption": "Detalle técnico y montaje de Villimar (9)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2022/09/villimar9.jpg",
        "caption": "Detalle técnico y montaje de Villimar (10)"
      }
    ]
  },
  {
    "id": "tagle-casa-luna",
    "title": "Tagle «Casa Luna»",
    "category": "unifamiliares",
    "categoryLabel": "Vivienda Unifamiliar",
    "year": "2023",
    "location": "España",
    "surface": "180 m²",
    "blowerDoor": "0,38 h⁻¹",
    "architect": "Año",
    "builder": "Arquitecto",
    "promoter": "Constructor",
    "standard": "Passivhaus Classic Certificado",
    "structuralSystem": "Entramado ligero de madera con celulosa insuflada",
    "assemblyDays": 4,
    "featured": false,
    "tagline": "Construcción industrializada de alta eficiencia energética en España",
    "summary": "Proyecto ejecutado íntegramente con componentes industrializados en la fábrica de Medgón en Carrión de los Condes, garantizando precisión milimétrica y mínimo impacto en parcela.",
    "description": [
      "El proyecto Tagle «Casa Luna» es un referente de construcción sostenible y bioconfort en España. La envolvente térmica continua y la hermeticidad cuidada al milímetro permiten alcanzar unas demandas de climatización mínimas durante todo el año.",
      "Gracias al diseño BIM en Cadwork y la mecanización robotizada de la madera en taller, el montaje estructural se completó en un plazo excepcionalmente reducido, protegiendo la estructura de las inclemencias meteorológicas.",
      "El ensayo Blower Door acreditó un valor de 0,38 h⁻¹, garantizando la ausencia de infiltraciones parásitas de aire y un confort acústico y térmico sobresaliente para sus usuarios."
    ],
    "keyStats": [
      {
        "label": "Blower Door (n50)",
        "value": "0,38",
        "unit": "renov/h"
      },
      {
        "label": "Superficie",
        "value": "180",
        "unit": "m²"
      },
      {
        "label": "Año Ejecución",
        "value": "2023"
      },
      {
        "label": "Ahorro Clima",
        "value": "-85%",
        "unit": "vs tradicional"
      }
    ],
    "technicalHighlights": [
      "Estructura portante de madera técnica certificada PEFC/FSC",
      "Aislamiento continuo con celulosa insuflada a alta densidad y fibra de madera",
      "Láminas inteligentes de control de vapor y sellado hermético perimetral",
      "Ventilación mecánica controlada de doble flujo con recuperación de calor de alto rendimiento"
    ],
    "images": [
      {
        "url": "https://www.medgon.com/wp-content/uploads/2023/05/tagle-Casa-Luna.webp",
        "caption": "Fachada exterior de Tagle «Casa Luna»"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/06/tagle-casa-luna-portada.webp",
        "caption": "Detalle técnico y montaje de Tagle «Casa Luna» (2)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/09/tagle.jpg",
        "caption": "Detalle técnico y montaje de Tagle «Casa Luna» (3)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/09/casa-luna-acaba.jpg",
        "caption": "Detalle técnico y montaje de Tagle «Casa Luna» (4)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/09/tagle-casa-luna-passivhaus.jpg",
        "caption": "Detalle técnico y montaje de Tagle «Casa Luna» (5)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/09/tagle-1024x768.jpg",
        "caption": "Detalle técnico y montaje de Tagle «Casa Luna» (6)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/09/casa-luna-acaba-1024x768.jpg",
        "caption": "Detalle técnico y montaje de Tagle «Casa Luna» (7)"
      },
      {
        "url": "https://www.medgon.com/wp-content/uploads/2024/09/tagle-casa-luna-passivhaus-1024x768.jpg",
        "caption": "Detalle técnico y montaje de Tagle «Casa Luna» (8)"
      }
    ]
  }
];
