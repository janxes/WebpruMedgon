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
import { ContactView } from './components/ContactView';
import { WordPressExportHub } from './components/WordPressExportHub';

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
  | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedModelId, setSelectedModelId] = useState<string>('mg-100');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // Scroll to top upon navigation
  const handleNavigate = (view: string, modelId?: string) => {
    if (modelId) {
      setSelectedModelId(modelId);
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
