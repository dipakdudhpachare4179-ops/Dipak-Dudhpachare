import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialIntro } from './components/EditorialIntro';
import { FeaturedProperties } from './components/FeaturedProperties';
import { CinematicSpotlight } from './components/CinematicSpotlight';
import { CinematicStoryScroll } from './components/CinematicStoryScroll';
import { IndoreLocations } from './components/IndoreLocations';
import { AdvisoryProcess } from './components/AdvisoryProcess';
import { KnowledgeHub } from './components/KnowledgeHub';
import { VideoSection } from './components/VideoSection';
import { AboutPramod } from './components/AboutPramod';
import { Testimonials } from './components/Testimonials';
import { ConsultationSection } from './components/ConsultationSection';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { LocationDetailModal } from './components/LocationDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Property, LocationGuide, Article } from './types';
import { PROPERTIES } from './data/properties';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationGuide | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [consultationProperty, setConsultationProperty] = useState<Property | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireProperty = (prop: Property) => {
    setSelectedProperty(null);
    setConsultationProperty(prop);
    scrollToSection('contact');
  };

  const handleConsultOnLocation = (locationName: string) => {
    setSelectedLocation(null);
    scrollToSection('contact');
  };

  const handleOpenConsultation = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#163A32] selection:bg-[#B89B67]/30 selection:text-[#102C26]">
      {/* 1. Header Navigation Bar */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onNavigateSection={scrollToSection}
      />

      {/* 2. Full-Screen Cinematic Hero */}
      <Hero
        onExploreProperties={() => scrollToSection('properties')}
        onTalkToPramod={() => scrollToSection('contact')}
      />

      {/* 3. Seamless Editorial Brand Intro & Credentials */}
      <EditorialIntro onTalkToPramod={() => scrollToSection('contact')} />

      {/* 4. Curated Featured Properties with Filter Architecture */}
      <FeaturedProperties
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onEnquireProperty={handleEnquireProperty}
      />

      {/* 5. Full-Width Atmospheric Spotlight */}
      <CinematicSpotlight
        onExploreProperty={() => {
          if (PROPERTIES[0]) setSelectedProperty(PROPERTIES[0]);
        }}
      />

      {/* 6. Signature 5-Phase Cinematic Story Scroll ("Indore is Changing") */}
      <CinematicStoryScroll onTalkToPramod={() => scrollToSection('contact')} />

      {/* 7. Comprehensive Indore Micro-Market Guide ("Understand Indore Before You Invest") */}
      <IndoreLocations
        onSelectLocation={(loc) => setSelectedLocation(loc)}
      />

      {/* 8. "Property Advice Without The Noise" & 5-Step Process Timeline */}
      <AdvisoryProcess onStartConsultation={() => scrollToSection('contact')} />

      {/* 9. Real Estate Knowledge Hub ("Before You Buy, Know What You're Signing") */}
      <KnowledgeHub
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 10. Instagram Video Reels Section ("Real Estate Explained Simply") */}
      <VideoSection />

      {/* 11. Authentic About Pramod Biography */}
      <AboutPramod onBookConsultation={() => scrollToSection('contact')} />

      {/* 12. Verified Client Testimonials */}
      <Testimonials />

      {/* 13. Deep Green Consultation & Lead Capture Section */}
      <ConsultationSection initialProperty={consultationProperty} />

      {/* 14. Subtle Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* 15. Deep Green Luxury Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Interactive Modals */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEnquire={handleEnquireProperty}
      />

      <LocationDetailModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
        onConsult={handleConsultOnLocation}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onAskQuestion={() => {
          setSelectedArticle(null);
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
