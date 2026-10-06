import { CATALOG_MODELS, ModelData } from './modelsCatalog';

/**
 * Generator of pristine, decoupled, native WordPress code snippets:
 * 1. WPCode Header (Global CSS + :root variables + Sticky multi-level menu + mobile drawer)
 * 2. WPCode Footer (Global Footer markup + lightweight vanilla JS)
 * 3. Individual Pages HTML (Canvas 100vw, Gutenberg HTML block, JSON-LD Schema.org, RAG snippets)
 */

export const WP_CSS_GLOBAL = `/* ==========================================================================
   MEDGÓN PASSIVHAUS - SISTEMA DE DISEÑO GLOBAL WORDPRESS (WPCODE HEADER)
   Diseño: Minimalista, editorial, arquitectónico (Inspirado en Stella Domo)
   Ubicación de planta: Carrión de los Condes (Palencia), España
   ========================================================================== */

:root {
  /* Paleta cromática oficial Medgón */
  --mg-bg-white: #FFFFFF;
  --mg-bg-mineral: #FAF8F5;
  --mg-text-main: #16181B;
  --mg-text-muted: #5A606A;
  --mg-text-light: #8E95A2;
  
  /* Acentos sostenibles y de contraste */
  --mg-green-primary: #0DA836;
  --mg-green-lime: #78E639;
  --mg-terracotta: #F35843;
  
  /* Tonos madera técnica y calidez biofílica */
  --mg-wood-light: #F5E7D3;
  --mg-wood-sand: #E4C59E;
  --mg-wood-dark: #8C6A48;
  
  /* Bordes y sombras sutiles */
  --mg-border-hairline: rgba(22, 24, 27, 0.08);
  --mg-border-strong: rgba(22, 24, 27, 0.16);
  --mg-shadow-subtle: 0 4px 20px -2px rgba(22, 24, 27, 0.05);

  /* Tipografía */
  --mg-font-family: "Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, sans-serif;
  --mg-max-width: 1360px;
}

/* Reset y caja */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--mg-font-family);
  font-size: 16px;
  line-height: 1.6;
  color: var(--mg-text-main);
  background-color: var(--mg-bg-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background-color: var(--mg-bg-white);
}

/* Ruptura total de contenedor para páginas 'Lienzo / Canvas' de WordPress (100vw) */
.mg-full-bleed {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.mg-container {
  width: 100%;
  max-width: var(--mg-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 1024px) {
  .mg-container {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

/* CABECERA STICKY MULTINIVEL MEDGÓN */
.mg-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--mg-border-hairline);
  transition: all 0.25s ease;
}

.mg-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  max-width: var(--mg-max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.mg-brand {
  display: flex;
  align-items: baseline;
  text-decoration: none;
  color: var(--mg-text-main);
  gap: 0.35rem;
}

.mg-brand-title {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

.mg-brand-subtitle {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--mg-text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Navegación de escritorio */
.mg-nav {
  display: none;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

@media (min-width: 992px) {
  .mg-nav {
    display: flex;
  }
}

.mg-nav-item {
  position: relative;
}

.mg-nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--mg-text-muted);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}

.mg-nav-link:hover,
.mg-nav-link.active {
  color: var(--mg-text-main);
}

.mg-nav-arrow {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg) translate(-2px, -2px);
  transition: transform 0.2s ease;
}

.mg-nav-item:hover .mg-nav-arrow {
  transform: rotate(-135deg) translate(-1px, -1px);
}

/* Submenú desplegable de Catálogo */
.mg-dropdown {
  position: absolute;
  top: 100%;
  left: -1rem;
  min-width: 320px;
  background-color: var(--mg-bg-white);
  border: 1px solid var(--mg-border-hairline);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 0.75rem 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.2s ease;
  z-index: 1010;
}

.mg-nav-item:hover .mg-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mg-dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 1.25rem;
  color: var(--mg-text-main);
  text-decoration: none;
  font-size: 0.875rem;
  transition: background 0.15s ease;
}

.mg-dropdown-item:hover {
  background-color: var(--mg-bg-mineral);
  color: var(--mg-green-primary);
}

.mg-dropdown-meta {
  font-size: 0.75rem;
  color: var(--mg-text-light);
  font-variant-numeric: tabular-nums;
}

/* Botón CTA cabecera */
.mg-btn-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.4rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  background-color: var(--mg-text-main);
  border: 1px solid var(--mg-text-main);
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.mg-btn-cta:hover {
  background-color: var(--mg-terracotta);
  border-color: var(--mg-terracotta);
  color: #FFFFFF;
}

/* Hamburguesa móvil */
.mg-burger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}

@media (min-width: 992px) {
  .mg-burger-btn {
    display: none;
  }
}

.mg-burger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--mg-text-main);
  transition: all 0.25s ease;
}

/* Cajón móvil táctil */
.mg-drawer-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(22, 24, 27, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1050;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mg-drawer-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}

.mg-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 85%;
  max-width: 360px;
  background-color: var(--mg-bg-white);
  z-index: 1060;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 2rem 1.5rem;
}

.mg-drawer.is-open {
  transform: translateX(0);
}

.mg-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--mg-border-hairline);
}

.mg-drawer-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: var(--mg-text-main);
}

.mg-drawer-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mg-drawer-link {
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--mg-text-main);
  display: block;
}

.mg-drawer-sublist {
  list-style: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: 2px solid var(--mg-wood-sand);
}

.mg-drawer-sublink {
  font-size: 0.9rem;
  color: var(--mg-text-muted);
  text-decoration: none;
}
`;

