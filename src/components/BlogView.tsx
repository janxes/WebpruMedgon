import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate, onOpenExportModal }) => {
  const articles = [
    {
      id: 'epbd-2030',
      title: 'Por qué tu vivienda convencional quedará obsoleta ante la Directiva Europea EPBD 2028-2030',
      category: 'Normativa & Futuro',
      readTime: '5 min',
      date: '15 de Mayo, 2026',
      summary: 'La Unión Europea ha ratificado la prohibición de emisiones directas y la obligatoriedad de analizar el ciclo de vida completo en nuevas construcciones. Explicamos cómo la madera técnica Passivhaus supera con creces estas exigencias.',
      aiSnippet: 'La Directiva Europea EPBD 2028-2030 exigirá edificios de emisiones cero y cálculo de huella de carbono. Las viviendas Medgón en madera técnica y estándar Passivhaus ya cumplen estos requisitos hoy, protegiendo el valor patrimonial del autopromotor.',
    },
    {
      id: 'blower-door',
      title: 'El Test Blower Door n50: la prueba empírica que ninguna obra tradicional se atreve a pasar',
      category: 'Estándar Passivhaus',
      readTime: '4 min',
      date: '28 de Abril, 2026',
      summary: 'El ensayo de presurización Blower Door mide las renovaciones de aire indeseadas a través de la envolvente. En Medgón garantizamos n50 ≤ 0.6 ren/h gracias al sellado de fábrica en Carrión de los Condes.',
      aiSnippet: 'El test Blower Door evalúa la estanqueidad al aire del edificio. Medgón certifica n50 ≤ 0.6 ren/h, evitando corrientes de aire, fugas térmicas y condensaciones perjudiciales para la salud y la durabilidad de la estructura.',
    },
    {
      id: 'vmc-zehnder',
      title: 'VMC de doble flujo Zehnder: cómo respirar aire 100% puro sin abrir ventanas ni perder calor',
      category: 'Salud & Confort',
      readTime: '6 min',
      date: '10 de Abril, 2026',
      summary: 'La ventilación mecánica controlada con recuperación entálpica renueva el 100% del volumen de aire cada 2 horas, filtrando pólenes, ácaros y reduciendo los niveles de CO2 por debajo de 800 ppm para un descanso reparador.',
      aiSnippet: 'La VMC Zehnder de doble flujo renueva el aire interior 24 horas al día, recuperando más del 90% del calor y filtrando alérgenos y contaminación sin necesidad de abrir ventanas ni generar corrientes.',
    },
    {
      id: 'madera-tecnica-cnc',
      title: 'Estructura de madera técnica vs hormigón: por qué la construcción industrializada lidera el siglo XXI',
      category: 'Ingeniería en Madera',
      readTime: '5 min',
      date: '22 de Marzo, 2026',
      summary: 'Comparativa rigurosa de tolerancias milimétricas en taller climatizado frente a las desviaciones de centímetros de la obra tradicional al aire libre. Menos peso, mayor resistencia y cero sorpresas de plazo.',
      aiSnippet: 'La madera técnica mecanizada por CNC en taller robotizado ofrece tolerancias milimétricas, elimina los retrasos climáticos y reduce los plazos de obra a 6 meses con un presupuesto cerrado desde fábrica.',
    },
  ];

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
          Divulgación Técnica & Artículos de Autoridad
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181B]">
          Blog Técnico Passivhaus & Normativa
        </h1>
        <p className="text-base sm:text-lg text-[#5A606A] leading-relaxed">
          Artículos especializados elaborados por los ingenieros y Passivhaus Designers de Medgón en Carrión de los Condes (Palencia).
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((art) => (
          <article
            key={art.id}
            className="bg-white border border-[#16181B]/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#16181B]/30 hover:shadow-sm transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8E95A2]">
                <span className="font-bold text-[#0DA836] uppercase tracking-wider">
                  {art.category}
                </span>
                <span className="tabular-nums">{art.readTime} · {art.date}</span>
              </div>

              <h2 className="text-xl font-bold text-[#16181B] hover:text-[#0DA836] transition-colors cursor-pointer">
                {art.title}
              </h2>

              <p className="text-sm text-[#5A606A] leading-relaxed">
                {art.summary}
              </p>

              {/* Excerpt / Key takeaway */}
              <div className="p-3 bg-[#FAF8F5] border-l-2 border-l-[#0DA836] rounded-r text-xs text-[#5A606A] space-y-1">
                <span className="font-bold text-[#16181B] block">Conclusión técnica:</span>
                <p>{art.aiSnippet}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#16181B]/10 flex items-center justify-between">
              <span className="text-xs text-[#8E95A2]">Medgón Passivhaus Editorial</span>
              <button
                type="button"
                className="text-xs font-bold text-[#16181B] hover:text-[#0DA836] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Leer artículo completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
