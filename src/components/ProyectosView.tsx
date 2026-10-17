import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Search, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Wind, 
  Images, 
  SlidersHorizontal,
  X,
  Compass,
  Calendar,
  Layers
} from 'lucide-react';
import { 
  ProjectCategory, 
  ProjectItem, 
  PROJECTS_CATEGORIES, 
  PROJECTS_DATA 
} from '../data/projectsData';

interface ProyectosViewProps {
  onNavigate: (view: string, modelOrProjectId?: string) => void;
}

export const ProyectosView: React.FC<ProyectosViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter projects by category and search terms
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category match
      const matchesCategory = 
        selectedCategory === 'todos' || project.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.standard.toLowerCase().includes(query) ||
        (project.architect && project.architect.toLowerCase().includes(query)) ||
        (project.promoter && project.promoter.toLowerCase().includes(query)) ||
        project.tagline.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured project for top banner showcase
  const featuredProject = PROJECTS_DATA.find(p => p.id === 'castrillo-de-murcia') || PROJECTS_DATA[0];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: PROJECTS_DATA.length };
    PROJECTS_DATA.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. Hero Header with Architectural Restraint */}
      <section className="space-y-6">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DA836]/10 border border-[#0DA836]/20 text-[#0DA836] text-xs font-bold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO OFICIAL MEDGÓN · OBRAS & PROYECTOS VERIFICADOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#16181B] leading-[1.05] text-balance">
            Proyectos reales en madera técnica y Passivhaus.
          </h1>

          <p className="text-lg sm:text-2xl text-[#5A606A] font-light leading-relaxed max-w-3xl">
            Desde viviendas unifamiliares aisladas hasta promociones públicas de VPO en altura y colegios biofílicos. Conoce las obras ejecutadas por Medgón con <strong>mediciones reales de Blower Door</strong> y fotografías de su proceso de montaje.
          </p>
        </div>

        {/* Technical Highlights Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#FAF8F5] p-6 rounded-2xl border border-[#16181B]/10">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E95A2]">Proyectos Ejecutados</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-[#16181B] font-mono">+60</span>
              <span className="text-xs text-[#0DA836] font-semibold">en España</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E95A2]">Hermeticidad Media</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-[#16181B] font-mono">0,38</span>
              <span className="text-xs text-[#0DA836] font-semibold">h⁻¹ n50</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E95A2]">Montaje en Parcela</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-[#16181B] font-mono">3-8</span>
              <span className="text-xs text-[#0DA836] font-semibold">días / obra</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E95A2]">Madera Técnica</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-[#16181B] font-mono">100%</span>
              <span className="text-xs text-[#0DA836] font-semibold">PEFC / FSC</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Project Card Showcase */}
      {featuredProject && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
              Proyecto Destacado
            </span>
            <span className="text-xs text-[#8E95A2] font-semibold">
              Récord Blower Door 2024
            </span>
          </div>

          <div
            onClick={() => onNavigate('proyecto-detalle', featuredProject.id)}
            className="group relative rounded-3xl overflow-hidden border border-[#16181B]/15 shadow-xl bg-[#16181B] text-white cursor-pointer transition-all hover:border-[#0DA836]/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              
              {/* Photo Side */}
              <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-full bg-black/40">
                <img
                  src={featuredProject.images[0]?.url || 'https://www.medgon.com/wp-content/uploads/2025/05/Castrillo-de-Murcia.jpg'}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-bold">
                    {featuredProject.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0DA836] text-white text-xs font-mono font-bold">
                    n50: {featuredProject.blowerDoor}
                  </span>
                </div>
              </div>

              {/* Info Side */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#78E639]" />
                    <span>{featuredProject.location}</span>
                    <span aria-hidden="true">·</span>
                    <Calendar className="w-3.5 h-3.5 text-[#78E639]" />
                    <span>Año {featuredProject.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight group-hover:text-[#78E639] transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                    {featuredProject.tagline}
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-white/70">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#78E639] shrink-0" />
                      <span>{featuredProject.structuralSystem}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#78E639] shrink-0" />
                      <span>Montaje en parcela completado en {featuredProject.assemblyDays} días</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <Images className="w-4 h-4 text-[#78E639]" />
                    <span>{featuredProject.images.length} fotografías en galería</span>
                  </div>

                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#16181B] font-bold text-xs group-hover:bg-[#78E639] transition-colors">
                    <span>Ver proyecto completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. Interactive Filter Bar & Search */}
      <section className="space-y-6">
        
        {/* Controls Bar: Segmented Tabs & Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-[#16181B]/10">
          
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#FAF8F5] p-1.5 rounded-xl border border-[#16181B]/10 text-xs">
            {PROJECTS_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-[#16181B] font-bold shadow-2xs'
                      : 'text-[#5A606A] hover:text-[#16181B] hover:bg-black/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isActive ? 'bg-[#0DA836]/15 text-[#0DA836] font-bold' : 'bg-black/5 text-[#8E95A2]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#8E95A2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por ciudad, arquitecto..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#FAF8F5] border border-[#16181B]/10 text-xs text-[#16181B] placeholder-[#8E95A2] focus:outline-none focus:ring-2 focus:ring-[#0DA836]/30 focus:border-[#0DA836]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8E95A2] hover:text-[#16181B] p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Counter and Active Filter Feedback */}
        <div className="flex items-center justify-between text-xs text-[#5A606A]">
          <span>
            Mostrando <strong>{filteredProjects.length}</strong> de {PROJECTS_DATA.length} proyectos
            {selectedCategory !== 'todos' && ` en ${PROJECTS_CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
            {searchQuery && ` coincidentes con "${searchQuery}"`}
          </span>

          {(selectedCategory !== 'todos' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="text-[#0DA836] font-semibold hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* 4. Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const mainPhoto = project.images[0]?.url || 'https://www.medgon.com/wp-content/uploads/2025/05/Castrillo-de-Murcia.jpg';
              
              return (
                <article
                  key={project.id}
                  onClick={() => onNavigate('proyecto-detalle', project.id)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#16181B]/10 hover:border-[#16181B]/30 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Project Photo Container with Hover Zoom */}
                    <div className="relative h-60 sm:h-64 overflow-hidden bg-[#FAF8F5]">
                      <img
                        src={mainPhoto}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Badges: Category & Photo Count */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#16181B] shadow-xs">
                          {project.categoryLabel}
                        </span>
                        
                        {project.images.length > 1 && (
                          <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1">
                            <Images className="w-3 h-3 text-[#78E639]" />
                            <span>{project.images.length}</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom Blower Door Tag on Image */}
                      {project.blowerDoor && (
                        <div className="absolute bottom-3 left-3">
                          <span className="px-2.5 py-1 rounded-lg bg-[#16181B]/90 backdrop-blur-md text-[#78E639] font-mono text-[11px] font-bold flex items-center gap-1 shadow-xs">
                            <Wind className="w-3 h-3" />
                            <span>Blower Door: {project.blowerDoor}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6 space-y-3">
                      
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-1.5 text-xs text-[#8E95A2] font-medium">
                        <span>{project.location}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                        {project.surface && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{project.surface}</span>
                          </>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-[#16181B] group-hover:text-[#0DA836] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Tagline / Summary */}
                      <p className="text-xs sm:text-sm text-[#5A606A] leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>

                      {/* Technical Specs Checklist */}
                      <div className="pt-2 text-[11px] text-[#5A606A] space-y-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0DA836] shrink-0" />
                          <span className="truncate">{project.standard}</span>
                        </div>
                        {project.architect && (
                          <div className="flex items-center gap-1.5 text-[#8E95A2]">
                            <Compass className="w-3.5 h-3.5 text-[#8E95A2] shrink-0" />
                            <span className="truncate">Arq: {project.architect}</span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="px-6 pb-6 pt-3 border-t border-[#16181B]/5 flex items-center justify-between text-xs">
                    <span className="text-[#8E95A2] font-medium">
                      Montaje: {project.assemblyDays ? `${project.assemblyDays} días` : 'Rápido en seco'}
                    </span>
                    <span className="font-bold text-[#16181B] group-hover:text-[#0DA836] flex items-center gap-1 group-hover:translate-x-1 transition-all">
                      <span>Ver ficha técnica y fotos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAF8F5] rounded-3xl border border-[#16181B]/10 p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#16181B]/5 flex items-center justify-center mx-auto text-[#8E95A2]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#16181B]">No se encontraron proyectos</h3>
            <p className="text-sm text-[#5A606A] max-w-md mx-auto">
              No hay obras que coincidan con los filtros aplicados. Intenta buscar por otra provincia o restablecer la categoría.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#0DA836] text-white font-bold text-xs hover:bg-[#0b8e2e] transition-colors cursor-pointer"
            >
              Ver todos los proyectos
            </button>
          </div>
        )}

      </section>

      {/* 5. Geographic Scope & Map Presence */}
      <section className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            Presencia Nacional
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#16181B]">
            Obras ejecutadas en toda la geografía española
          </h2>
          <p className="text-sm text-[#5A606A] leading-relaxed">
            Gracias a la modulación y transporte protegido en camiones cerrados, enviamos y montamos estructuras de madera técnica en cualquier punto de España, tanto peninsular como insular.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-xl bg-white border border-[#16181B]/10 space-y-1">
            <span className="text-sm font-bold text-[#16181B] block">Castilla y León</span>
            <span className="text-xs text-[#0DA836] font-semibold">Palencia, Burgos, Valladolid, Soria</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#16181B]/10 space-y-1">
            <span className="text-sm font-bold text-[#16181B] block">Comunidad de Madrid</span>
            <span className="text-xs text-[#0DA836] font-semibold">Las Rozas, Aravaca, El Boalo, Capital</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#16181B]/10 space-y-1">
            <span className="text-sm font-bold text-[#16181B] block">Islas Baleares</span>
            <span className="text-xs text-[#0DA836] font-semibold">Marratxí, Sa Pobla, Mallorca</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#16181B]/10 space-y-1">
            <span className="text-sm font-bold text-[#16181B] block">Cornisa Cantábrica</span>
            <span className="text-xs text-[#0DA836] font-semibold">Tagle, Mieres, Asturias, Cantabria</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#16181B]/10 space-y-1">
            <span className="text-sm font-bold text-[#16181B] block">La Rioja & Navarra</span>
            <span className="text-xs text-[#0DA836] font-semibold">Logroño, Tudela, Villas de Yagüe</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#16181B]/10 space-y-1">
            <span className="text-sm font-bold text-[#16181B] block">Zona Centro & Sur</span>
            <span className="text-xs text-[#0DA836] font-semibold">Castilla-La Mancha y Andalucía</span>
          </div>
        </div>
      </section>

      {/* 6. Technical Collaboration CTA */}
      <section className="bg-[#16181B] text-white rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78E639]">
            Colaboración Técnica Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            ¿Eres arquitecto, ingeniero o promotor inmobiliario?
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
            Integramos tu modelo de arquitectura en nuestro entorno BIM (Cadwork), optimizamos los forjados Kerto Ripa y te entregamos una propuesta económica cerrada con plazo garantizado de fabricación.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0DA836] text-white font-bold hover:bg-[#0b8e2e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm"
          >
            <span>Enviar Proyecto para Estudio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate('oficina-tecnica')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>Ver Oficina Técnica</span>
          </button>
        </div>
      </section>

    </div>
  );
};