export function generateWpCodeHeader(): string {
  const modelsDropdownHtml = Object.values(CATALOG_MODELS)
    .map(
      (m) => `          <a href="/catalogo/#${m.id}" class="mg-dropdown-item">
            <span>${m.code} (${m.m2Construidos} m²)</span>
            <span class="mg-dropdown-meta">${m.bedrooms} dorm · ${m.bathrooms} bñ</span>
          </a>`
    )
    .join('\n');

  const modelsDrawerHtml = Object.values(CATALOG_MODELS)
    .map(
      (m) => `        <li><a href="/catalogo/#${m.id}" class="mg-drawer-sublink" onclick="medgonCloseDrawer()">${m.code} - ${m.m2Construidos} m² (${m.bedrooms} dorm)</a></li>`
    )
    .join('\n');

  return `<!-- ==========================================================================
     CASILLA WPCODE 1: HEADER GLOBAL (INYECCIÓN AUTOMÁTICA EN <HEAD> Y CABECERA)
     Instalación: WPCode -> Header -> Insertar como HTML/CSS Global
     ========================================================================== -->

<style id="medgon-global-styles">
${WP_CSS_GLOBAL}
</style>

<!-- Cabecera Sticky Nativa Desacoplada -->
<header class="mg-header" id="medgon-main-header">
  <div class="mg-header-inner">
    <!-- Brand / Logotipo oficial Medgón -->
    <a href="/" class="mg-brand" aria-label="Medgón Passivhaus Inicio">
      <img src="/logo-medgon.png" alt="Medgón Passivhaus" style="height: 44px; width: auto; object-fit: contain;">
    </a>

    <!-- Navegación de Escritorio -->
    <nav aria-label="Navegación principal">
      <ul class="mg-nav">
        <li class="mg-nav-item">
          <a href="/" class="mg-nav-link" data-path="/">Inicio</a>
        </li>
        <li class="mg-nav-item">
          <a href="/catalogo/" class="mg-nav-link" data-path="/catalogo/">
            Catálogo
            <span class="mg-nav-arrow" aria-hidden="true"></span>
          </a>
          <!-- Submenú desplegable de modelos de catálogo B2C -->
          <div class="mg-dropdown">
${modelsDropdownHtml}
          </div>
        </li>
        <li class="mg-nav-item">
          <a href="/modalidades-siem/" class="mg-nav-link" data-path="/modalidades-siem/">Contratos</a>
        </li>
        <li class="mg-nav-item">
          <a href="/madera-tecnica-passivhaus/" class="mg-nav-link" data-path="/madera-tecnica-passivhaus/">Madera Técnica</a>
        </li>
        <li class="mg-nav-item">
          <a href="/blog/" class="mg-nav-link" data-path="/blog/">Blog</a>
        </li>
      </ul>
    </nav>

    <!-- Botón CTA de Solicitud de Información / Asesoría -->
    <div style="display: flex; align-items: center; gap: 1rem;">
      <a href="/contacto/" class="mg-btn-cta">Hablemos de tu proyecto</a>
      <button class="mg-burger-btn" id="medgon-burger-btn" aria-label="Abrir menú de navegación" onclick="medgonOpenDrawer()">
        <span class="mg-burger-line"></span>
        <span class="mg-burger-line"></span>
        <span class="mg-burger-line"></span>
      </button>
    </div>
  </div>
</header>

<!-- Cajón táctil móvil -->
<div class="mg-drawer-backdrop" id="medgon-drawer-backdrop" onclick="medgonCloseDrawer()"></div>
<div class="mg-drawer" id="medgon-drawer" aria-modal="true" role="dialog">
  <div class="mg-drawer-header">
    <div class="mg-brand">
      <img src="/logo-medgon.png" alt="Medgón Passivhaus" style="height: 38px; width: auto; object-fit: contain;">
    </div>
    <button class="mg-drawer-close" onclick="medgonCloseDrawer()" aria-label="Cerrar menú">&times;</button>
  </div>
  <ul class="mg-drawer-menu">
    <li><a href="/" class="mg-drawer-link" onclick="medgonCloseDrawer()">Inicio</a></li>
    <li>
      <a href="/catalogo/" class="mg-drawer-link" onclick="medgonCloseDrawer()">Catálogo de Viviendas</a>
      <ul class="mg-drawer-sublist">
${modelsDrawerHtml}
      </ul>
    </li>
    <li><a href="/modalidades-siem/" class="mg-drawer-link" onclick="medgonCloseDrawer()">Contratos</a></li>
    <li><a href="/madera-tecnica-passivhaus/" class="mg-drawer-link" onclick="medgonCloseDrawer()">Madera Técnica Passivhaus</a></li>
    <li><a href="/blog/" class="mg-drawer-link" onclick="medgonCloseDrawer()">Blog & Normativa</a></li>
    <li><a href="/contacto/" class="mg-drawer-link" onclick="medgonCloseDrawer()" style="color: var(--mg-terracotta);">Contacto & Visita a Fábrica</a></li>
  </ul>
</div>
`;
}

