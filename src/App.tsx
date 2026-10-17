import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomeView } from './components/HomeView';
import { CatalogView } from './components/CatalogView';
import { ModelDetailView } from './components/ModelDetailView';
import { HowItWorksView } from './components/HowItWorksView';
import { SiemModalitiesView } from './components/SiemModalitiesView';
import { PassivhausTechView } from './components/PassivhausTechView';
import { BlogView } from './components/BlogView';
import { AboutMedgonView } from './components/AboutMedgonView';
import { SobreMedgonView } from './components/SobreMedgonView';
import { NuestroSistemaView } from './components/NuestroSistemaView';
import { NuestroPropositoView } from './components/NuestroPropositoView';
import { OficinaTecnicaView } from './components/OficinaTecnicaView';
import { HabitatMedgonView } from './components/HabitatMedgonView';
import { ContactView } from './components/ContactView';
import { WordPressExportHub } from './components/WordPressExportHub';
import { ProductosView } from './components/ProductosView';
import { ViviendasUnifamiliaresView } from './components/ViviendasUnifamiliaresView';
import { EdificiosTerciariosView } from './components/EdificiosTerciariosView';
import { EdificiosPlurifamiliaresView } from './components/EdificiosPlurifamiliaresView';
import { DerechoVueloView } from './components/DerechoVueloView';
import { FachadasIndustrializadasView } from './components/FachadasIndustrializadasView';
import { CubiertasMecanizadasView } from './components/CubiertasMecanizadasView';
import { RscView } from './components/RscView';
import { IdInnovacionView } from './components/IdInnovacionView';
import { InversionView } from './components/InversionView';
import { ProyectosView } from './components/ProyectosView';
import { ProyectoDetailView } from './components/ProyectoDetailView';

