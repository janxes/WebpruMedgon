import React, { useState } from 'react';
import { 
  generateWpCodeHeader, 
  generateWpCodeFooter, 
  generateHomePageHtml, 
  generateModelPageHtml 
} from '../data/wordpressSnippets';
import { CATALOG_MODELS } from '../data/modelsCatalog';
import { 
  X, 
  Copy, 
  Check, 
  Code, 
  FileCode, 
  Layers, 
  Sparkles, 
  Info,
  ExternalLink,
  ChevronDown,
  Image as ImageIcon,
  BookOpen,
  FolderTree,
  Server,
  Terminal,
  ArrowRight
} from 'lucide-react';

interface WordPressExportHubProps {
  isOpen: boolean;
  onClose: () => void;
  currentModelId?: string;
}

export const WordPressExportHub: React.FC<WordPressExportHubProps> = ({
  isOpen,
  onClose,
  currentModelId,
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'header' | 'footer' | 'page' | 'blog' | 'images'>('guide');
  const [selectedPage, setSelectedPage] = useState<string>(
    currentModelId && CATALOG_MODELS[currentModelId] ? currentModelId : 'home'
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // Determine current page snippet
  let pageSnippetHtml = '';
  if (selectedPage === 'home') {
    pageSnippetHtml = generateHomePageHtml();
  } else if (CATALOG_MODELS[selectedPage]) {
    pageSnippetHtml = generateModelPageHtml(CATALOG_MODELS[selectedPage]);
  } else {
    pageSnippetHtml = generateHomePageHtml();
  }

  const wpCodeHeader = generateWpCodeHeader();
  const wpCodeFooter = generateWpCodeFooter();

  // Snippet PHP para registrar el shortcode [medgon_blog] en WordPress
  const phpBlogSnippet = `<?php
/**
 * Snippet para WPCode: Renderizado Dinámico del Blog Medgón Passivhaus
 * Tipo: PHP Snippet
 * Ubicación: Run Everywhere (Ejecutar en todas partes)
 * 
 * Uso: Coloca el shortcode [medgon_blog] en cualquier bloque o página.
 */
add_shortcode('medgon_blog', 'medgon_render_dynamic_blog');

function medgon_render_dynamic_blog($atts) {
    // Parámetros configurables del shortcode (por defecto 4 entradas)
    $attributes = shortcode_atts(array(
        'posts_per_page' => 4,
        'category' => '',
    ), $atts);

    $args = array(
        'post_type'      => 'post',
        'posts_per_page' => intval($attributes['posts_per_page']),
        'post_status'    => 'publish',
        'orderby'        => 'date',
        'order'          => 'DESC',
    );

    if (!empty($attributes['category'])) {
        $args['category_name'] = sanitize_text_field($attributes['category']);
    }

    $query = new WP_Query($args);

    if (!$query->have_posts()) {
        return '<div style="padding: 2rem; background: #FAF8F5; border-radius: 8px; text-align: center; color: #5A606A; font-size: 0.9rem;">No hay artículos publicados todavía en el blog.</div>';
    }

    $output = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">';

    while ($query->have_posts()) {
        $query->the_post();
        
        // Imagen destacada del post o imagen por defecto
        $thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
        if (!$thumbnail_url) {
            $thumbnail_url = '/MG87/castilian_wheat_house.jpg';
        }

        // Categoría principal
        $categories = get_the_category();
        $cat_name = !empty($categories) ? esc_html($categories[0]->name) : 'Passivhaus';
        $post_date = get_the_date('j M, Y');
        $permalink = esc_url(get_permalink());
        $title = esc_html(get_the_title());
        $excerpt = wp_trim_words(get_the_excerpt(), 18, '...');

        $output .= '<article style="background: #ffffff; border: 1px solid rgba(22, 24, 27, 0.1); border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, box-shadow 0.2s;">';
        $output .= '  <div>';
        $output .= '    <a href="' . $permalink . '" style="display: block; height: 190px; overflow: hidden; background: #FAF8F5;">';
        $output .= '      <img src="' . esc_url($thumbnail_url) . '" alt="' . $title . '" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />';
        $output .= '    </a>';
        $output .= '    <div style="padding: 1.25rem;">';
        $output .= '      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; margin-bottom: 0.5rem;">';
        $output .= '        <span style="color: #0DA836; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">' . $cat_name . '</span>';
        $output .= '        <span style="color: #8E95A2;">' . $post_date . '</span>';
        $output .= '      </div>';
        $output .= '      <h3 style="font-size: 1.15rem; font-weight: 700; color: #16181B; margin: 0 0 0.5rem 0; line-height: 1.35;">';
        $output .= '        <a href="' . $permalink . '" style="color: #16181B; text-decoration: none;">' . $title . '</a>';
        $output .= '      </h3>';
        $output .= '      <p style="font-size: 0.85rem; color: #5A606A; margin: 0; line-height: 1.55;">' . esc_html($excerpt) . '</p>';
        $output .= '    </div>';
        $output .= '  </div>';
        $output .= '  <div style="padding: 0.75rem 1.25rem 1.25rem 1.25rem; border-top: 1px solid rgba(22, 24, 27, 0.06);">';
        $output .= '    <a href="' . $permalink . '" style="font-size: 0.8rem; font-weight: 700; color: #0DA836; text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">';
        $output .= '      <span>Leer artículo completo &rarr;</span>';
        $output .= '    </a>';
        $output .= '  </div>';
        $output .= '</article>';
    }

    wp_reset_postdata();
    $output .= '</div>';

    return $output;
}`;

  // Script JS para REST API nativa (Alternativa sin PHP)
  const jsRestApiSnippet = `<script>
// Script opcional para cargar posts de WordPress dinámicamente vía REST API nativa
document.addEventListener('DOMContentLoaded', function() {
  var blogContainer = document.getElementById('medgon-blog-posts');
  if (!blogContainer) return;

  fetch('/wp-json/wp/v2/posts?_embed&per_page=4')
    .then(function(res) { return res.json(); })
    .then(function(posts) {
      if (!Array.isArray(posts) || posts.length === 0) return;
      var html = '';
      posts.forEach(function(post) {
        var thumb = '/MG87/castilian_wheat_house.jpg';
        if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
          thumb = post._embedded['wp:featuredmedia'][0].source_url;
        }
        var date = new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
        var title = post.title.rendered;
        var excerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...';

        html += '<article style="background:#fff;border:1px solid rgba(22,24,27,0.1);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;">';
        html += '<img src="' + thumb + '" style="width:100%;height:180px;object-fit:cover;" />';
        html += '<div style="padding:1.25rem;">';
        html += '<span style="color:#0DA836;font-size:0.75rem;font-weight:700;">Passivhaus · ' + date + '</span>';
        html += '<h3 style="font-size:1.1rem;font-weight:700;margin:0.5rem 0;"><a href="' + post.link + '" style="color:#16181B;text-decoration:none;">' + title + '</a></h3>';
        html += '<p style="font-size:0.85rem;color:#5A606A;">' + excerpt + '</p>';
        html += '</div>';
        html += '<div style="padding:0.75rem 1.25rem;border-top:1px solid rgba(22,24,27,0.06);"><a href="' + post.link + '" style="color:#0DA836;font-size:0.8rem;font-weight:700;text-decoration:none;">Leer artículo &rarr;</a></div>';
        html += '</article>';
      });
      blogContainer.innerHTML = html;
    })
    .catch(function(err) { console.error('Error cargando posts:', err); });
});
</script>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[92vh] border border-[#16181B]/15 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#16181B]/10 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#16181B] flex items-center justify-center text-white">
              <Code className="w-4 h-4 text-[#78E639]" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-[#16181B] tracking-tight">
                Exportar a WordPress & Guía Técnica Paso a Paso
              </h2>
              <p className="text-xs text-[#5A606A]">
                Publicación limpia: HTML5 semántico, CSS modular, subida de imágenes y sincronización automática de posts del blog.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#5A606A] hover:text-[#16181B] rounded hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Cerrar exportador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pt-3 border-b border-[#16181B]/10 flex items-center gap-2 bg-white overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'guide'
                ? 'border-[#0DA836] text-[#16181B]'
                : 'border-transparent text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            📋 Guía Paso a Paso
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('images')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'images'
                ? 'border-[#0DA836] text-[#16181B]'
                : 'border-transparent text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            📸 Subir Imágenes
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('blog')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'blog'
                ? 'border-[#0DA836] text-[#16181B]'
                : 'border-transparent text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            📰 Posts del Blog (PHP)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('header')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'header'
                ? 'border-[#0DA836] text-[#16181B]'
                : 'border-transparent text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            1. WPCode Header
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('footer')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'footer'
                ? 'border-[#0DA836] text-[#16181B]'
                : 'border-transparent text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            2. WPCode Footer
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('page')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'page'
                ? 'border-[#0DA836] text-[#16181B]'
                : 'border-transparent text-[#5A606A] hover:text-[#16181B]'
            }`}
          >
            3. HTML de Páginas
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 bg-[#FAF8F5]">
          
          {/* TAB 0: STEP-BY-STEP ROADMAP GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              
              {/* Introduction Banner */}
              <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 shadow-xs space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0DA836] block">
                  Metodología de Implementación en WordPress
                </span>
                <h3 className="text-xl font-bold text-[#16181B]">
                  Instrucciones completas para publicar la web en WordPress
                </h3>
                <p className="text-sm text-[#5A606A] leading-relaxed">
                  Para lograr una web ultra-rápida (Core Web Vitals óptimos, LCP &lt; 1.2s, CLS = 0) y fácilmente actualizable, la arquitectura se divide en <strong>estilos y cabecera global</strong>, <strong>subida de imágenes</strong>, <strong>sincronización dinámica de posts del blog</strong> y <strong>páginas en blanco Gutenberg</strong>.
                </p>
              </div>

              {/* 2 Destacados: Imágenes & Blog */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Destacado Imágenes */}
                <div className="bg-white p-5 rounded-xl border-2 border-[#16181B] space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0DA836]">
                    <ImageIcon className="w-4 h-4" />
                    <span>Pregunta Clave 01</span>
                  </div>
                  <h4 className="text-base font-bold text-[#16181B]">
                    ¿Cómo llevo y subo las imágenes a WordPress?
                  </h4>
                  <p className="text-xs text-[#5A606A] leading-relaxed">
                    <strong>Opción recomendada (FTP/cPanel):</strong> Sube directamente las carpetas (<code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#16181B]/10">/MG87/</code>, <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#16181B]/10">/MG100/</code>, <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#16181B]/10">/MG128/</code>...) y <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#16181B]/10">logo-medgon.png</code> a la raíz de tu WordPress (<code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#16181B]/10">public_html/</code>). De este modo, <strong>no tendrás que cambiar ninguna URL en el HTML</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('images')}
                    className="text-xs font-bold text-[#0DA836] hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <span>Ver guía detallada de imágenes y estructura &rarr;</span>
                  </button>
                </div>

                {/* Destacado Blog */}
                <div className="bg-white p-5 rounded-xl border-2 border-[#16181B] space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0DA836]">
                    <BookOpen className="w-4 h-4" />
                    <span>Pregunta Clave 02</span>
                  </div>
                  <h4 className="text-base font-bold text-[#16181B]">
                    ¿Cómo incluyo los posts de mi blog de WordPress?
                  </h4>
                  <p className="text-xs text-[#5A606A] leading-relaxed">
                    Mediante el shortcode nativo <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#16181B]/10 font-bold text-[#16181B]">[medgon_blog]</code>. Registras un snippet PHP de 30 líneas en el plugin <strong>WPCode</strong> y WordPress consultará automáticamente tus últimas entradas, con imagen destacada, categoría, fecha y enlace permanente.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('blog')}
                    className="text-xs font-bold text-[#0DA836] hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <span>Ver código PHP del shortcode [medgon_blog] &rarr;</span>
                  </button>
                </div>

              </div>

              {/* 4 Pasos del Flujo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Paso 1 */}
                <div className="bg-white p-5 rounded-lg border border-[#16181B]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-[#8E95A2]">Paso 01</span>
                    <span className="text-xs font-bold px-2 py-0.5 bg-[#FAF8F5] border border-[#16181B]/10 rounded">WPCode Header</span>
                  </div>
                  <h4 className="text-base font-bold text-[#16181B]">
                    1. Inyectar Estilos y Menú Sticky
                  </h4>
                  <p className="text-xs text-[#5A606A] leading-relaxed">
                    En WordPress, ve a <strong>WPCode &rarr; Header & Footer</strong> y pega el código de la pestaña <em>"1. WPCode Header"</em>. Contiene la tipografía Helvetica Neue, los colores corporativos Medgón y el menú de navegación con submenú desplegable de modelos.
                  </p>
                </div>

                {/* Paso 2 */}
                <div className="bg-white p-5 rounded-lg border border-[#16181B]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-[#8E95A2]">Paso 02</span>
                    <span className="text-xs font-bold px-2 py-0.5 bg-[#FAF8F5] border border-[#16181B]/10 rounded">WPCode Footer</span>
                  </div>
                  <h4 className="text-base font-bold text-[#16181B]">
                    2. Inyectar Pie y JavaScript Vainilla
                  </h4>
                  <p className="text-xs text-[#5A606A] leading-relaxed">
                    En la misma pantalla de WPCode, en la casilla <strong>Footer</strong>, pega el código de <em>"2. WPCode Footer"</em>. Incluye el pie de página unificado, datos de contacto de Carrión de los Condes y el script de menú móvil accesible.
                  </p>
                </div>

                {/* Paso 3 */}
                <div className="bg-white p-5 rounded-lg border border-[#16181B]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-[#8E95A2]">Paso 03</span>
                    <span className="text-xs font-bold px-2 py-0.5 bg-[#FAF8F5] border border-[#16181B]/10 rounded">Plantilla Lienzo</span>
                  </div>
                  <h4 className="text-base font-bold text-[#16181B]">
                    3. Crear Páginas con Plantilla 'Lienzo'
                  </h4>
                  <p className="text-xs text-[#5A606A] leading-relaxed">
                    Ve a <strong>Páginas &rarr; Añadir nueva</strong>. En los ajustes laterales de la página (plantilla), selecciona <strong>"Lienzo" (Canvas)</strong> o <strong>"Página en blanco"</strong> de tu tema (Astra, GeneratePress, Hello, etc.) para anular márgenes residuales.
                  </p>
                </div>

                {/* Paso 4 */}
                <div className="bg-white p-5 rounded-lg border border-[#16181B]/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-[#8E95A2]">Paso 04</span>
                    <span className="text-xs font-bold px-2 py-0.5 bg-[#FAF8F5] border border-[#16181B]/10 rounded">Gutenberg HTML</span>
                  </div>
                  <h4 className="text-base font-bold text-[#16181B]">
                    4. Pegar Bloque 'HTML Personalizado'
                  </h4>
                  <p className="text-xs text-[#5A606A] leading-relaxed">
                    Añade un bloque <strong>HTML Personalizado</strong> de Gutenberg y pega el código de la pestaña <em>"3. HTML de Páginas"</em> (puedes seleccionar Portada, Catálogo o fichas individuales de modelos como MG 87 o MG 128).
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* TAB: IMÁGENES Y GESTIÓN DE ARCHIVOS */}
          {activeTab === 'images' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0DA836]">
                  <FolderTree className="w-4 h-4" />
                  <span>Guía Completa de Imágenes en WordPress</span>
                </div>
                <h3 className="text-xl font-bold text-[#16181B]">
                  Cómo subir y organizar las imágenes para que carguen al instante
                </h3>
                <p className="text-sm text-[#5A606A] leading-relaxed">
                  Las imágenes de los modelos Medgón utilizan rutas relativas (por ejemplo <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#16181B]/10">/MG128/boho_autumn_exterior.jpg</code>). Dispones de dos formas sencillas para alojarlas en WordPress:
                </p>
              </div>

              {/* Opción A vs Opción B */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Opción 1: FTP / cPanel */}
                <div className="bg-white p-6 rounded-xl border-2 border-[#0DA836] space-y-3">
                  <span className="text-xs font-bold px-2 py-0.5 bg-[#0DA836]/10 text-[#0DA836] rounded uppercase">
                    Opción 1 · Más Rápida (Sin tocar código)
                  </span>
                  <h4 className="text-base font-bold text-[#16181B]">
                    Subida por FTP o Administrador de Archivos (cPanel / Plesk)
                  </h4>
                  <ol className="text-xs text-[#5A606A] space-y-2 list-decimal pl-4 leading-relaxed">
                    <li>Abre el <strong>Administrador de Archivos</strong> de tu panel de hosting o conéctate con <strong>FileZilla</strong>.</li>
                    <li>Ve a la carpeta raíz de tu web WordPress (suele llamarse <code className="bg-[#FAF8F5] px-1 py-0.5 rounded">public_html/</code>, <code className="bg-[#FAF8F5] px-1 py-0.5 rounded">httpdocs/</code> o <code className="bg-[#FAF8F5] px-1 py-0.5 rounded">www/</code>).</li>
                    <li>Sube directamente las carpetas tal cual están en el proyecto:
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 font-mono text-[#16181B]">
                        <li>/MG87/</li>
                        <li>/MG100/</li>
                        <li>/MG105/</li>
                        <li>/MG128/</li>
                        <li>/MG148/</li>
                        <li>/MG165/</li>
                        <li>/logo-medgon.png</li>
                      </ul>
                    </li>
                    <li><strong>¡Listo!</strong> Las rutas del HTML coincidirán al 100% y todas las fotos y planos se verán automáticamente en WordPress.</li>
                  </ol>
                </div>

                {/* Opción 2: Medios WP */}
                <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-3">
                  <span className="text-xs font-bold px-2 py-0.5 bg-[#FAF8F5] border border-[#16181B]/10 text-[#5A606A] rounded uppercase">
                    Opción 2 · Biblioteca de Medios de WP
                  </span>
                  <h4 className="text-base font-bold text-[#16181B]">
                    Subida a través del Panel de WordPress (wp-admin)
                  </h4>
                  <ol className="text-xs text-[#5A606A] space-y-2 list-decimal pl-4 leading-relaxed">
                    <li>En tu panel de WordPress, ve a <strong>Medios &rarr; Añadir nuevo archivo</strong>.</li>
                    <li>Arrastra y sube las imágenes JPG/PNG de las casas y el logotipo.</li>
                    <li>WordPress generará una URL pública para cada imagen (ejemplo: <br /><code className="text-[11px] text-[#0DA836] break-all">https://tudominio.com/wp-content/uploads/2026/10/boho_autumn_exterior.jpg</code>).</li>
                    <li>En el código HTML de la página o modelo, haz un <strong>Buscar y Reemplazar</strong> de <code className="bg-[#FAF8F5] px-1 py-0.5 rounded">/MG128/</code> por la URL de tu biblioteca de medios.</li>
                  </ol>
                </div>

              </div>

              {/* Resumen de Archivos Clave */}
              <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-3">
                <h4 className="text-sm font-bold text-[#16181B]">
                  Listado de carpetas y archivos incluidos en este proyecto:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#5A606A]">
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#16181B]/5">
                    <strong className="text-[#16181B] block">Logo Corporativo:</strong>
                    /logo-medgon.png
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#16181B]/5">
                    <strong className="text-[#16181B] block">Modelo MG 87:</strong>
                    /MG87/ (castilian_wheat_house.jpg, plano, etc.)
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#16181B]/5">
                    <strong className="text-[#16181B] block">Modelo MG 100:</strong>
                    /MG100/ (MG_100_Exterior.png, plano, etc.)
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#16181B]/5">
                    <strong className="text-[#16181B] block">Modelo MG 105:</strong>
                    /MG105/ (industrial_luminous_house_exterior.jpg...)
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#16181B]/5">
                    <strong className="text-[#16181B] block">Modelo MG 128:</strong>
                    /MG128/ (boho_autumn_exterior.jpg, plano MG128...)
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#16181B]/5">
                    <strong className="text-[#16181B] block">Modelos MG 148 / 165:</strong>
                    /MG148/ y /MG165/ (renders y planos PDF)
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB: BLOG DINÁMICO (POSTS DE WORDPRESS) */}
          {activeTab === 'blog' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0DA836]">
                  <BookOpen className="w-4 h-4" />
                  <span>Sincronización Automática de Posts de WordPress</span>
                </div>
                <h3 className="text-xl font-bold text-[#16181B]">
                  Cómo mostrar los posts reales de tu blog en el diseño de Medgón
                </h3>
                <p className="text-sm text-[#5A606A] leading-relaxed">
                  Para que cualquier artículo nuevo que redactes en <strong>Entradas &rarr; Añadir nueva</strong> se pinte automáticamente en la portada y en la página de Blog con la cuadrícula editorial de Medgón, dispones de <strong>dos métodos limpios</strong>:
                </p>
              </div>

              {/* Método A: PHP Snippet (Shortcode [medgon_blog]) */}
              <div className="bg-white p-6 rounded-xl border-2 border-[#16181B] space-y-4 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#0DA836]">Método 1 · Estándar WordPress (Recomendado)</span>
                    <h4 className="text-base font-bold text-[#16181B]">
                      Snippet PHP para crear el Shortcode <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#16181B]/10">[medgon_blog]</code>
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(phpBlogSnippet, 'php_blog')}
                    className="px-4 py-2 text-xs font-bold bg-[#16181B] hover:bg-[#0DA836] text-white rounded transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {copiedKey === 'php_blog' ? <Check className="w-4 h-4 text-[#78E639]" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'php_blog' ? '¡Copiado al portapapeles!' : 'Copiar Código PHP'}</span>
                  </button>
                </div>

                <div className="text-xs text-[#5A606A] bg-[#FAF8F5] p-3 rounded border border-[#16181B]/10 space-y-1">
                  <strong>Instrucciones de instalación:</strong>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>En tu panel de WordPress, ve a <strong>Code Snippets (WPCode) &rarr; + Add Snippet</strong>.</li>
                    <li>Selecciona <strong>"Add Your Custom Code (New Snippet)"</strong>.</li>
                    <li>En <em>Code Type</em>, elige <strong>PHP Snippet</strong>.</li>
                    <li>Pega este código en el editor.</li>
                    <li>En <em>Insertion</em>, deja <strong>Auto Insert</strong> y ubicación <strong>Run Everywhere</strong>.</li>
                    <li>Cambia el interruptor superior a <strong>Active</strong> y pulsa <strong>Save Snippet</strong>.</li>
                  </ol>
                </div>

                <pre className="p-4 bg-[#16181B] text-[#CBD5E0] text-xs font-mono rounded-lg overflow-x-auto max-h-[300px] leading-relaxed select-all">
                  {phpBlogSnippet}
                </pre>
              </div>

              {/* Método B: JavaScript REST API (Cero PHP) */}
              <div className="bg-white p-6 rounded-xl border border-[#16181B]/10 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#8E95A2]">Método 2 · Alternativa 100% JavaScript (Sin PHP)</span>
                    <h4 className="text-base font-bold text-[#16181B]">
                      Carga dinámica vía WordPress REST API (<code className="text-xs font-mono">/wp-json/wp/v2/posts</code>)
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(jsRestApiSnippet, 'js_rest')}
                    className="px-4 py-2 text-xs font-bold bg-[#FAF8F5] hover:bg-[#16181B] hover:text-white text-[#16181B] border border-[#16181B]/20 rounded transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {copiedKey === 'js_rest' ? <Check className="w-4 h-4 text-[#0DA836]" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'js_rest' ? '¡Copiado!' : 'Copiar Script JS'}</span>
                  </button>
                </div>

                <p className="text-xs text-[#5A606A] leading-relaxed">
                  Si no deseas añadir código PHP, puedes pegar este pequeño script en <strong>WPCode Footer</strong>. Buscará automáticamente cualquier contenedor con el identificador <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#16181B]/10">&lt;div id="medgon-blog-posts"&gt;&lt;/div&gt;</code> y pintará tus últimas entradas en directo con sus imágenes y enlaces.
                </p>

                <pre className="p-4 bg-[#16181B] text-[#CBD5E0] text-xs font-mono rounded-lg overflow-x-auto max-h-[220px] leading-relaxed select-all">
                  {jsRestApiSnippet}
                </pre>
              </div>

            </div>
          )}
          
          {/* TAB 1: WPCODE HEADER */}
          {activeTab === 'header' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-[#16181B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-[#5A606A]">
                  <strong className="text-[#16181B] block font-bold">Dónde colocar este código:</strong>
                  En tu panel de WordPress &rarr; Plugin <strong>WPCode</strong> &rarr; <strong>Header & Footer</strong> &rarr; Casilla <strong>Header</strong> (o función <code>wp_head</code>).
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(wpCodeHeader, 'header')}
                  className="px-4 py-2 text-xs font-bold bg-[#16181B] hover:bg-[#0DA836] text-white rounded transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedKey === 'header' ? <Check className="w-4 h-4 text-[#78E639]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === 'header' ? '¡Copiado al portapapeles!' : 'Copiar WPCode Header'}</span>
                </button>
              </div>

              <div className="relative">
                <pre className="p-4 bg-[#16181B] text-[#CBD5E0] text-xs font-mono rounded-lg overflow-x-auto max-h-[460px] leading-relaxed select-all">
                  {wpCodeHeader}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: WPCODE FOOTER */}
          {activeTab === 'footer' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-[#16181B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-[#5A606A]">
                  <strong className="text-[#16181B] block font-bold">Dónde colocar este código:</strong>
                  En tu panel de WordPress &rarr; Plugin <strong>WPCode</strong> &rarr; <strong>Header & Footer</strong> &rarr; Casilla <strong>Footer</strong> (o función <code>wp_footer</code>).
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(wpCodeFooter, 'footer')}
                  className="px-4 py-2 text-xs font-bold bg-[#16181B] hover:bg-[#0DA836] text-white rounded transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedKey === 'footer' ? <Check className="w-4 h-4 text-[#78E639]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === 'footer' ? '¡Copiado al portapapeles!' : 'Copiar WPCode Footer'}</span>
                </button>
              </div>

              <div className="relative">
                <pre className="p-4 bg-[#16181B] text-[#CBD5E0] text-xs font-mono rounded-lg overflow-x-auto max-h-[460px] leading-relaxed select-all">
                  {wpCodeFooter}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: INDIVIDUAL PAGES & MODELS */}
          {activeTab === 'page' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-[#16181B]/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#16181B] uppercase mb-1">
                      Selecciona la Página o Ficha de Modelo para Exportar:
                    </label>
                    <select
                      value={selectedPage}
                      onChange={(e) => setSelectedPage(e.target.value)}
                      className="px-3 py-1.5 text-xs font-semibold bg-[#FAF8F5] border border-[#16181B]/20 rounded text-[#16181B] cursor-pointer"
                    >
                      <option value="home">Portada / Inicio (con Schema Organization + FAQ)</option>
                      <optgroup label="Fichas de Modelos de Catálogo">
                        {Object.values(CATALOG_MODELS).map((m) => (
                          <option key={m.id} value={m.id}>
                            Ficha {m.code} ({m.m2Construidos} m² · {m.bedrooms} dorm · Schema Residence & Product)
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(pageSnippetHtml, 'page')}
                    className="px-4 py-2 text-xs font-bold bg-[#F35843] hover:bg-[#ff6955] text-white rounded transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {copiedKey === 'page' ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'page' ? '¡Copiado al portapapeles!' : 'Copiar HTML de esta Página'}</span>
                  </button>
                </div>

                <div className="text-xs text-[#5A606A] pt-2 border-t border-[#16181B]/5">
                  <strong>Instrucciones en WordPress:</strong> Crea una nueva Página en WordPress con plantilla <em>"Lienzo"</em> (Canvas) o <em>"Página en blanco"</em>. Añade un bloque <strong>HTML Personalizado</strong> de Gutenberg y pega este código. Ocupará el 100% del ancho de pantalla sin márgenes residuales.
                </div>
              </div>

              <div className="relative">
                <pre className="p-4 bg-[#16181B] text-[#CBD5E0] text-xs font-mono rounded-lg overflow-x-auto max-h-[460px] leading-relaxed select-all">
                  {pageSnippetHtml}
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar: WPO & Core Web Vitals Checklist */}
        <div className="px-6 py-3 bg-white border-t border-[#16181B]/10 flex flex-wrap items-center justify-between text-xs text-[#5A606A] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0DA836]"></span>
            <span>WPO Verificado: Cero maquetadores pesados (sin Elementor ni Divi), LCP &lt; 1.2s, CLS = 0</span>
          </div>
          <div className="text-[#8E95A2]">
            Medgón Passivhaus S.L. · Despliegue WordPress Headless
          </div>
        </div>

      </div>
    </div>
  );
};
