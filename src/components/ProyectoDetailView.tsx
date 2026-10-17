import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Ruler, 
  Wind, 
  Building2, 
  Hammer, 
  Compass, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  PhoneCall
} from 'lucide-react';
import { ProjectItem, PROJECTS_DATA } from '../data/projectsData';

interface ProyectoDetailViewProps {
  projectId: string;
  onNavigate: (view: string, modelOrProjectId?: string) => void;
}

export const ProyectoDetailView: React.FC<ProyectoDetailViewProps> = ({ 
  projectId, 
  onNavigate 
}) => {
  // Find project or fallback to first
  const project: ProjectItem = PROJECTS_DATA.find(p => p.id === projectId) || PROJECTS_DATA[0];

  // Active photo index in gallery
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const images = project.images.length > 0 ? project.images : [
    { url: 'https://www.medgon.com/wp-content/uploads/2025/05/Castrillo-de-Murcia.jpg', caption: project.title }
  ];

  const currentImage = images[selectedPhotoIndex] || images[0];

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedPhotoIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedPhotoIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Related projects in same or diverse category
  const relatedProjects = PROJECTS_DATA
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  // Numeric blower door extraction for bar visual
  const blowerNumeric = parseFloat(project.blowerDoor?.replace(',', '.') || '0.45');
  const passivhausLimit = 0.60;
  const cteLimit = 3.00;

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 0. Breadcrumb & Back Navigation */}
      <nav aria-label="Navegación de migas de pan" className="flex items-center justify-between border-b border-[#16181B]/10 pb-4">
        <button
          type="button"
          onClick={() => onNavigate('proyectos')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A606A] hover:text-[#16181B] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Catálogo de Proyectos</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#16181B]/10 text-xs font-semibold text-[#5A606A] hover:text-[#16181B] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            title="Copiar enlace del proyecto"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? '¡Enlace copiado!' : 'Compartir'}</span>
          </button>
        </div>
      </nav>

      {/* 1. Project Title & Unboxed Metadata Header */}
      <header className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#5A606A]">
          <span className="text-[#0DA836] font-bold uppercase tracking-wider">{project.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{project.location}</span>
          <span aria-hidden="true">·</span>
          <span>Año {project.year}</span>
          {project.surface && (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.surface}</span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#16181B] leading-[1.1] text-balance">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#5A606A] font-light leading-relaxed">
          {project.tagline}
        </p>
      </header>

      {/* 2. Primary Photo Showcase & Interactive Lightbox Gallery */}
      <section className="space-y-4">
        {/* Main Viewport Photo */}
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="relative rounded-2xl overflow-hidden border border-[#16181B]/10 shadow-md bg-[#16181B] cursor-pointer group select-none"
        >
          <img
            src={currentImage.url}
            alt={currentImage.caption || project.title}
            className="w-full h-[360px] sm:h-[520px] lg:h-[640px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Top-Right Badge: Fullscreen & Counter */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-mono font-medium flex items-center gap-1.5">
              <span>{selectedPhotoIndex + 1}</span>
              <span className="text-white/50">/</span>
              <span>{images.length}</span>
            </span>
            <span className="p-2 rounded-lg bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors">
              <Maximize2 className="w-4 h-4" />
            </span>
          </div>

          {/* Navigation Arrows on Hover */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevPhoto}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-90 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                aria-label="Foto siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all opacity-90 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Caption Bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white flex items-center justify-between">
            <p className="text-xs sm:text-sm font-medium text-white/90">
              {currentImage.caption || `${project.title} — Fotografía oficial`}
            </p>
            <span className="hidden sm:inline text-xs text-white/60">Haz clic para pantalla completa</span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedPhotoIndex(idx)}
                className={`relative w-20 sm:w-28 h-14 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  selectedPhotoIndex === idx 
                    ? 'border-[#0DA836] ring-2 ring-[#0DA836]/30 opacity-100 scale-[1.02]' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img.url}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* 3. Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-0.5">
              <span className="text-xs uppercase tracking-widest text-[#78E639] font-bold">{project.title}</span>
              <p className="text-xs text-white/70">Foto {selectedPhotoIndex + 1} de {images.length}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Image Container */}
          <div className="relative flex-1 flex items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.url}
              alt={currentImage.caption || project.title}
              className="max-h-[80vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md cursor-pointer"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md cursor-pointer"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Footer Caption */}
          <div className="text-center text-xs sm:text-sm text-white/80 max-w-2xl mx-auto py-2" onClick={(e) => e.stopPropagation()}>
            {currentImage.caption}
          </div>
        </div>
      )}

      {/* 4. Technical Specifications & Metrics Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left 2 Cols: Description, Architecture Narrative & Highlights */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Key Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10">
            {project.keyStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E95A2] block">
                  {stat.label}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#16181B] font-mono">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-xs text-[#5A606A] font-semibold">{stat.unit}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[#16181B]/80 font-normal leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16181B] tracking-tight">
              Memoria del proyecto y soluciones arquitectónicas
            </h2>
            {project.description.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Technical Highlights Checklist */}
          <div className="space-y-4 pt-4 border-t border-[#16181B]/10">
            <h3 className="text-lg font-bold text-[#16181B]">
              Aspectos destacados de industrialización
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.technicalHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#16181B]/10 text-xs sm:text-sm text-[#16181B]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blower Door Analysis Card */}
          {project.blowerDoor && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#16181B] text-white space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
                    Ensayo Blower Door Oficial (n50)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.blowerDoor} — Hermeticidad Extraordinaria
                  </h3>
                </div>
                <Wind className="w-8 h-8 text-[#78E639] shrink-0" />
              </div>

              {/* Comparative Graphic Bar */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-mono">
                  <span>Este Proyecto: <strong>{project.blowerDoor}</strong></span>
                  <span className="text-[#78E639]">Passivhaus: ≤ 0,60 h⁻¹</span>
                  <span className="text-white/50">Norma CTE: ≤ 3,00 h⁻¹</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden relative">
                  {/* Current project bar */}
                  <div 
                    className="h-full bg-[#78E639] rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, Math.max(8, (blowerNumeric / cteLimit) * 100))}%` }}
                  />
                </div>
                <p className="text-white/70 text-xs leading-relaxed pt-1">
                  El ensayo realizado a 50 Pa demuestra que la envolvente carece de filtraciones de aire incontroladas, protegiendo los aislamientos de condensaciones intersticiales y ahorrando hasta un 90% en la factura energética.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Right 1 Col: Project Factsheet Sidebar */}
        <aside className="space-y-6">
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#16181B]/10 space-y-6">
            <h3 className="text-base font-bold text-[#16181B] uppercase tracking-wider pb-3 border-b border-[#16181B]/10">
              Ficha Técnica del Proyecto
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E95A2] text-xs block">Localización</span>
                  <span className="font-semibold text-[#16181B]">{project.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E95A2] text-xs block">Año de Ejecución</span>
                  <span className="font-semibold text-[#16181B]">{project.year}</span>
                </div>
              </div>

              {project.surface && (
                <div className="flex items-start gap-3">
                  <Ruler className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E95A2] text-xs block">Superficie Construida</span>
                    <span className="font-semibold text-[#16181B]">{project.surface}</span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <Hammer className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E95A2] text-xs block">Constructor / Estructurista</span>
                  <span className="font-semibold text-[#16181B]">{project.builder}</span>
                </div>
              </div>

              {project.architect && (
                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E95A2] text-xs block">Arquitectura / Proyectista</span>
                    <span className="font-semibold text-[#16181B]">{project.architect}</span>
                  </div>
                </div>
              )}

              {project.promoter && (
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E95A2] text-xs block">Promotor</span>
                    <span className="font-semibold text-[#16181B]">{project.promoter}</span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E95A2] text-xs block">Estándar Energético</span>
                  <span className="font-semibold text-[#0DA836]">{project.standard}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#16181B]/10 space-y-3">
              <span className="text-[#8E95A2] text-xs block">Sistema Estructural</span>
              <p className="text-xs font-medium text-[#16181B] leading-relaxed">
                {project.structuralSystem}
              </p>
            </div>

            {/* Direct Consultation Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full py-3 px-4 rounded-xl bg-[#0DA836] text-white font-bold text-xs hover:bg-[#0b8e2e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Solicitar Asesoramiento Técnico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="p-6 rounded-2xl bg-white border border-[#16181B]/10 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#16181B]">
              Contacto Fábrica & Ingeniería
            </h4>
            <p className="text-xs text-[#5A606A] leading-relaxed">
              ¿Deseas visitar nuestra factoría en Carrión de los Condes o estudiar la viabilidad de un proyecto similar?
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0DA836]">
              <PhoneCall className="w-3.5 h-3.5" />
              <a href="tel:+34979881010" className="hover:underline">979 88 10 10</a>
              <span className="text-[#8E95A2]">·</span>
              <a href="mailto:informacion@medgon.com" className="hover:underline">informacion@medgon.com</a>
            </div>
          </div>
        </aside>

      </section>

      {/* 5. Related Projects Carousel / Grid */}
      <section className="space-y-6 pt-8 border-t border-[#16181B]/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              Más Obras de Referencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16181B]">
              Otros proyectos industrializados por Medgón
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('proyectos')}
            className="text-xs font-bold text-[#0DA836] hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Ver todos los proyectos ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                onNavigate('proyecto-detalle', rel.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#16181B]/10 hover:border-[#16181B]/30 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={rel.images[0]?.url || 'https://www.medgon.com/wp-content/uploads/2025/05/Castrillo-de-Murcia.jpg'}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold text-[#16181B] bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs">
                      {rel.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[11px] text-[#8E95A2] flex items-center gap-1.5 font-medium">
                    <span>{rel.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{rel.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors line-clamp-1">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#5A606A] line-clamp-2 leading-relaxed">
                    {rel.tagline}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#16181B]/5 flex items-center justify-between text-xs">
                <span className="font-mono text-[#0DA836] font-bold">
                  {rel.blowerDoor ? `Blower Door ${rel.blowerDoor}` : rel.surface}
                </span>
                <span className="font-bold text-[#16181B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Ver ficha</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bottom Conversion CTA */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Industrializa tu Proyecto
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#16181B]">
            ¿Tienes una idea o proyecto similar?
          </h3>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Nuestra oficina técnica colabora con estudios de arquitectura, autopromotores y promotores inmobiliarios para modelar en BIM y presupuestar la estructura de madera con precio y plazo cerrado.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0DA836] text-white font-bold hover:bg-[#0b8e2e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm"
          >
            <span>Pedir Presupuesto Cerrado</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('oficina-tecnica')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#16181B]/15 text-[#16181B] font-bold hover:bg-black/5 transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>Conoce la Oficina Técnica</span>
          </button>
        </div>
      </section>

    </div>
  );
};
