import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  FileDown,
  Sparkles,
  Download,
  SlidersHorizontal,
  RotateCcw,
  Lock,
  Layers,
} from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Plano Técnico';
  src: string;
  type: 'image' | 'plan';
  description: string;
}

export interface ModelGalleryData {
  modelKey: 'MG87' | 'MG100' | string;
  badgeLabel: string;
  m2Label: string;
  title: string;
  subtitle: string;
  pdfUrl: string;
  pdfFilename: string;
  items: GalleryItem[];
}

export const MODELS_GALLERY_DATA: Record<string, ModelGalleryData> = {
  MG87: {
    modelKey: 'MG87',
    badgeLabel: 'Modelo Oficial MG87',
    m2Label: '87 m² Construidos',
    title: 'Galería de Renders y Planos de Distribución (MG87)',
    subtitle: 'Superficie compacta optimizada: 87 m² construidos • Estilo Rústico Castellano Cálido • Cubierta inclinada 30% • 1-2 dormitorios (suite con vestidor o 2 dormitorios)',
    pdfUrl: encodeURI('/MG87/COMERCIAL - MG84 - V1 - Inclinada 30%.pdf'),
    pdfFilename: 'Medgon_MG87_Plano_Comercial_Cotas.pdf',
    items: [
      {
        id: 'mg87-exterior-wheat',
        title: 'Fachada Exterior en Entorno Natural',
        category: 'Exterior',
        src: '/MG87/castilian_wheat_house.jpg',
        type: 'image',
        description: 'Vivienda unifamiliar Passivhaus compacta con arquitectura bioclimática de cubierta inclinada tradicional al 30% y máxima integración paisajística.',
      },
      {
        id: 'mg87-exterior-stubble',
        title: 'Fachada Lateral y Porche',
        category: 'Exterior',
        src: '/MG87/castilian_wheat_stubble_house.jpg',
        type: 'image',
        description: 'Estructura hermética continua industrializada en madera con grandes huecos acristalados de altas prestaciones para captación solar.',
      },
      {
        id: 'mg87-interior-rustic',
        title: 'Salón-Comedor Rústico Cálido',
        category: 'Interior',
        src: '/MG87/mediterranean_rustic_interior.jpg',
        type: 'image',
        description: 'Espacio diáfano con vigas de madera vista en techos altos inclinados, iluminación natural y confort térmico homogéneo.',
      },
      {
        id: 'mg87-interior-sunlit',
        title: 'Salón Soleado y Zona de Estar',
        category: 'Interior',
        src: '/MG87/mediterranean_sunlit_interior.jpg',
        type: 'image',
        description: 'Zona de descanso luminosa con carpinterías herméticas de triple vidrio bajo emisivo y ambiente acústico sereno.',
      },
      {
        id: 'mg87-cocina',
        title: 'Cocina Abierta Integrada',
        category: 'Interior',
        src: '/MG87/cocina.jpg',
        type: 'image',
        description: 'Distribución contemporánea y funcional con aprovechamiento de luz natural y ventilación con recuperación de calor.',
      },
      {
        id: 'mg87-dormitorio',
        title: 'Dormitorio Principal Suite',
        category: 'Interior',
        src: '/MG87/DOrmitorio.jpg',
        type: 'image',
        description: 'Dormitorio principal confortable con aire filtrado 24/7 libre de polvo y alérgenos mediante sistema VMC de doble flujo.',
      },
      {
        id: 'mg87-plano-1',
        title: 'Plano Comercial MG87',
        category: 'Plano Técnico',
        src: '/MG87/Mg_87_plano.jpg',
        type: 'plan',
        description: 'Plano técnico oficial con distribución optimizada de 87 m² construidos, estancias diáfanas y cuadro de superficies.',
      },
      {
        id: 'mg87-plano-2',
        title: 'Plano Técnico de Distribución con Cotas',
        category: 'Plano Técnico',
        src: '/MG87/Mg_87_plano-1.jpg',
        type: 'plan',
        description: 'Plano de planta acotado con cotas dimensionales de carpinterías, tabiquería y distribución interior.',
      },
    ],
  },
  MG100: {
    modelKey: 'MG100',
    badgeLabel: 'Modelo Oficial MG100',
    m2Label: '100 m² Construidos',
    title: 'Galería de Renders y Planos de Distribución (MG100)',
    subtitle: 'Superficie estándar: 100 m² construidos • Cubierta inclinada 30%',
    pdfUrl: encodeURI('/MG100/COMERCIAL - MG100 - V2 - Inclinada 30% cotas.pdf'),
    pdfFilename: 'Medgon_MG100_Plano_Comercial_Cotas.pdf',
    items: [
      {
        id: 'mg100-exterior-1',
        title: 'Fachada Exterior Principal',
        category: 'Exterior',
        src: '/MG100/MG_100_Exterior.png',
        type: 'image',
        description: 'Arquitectura bioclimática contemporánea con revestimiento en madera de pino y grandes huecos acristalados orientados para captación solar.',
      },
      {
        id: 'mg100-exterior-2',
        title: 'Vista Exterior Posterior y Porche',
        category: 'Exterior',
        src: '/MG100/MG_100_exterior2.png',
        type: 'image',
        description: 'Cubierta inclinada al 30% con aleros optimizados para sombreado estival e integración total con el entorno natural.',
      },
      {
        id: 'mg100-salon',
        title: 'Salón de Estar Confort Passivhaus',
        category: 'Interior',
        src: '/MG100/MG_100_salon.png',
        type: 'image',
        description: 'Espacio diáfano con temperatura uniforme durante todo el año (20-22 °C), sin corrientes de aire ni puentes térmicos.',
      },
      {
        id: 'mg100-comedor',
        title: 'Comedor y Conexión de Espacios',
        category: 'Interior',
        src: '/MG100/MG_100_comedor.png',
        type: 'image',
        description: 'Distribución abierta que maximiza la amplitud visual y aprovecha al máximo la luz natural y el flujo de ventilación mecánica controlada (VMC).',
      },
      {
        id: 'mg100-cocina',
        title: 'Cocina Abierta y Luminosa',
        category: 'Interior',
        src: '/MG100/MG_100_cocina.png',
        type: 'image',
        description: 'Diseño moderno y funcional, perfectamente integrado en la zona de día de la vivienda.',
      },
      {
        id: 'mg100-dormitorio',
        title: 'Dormitorio Principal',
        category: 'Interior',
        src: '/MG100/MG_100_dormitorio.png',
        type: 'image',
        description: 'Estancia silenciosa con calidad de aire superior gracias a la renovación continua con filtros F7/G4 anti-polen y anti-ácaros.',
      },
      {
        id: 'mg100-plano',
        title: 'Plano Técnico de Distribución con Cotas (100 m²)',
        category: 'Plano Técnico',
        src: '/MG100/MG_100_Plano.jpg',
        type: 'plan',
        description: 'Planta de distribución oficial de 100 m² construidos con 2 dormitorios, 2 baños, salón-comedor-cocina y porche exterior.',
      },
    ],
  },
  MG105: {
    modelKey: 'MG105',
    badgeLabel: 'Modelo Oficial MG105',
    m2Label: '105 m² Construidos',
    title: 'Galería de Renders y Planos de Distribución (MG105)',
    subtitle: 'Vivienda unifamiliar Passivhaus en planta baja: 105 m² construidos • Estilo Industrial Cálido • 2-3 dormitorios (suite con vestidor) • 2 baños • Cuarto de instalaciones',
    pdfUrl: encodeURI('/MG105/MG 105.pdf'),
    pdfFilename: 'Medgon_MG105_Plano_Comercial_Cotas.pdf',
    items: [
      {
        id: 'mg105-exterior-1',
        title: 'Fachada Exterior Principal y Porche',
        category: 'Exterior',
        src: '/MG105/industrial_luminous_house_exterior.jpg',
        type: 'image',
        description: 'Vivienda unifamiliar Passivhaus en planta baja con cubierta tradicional inclinada, zócalo perimetral oscuro en contraste, amplias cristaleras correderas y porche ajardinado.',
      },
      {
        id: 'mg105-exterior-2',
        title: 'Fachada Lateral y Jardín',
        category: 'Exterior',
        src: '/MG105/sunny_industrial_garden_house.jpg',
        type: 'image',
        description: 'Envolvente hermética continua con acabado blanco de altas prestaciones, puerta de acceso lateral y conexión armoniosa con el jardín.',
      },
      {
        id: 'mg105-salon-comedor',
        title: 'Salón-Comedor con Vigas Vistas de Madera',
        category: 'Interior',
        src: '/MG105/industrial_dining_living_room.jpg',
        type: 'image',
        description: 'Amplio espacio diáfano con techos altos inclinados y vigas de madera natural vista, gran mesa de comedor e iluminación natural abundante.',
      },
      {
        id: 'mg105-salon-jardin',
        title: 'Salón Abierto al Exterior',
        category: 'Interior',
        src: '/MG105/industrial_living_room_sunlit.jpg',
        type: 'image',
        description: 'Grandes cristaleras correderas Passivhaus de triple vidrio con conexión directa a la pradera exterior y estantería modular integrada.',
      },
      {
        id: 'mg105-cocina-isla',
        title: 'Cocina Abierta con Isla y Barra Desayunador',
        category: 'Interior',
        src: '/MG105/luminous_industrial_living_room.jpg',
        type: 'image',
        description: 'Cocina moderna perfectamente integrada con isla central de madera oscura, taburetes altos, lámparas colgantes de diseño y despensa lateral.',
      },
      {
        id: 'mg105-dormitorio',
        title: 'Dormitorio Principal Suite',
        category: 'Interior',
        src: '/MG105/industrial_bedroom_sunlit.jpg',
        type: 'image',
        description: 'Suite luminosa con techo de vigas de madera vista, mobiliario de estilo industrial cálido y renovación continua de aire filtrado 24/7 libre de polvo y alérgenos.',
      },
      {
        id: 'mg105-plano-cota',
        title: 'Plano Técnico de Distribución Renderizado',
        category: 'Plano Técnico',
        src: '/MG105/industrial_floorplan_render.jpg',
        type: 'plan',
        description: 'Distribución optimizada: Cocina, Salón-Comedor, Baños, Cuarto Técnico de Instalaciones, Distribuidor, Vestidor y Dormitorios.',
      },
      {
        id: 'mg105-plano-mg105',
        title: 'Plano Técnico Comercial MG105',
        category: 'Plano Técnico',
        src: '/MG105/MG105 plano.jpg',
        type: 'plan',
        description: 'Plano general de planta y distribución acotada oficial con cotas y superficies útiles del modelo MG105.',
      },
    ],
  },
  MG115: {
    modelKey: 'MG105',
    badgeLabel: 'Modelo Oficial MG105',
    m2Label: '105 m² Construidos',
    title: 'Galería de Renders y Plano de Distribución (MG105)',
    subtitle: 'Vivienda familiar en planta baja: 105 m² construidos • 2 amplios dormitorios (suite con vestidor) • 2 baños • Cuarto de instalaciones',
    pdfUrl: encodeURI('/MG105/MG 105.pdf'),
    pdfFilename: 'Medgon_MG105_Plano_Comercial_Cotas.pdf',
    items: [
      {
        id: 'mg115-exterior-1',
        title: 'Fachada Exterior Principal y Porche',
        category: 'Exterior',
        src: '/MG105/industrial_luminous_house_exterior.jpg',
        type: 'image',
        description: 'Vivienda unifamiliar Passivhaus en planta baja con cubierta tradicional inclinada, zócalo perimetral oscuro en contraste, amplias cristaleras correderas y porche ajardinado.',
      },
      {
        id: 'mg115-exterior-2',
        title: 'Fachada Lateral y Jardín',
        category: 'Exterior',
        src: '/MG105/sunny_industrial_garden_house.jpg',
        type: 'image',
        description: 'Envolvente hermética continua con acabado blanco de altas prestaciones, puerta de acceso lateral y conexión armoniosa con el jardín.',
      },
      {
        id: 'mg115-salon-comedor',
        title: 'Salón-Comedor con Vigas Vistas de Madera',
        category: 'Interior',
        src: '/MG105/industrial_dining_living_room.jpg',
        type: 'image',
        description: 'Amplio espacio diáfano con techos altos inclinados y vigas de madera natural vista, gran mesa de comedor e iluminación natural abundante.',
      },
      {
        id: 'mg115-salon-jardin',
        title: 'Salón Abierto al Exterior',
        category: 'Interior',
        src: '/MG105/industrial_living_room_sunlit.jpg',
        type: 'image',
        description: 'Grandes cristaleras correderas Passivhaus de triple vidrio con conexión directa a la pradera exterior y estantería modular integrada.',
      },
      {
        id: 'mg115-cocina-isla',
        title: 'Cocina Abierta con Isla y Barra Desayunador',
        category: 'Interior',
        src: '/MG105/luminous_industrial_living_room.jpg',
        type: 'image',
        description: 'Cocina moderna perfectamente integrada con isla central de madera oscura, taburetes altos, lámparas colgantes de diseño y despensa lateral.',
      },
      {
        id: 'mg115-dormitorio',
        title: 'Dormitorio Principal Suite',
        category: 'Interior',
        src: '/MG105/industrial_bedroom_sunlit.jpg',
        type: 'image',
        description: 'Suite luminosa con techo de vigas de madera vista, mobiliario de estilo industrial cálido y renovación continua de aire filtrado 24/7 libre de polvo y alérgenos.',
      },
      {
        id: 'mg115-plano-cota',
        title: 'Plano Técnico de Distribución con Cotas',
        category: 'Plano Técnico',
        src: '/MG105/industrial_floorplan_render.jpg',
        type: 'plan',
        description: 'Distribución optimizada: Cocina, Salón-Comedor, Baños, Cuarto Técnico de Instalaciones, Distribuidor, Vestidor y Dormitorios.',
      },
      {
        id: 'mg115-plano-mg105',
        title: 'Plano Comercial MG105',
        category: 'Plano Técnico',
        src: '/MG105/MG105 plano.jpg',
        type: 'plan',
        description: 'Plano general de planta y distribución acotada oficial con cotas y superficies útiles.',
      },
    ],
  },
  MG128: {
    modelKey: 'MG128',
    badgeLabel: 'Modelo Oficial MG128',
    m2Label: '128 m² Construidos (Cubierta Plana)',
    title: 'Galería de Renders y Planos de Distribución (MG128 - Cubierta Plana)',
    subtitle: 'Vivienda unifamiliar Passivhaus en planta baja: 128 m² construidos • Estilo Boho Cálido • Cubierta Plana • 3-4 dormitorios • 2 baños',
    pdfUrl: encodeURI('/MG128/COMERCIAL - MG 128 - V2 - Cubierta plana.pdf'),
    pdfFilename: 'Medgon_MG128_V2_Cubierta_Plana_Cotas.pdf',
    items: [
      {
        id: 'mg128-exterior-boho',
        title: 'Fachada Exterior y Porche Boho',
        category: 'Exterior',
        src: '/MG128/boho_autumn_exterior.jpg',
        type: 'image',
        description: 'Vivienda unifamiliar Passivhaus con arquitectura contemporánea de cubierta plana, grandes cristaleras herméticas y porche integrado.',
      },
      {
        id: 'mg128-exterior-patio',
        title: 'Patio y Terraza Exterior',
        category: 'Exterior',
        src: '/MG128/autumn_boho_patio.jpg',
        type: 'image',
        description: 'Espacio exterior y patio con ambiente cálido, vegetación y conexión fluida entre el interior y la zona ajardinada.',
      },
      {
        id: 'mg128-exterior-cabana',
        title: 'Vista Exterior y Jardín',
        category: 'Exterior',
        src: '/MG128/bohemian_cabana_autumn.jpg',
        type: 'image',
        description: 'Perspectiva arquitectónica con acabados naturales, carpinterías de altas prestaciones y óptima orientación solar.',
      },
      {
        id: 'mg128-salon-comedor',
        title: 'Salón-Comedor Principal Boho',
        category: 'Interior',
        src: '/MG128/boho_living_dining_room.jpg',
        type: 'image',
        description: 'Espacio diáfano principal que integra salón y comedor con tonos cálidos, texturas naturales y abundante luz natural.',
      },
      {
        id: 'mg128-salon-comedor-1',
        title: 'Salón-Comedor y Zona de Estar',
        category: 'Interior',
        src: '/MG128/boho_living_dining_room_1.jpg',
        type: 'image',
        description: 'Distribución abierta y confortable con gran mesa de comedor, iluminación ambiental y confort térmico Passivhaus constante.',
      },
      {
        id: 'mg128-salon-interior',
        title: 'Salón Acogedor con Grandes Ventanales',
        category: 'Interior',
        src: '/MG128/boho_salon_interior.jpg',
        type: 'image',
        description: 'Zona de descanso con conexión visual directa al jardín mediante acristalamientos de triple vidrio bajo emisivos.',
      },
      {
        id: 'mg128-cocina-interior',
        title: 'Cocina Abierta Integrada',
        category: 'Interior',
        src: '/MG128/boho_kitchen_interior.jpg',
        type: 'image',
        description: 'Cocina moderna totalmente equipada con isla, acabados en madera cálida y diseño ergonómico de máxima eficiencia.',
      },
      {
        id: 'mg128-cocina-warm',
        title: 'Cocina Cálida y Desayunador',
        category: 'Interior',
        src: '/MG128/boho_kitchen_warm.jpg',
        type: 'image',
        description: 'Detalle de la zona de cocina y comedor diario con muebles a medida y ventilación mecánica con recuperación de calor.',
      },
      {
        id: 'mg128-dormitorio-interior',
        title: 'Dormitorio Suite Principal',
        category: 'Interior',
        src: '/MG128/boho_bedroom_interior.jpg',
        type: 'image',
        description: 'Dormitorio principal con diseño sereno y relajante, aire puro filtrado 24 horas y aislamiento acústico de altas prestaciones.',
      },
      {
        id: 'mg128-dormitorio-warm',
        title: 'Dormitorio Cálido',
        category: 'Interior',
        src: '/MG128/boho_bedroom_warm.jpg',
        type: 'image',
        description: 'Ambiente confortable con textiles y maderas naturales, temperatura uniforme sin corrientes de aire ni puentes térmicos.',
      },
      {
        id: 'mg128-plano',
        title: 'Plano Técnico Comercial MG128 (Cubierta Plana)',
        category: 'Plano Técnico',
        src: '/MG128/plano MG128.jpg',
        type: 'plan',
        description: 'Plano acotado oficial de distribución interior de 128 m² construidos con cotas, superficies útiles y cuadro de estancias.',
      },
    ],
  },
  MG148: {
    modelKey: 'MG148',
    badgeLabel: 'Modelo Oficial MG148',
    m2Label: '148 m² Construidos (Cubierta Inclinada)',
    title: 'Galería de Renders y Planos de Distribución (MG148)',
    subtitle: 'Vivienda unifamiliar Passivhaus en planta baja: 148 m² construidos • Estilo Farmhouse Cálido • 4 dormitorios • 2 baños • Cuarto de instalaciones',
    pdfUrl: encodeURI('/MG148/COMERCIAL - MG 148 - V1 - Cubierta inclinada.pdf'),
    pdfFilename: 'Medgon_MG148_Plano_Comercial_Cotas.pdf',
    items: [
      {
        id: 'mg148-exterior-l',
        title: 'Fachada Exterior en L al Atardecer',
        category: 'Exterior',
        src: '/MG148/l_shaped_farmhouse_golden_hour.jpg',
        type: 'image',
        description: 'Estructura industrializada de madera en distribución en L, con cubierta inclinada tradicional, grandes ventanales y porche integrado.',
      },
      {
        id: 'mg148-exterior-summer',
        title: 'Fachada Exterior y Porche Ajardinado',
        category: 'Exterior',
        src: '/MG148/sunny_farmhouse_summer.jpg',
        type: 'image',
        description: 'Vivienda unifamiliar Passivhaus rodeada de jardín, con amplios acristalamientos bajo emisivos y aislamiento continuo sin puentes térmicos.',
      },
      {
        id: 'mg148-salon-comedor',
        title: 'Salón-Comedor Diáfano Farmhouse',
        category: 'Interior',
        src: '/MG148/farmhouse_salon_comedor.jpg',
        type: 'image',
        description: 'Espacio diáfano con techos altos inclinados, vigas de madera natural vista, gran mesa de comedor e iluminación natural abundante.',
      },
      {
        id: 'mg148-salon-interior',
        title: 'Salón y Espacio de Estar Acogedor',
        category: 'Interior',
        src: '/MG148/cozy_farmhouse_interior.jpg',
        type: 'image',
        description: 'Zona de descanso con chimenea y ambiente cálido, confort térmico homogéneo y calidad de aire interior constante Passivhaus.',
      },
      {
        id: 'mg148-cocina-rustic',
        title: 'Cocina Rústica Moderna con Isla',
        category: 'Interior',
        src: '/MG148/farmhouse_kitchen_rustic.jpg',
        type: 'image',
        description: 'Cocina amplia de alta gama con isla central, mobiliario estilo rústico contemporáneo, barra y campana integrada.',
      },
      {
        id: 'mg148-dormitorio',
        title: 'Dormitorio Suite Principal',
        category: 'Interior',
        src: '/MG148/cozy_farmhouse_bedroom.jpg',
        type: 'image',
        description: 'Dormitorio principal luminoso y confortable con carpinterías de altas prestaciones y renovación continua de aire filtrado 24/7.',
      },
      {
        id: 'mg148-plano',
        title: 'Plano Técnico Comercial MG148',
        category: 'Plano Técnico',
        src: '/MG148/Plano MG148.jpg',
        type: 'plan',
        description: 'Plano técnico oficial acotado con distribución de 148 m² construidos, 4 dormitorios, 2 baños, salón-comedor, cocina y cuarto técnico.',
      },
    ],
  },
  MG165: {
    modelKey: 'MG165',
    badgeLabel: 'Modelo Oficial MG165',
    m2Label: '165 m² Construidos',
    title: 'Galería de Renders y Vistas Arquitectónicas (MG165)',
    subtitle: 'Vivienda unifamiliar Passivhaus de alta gama: 165 m² construidos • Estilo Costero Contemporáneo • 4-5 dormitorios • Espacios diáfanos y máxima luminosidad',
    pdfUrl: '',
    pdfFilename: 'Medgon_MG165_Plano_Comercial.pdf',
    items: [
      {
        id: 'mg165-exterior-l',
        title: 'Fachada Exterior en L y Jardín Costero',
        category: 'Exterior',
        src: '/MG165/coastal_l_shaped_home.jpg',
        type: 'image',
        description: 'Vivienda unifamiliar Passivhaus con volumetría en L de 165 m², amplios porches integrados, cubierta de teja y conexión directa con el jardín.',
      },
      {
        id: 'mg165-sunset-house',
        title: 'Fachada Exterior al Atardecer',
        category: 'Exterior',
        src: '/MG165/coastal_sunset_house.jpg',
        type: 'image',
        description: 'Arquitectura industrializada bioclimática con grandes huecos acristalados de triple vidrio bajo emisivo y orientación optimizada.',
      },
      {
        id: 'mg165-segovia-coastal',
        title: 'Vista Exterior Costera al Ocaso',
        category: 'Exterior',
        src: '/MG165/segovia_sunset_coastal.jpg',
        type: 'image',
        description: 'Integración paisajística con diseño sereno y limpio, acabados exteriores duraderos y porche sombreado bioclimático.',
      },
      {
        id: 'mg165-segovia-countryside',
        title: 'Perspectiva Exterior en Entorno Natural',
        category: 'Exterior',
        src: '/MG165/segovia_sunset_countryside.jpg',
        type: 'image',
        description: 'Envolvente continua hermética de entramado de madera con máximo aislamiento acústico y térmico sin puentes térmicos.',
      },
      {
        id: 'mg165-living-dining',
        title: 'Salón-Comedor Diáfano Costero',
        category: 'Interior',
        src: '/MG165/coastal_living_dining_room.jpg',
        type: 'image',
        description: 'Gran espacio de día diáfano con techos altos inclinados, vigas de madera natural vista, gran mesa de comedor e iluminación natural abundante.',
      },
      {
        id: 'mg165-sunset-living',
        title: 'Salón de Estar Cálido al Ocaso',
        category: 'Interior',
        src: '/MG165/coastal_sunset_living_room.jpg',
        type: 'image',
        description: 'Zona de descanso con chimenea y ambiente cálido, confort térmico homogéneo y calidad de aire interior constante Passivhaus.',
      },
      {
        id: 'mg165-kitchen-sunset',
        title: 'Cocina Abierta de Diseño con Isla',
        category: 'Interior',
        src: '/MG165/coastal_kitchen_sunset.jpg',
        type: 'image',
        description: 'Cocina amplia de alta gama con isla central de madera, taburetes altos, mobiliario integrado y despensa técnica.',
      },
      {
        id: 'mg165-bedroom-morning',
        title: 'Dormitorio Suite Principal Iluminado',
        category: 'Interior',
        src: '/MG165/coastal_bedroom_morning.jpg',
        type: 'image',
        description: 'Dormitorio suite luminoso con vistas al exterior, grandes ventanales herméticos y renovación continua de aire filtrado 24/7 libre de polvo y alérgenos.',
      },
    ],
  },
  MG120: {
    modelKey: 'MG115',
    badgeLabel: 'Modelo Oficial MG115',
    m2Label: '115 m² Construidos (13,93 × 7,71 m)',
    title: 'Galería de Renders y Plano de Distribución (MG115 / MG120)',
    subtitle: 'Vivienda familiar en planta baja: 115 m² construidos • 2 amplios dormitorios (suite con vestidor) • 2 baños • Cuarto de instalaciones',
    pdfUrl: encodeURI('/MG120_fotos/industrial_floorplan_render.jpg'),
    pdfFilename: 'Medgon_MG115_Plano_Distribucion_Cotas.jpg',
    items: [
      {
        id: 'mg120-exterior-1',
        title: 'Fachada Exterior Principal y Terraza',
        category: 'Exterior',
        src: '/MG120_fotos/industrial_luminous_house_exterior.jpg',
        type: 'image',
        description: 'Vivienda unifamiliar Passivhaus en planta baja con cubierta de teja tradicional, zócalo perimetral oscuro en contraste, grandes cristaleras correderas y porche ajardinado.',
      },
      {
        id: 'mg120-exterior-2',
        title: 'Fachada Lateral y Jardín',
        category: 'Exterior',
        src: '/MG120_fotos/sunny_industrial_garden_house.jpg',
        type: 'image',
        description: 'Envolvente hermética continua con acabado blanco, puerta de acceso lateral y armoniosa integración en el entorno natural.',
      },
      {
        id: 'mg120-salon-comedor',
        title: 'Salón-Comedor y Vigas Vistas de Madera',
        category: 'Interior',
        src: '/MG120_fotos/industrial_dining_living_room.jpg',
        type: 'image',
        description: 'Amplio espacio diáfano de 26,68 m² con techo inclinado y vigas de madera natural vista, gran mesa de comedor e iluminación natural abundante.',
      },
      {
        id: 'mg120-salon-jardin',
        title: 'Salón Abierto al Jardín',
        category: 'Interior',
        src: '/MG120_fotos/industrial_living_room_sunlit.jpg',
        type: 'image',
        description: 'Grandes cristaleras correderas Passivhaus de triple vidrio con conexión directa a la pradera exterior y estantería modular integrada.',
      },
      {
        id: 'mg120-cocina-isla',
        title: 'Cocina Abierta con Isla y Desayunador',
        category: 'Interior',
        src: '/MG120_fotos/luminous_industrial_living_room.jpg',
        type: 'image',
        description: 'Cocina moderna de 10,51 m² perfectamente integrada con isla central de madera oscura, taburetes altos, lámparas colgantes de diseño y despensa lateral.',
      },
      {
        id: 'mg120-dormitorio',
        title: 'Dormitorio Principal con Baño y Vestidor',
        category: 'Interior',
        src: '/MG120_fotos/industrial_bedroom_sunlit.jpg',
        type: 'image',
        description: 'Suite luminosa con techo de vigas de madera vista, mobiliario de estilo industrial cálido y renovación continua de aire filtrado 24/7 libre de polvo y alérgenos.',
      },
      {
        id: 'mg120-plano',
        title: 'Plano Técnico de Distribución con Cotas (115 m² - 13,93 × 7,71 m)',
        category: 'Plano Técnico',
        src: '/MG120_fotos/industrial_floorplan_render.jpg',
        type: 'plan',
        description: 'Distribución optimizada: Cocina (10,51 m²), Salón-Comedor (26,68 m²), Baño 1 (3,60 m²), Baño 2 (4,44 m²), Cuarto Técnico de Instalaciones (3,59 m²), Distribuidor (4,01 m²), Vestidor (4,03 m²), Dormitorio 1 y Dormitorio 2 (12,60 m²).',
      },
    ],
  },
};