export type AppView = 
  | 'home'
  | 'catalog'
  | 'model-detail'
  | 'how-it-works'
  | 'siem'
  | 'passivhaus-tech'
  | 'blog'
  | 'about'
  | 'sobre-medgon'
  | 'nuestro-sistema'
  | 'nuestro-proposito'
  | 'oficina-tecnica'
  | 'habitat-medgon'
  | 'rsc'
  | 'id-innovacion'
  | 'inversion'
  | 'productos'
  | 'productos-unifamiliares'
  | 'productos-terciario'
  | 'productos-plurifamiliares'
  | 'productos-derecho-vuelo'
  | 'productos-fachadas'
  | 'productos-cubiertas'
  | 'proyectos'
  | 'proyecto-detalle'
  | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedModelId, setSelectedModelId] = useState<string>('mg-100');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('castrillo-de-murcia');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // Scroll to top upon navigation
  const handleNavigate = (view: string, modelOrProjectId?: string) => {
    if (view === 'model-detail' && modelOrProjectId) {
      setSelectedModelId(modelOrProjectId);
    } else if (view === 'proyecto-detalle' && modelOrProjectId) {
      setSelectedProjectId(modelOrProjectId);
    } else if (modelOrProjectId) {
      setSelectedModelId(modelOrProjectId);
    }
    setCurrentView(view as AppView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // URL Hash listener for direct anchor navigation (e.g. #mg-87, #catalogo, #como-funciona)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['mg-50', 'mg-87', 'mg-100', 'mg-105', 'mg-120', 'mg-128', 'mg-130', 'mg-148', 'mg-165'].includes(hash)) {
        setSelectedModelId(hash);
        setCurrentView('model-detail');
      } else if (hash === 'como-funciona') {
        setCurrentView('how-it-works');
      } else if (hash === 'sobre-medgon' || hash === 'sobre-nosotros') {
        setCurrentView('sobre-medgon');
      } else if (hash === 'nuestro-sistema' || hash === 'sistema') {
        setCurrentView('nuestro-sistema');
      } else if (hash === 'nuestro-proposito' || hash === 'proposito') {
        setCurrentView('nuestro-proposito');
      } else if (hash === 'oficina-tecnica' || hash === 'ingenieria') {
        setCurrentView('oficina-tecnica');
      } else if (hash === 'habitat-medgon' || hash === 'habitat') {
        setCurrentView('habitat-medgon');
      } else if (hash === 'rsc' || hash === 'ods' || hash === 'responsabilidad-social') {
        setCurrentView('rsc');
      } else if (hash === 'id' || hash === 'id-innovacion' || hash === 'i-d' || hash === 'innovacion') {
        setCurrentView('id-innovacion');
      } else if (hash === 'inversion' || hash === 'inversiones' || hash === 'reindus') {
        setCurrentView('inversion');
      } else if (hash === 'acerca-de-medgon') {
        setCurrentView('about');
      } else if (hash === 'contratos' || hash === 'siem') {
        setCurrentView('siem');
      } else if (hash === 'passivhaus') {
        setCurrentView('passivhaus-tech');
      } else if (hash === 'blog') {
        setCurrentView('blog');
      } else if (hash === 'contacto') {
        setCurrentView('contact');
      } else if (hash === 'catalogo' || hash === 'modelos') {
        setCurrentView('catalog');
      } else if (hash === 'productos') {
        setCurrentView('productos');
      } else if (hash === 'productos-unifamiliares' || hash === 'viviendas-unifamiliares' || hash === 'unifamiliares') {
        setCurrentView('productos-unifamiliares');
      } else if (hash === 'productos-terciario' || hash === 'edificios-terciario' || hash === 'terciario') {
        setCurrentView('productos-terciario');
      } else if (hash === 'productos-plurifamiliares' || hash === 'edificios-plurifamiliares' || hash === 'plurifamiliares') {
        setCurrentView('productos-plurifamiliares');
      } else if (hash === 'productos-derecho-vuelo' || hash === 'derecho-de-vuelo' || hash === 'derecho-vuelo' || hash === 'altior') {
        setCurrentView('productos-derecho-vuelo');
      } else if (hash === 'productos-fachadas' || hash === 'fachadas-industrializadas' || hash === 'fachadas') {
        setCurrentView('productos-fachadas');
      } else if (hash === 'productos-cubiertas' || hash === 'cubiertas-mecanizadas' || hash === 'cubiertas-madera' || hash === 'cubiertas') {
        setCurrentView('productos-cubiertas');
      } else if (hash === 'proyectos' || hash === 'portfolio' || hash === 'obras') {
        setCurrentView('proyectos');
      } else if (hash.startsWith('proyecto-') || hash.startsWith('proyecto/')) {
        const pId = hash.replace(/^proyecto[-/]/, '');
        setSelectedProjectId(pId);
        setCurrentView('proyecto-detalle');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#16181B] font-sans flex flex-col selection:bg-[#78E639]/30 selection:text-[#16181B]">
      
      {/* 1. Header Sticky with Multi-Level Navigation */}
      <SiteHeader
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* 2. Main Content Area */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        )}

        {currentView === 'catalog' && (
          <CatalogView
            onNavigate={handleNavigate}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        )}

        {currentView === 'model-detail' && (
          <ModelDetailView
            modelId={selectedModelId}
            onNavigate={handleNavigate}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        )}

        {currentView === 'how-it-works' && (
          <HowItWorksView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'siem' && (
          <SiemModalitiesView
            onNavigate={handleNavigate}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        )}

        {currentView === 'passivhaus-tech' && (
          <PassivhausTechView
            onNavigate={handleNavigate}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        )}

        {currentView === 'blog' && (
          <BlogView
            onNavigate={handleNavigate}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <AboutMedgonView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'sobre-medgon' && (
          <SobreMedgonView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'nuestro-sistema' && (
          <NuestroSistemaView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'nuestro-proposito' && (
          <NuestroPropositoView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'oficina-tecnica' && (
          <OficinaTecnicaView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'habitat-medgon' && (
          <HabitatMedgonView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'rsc' && (
          <RscView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'id-innovacion' && (
          <IdInnovacionView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'inversion' && (
          <InversionView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'productos' && (
          <ProductosView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'productos-unifamiliares' && (
          <ViviendasUnifamiliaresView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'productos-terciario' && (
          <EdificiosTerciariosView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'productos-plurifamiliares' && (
          <EdificiosPlurifamiliaresView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'productos-derecho-vuelo' && (
          <DerechoVueloView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'productos-fachadas' && (
          <FachadasIndustrializadasView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'productos-cubiertas' && (
          <CubiertasMecanizadasView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'proyectos' && (
          <ProyectosView
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'proyecto-detalle' && (
          <ProyectoDetailView
            projectId={selectedProjectId}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* 3. Global Footer */}
      <SiteFooter
        onNavigate={handleNavigate}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* 4. WordPress Export Hub (Modal for WPCode Header/Footer and Canvas HTML copy) */}
      <WordPressExportHub
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        currentModelId={currentView === 'model-detail' ? selectedModelId : undefined}
      />

    </div>
  );
}
