import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface CinematicStoryScrollProps {
  onTalkToPramod: () => void;
}

interface StoryFrame {
  id: number;
  kicker: string;
  headline: string;
  subtext: string;
  image: string;
  caption: string;
}

const STORY_FRAMES: StoryFrame[] = [
  {
    id: 1,
    kicker: 'Phase 01 · City Transformation',
    headline: 'INDORE IS CHANGING.',
    subtext:
      'From Madhya Pradesh’s traditional commercial trade center to a high-speed metro-connected metropolis ranking #1 in Indian urban cleanliness for 7 consecutive years.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1800&q=85',
    caption: 'Modern high-rises and expanding commercial corridors across Indore.',
  },
  {
    id: 2,
    kicker: 'Phase 02 · Infrastructure Velocity',
    headline: 'LOCATIONS CHANGE.',
    subtext:
      'The 75-meter Super Corridor, BRTS extensions, MR-10 flyovers, and the upcoming Yellow Line Metro are continuously shifting where daily life and commerce congregate.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
    caption: 'Arterial transit lines linking airport, SEZ tech hubs, and residential schemes.',
  },
  {
    id: 3,
    kicker: 'Phase 03 · Market Dynamics',
    headline: 'OPPORTUNITIES MOVE.',
    subtext:
      'What was farmland 5 years ago is today’s gated villa township. But what worked for your relatives in 2015 will not necessarily protect your capital in 2026.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    caption: 'Contemporary architectural developments emerging along Bypass and Nipania.',
  },
  {
    id: 4,
    kicker: 'Phase 04 · Clarity & Legal Due Diligence',
    headline: 'BUT THE RIGHT DECISION STARTS WITH INFORMATION.',
    subtext:
      'Before trusting glossy brochures, you must inspect Khasra B-1 records, SDO land diversion orders, RERA quarterly escrow reports, and Town & Country Planning (TNCP) blueprints.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    caption: 'Uncompromising interior living standards backed by ironclad legal ownership.',
  },
  {
    id: 5,
    kicker: 'Phase 05 · Your Personal Advisory',
    headline: 'LET’S FIND YOURS.',
    subtext:
      'Whether you are searching for a peaceful family home in Scheme 140, a bespoke villa in Nipania, or a high-liquidity commercial floor on MR-10, Pramod Khichi is here to guide every step.',
    image: '/144d3797-8496-461e-8c4d-0d0dc0b0ffc3.jpg',
    caption: 'Pramod Khichi · Grounded advisory for high-conviction decisions.',
  },
];

export const CinematicStoryScroll: React.FC<CinematicStoryScrollProps> = ({ onTalkToPramod }) => {
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  const currentFrame = STORY_FRAMES[activeFrameIndex];

  return (
    <section className="relative py-28 bg-[#102C26] text-[#F7F4EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-[#B89B67] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Indore Real Estate Journey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F7F4EC] mb-4">
            THE EVOLUTION OF AN INVESTMENT
          </h2>
          <p className="text-sm md:text-base text-[#DDE5DE]/80 font-light">
            Understanding why location dynamics dictate your wealth and peace of mind.
          </p>
        </div>

        {/* Cinematic Split Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#163A32]/90 border border-[#B89B67]/30 p-6 md:p-10 shadow-2xl">
          {/* Visual Canvas (Left Column) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1D19] border border-[#B89B67]/20">
              <ResilientImage
                src={currentFrame.image}
                fallbackSrc={currentFrame.id === 5 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=85" : undefined}
                alt={currentFrame.headline}
                fallbackTitle={currentFrame.headline}
                fallbackSubtitle={currentFrame.caption}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#DDE5DE]/90">
                <span className="truncate max-w-[80%]">{currentFrame.caption}</span>
                <span className="text-[#B89B67] font-bold tabular-nums">0{currentFrame.id} / 05</span>
              </div>
            </div>
          </div>

          {/* Editorial Story Text & Phase Controller (Right Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold block mb-3">
                {currentFrame.kicker}
              </span>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                {currentFrame.headline}
              </h3>

              <p className="text-sm text-[#DDE5DE] leading-relaxed font-light mb-8">
                {currentFrame.subtext}
              </p>
            </div>

            {/* Stepper Timeline Nav */}
            <div className="border-t border-[#B89B67]/20 pt-6">
              <div className="grid grid-cols-5 gap-2 mb-6">
                {STORY_FRAMES.map((frame, idx) => (
                  <button
                    key={frame.id}
                    onClick={() => setActiveFrameIndex(idx)}
                    className={`h-1.5 transition-all duration-300 cursor-pointer ${
                      activeFrameIndex === idx ? 'bg-[#B89B67]' : 'bg-[#DDE5DE]/20 hover:bg-[#DDE5DE]/40'
                    }`}
                    title={frame.headline}
                    aria-label={`Jump to stage ${frame.id}: ${frame.headline}`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveFrameIndex((prev) => (prev > 0 ? prev - 1 : STORY_FRAMES.length - 1))}
                  className="text-xs font-semibold uppercase tracking-wider text-[#DDE5DE] hover:text-[#B89B67] transition-colors cursor-pointer py-1"
                >
                  ← Previous
                </button>

                {activeFrameIndex === 4 ? (
                  <button
                    onClick={onTalkToPramod}
                    className="px-5 py-2.5 bg-[#B89B67] hover:bg-[#D5BD8D] text-[#102C26] text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Talk to Pramod</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveFrameIndex((prev) => (prev < STORY_FRAMES.length - 1 ? prev + 1 : 0))}
                    className="text-xs font-semibold uppercase tracking-wider text-[#B89B67] hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1"
                  >
                    <span>Next Stage</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