export const MG100_GALLERY_ITEMS = MODELS_GALLERY_DATA.MG100.items;
export const MG100_PDF_URL = MODELS_GALLERY_DATA.MG100.pdfUrl;
export const MG87_GALLERY_ITEMS = MODELS_GALLERY_DATA.MG87.items;
export const MG87_PDF_URL = MODELS_GALLERY_DATA.MG87.pdfUrl;

interface ModelGalleryProps {
  modelKey: 'MG87' | 'MG100' | string;
}

export const ModelGallery: React.FC<ModelGalleryProps> = ({ modelKey }) => {
  const modelData = MODELS_GALLERY_DATA[modelKey] || MODELS_GALLERY_DATA.MG100;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollLimits = useCallback(() => {
    const el = galleryScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    updateScrollLimits();
    const el = galleryScrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollLimits);
    }
    const handleResize = () => updateScrollLimits();
    window.addEventListener('resize', handleResize);
    return () => {
      el?.removeEventListener('scroll', updateScrollLimits);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateScrollLimits, modelData]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = galleryScrollRef.current;
    if (!el) return;
    const scrollAmount = Math.max(260, el.clientWidth * 0.7);
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const activeItem = selectedImageIndex !== null ? modelData.items[selectedImageIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => ((prev ?? 0) + 1) % modelData.items.length);
    }
  }, [selectedImageIndex, modelData.items.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        (prev ?? 0) === 0 ? modelData.items.length - 1 : (prev ?? 0) - 1
      );
    }
  }, [selectedImageIndex, modelData.items.length]);

  const handleCloseModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation inside modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev, handleCloseModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex]);

  return (
    <div
      id={`gallery-section-${modelData.modelKey.toLowerCase()}`}
      className="mt-4 p-4 sm:p-5 bg-white rounded-2xl border-2 border-[#569900]/40 shadow-sm animate-fadeIn"
    >
      {/* Header of Gallery with Model Info & PDF Download */}
      <div className="pb-3.5 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#2F5300] bg-[#E1F7C3] px-2.5 py-0.5 rounded-md">
            {modelData.badgeLabel}
          </span>
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
            {modelData.m2Label}
          </span>
          <span className="text-xs font-medium text-slate-500">
            {modelData.items.length} Vistas & Plano con Cotas
          </span>
        </div>
        
        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1.5 leading-snug">
          {modelData.title}
        </h4>

        {/* Action: Download PDF placed directly below H4 */}
        {modelData.pdfUrl ? (
          <div className="mt-3">
            <a
              id={`btn-download-${modelData.modelKey.toLowerCase()}-pdf`}
              href={modelData.pdfUrl}
              download={modelData.pdfFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95 group w-full sm:w-auto"
              title={`Descargar Plano Comercial ${modelData.badgeLabel} con Cotas en PDF`}
            >
              <FileDown className="w-4 h-4 text-[#A4E556] group-hover:scale-110 transition-transform" />
              <span>Descargar Plano PDF</span>
            </a>
          </div>
        ) : null}

        {/* Opciones de personalización de este diseño sobre plano */}
        <div className="mt-4 pt-3.5 border-t border-slate-200/80">
          <div className="p-3.5 sm:p-4 rounded-2xl border border-slate-200 bg-slate-50/70">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-800">
              <Sparkles className="w-4 h-4 text-[#569900]" />
              <span>OPCIONES DE PERSONALIZACIÓN DE ESTE DISEÑO SOBRE PLANO:</span>
            </div>

            <div className="grid grid-cols-1 gap-2 mt-2.5">
              {/* 1. Distribución interior */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3 shadow-2xs">
                <SlidersHorizontal className="w-4 h-4 text-[#569900] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    Distribución interior
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Modificable libremente: mueve o elimina tabiques a tu gusto.
                  </div>
                </div>
              </div>

              {/* 2. Rotar y voltear */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3 shadow-2xs">
                <RotateCcw className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    Rotar y voltear
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Admite giro completo y simetría en espejo para tu parcela.
                  </div>
                </div>
              </div>

              {/* 3. Ventanas fijas */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3 shadow-2xs">
                <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    Ventanas fijas
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Huecos fijos para cálculo térmico Passivhaus y coste cerrado.
                  </div>
                </div>
              </div>

              {/* 4. Elección de cubierta */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-start gap-3 shadow-2xs">
                <Layers className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    Elección de cubierta
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Plana, 1 agua o 2 aguas según normativa municipal y tu preferencia estética.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Displacement Gallery of Thumbnails */}
      <div className="relative group/gallery mt-4">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            type="button"
            id={`btn-${modelData.modelKey.toLowerCase()}-scroll-left`}
            onClick={() => handleScroll('left')}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/85 hover:bg-[#569900] text-white flex items-center justify-center transition-all backdrop-blur-xs shadow-md border border-white/20 active:scale-95 cursor-pointer"
            title="Desplazar galería a la izquierda"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Horizontal Reel */}
        <div
          ref={galleryScrollRef}
          onScroll={updateScrollLimits}
          className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scroll-smooth snap-x snap-mandatory px-1"
        >
          {modelData.items.map((item, idx) => (
            <div
              key={item.id}
              id={`btn-${modelData.modelKey.toLowerCase()}-thumbnail-${idx}`}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-100 border border-slate-200 hover:border-[#569900] transition-all hover:shadow-md w-56 sm:w-64 aspect-4/3 shrink-0 snap-start flex flex-col justify-end"
              title={`Clic para ampliar a pantalla completa: ${item.title}`}
            >
              {/* Thumbnail Image */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient Overlay for Title readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Tag (Top Right) */}
              <div className="absolute top-2 right-2">
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs ${
                    item.type === 'plan'
                      ? 'bg-amber-600 text-white'
                      : 'bg-black/60 text-white backdrop-blur-xs'
                  }`}
                >
                  {item.category}
                </span>
              </div>

              {/* Hover Icon Centered */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-[#569900]/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 p-2.5 text-white">
                <div className="text-xs font-bold truncate leading-tight drop-shadow-xs">
                  {item.title}
                </div>
                <div className="text-[10px] text-[#C5F092] truncate mt-0.5 flex items-center gap-1 font-medium">
                  <Maximize2 className="w-3 h-3 shrink-0" />
                  <span>Clic para ver a toda pantalla</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            type="button"
            id={`btn-${modelData.modelKey.toLowerCase()}-scroll-right`}
            onClick={() => handleScroll('right')}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/85 hover:bg-[#569900] text-white flex items-center justify-center transition-all backdrop-blur-xs shadow-md border border-white/20 active:scale-95 cursor-pointer"
            title="Desplazar galería a la derecha"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#569900]" />
          Desplaza horizontalmente para explorar las fotos y planos. Haz clic en cualquiera para verla ampliada a toda pantalla.
        </span>
        <span className="font-semibold text-slate-700">
          {modelData.subtitle}
        </span>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedImageIndex !== null && activeItem && (
        <div
          id={`modal-${modelData.modelKey.toLowerCase()}-fullscreen`}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 text-white animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#A4E556] bg-white/10 px-3 py-1 rounded-lg">
                {modelData.modelKey} • {activeItem.category}
              </span>
              <h3 className="text-sm sm:text-lg font-bold text-white truncate max-w-[200px] sm:max-w-md">
                {activeItem.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                {selectedImageIndex + 1} / {modelData.items.length}
              </span>

              {/* Download PDF button inside modal */}
              {modelData.pdfUrl ? (
                <a
                  href={modelData.pdfUrl}
                  download={modelData.pdfFilename}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all"
                  title="Descargar PDF con cotas"
                >
                  <Download className="w-3.5 h-3.5 text-[#A4E556]" />
                  <span>PDF Cotas</span>
                </a>
              ) : null}

              {/* Close Button */}
              <button
                id={`btn-close-${modelData.modelKey.toLowerCase()}-modal`}
                type="button"
                onClick={handleCloseModal}
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-red-400 transition-all cursor-pointer active:scale-90"
                title="Cerrar (Esc)"
                aria-label="Cerrar vista a pantalla completa"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Main Viewport (Image with Nav Arrows) */}
          <div className="relative flex-1 flex items-center justify-center py-2 sm:py-4 px-2 select-none">
            {/* Prev Button */}
            <button
              id={`btn-${modelData.modelKey.toLowerCase()}-modal-prev`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#569900] text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-xl"
              title="Imagen anterior (Flecha Izquierda)"
              aria-label="Ver imagen anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Active Image */}
            <div className="relative max-w-full max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] sm:max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              id={`btn-${modelData.modelKey.toLowerCase()}-modal-next`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#569900] text-white flex items-center justify-center transition-all border border-white/20 active:scale-95 shadow-xl"
              title="Imagen siguiente (Flecha Derecha)"
              aria-label="Ver imagen siguiente"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Modal Footer: Description & Thumbnails Reel */}
          <div className="border-t border-white/10 pt-3 shrink-0">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                <strong className="text-white">{activeItem.title}:</strong> {activeItem.description}
              </div>

              {/* Thumbnails reel */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                {modelData.items.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-10 h-8 sm:w-12 sm:h-9 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                      idx === selectedImageIndex
                        ? 'border-[#A4E556] scale-110 ring-2 ring-[#A4E556]/40'
                        : 'border-white/30 opacity-60 hover:opacity-100'
                    }`}
                    title={item.title}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