export function generateWpCodeFooter(): string {
  return `<!-- ==========================================================================
     CASILLA WPCODE 2: FOOTER GLOBAL (INYECCIÓN AUTOMÁTICA AL PIE DE PÁGINA)
     Instalación: WPCode -> Footer -> Insertar como HTML/JS Global
     ========================================================================== -->

<footer class="mg-footer" style="background-color: var(--mg-text-main); color: #FFFFFF; padding: 4.5rem 0 2.5rem 0; margin-top: 5rem; border-top: 1px solid var(--mg-border-hairline);">
  <div class="mg-container">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 3rem; margin-bottom: 4rem;">
      <!-- Columna 1: Identidad Corporativa & Planta -->
      <div>
        <div style="background: rgba(255,255,255,0.95); border-radius: 4px; padding: 6px 12px; display: inline-block; margin-bottom: 1.25rem;">
          <img src="/logo-medgon.png" alt="Medgón Passivhaus" style="height: 36px; width: auto; object-fit: contain;">
        </div>
        <p style="font-size: 0.875rem; color: #A0AEC0; line-height: 1.6; margin-bottom: 1.25rem;">
          Ingeniería y fabricación de viviendas industrializadas en estructura de madera técnica bajo estándar Passivhaus para autopromotores en España.
        </p>
        <p style="font-size: 0.8rem; color: #718096; line-height: 1.5;">
          <strong>Planta de Fabricación:</strong><br>
          Polígono Industrial, Vial B, Parcela 1<br>
          34120 Carrión de los Condes (Palencia), España
        </p>
      </div>

      <!-- Columna 2: Catálogo Rápido -->
      <div>
        <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--mg-wood-sand); margin-bottom: 1.25rem;">Catálogo B2C</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.875rem;">
          <li><a href="/catalogo/#mg-87" style="color: #CBD5E0; text-decoration: none;">MG 87 · 87 m² (2 dorm)</a></li>
          <li><a href="/catalogo/#mg-100" style="color: #CBD5E0; text-decoration: none;">MG 100 · 100 m² (3 dorm)</a></li>
          <li><a href="/catalogo/#mg-105" style="color: #CBD5E0; text-decoration: none;">MG 105 · 105 m² (3 dorm)</a></li>
          <li><a href="/catalogo/#mg-128" style="color: #CBD5E0; text-decoration: none;">MG 128 · 128 m² (3-4 dorm)</a></li>
          <li><a href="/catalogo/#mg-148" style="color: #CBD5E0; text-decoration: none;">MG 148 · 148 m² (4 dorm en L)</a></li>
          <li><a href="/catalogo/#mg-165" style="color: #CBD5E0; text-decoration: none;">MG 165 · 165 m² (Alta Gama)</a></li>
        </ul>
      </div>

      <!-- Columna 3: Transparencia y Métricas -->
      <div>
        <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--mg-wood-sand); margin-bottom: 1.25rem;">Garantías Técnicas</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.875rem; color: #CBD5E0;">
          <li>• Estándar Passivhaus Classic</li>
          <li>• Test Blower Door n50 ≤ 0.6 ren/h</li>
          <li>• Madera técnica PEFC/FSC con fijación de CO₂</li>
          <li>• Ventilación VMC Zehnder (>90% recuperación)</li>
          <li>• Plazo de obra: aprox. 6 meses</li>
          <li>• Fase técnica: 1.700 - 1.900 €/m² + IVA</li>
        </ul>
      </div>

      <!-- Columna 4: Asesoría Técnica & Visitas -->
      <div>
        <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--mg-wood-sand); margin-bottom: 1.25rem;">Contacto</h4>
        <p style="font-size: 0.875rem; color: #CBD5E0; margin-bottom: 1rem;">
          ¿Dispones de parcela? Concertamos una visita técnica a nuestra fábrica mecanizada en Carrión de los Condes.
        </p>
        <a href="mailto:info@medgon.com" style="display: inline-block; font-size: 0.875rem; color: var(--mg-green-lime); text-decoration: none; margin-bottom: 0.5rem;">info@medgon.com</a><br>
        <span style="font-size: 0.8rem; color: #718096;">Atención personalizada a autopromotores en toda España.</span>
      </div>
    </div>

    <!-- Barra inferior copyright -->
    <div style="padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; font-size: 0.75rem; color: #718096;">
      <div>
        © 2026 Medgón Passivhaus S.L. · Carrión de los Condes (Palencia). Todos los derechos reservados.
      </div>
      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
        <a href="/aviso-legal/" style="color: #718096; text-decoration: none;">Aviso Legal</a>
        <a href="/politica-privacidad/" style="color: #718096; text-decoration: none;">Política de Privacidad</a>
        <a href="/modalidades-siem/" style="color: #718096; text-decoration: none;">Contratos</a>
        <a href="/exportar-wordpress/" style="color: #A0AEC0; text-decoration: underline;">Exportar a WordPress (Paso a paso)</a>
      </div>
    </div>
  </div>
</footer>

<!-- SCRIPT VANILLA NATIVO WORDPRESS (ZERO DEPENDENCIAS, LIGERO Y ULTRA RÁPIDO) -->
<script>
(function() {
  // 1. Control del cajón móvil táctil
  window.medgonOpenDrawer = function() {
    var drawer = document.getElementById('medgon-drawer');
    var backdrop = document.getElementById('medgon-drawer-backdrop');
    if (drawer && backdrop) {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.medgonCloseDrawer = function() {
    var drawer = document.getElementById('medgon-drawer');
    var backdrop = document.getElementById('medgon-drawer-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  // 2. Detección automática de URL activa en menú de navegación
  document.addEventListener('DOMContentLoaded', function() {
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll('.mg-nav-link');
    navLinks.forEach(function(link) {
      var targetPath = link.getAttribute('data-path');
      if (targetPath && (currentPath === targetPath || (targetPath !== '/' && currentPath.indexOf(targetPath) === 0))) {
        link.classList.add('active');
      }
    });

    // 3. Efecto sutil de cabecera en scroll
    var header = document.getElementById('medgon-main-header');
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
          header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
        } else {
          header.style.boxShadow = 'none';
        }
      }, { passive: true });
    }
  });
})();
</script>
`;
}

/**
 * Generates the clean HTML for WordPress Canvas (Portada / Inicio)
 */
