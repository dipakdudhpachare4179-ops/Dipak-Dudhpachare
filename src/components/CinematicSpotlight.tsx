import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface CinematicSpotlightProps {
  onExploreProperty: () => void;
}

export const CinematicSpotlight: React.FC<CinematicSpotlightProps> = ({ onExploreProperty }) => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#102C26]">
      {/* Background Architectural Panorama */}
      <div className="absolute inset-0 z-0">
        <ResilientImage
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Luxury Architecture Indore Estate"
          fallbackTitle="Architectural Spotlight"
          fallbackSubtitle="Private residence in Indore prime estate corridor"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover scale-105 animate-[pulse_14s_ease-in-out_infinite]"
        />
        {/* Deep Green & Charcoal Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#102C26]/95 via-[#102C26]/75 to-[#102C26]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-24 text-center text-[#F7F4EC]">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#B89B67]/40 bg-[#163A32]/80 text-[#B89B67] text-xs font-semibold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Architectural Spotlight</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F7F4EC] leading-[1.1] mb-6 max-w-4xl mx-auto">
          A PROPERTY SHOULD FEEL RIGHT BEFORE IT BECOMES A DECISION.
        </h2>

        <p className="text-base sm:text-lg text-[#DDE5DE] max-w-2xl mx-auto font-light leading-relaxed mb-10">
          True luxury is not just Italian marble or gold fixtures. It is acoustic silence, daylight orientation, clean legal ownership, and lasting structural integrity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreProperty}
            className="w-full sm:w-auto px-8 py-4 bg-[#B89B67] hover:bg-[#D5BD8D] text-[#102C26] text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Explore This Property</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-14 pt-8 border-t border-[#B89B67]/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto text-xs text-[#DDE5DE]">
          <div className="flex items-start gap-2.5">
            <span className="text-[#B89B67] font-bold text-sm">01</span>
            <div>
              <p className="font-semibold text-white">Orientation & Light</p>
              <p className="text-[#DDE5DE]/70 text-[11px] mt-0.5">Designed for Indore’s solar paths and natural ventilation</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-[#B89B67] font-bold text-sm">02</span>
            <div>
              <p className="font-semibold text-white">Title Verification</p>
              <p className="text-[#DDE5DE]/70 text-[11px] mt-0.5">Zero mortgage lien and 100% individual diversion sanction</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-[#B89B67] font-bold text-sm">03</span>
            <div>
              <p className="font-semibold text-white">Construction Quality</p>
              <p className="text-[#DDE5DE]/70 text-[11px] mt-0.5">Grade 43/53 cement, double-glazing, and certified plumbing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
