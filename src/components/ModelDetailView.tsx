import React, { useState } from 'react';
import { CATALOG_MODELS, ModelData } from '../data/modelsCatalog';
import { 
  ArrowLeft, 
  Check, 
  Download, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  RotateCw, 
  Layers, 
  Clock, 
  Building2, 
  Send,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';

interface ModelDetailViewProps {
  modelId: string;
  onNavigate: (view: string, modelId?: string) => void;
  onOpenExportModal: () => void;
}

export const ModelDetailView: React.FC<ModelDetailViewProps> = ({
  modelId,
  onNavigate,
  onOpenExportModal,
}) => {
  const model: ModelData = CATALOG_MODELS[modelId] || CATALOG_MODELS['mg-100'];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'gallery' | 'floorplan'>('gallery');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    parcela: 'si_en_propiedad',
    comentarios: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      
      {/* Schema.org SingleFamilyResidence and Product for AI SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SingleFamilyResidence",
                "@id": `https://medgon.com/catalogo/${model.id}/#residence`,
                "name": `${model.name} Passivhaus`,
                "description": model.description,
                "numberOfRooms": model.bedrooms + 2,
                "numberOfBedrooms": model.bedrooms,
                "numberOfBathroomsTotal": model.bathrooms,
                "floorSize": {
                  "@type": "QuantitativeValue",
                  "value": model.m2Construidos,
                  "unitCode": "MTK"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "ES"
                }
              },
              {
                "@type": "Product",
                "@id": `https://medgon.com/catalogo/${model.id}/#product`,
                "name": `${model.name} - Vivienda Industrializada de Madera Técnica`,
                "category": "Vivienda Unifamiliar Passivhaus",
                "brand": {
                  "@type": "Brand",
                  "name": "Medgón Passivhaus"
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "EUR",
                  "lowPrice": model.priceEstimateMin,
                  "highPrice": model.priceEstimateMax,
                  "offerCount": "1",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "description": "Fase técnica industrializada Medgón excluyendo acabados interiores e IVA"
                  }
                }
              }
            ]
          })
        }}
      />

      {/* Top Breadcrumb and Navigation back */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('catalog')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#5A606A] hover:text-[#16181B] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Catálogo de Modelos</span>
        </button>
      </div>

      {/* Header Lockup */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0DA836]">
            <span>Estándar Passivhaus Classic</span>
            <span aria-hidden="true">·</span>
            <span>Madera Técnica CNC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181B]">
            {model.name}
          </h1>

          <p className="text-lg text-[#5A606A] leading-relaxed">
            {model.tagline}
          </p>

          <p className="text-sm text-[#5A606A] leading-relaxed">
            {model.description}
          </p>
        </div>

        {/* Quick Specs Highlight Box */}
        <div className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg p-6 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8E95A2]">
            Especificaciones Técnicas Clave
          </div>

          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <span className="text-[11px] text-[#8E95A2] uppercase block">Construidos</span>
              <strong className="text-xl font-bold text-[#16181B] tabular-nums">{model.m2Construidos} m²</strong>
            </div>
            <div>
              <span className="text-[11px] text-[#8E95A2] uppercase block">Útiles Estimados</span>
              <strong className="text-xl font-bold text-[#16181B] tabular-nums">{model.m2Utiles} m²</strong>
            </div>
            <div>
              <span className="text-[11px] text-[#8E95A2] uppercase block">Dormitorios</span>
              <strong className="text-xl font-bold text-[#16181B]">{model.bedrooms} dorm.</strong>
            </div>
            <div>
              <span className="text-[11px] text-[#8E95A2] uppercase block">Baños</span>
              <strong className="text-xl font-bold text-[#16181B]">{model.bathrooms} baños</strong>
            </div>
          </div>

          <div className="pt-4 border-t border-[#16181B]/10 space-y-1">
            <span className="text-[11px] text-[#8E95A2] uppercase block font-semibold">
              Coste Orientativo Fase Técnica
            </span>
            <div className="text-lg font-black text-[#16181B] tabular-nums">
              {model.priceEstimateMin.toLocaleString('es-ES')} - {model.priceEstimateMax.toLocaleString('es-ES')} €
              <span className="text-xs font-normal text-[#5A606A] ml-1">+ IVA</span>
            </div>
            <div className="text-xs text-[#0DA836] font-semibold">
              1.700 - 1.900 €/m² · Plazo en parcela: ~6 meses
            </div>
          </div>

          <a
            href="#formulario-dossier"
            className="block text-center w-full py-2.5 px-4 text-xs font-bold text-white bg-[#16181B] hover:bg-[#F35843] rounded transition-colors"
          >
            Solicitar Dossier & Planos &darr;
          </a>
        </div>
      </div>

      {/* Architectural Summary Highlight Box */}
      <div className="p-5 bg-[#FAF8F5] border-l-4 border-l-[#0DA836] border border-[#16181B]/10 rounded-r-lg space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0DA836] block">
          Concepto de Envolvente & Bioclimática
        </span>
        <p className="text-sm text-[#16181B] leading-relaxed">
          {model.aiRagSnippet}
        </p>
      </div>

      {/* Visual Workspace: Interactive Gallery & Floorplan View */}
      <div className="space-y-4">
        {/* Toggle between 3D Renders and Floorplan */}
        <div className="flex items-center justify-between border-b border-[#16181B]/10 pb-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 text-xs font-bold rounded transition-colors cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#16181B] text-white'
                  : 'bg-[#FAF8F5] text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Galería de Renders 3D ({model.galleryImages.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('floorplan')}
              className={`px-4 py-2 text-xs font-bold rounded transition-colors cursor-pointer ${
                activeTab === 'floorplan'
                  ? 'bg-[#16181B] text-white'
                  : 'bg-[#FAF8F5] text-[#5A606A] hover:text-[#16181B]'
              }`}
            >
              Plano de Distribución & Cotas
            </button>
          </div>

          {model.pdfPath && (
            <a
              href={model.pdfPath}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0DA836] hover:text-[#16181B] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar PDF Oficial</span>
            </a>
          )}
        </div>

        {/* Tab 1: Render Gallery */}
        {activeTab === 'gallery' && (
          <div className="space-y-4">
            {/* Main Stage */}
            <div className="relative h-[380px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-[#16181B]/10 bg-[#FAF8F5]">
              <img
                src={model.galleryImages[activeImageIndex]?.url || model.heroImage}
                alt={model.galleryImages[activeImageIndex]?.title || model.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-6 text-white flex justify-between items-end">
                <div>
                  <h4 className="text-base sm:text-lg font-bold">
                    {model.galleryImages[activeImageIndex]?.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80">
                    {model.galleryImages[activeImageIndex]?.caption}
                  </p>
                </div>
                <div className="text-xs text-white/70 tabular-nums">
                  {activeImageIndex + 1} / {model.galleryImages.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {model.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-20 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#0DA836] ring-2 ring-[#0DA836]/20'
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Blueprint / Floorplan View */}
        {activeTab === 'floorplan' && (
          <div className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center space-y-6">
            <div className="max-w-3xl w-full bg-white p-4 sm:p-8 rounded border border-[#16181B]/10 shadow-xs text-center">
              <img
                src={model.floorplanPath}
                alt={`Plano técnico ${model.name}`}
                className="max-h-[550px] w-auto mx-auto object-contain rounded"
              />
              <div className="mt-4 text-xs text-[#5A606A] flex items-center justify-center gap-2">
                <span>Plano oficial con distribución de fábrica</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#16181B]">Rotación y volteado en espejo permitidos</span>
              </div>
            </div>

            {model.pdfPath && (
              <a
                href={model.pdfPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#16181B] hover:bg-[#0DA836] rounded inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descargar PDF con cotas y superficies útiles</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* CORE BUSINESS RULE TABLE: PERSONALIZACIÓN VS LÍMITES TÉCNICOS FIJOS */}
      <section className="bg-white border border-[#16181B]/10 rounded-xl p-6 sm:p-10 space-y-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F35843]">
            <RotateCw className="w-4 h-4" />
            <span>Reglas de Negocio & Rigor Passivhaus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16181B] mt-1">
            Flexibilidad y Límites Técnicos en {model.code}
          </h2>
          <p className="text-sm text-[#5A606A] mt-2 leading-relaxed">
            Para garantizar la hermeticidad récord n50 ≤ 0.6 ren/h, la eliminación total de puentes térmicos y los costes cerrados sin sorpresas, Medgón define claramente qué puedes adaptar y qué permanece fijo por física de la edificación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Column 1: 100% Customizable */}
          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0DA836]" />
              <h3 className="text-base font-bold text-[#16181B]">
                100% Personalizable
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-[#5A606A]">
              {model.customizableFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0DA836] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Fixed Technical Boundaries */}
          <div className="p-6 bg-[#FAF8F5] border border-[#16181B]/10 rounded-lg space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F35843]" />
              <h3 className="text-base font-bold text-[#16181B]">
                Fijo por Física Passivhaus & CNC
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-[#5A606A]">
              {model.fixedTechnicalLimits.map((limit, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F35843] shrink-0 mt-2" />
                  <span>{limit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Lead Capture / Dossier Request Form */}
      <section id="formulario-dossier" className="bg-[#FAF8F5] border border-[#16181B]/10 rounded-xl p-8 sm:p-12">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0DA836]">
              Solicitud Directa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16181B]">
              Solicitar Dossier Comercial {model.code}
            </h2>
            <p className="text-sm text-[#5A606A]">
              Recibe la memoria de calidades, desglose de partidas y plano acotado de {model.name}.
            </p>
          </div>

          {isFormSubmitted ? (
            <div className="p-8 bg-white border border-[#0DA836] rounded-lg text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#0DA836] mx-auto" />
              <h3 className="text-lg font-bold text-[#16181B]">
                ¡Dossier solicitado con éxito!
              </h3>
              <p className="text-sm text-[#5A606A]">
                Hemos registrado tu solicitud para el modelo <strong>{model.name}</strong>. En breve nuestro equipo técnico de Carrión de los Condes te contactará con la documentación completa.
              </p>
              <button
                type="button"
                onClick={() => setIsFormSubmitted(false)}
                className="text-xs font-bold text-[#0DA836] hover:underline pt-2 cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="bg-white p-6 sm:p-8 rounded-lg border border-[#16181B]/10 shadow-xs space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                  Nombre y Apellidos *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Ej. Laura González"
                  className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="laura@ejemplo.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="612 345 678"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                  ¿Dispones ya de parcela? *
                </label>
                <select
                  value={formData.parcela}
                  onChange={(e) => setFormData({ ...formData, parcela: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded bg-white focus:outline-none focus:border-[#16181B]"
                >
                  <option value="si_en_propiedad">Sí, dispongo de parcela en propiedad</option>
                  <option value="en_proceso_compra">En proceso de compra o arras</option>
                  <option value="buscando_terreno">Buscando terreno activamente</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                  Comentarios o dudas sobre tu proyecto
                </label>
                <textarea
                  rows={3}
                  value={formData.comentarios}
                  onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                  placeholder="Provincia de la parcela, fecha estimada de inicio..."
                  className="w-full px-3.5 py-2.5 text-sm border border-[#16181B]/20 rounded focus:outline-none focus:border-[#16181B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-bold text-white bg-[#F35843] hover:bg-[#ff6955] rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Recibir Dossier Comercial y Planos &rarr;</span>
              </button>

              <p className="text-[11px] text-[#8E95A2] text-center pt-1">
                Tus datos se tratarán exclusivamente para remitirte la información técnica solicitada.
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