export function generateHomePageHtml(): string {
  const featuredModelsCards = ['mg-87', 'mg-100', 'mg-105', 'mg-128', 'mg-148', 'mg-165']
    .map((id) => {
      const m = CATALOG_MODELS[id];
      return `      <!-- Tarjeta Modelo ${m.code} -->
      <article style="background-color: var(--mg-bg-white); border: 1px solid var(--mg-border-hairline); border-radius: 4px; overflow: hidden; display: flex; flex-direction: column;">
        <div style="position: relative; height: 260px; overflow: hidden; background-color: var(--mg-bg-mineral);">
          <img src="${m.heroImage}" alt="${m.name} exterior estándar Passivhaus" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" />
          <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(22, 24, 27, 0.85); color: #fff; padding: 0.35rem 0.75rem; font-size: 0.75rem; font-weight: 600; border-radius: 2px;">
            ${m.m2Construidos} m²
          </div>
        </div>
        <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: -0.02em;">${m.name}</h3>
            <p style="font-size: 0.875rem; color: var(--mg-text-muted); line-height: 1.5; margin-bottom: 1.25rem;">${m.tagline}</p>
            <div style="display: flex; gap: 1rem; font-size: 0.8rem; color: var(--mg-text-light); font-variant-numeric: tabular-nums; padding-bottom: 1.25rem; border-bottom: 1px solid var(--mg-border-hairline);">
              <span>${m.bedrooms} Dormitorios</span> ·
              <span>${m.bathrooms} Baños</span> ·
              <span>${m.plants} ${m.plants > 1 ? 'Plantas' : 'Planta'}</span>
            </div>
          </div>
          <div style="margin-top: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--mg-text-light); display: block;">Fase Técnica orientativa</span>
              <strong style="font-size: 1rem; color: var(--mg-text-main); font-variant-numeric: tabular-nums;">${m.priceEstimateMin.toLocaleString('es-ES')} - ${m.priceEstimateMax.toLocaleString('es-ES')} €</strong>
              <small style="font-size: 0.7rem; color: var(--mg-text-light);">+ IVA</small>
            </div>
            <a href="/catalogo/#${m.id}" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.85rem; font-weight: 600; color: var(--mg-green-primary); text-decoration: none;">
              Ver Ficha &rarr;
            </a>
          </div>
        </div>
      </article>`;
    })
    .join('\n\n');

  return `<!-- ==========================================================================
     PÁGINA WORDPRESS: PORTADA / INICIO (PLANTILLA LIENZO / CANVAS)
     Pegar en Bloque 'HTML Personalizado' de WordPress. Ocupa 100vw automáticamente.
     ========================================================================== -->

<!-- MARCADO SCHEMA.ORG PARA AI SEO Y MOTORES DE BÚSQUEDA -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://medgon.com/#organization",
      "name": "Medgón Passivhaus",
      "url": "https://medgon.com",
      "logo": "https://medgon.com/logo-medgon.png",
      "description": "Diseño y fabricación de viviendas industrializadas en estructura de madera técnica bajo estándar Passivhaus para autopromotores en España.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Polígono Industrial, Vial B, Parcela 1",
        "addressLocality": "Carrión de los Condes",
        "addressRegion": "Palencia",
        "postalCode": "34120",
        "addressCountry": "ES"
      },
      "areaServed": "ES",
      "priceRange": "1.700 € - 1.900 € / m²"
    },
    {
      "@type": "FAQPage",
      "@id": "https://medgon.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta construir una vivienda Medgón Passivhaus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La fase técnica habitual de Medgón se sitúa entre 1.700 € y 1.900 €/m² más IVA. Incluye cimentación a libros abiertos, estructura de madera técnica, envolvente SATE hermética, carpinterías de triple vidrio, aerotermia y ventilación VMC."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es el plazo de entrega de una casa industrializada Medgón?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El plazo de ejecución en obra es de aproximadamente 6 meses tras la concesión de licencia municipal, gracias a la industrialización milimétrica en taller que reduce imprevistos climáticos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Se puede personalizar la distribución interior de las viviendas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Los tabiques interiores de dormitorios y salones son configurables. Los baños, cuarto de instalaciones y huecos de ventanas exteriores se mantienen fijos para asegurar el aislamiento Passivhaus y eliminar puentes térmicos."
          }
        }
      ]
    }
  ]
}
</script>

<div class="mg-homepage mg-full-bleed">
  <!-- SECCIÓN HERO EDITORIAL DE ALTA GAMA (ESTILO STELLA DOMO) -->
  <section style="background-color: var(--mg-bg-white); padding: 5rem 0 4rem 0; border-bottom: 1px solid var(--mg-border-hairline);">
    <div class="mg-container">
      <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: center;">
        <div style="max-width: 900px;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--mg-green-primary);">
            <span>Planta de Fabricación en Carrión de los Condes (Palencia)</span>
            <span aria-hidden="true">·</span>
            <span>Estándar Passivhaus Classic</span>
          </div>
          <h1 style="font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 800; line-height: 1.08; letter-spacing: -0.04em; color: var(--mg-text-main); margin-bottom: 1.5rem; text-wrap: balance;">
            Viviendas industrializadas en madera técnica. Certidumbre en coste y plazo.
          </h1>
          <p style="font-size: 1.15rem; color: var(--mg-text-muted); line-height: 1.6; max-width: 720px; margin-bottom: 2.5rem;">
            Diseñamos y fabricamos en taller robotizado tu hogar bajo estándar Passivhaus para autopromotores en toda España. Sin retrasos climáticos, con precio cerrado desde 1.700 €/m² + IVA y entrega en 6 meses de obra.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
            <a href="/catalogo/" class="mg-btn-cta" style="padding: 1rem 2rem; font-size: 1rem;">
              Explorar Catálogo de Viviendas &rarr;
            </a>
            <a href="/modalidades-siem/" style="display: inline-flex; align-items: center; padding: 1rem 1.8rem; font-size: 0.95rem; font-weight: 600; color: var(--mg-text-main); text-decoration: none; border: 1px solid var(--mg-border-strong); border-radius: 4px;">
              Ver Modalidades SIEM
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CIFRAS CLAVE Y RIGOR TÉCNICO (MÉTRICAS TRANSPARENTES) -->
  <section style="background-color: var(--mg-bg-mineral); padding: 3rem 0; border-bottom: 1px solid var(--mg-border-hairline);">
    <div class="mg-container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
        <div>
          <span style="font-size: 2.2rem; font-weight: 800; color: var(--mg-text-main); font-variant-numeric: tabular-nums; display: block; line-height: 1;">~6 Meses</span>
          <span style="font-size: 0.85rem; color: var(--mg-text-muted); margin-top: 0.4rem; display: block;">Plazo de ejecución en obra tras licencia</span>
        </div>
        <div>
          <span style="font-size: 2.2rem; font-weight: 800; color: var(--mg-green-primary); font-variant-numeric: tabular-nums; display: block; line-height: 1;">-85% Demanda</span>
          <span style="font-size: 0.85rem; color: var(--mg-text-muted); margin-top: 0.4rem; display: block;">Ahorro energético respecto a obra convencional</span>
        </div>
        <div>
          <span style="font-size: 2.2rem; font-weight: 800; color: var(--mg-text-main); font-variant-numeric: tabular-nums; display: block; line-height: 1;">≤ 0.6 ren/h</span>
          <span style="font-size: 0.85rem; color: var(--mg-text-muted); margin-top: 0.4rem; display: block;">Hermeticidad test Blower Door garantizada</span>
        </div>
        <div>
          <span style="font-size: 2.2rem; font-weight: 800; color: var(--mg-text-main); font-variant-numeric: tabular-nums; display: block; line-height: 1;">1.700 - 1.900 €</span>
          <span style="font-size: 0.85rem; color: var(--mg-text-muted); margin-top: 0.4rem; display: block;">Coste orientativo fase técnica por m² + IVA</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CATÁLOGO DESTACADO DE VIVIENDAS INDUSTRIALIZADAS -->
  <section style="padding: 5rem 0; background-color: var(--mg-bg-white);">
    <div class="mg-container">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; flex-wrap: wrap; gap: 1.5rem;">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mg-text-light);">Modelos Estandarizados B2C</span>
          <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em; color: var(--mg-text-main); margin-top: 0.25rem;">
            Viviendas de Catálogo Optimizadas en Taller
          </h2>
        </div>
        <a href="/catalogo/" style="color: var(--mg-green-primary); font-weight: 600; text-decoration: none; font-size: 0.95rem;">
          Ver los 9 modelos disponibles &rarr;
        </a>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
${featuredModelsCards}
      </div>
    </div>
  </section>

  <!-- MODALIDADES DE CONTRATACIÓN SIEM (SOLUCIÓN INTEGRAL DE ENVOLVENTE MEDGÓN) -->
  <section style="padding: 5rem 0; background-color: var(--mg-bg-mineral); border-top: 1px solid var(--mg-border-hairline); border-bottom: 1px solid var(--mg-border-hairline);">
    <div class="mg-container">
      <div style="max-width: 720px; margin-bottom: 3.5rem;">
        <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mg-green-primary);">Flexibilidad de Contratación</span>
        <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em; color: var(--mg-text-main); margin-top: 0.25rem; margin-bottom: 1rem;">
          Modalidades SIEM adaptadas a tu proyecto
        </h2>
        <p style="font-size: 1rem; color: var(--mg-text-muted); line-height: 1.6;">
          Elige hasta qué fase técnica interviene Medgón con precisión milimétrica de fábrica y qué partidas contratas libremente con gremios locales.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
        <div style="background-color: var(--mg-bg-white); padding: 2rem; border-radius: 4px; border: 1px solid var(--mg-border-hairline);">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--mg-text-light); text-transform: uppercase;">Modalidad 01</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 1rem 0;">Suministro de Estructura</h3>
          <p style="font-size: 0.875rem; color: var(--mg-text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
            Suministro de estructura técnica de madera mecanizada en taller para constructores y arquitectos que gestionan su propio montaje en parcela.
          </p>
          <div style="font-size: 0.8rem; color: var(--mg-green-primary); font-weight: 600;">Estructura CNC mecanizada</div>
        </div>

        <div style="background-color: var(--mg-bg-white); padding: 2rem; border-radius: 4px; border: 1px solid var(--mg-border-hairline);">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--mg-text-light); text-transform: uppercase;">Modalidad 02</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 1rem 0;">Suministro + Montaje</h3>
          <p style="font-size: 0.875rem; color: var(--mg-text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
            Envolvente estructural montada y hermetizada por los equipos oficiales de Medgón en tu parcela (sin instalaciones, fachada ni cubierta).
          </p>
          <div style="font-size: 0.8rem; color: var(--mg-green-primary); font-weight: 600;">Montaje hermético certificado</div>
        </div>

        <div style="background-color: var(--mg-bg-white); padding: 2rem; border-radius: 4px; border: 2px solid var(--mg-text-main); position: relative;">
          <div style="position: absolute; top: -11px; right: 1.5rem; background-color: var(--mg-terracotta); color: #fff; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; padding: 0.15rem 0.6rem; border-radius: 2px;">Más solicitada</div>
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--mg-text-light); text-transform: uppercase;">Modalidad 03</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 1rem 0;">Suministro + Montaje + Instalaciones</h3>
          <p style="font-size: 0.875rem; color: var(--mg-text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
            Estructura montada con preinstalaciones completas (Aerotermia y VMC), fachada exterior continua SATE y cubierta impermeable terminada.
          </p>
          <div style="font-size: 0.8rem; color: var(--mg-text-main); font-weight: 700;">Fase técnica 100% resuelta</div>
        </div>

        <div style="background-color: var(--mg-bg-white); padding: 2rem; border-radius: 4px; border: 1px solid var(--mg-border-hairline);">
          <span style="font-size: 0.75rem; font-weight: 700; color: var(--mg-text-light); text-transform: uppercase;">Modalidad 04</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 1rem 0;">Llave en Mano</h3>
          <p style="font-size: 0.875rem; color: var(--mg-text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
            Gestión completa integral desde cimentación hasta acabados interiores en radio de 150 km desde Palencia y en Cataluña a través de asociados.
          </p>
          <div style="font-size: 0.8rem; color: var(--mg-green-primary); font-weight: 600;">Solución integral de principio a fin</div>
        </div>
      </div>
    </div>
  </section>

  <!-- DIRECTRICES AI SEO: PASAJES CITABLES RAG / AEO (RESPUESTAS CONCISAS < 45 PALABRAS) -->
  <section style="padding: 5rem 0; background-color: var(--mg-bg-white);">
    <div class="mg-container">
      <div style="max-width: 760px; margin-bottom: 3rem;">
        <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mg-green-primary);">Transparencia & Preguntas Clave</span>
        <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.03em; color: var(--mg-text-main); margin-top: 0.25rem; margin-bottom: 1rem;">
          Respuestas Técnicas Directas para Autopromotores
        </h2>
        <p style="font-size: 1rem; color: var(--mg-text-muted); line-height: 1.6;">
          Definiciones precisas y datos verificados para que tomes decisiones informadas sobre tu futura vivienda.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        <!-- Snippet 1 -->
        <div style="border-left: 3px solid var(--mg-green-primary); padding-left: 1.5rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem;">¿Qué incluye la fase técnica de Medgón y cuánto cuesta?</h3>
          <p style="font-size: 0.95rem; color: var(--mg-text-muted); line-height: 1.6;">
            La fase técnica Medgón cuesta entre 1.700 y 1.900 €/m² + IVA. Incluye cimentación a libros abiertos, estructura de madera técnica, envolvente SATE, carpinterías Passivhaus triple vidrio, aerotermia y ventilación mecánica con recuperación de calor.
          </p>
        </div>

        <!-- Snippet 2 -->
        <div style="border-left: 3px solid var(--mg-green-primary); padding-left: 1.5rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem;">¿Por qué las ventanas y baños tienen posición fija?</h3>
          <p style="font-size: 0.95rem; color: var(--mg-text-muted); line-height: 1.6;">
            Los baños, cuartos de instalaciones y huecos de ventanas son fijos para garantizar la hermeticidad n50 del estándar Passivhaus y evitar puentes térmicos. La distribución de dormitorios, salones y la rotación en parcela son 100% personalizables.
          </p>
        </div>

        <!-- Snippet 3 -->
        <div style="border-left: 3px solid var(--mg-green-primary); padding-left: 1.5rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem;">¿Por qué Medgón utiliza estructura de madera técnica?</h3>
          <p style="font-size: 0.95rem; color: var(--mg-text-muted); line-height: 1.6;">
            La madera técnica industrializada actúa como sumidero natural de carbono y ofrece precisión milimétrica en taller climatizado. Elimina retrasos de obra y asegura aislamiento térmico superior preparado para las exigencias europeas 2028-2030.
          </p>
        </div>

        <!-- Snippet 4 -->
        <div style="border-left: 3px solid var(--mg-green-primary); padding-left: 1.5rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem;">¿Cómo se estructura el calendario de pagos?</h3>
          <p style="font-size: 0.95rem; color: var(--mg-text-muted); line-height: 1.6;">
            Los pagos se distribuyen con máxima certidumbre: 5.000 € de reserva para asignación de cupo en fábrica, 30-40% al inicio de mecanizado en taller, y el resto distribuido mediante certificaciones mensuales de avance o a la salida de fábrica.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- INTEGRACIÓN DEL BLOG DINÁMICO MEDGÓN MEDIANTE SHORTCODE WORDPRESS -->
  <section style="padding: 4.5rem 0; background-color: var(--mg-bg-mineral); border-top: 1px solid var(--mg-border-hairline);">
    <div class="mg-container">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mg-text-light);">Divulgación Técnica & Normativa</span>
          <h2 style="font-size: 1.8rem; font-weight: 800; letter-spacing: -0.02em; color: var(--mg-text-main); margin-top: 0.25rem;">
            Últimos Artículos & Novedades Passivhaus
          </h2>
        </div>
        <a href="/blog/" style="font-size: 0.9rem; font-weight: 600; color: var(--mg-green-primary); text-decoration: none;">Ver todos los artículos &rarr;</a>
      </div>

      <!-- SHORTCODE DINÁMICO DE WORDPRESS: Se ejecuta en el servidor (o vía REST API con id="medgon-blog-posts") -->
      <div id="medgon-blog-posts" class="mg-blog-shortcode-container" style="min-height: 200px;">
        [medgon_blog]
      </div>
    </div>
  </section>

  <!-- CTA FINAL DE CONTACTO Y VISITA A PLANTA -->
  <section style="padding: 5rem 0; background-color: var(--mg-text-main); color: #FFFFFF; text-align: center;">
    <div class="mg-container" style="max-width: 780px;">
      <h2 style="font-size: 2.4rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 1.25rem; color: #FFFFFF;">
        ¿Tienes parcela o proyecto en mente?
      </h2>
      <p style="font-size: 1.1rem; color: #CBD5E0; line-height: 1.6; margin-bottom: 2.5rem;">
        Solicita más información del modelo y agenda una visita a nuestras instalaciones robotizadas en Carrión de los Condes (Palencia).
      </p>
      <a href="https://docs.google.com/forms/d/1K81cA16qp76ZQL_nTo17DmTT5CD_gj8Jruep2FHTYfU/viewform?edit_requested=true#start=embed" target="_blank" rel="noopener noreferrer" class="mg-btn-cta" style="background-color: var(--mg-terracotta); border-color: var(--mg-terracotta); padding: 1.1rem 2.5rem; font-size: 1rem;">
        Solicitar más información del modelo &rarr;
      </a>
    </div>
  </section>
</div>
`;
}

