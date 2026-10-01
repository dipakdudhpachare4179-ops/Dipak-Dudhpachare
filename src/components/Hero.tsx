import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Award, Users } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onExploreProperties: () => void;
  onTalkToPramod: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProperties, onTalkToPramod }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#102C26]">
      {/* Background Image Container with Cinematic Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <ResilientImage
          src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2000&q=85"
          alt="Indore Skyline and Modern Architectural Developments"
          fallbackTitle="Indore Urban Landscape"
          fallbackSubtitle="Cinematic skyline of Madhya Pradesh’s commercial capital"
          containerClassName="w-full h-full"
          className="scale-105 animate-[pulse_10s_ease-in-out_infinite] object-cover"
        />
        {/* Cinematic Scrim & Gradient Overlays: Deep Forest Green to Warm Ivory base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102C26] via-[#102C26]/75 to-[#102C26]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20 text-center text-[#F7F4EC] flex flex-col items-center">
        {/* Subtle Kicker */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#B89B67]/30 bg-[#163A32]/60 backdrop-blur-xs text-[#B89B67] text-xs font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89B67]" />
          <span>INDORE REAL ESTATE</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F7F4EC] leading-[1.08] max-w-4xl mb-6">
          FIND THE RIGHT PROPERTY.{' '}
          <span className="italic font-normal text-[#D4B886] block sm:inline">
            MAKE THE RIGHT DECISION.
          </span>
        </h1>

        {/* Supporting Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-[#DDE5DE] max-w-2xl font-light leading-relaxed mb-10">
          Real estate guidance for buyers and investors who want clarity before they commit.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onExploreProperties}
            className="w-full sm:w-auto px-8 py-4 bg-[#B89B67] hover:bg-[#D5BD8D] text-[#102C26] font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#B89B67]/20"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onTalkToPramod}
            className="w-full sm:w-auto px-8 py-4 border border-[#F7F4EC]/40 hover:border-[#F7F4EC] text-[#F7F4EC] font-medium text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs hover:bg-[#F7F4EC]/10"
          >
            <MessageSquare className="w-4 h-4 text-[#B89B67]" />
            <span>Talk to Pramod</span>
          </button>
        </div>

        {/* Trust Line using verified credentials */}
        <div className="pt-8 border-t border-[#B89B67]/25 w-full max-w-3xl flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-medium text-[#DDE5DE]/90 tracking-wide uppercase">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#B89B67]" />
            <span>7+ Years Experience</span>
          </div>
          <span className="hidden sm:inline text-[#B89B67]/60">·</span>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#B89B67]" />
            <span>500+ Buyers Served</span>
          </div>
          <span className="hidden sm:inline text-[#B89B67]/60">·</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B89B67]" />
            <span>RERA Approved Advisory</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient Transition to Ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F4EC] to-transparent pointer-events-none" />
    </section>
  );
};