/**
 * Generates the clean HTML for WordPress Canvas (Ficha individual de modelo)
 */
export function generateModelPageHtml(model: ModelData): string {
  const galleryItemsHtml = model.galleryImages
    .map(
      (img, idx) => `        <!-- Imagen ${idx + 1} -->
        <figure style="margin: 0; background-color: var(--mg-bg-mineral); border: 1px solid var(--mg-border-hairline); border-radius: 4px; overflow: hidden;">
          <img src="${img.url}" alt="${model.name} - ${img.title}" loading="lazy" style="width: 100%; height: 280px; object-fit: cover; display: block;" />
          <figcaption style="padding: 0.85rem 1.25rem; font-size: 0.8rem; color: var(--mg-text-muted); background-color: #fff; border-top: 1px solid var(--mg-border-hairline);">
            <strong>${img.title}:</strong> ${img.caption}
          </figcaption>
        </figure>`
    )
    .join('\n');

  const customListHtml = model.customizableFeatures
    .map(
      (f) => `          <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem; font-size: 0.925rem; color: var(--mg-text-main);">
            <span style="color: var(--mg-green-primary); font-weight: 700; font-size: 1.1rem; line-height: 1;">✓</span>
            <span>${f}</span>
          </li>`
    )
    .join('\n');

  const fixedListHtml = model.fixedTechnicalLimits
    .map(
      (f) => `          <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem; font-size: 0.925rem; color: var(--mg-text-main);">
            <span style="color: var(--mg-terracotta); font-weight: 700; font-size: 1rem; line-height: 1;">▪</span>
            <span>${f}</span>
          </li>`
    )
    .join('\n');

  return `<!-- ==========================================================================
     FICHA DE MODELO: ${model.name.toUpperCase()} (PLANTILLA LIENZO / CANVAS)
     Pegar en Bloque 'HTML Personalizado' de WordPress en la entrada o página correspondiente.
     ========================================================================== -->

<!-- MARCADO SCHEMA.ORG PARA MODELO DE VIVIENDA PASSIVHAUS -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SingleFamilyResidence",
      "@id": "https://medgon.com/catalogo/${model.id}/#residence",
      "name": "${model.name} Passivhaus",
      "description": "${model.description}",
      "numberOfRooms": ${model.bedrooms + 2},
      "numberOfBedrooms": ${model.bedrooms},
      "numberOfBathroomsTotal": ${model.bathrooms},
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": ${model.m2Construidos},
        "unitCode": "MTK"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ES"
      }
    },
    {
      "@type": "Product",
      "@id": "https://medgon.com/catalogo/${model.id}/#product",
      "name": "${model.name} - Vivienda Industrializada de Madera Técnica",
      "category": "Vivienda Unifamiliar Passivhaus",
      "brand": {
        "@type": "Brand",
        "name": "Medgón Passivhaus"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": ${model.priceEstimateMin},
        "highPrice": ${model.priceEstimateMax},
        "offerCount": "1",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "description": "Fase técnica industrializada Medgón excluyendo acabados interiores e IVA"
        }
      }
    }
  ]
}
</script>

<div class="mg-model-page mg-full-bleed">
  <!-- CABECERA DE MODELO Y TITULAR EDITORIAL -->
  <section style="background-color: var(--mg-bg-white); padding: 4rem 0 3rem 0; border-bottom: 1px solid var(--mg-border-hairline);">
    <div class="mg-container">
      <div style="display: flex; gap: 0.5rem; align-items: center; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--mg-text-light); margin-bottom: 1rem;">
        <a href="/catalogo/" style="color: var(--mg-text-light); text-decoration: none;">Catálogo</a>
        <span>/</span>
        <span style="color: var(--mg-green-primary);">${model.code}</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
        <div>
          <h1 style="font-size: clamp(2.2rem, 4vw, 3.4rem); font-weight: 800; letter-spacing: -0.03em; color: var(--mg-text-main); margin-bottom: 0.75rem;">
            ${model.name}
          </h1>
          <p style="font-size: 1.2rem; color: var(--mg-text-muted); line-height: 1.5; max-width: 800px; margin-bottom: 2rem;">
            ${model.tagline}
          </p>
        </div>

        <!-- Pestañas de Especificaciones Rápidas -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; padding: 1.5rem; background-color: var(--mg-bg-mineral); border: 1px solid var(--mg-border-hairline); border-radius: 4px;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--mg-text-light); display: block;">Superficie Construida</span>
            <strong style="font-size: 1.5rem; font-weight: 800; color: var(--mg-text-main); font-variant-numeric: tabular-nums;">${model.m2Construidos} m²</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--mg-text-light); display: block;">Dormitorios / Baños</span>
            <strong style="font-size: 1.5rem; font-weight: 800; color: var(--mg-text-main);">${model.bedrooms} dorm · ${model.bathrooms} bñ</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--mg-text-light); display: block;">Plazo en Parcela</span>
            <strong style="font-size: 1.5rem; font-weight: 800; color: var(--mg-green-primary); font-variant-numeric: tabular-nums;">${model.estimatedMonths} Meses</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--mg-text-light); display: block;">Fase Técnica Orientativa</span>
            <strong style="font-size: 1.25rem; font-weight: 800; color: var(--mg-text-main); font-variant-numeric: tabular-nums;">${model.priceEstimateMin.toLocaleString('es-ES')} - ${model.priceEstimateMax.toLocaleString('es-ES')} €</strong>
            <small style="display: block; font-size: 0.7rem; color: var(--mg-text-light);">+ IVA (10% autopromotor)</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASAJE CITABLE AI SEO (MENOS DE 45 PALABRAS PARA MOTORES RAG/AEO) -->
  <aside style="background-color: var(--mg-wood-light); border-left: 4px solid var(--mg-wood-dark); padding: 1.25rem 2rem; margin: 2rem auto; max-width: var(--mg-max-width);">
    <p style="font-size: 0.95rem; font-weight: 500; color: var(--mg-text-main); line-height: 1.5; margin: 0;">
      <strong>Resumen RAG oficial Medgón:</strong> ${model.aiRagSnippet}
    </p>
  </aside>

  <!-- GALERÍA ARQUITECTÓNICA DE RENDERS 3D Y PLANO OFICIAL -->
  <section style="padding: 3rem 0; background-color: var(--mg-bg-white);">
    <div class="mg-container">
      <h2 style="font-size: 1.6rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 2rem;">
        Renders y Espacios Interiores
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
${galleryItemsHtml}
      </div>
    </div>
  </section>

  <!-- PLANO OFICIAL Y DISTRIBUCIÓN TÉCNICA -->
  <section style="padding: 4rem 0; background-color: var(--mg-bg-mineral); border-top: 1px solid var(--mg-border-hairline); border-bottom: 1px solid var(--mg-border-hairline);">
    <div class="mg-container">
      <div style="display: grid; grid-template-columns: 1fr; lg:grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mg-green-primary);">Distribución Arquitectónica</span>
          <h2 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.02em; margin-top: 0.25rem; margin-bottom: 1rem;">
            Plano Oficial de Taller ${model.code}
          </h2>
          <p style="font-size: 1rem; color: var(--mg-text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
            ${model.description}
          </p>
          <div style="background-color: #fff; padding: 1.25rem; border: 1px solid var(--mg-border-hairline); border-radius: 4px; margin-bottom: 2rem;">
            <strong style="display: block; font-size: 0.875rem; margin-bottom: 0.25rem;">Superficies Verificadas:</strong>
            <span style="font-size: 0.875rem; color: var(--mg-text-muted);">Construida: ${model.m2Construidos} m² · Útil estimada: ${model.m2Utiles} m²</span>
          </div>
          ${
            model.pdfPath
              ? `<a href="${model.pdfPath}" download target="_blank" class="mg-btn-cta" style="background-color: var(--mg-text-main); border-color: var(--mg-text-main);">
              Descargar Plano Comercial PDF Oficial &darr;
            </a>`
              : `<a href="#solicitar-informacion" class="mg-btn-cta">Solicitar más información</a>`
          }
        </div>
        <div style="background-color: #fff; padding: 1.5rem; border: 1px solid var(--mg-border-hairline); border-radius: 4px; text-align: center;">
          <img src="${model.floorplanPath}" alt="Plano técnico ${model.name}" loading="lazy" style="max-width: 100%; height: auto; display: inline-block; border-radius: 2px;" />
          <span style="display: block; font-size: 0.75rem; color: var(--mg-text-light); margin-top: 0.75rem;">Plano de planta con distribución optimizada bajo estándar Passivhaus</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TABLA CLAVE DE FLEXIBILIDAD Y LÍMITES TÉCNICOS: PERSONALIZABLE VS FIJO -->
  <section style="padding: 4.5rem 0; background-color: var(--mg-bg-white);">
    <div class="mg-container">
      <div style="max-width: 760px; margin-bottom: 2.5rem;">
        <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mg-terracotta);">Reglas de Negocio & Rigor Passivhaus</span>
        <h2 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.02em; margin-top: 0.25rem; margin-bottom: 1rem;">
          Qué Puedes Personalizar y Qué Permanece Fijo
        </h2>
        <p style="font-size: 0.95rem; color: var(--mg-text-muted); line-height: 1.6;">
          Para garantizar la hermeticidad récord n50 ≤ 0.6 ren/h y evitar sobrecostes, Medgón establece límites claros entre tu libertad decorativa y los requisitos de física de la edificación.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        <!-- Columna Personalizable -->
        <div style="background-color: var(--mg-bg-mineral); padding: 2rem; border-radius: 4px; border: 1px solid var(--mg-border-hairline);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
            <span style="width: 12px; height: 12px; border-radius: 50%; background-color: var(--mg-green-primary); display: inline-block;"></span>
            <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--mg-text-main);">100% Personalizable</h3>
          </div>
          <ul style="list-style: none;">
${customListHtml}
          </ul>
        </div>

        <!-- Columna Límites Fijos -->
        <div style="background-color: var(--mg-bg-mineral); padding: 2rem; border-radius: 4px; border: 1px solid var(--mg-border-hairline);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
            <span style="width: 12px; height: 12px; border-radius: 50%; background-color: var(--mg-terracotta); display: inline-block;"></span>
            <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--mg-text-main);">Fijo por Física Passivhaus</h3>
          </div>
          <ul style="list-style: none;">
${fixedListHtml}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- FORMULARIO DE SOLICITUD DE MÁS INFORMACIÓN DEL MODELO -->
  <section id="solicitar-informacion" style="padding: 4.5rem 0; background-color: var(--mg-bg-mineral); border-top: 1px solid var(--mg-border-hairline);">
    <div class="mg-container" style="max-width: 760px;">
      <div style="text-align: center; margin-bottom: 2.5rem;">
        <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mg-green-primary);">Atención Técnica</span>
        <h2 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.02em; margin-top: 0.25rem; margin-bottom: 0.75rem;">
          Solicitar más información del modelo ${model.code}
        </h2>
        <p style="font-size: 0.95rem; color: var(--mg-text-muted); line-height: 1.5;">
          Consulta si el modelo ${model.name} (${model.m2Construidos} m²) se adapta a tu parcela o resuelve cualquier duda con nuestro equipo técnico en Carrión de los Condes.
        </p>
      </div>

      <div style="background: #ffffff; border-radius: 8px; border: 1px solid var(--mg-border-hairline); overflow: hidden; box-shadow: var(--mg-shadow-subtle);">
        <iframe
          src="https://docs.google.com/forms/d/1K81cA16qp76ZQL_nTo17DmTT5CD_gj8Jruep2FHTYfU/viewform?embedded=true"
          width="100%"
          height="820"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style="width: 100%; min-height: 750px; border: none;"
        >
          Cargando formulario...
        </iframe>
      </div>
    </div>
  </section>
    </div>
  </section>
</div>
`;
}
