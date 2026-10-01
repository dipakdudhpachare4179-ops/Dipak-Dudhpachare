import React from 'react';
import { ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface EditorialIntroProps {
  onTalkToPramod: () => void;
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({ onTalkToPramod }) => {
  return (
    <section className="relative py-24 md:py-32 bg-[#F7F4EC] text-[#163A32] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Advisor Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Champagne decorative frame line */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#B89B67]/40 pointer-events-none hidden sm:block" />

              {/* Main Portrait Box */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E4DA] shadow-xl">
                <ResilientImage
                  src="/144d3797-8496-461e-8c4d-0d0dc0b0ffc3.jpg"
                  fallbackSrc="/313b9f2a-02e1-42d8-abbb-fd78005e17c2.jpg"
                  alt="Promod — Real Estate Consultant"
                  fallbackTitle="Promod"
                  fallbackSubtitle="Real Estate Consultant · Reality With Pramod"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-top filter contrast-[105%]"
                />

                {/* Subtle bottom gradient & credential caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102C26]/90 via-[#102C26]/20 to-transparent flex flex-col justify-end p-6 text-[#F7F4EC]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#B89B67]">
                    Pramod Khichi
                  </p>
                  <p className="font-display text-xl text-white font-medium">
                    Indore Real Estate Advisor
                  </p>
                  <p className="text-xs text-[#DDE5DE]/80 mt-1">
                    Instagram @realitywithpramod · Trusted by 500+ Families
                  </p>
                </div>
              </div>

              {/* Verified Ribbon */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#163A32] text-[#F7F4EC] p-4 border border-[#B89B67]/30 shadow-lg max-w-[220px]">
                <div className="flex items-center gap-2 text-[#B89B67] text-xs font-semibold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>On-Ground Due Diligence</span>
                </div>
                <p className="text-[11px] text-[#DDE5DE] leading-snug">
                  Zero commission bias. 100% legal title and RERA verification before every deal.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-4">
              <Compass className="w-4 h-4" />
              <span>Advisory Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#102C26] leading-[1.15] mb-6">
              REAL ESTATE ISN’T JUST ABOUT PROPERTY.
            </h2>

            <p className="font-display text-xl sm:text-2xl text-[#163A32] italic font-normal leading-relaxed mb-6 border-l-2 border-[#B89B67] pl-5">
              “It’s about understanding the location, the opportunity, the paperwork, the numbers and ultimately making a decision you can feel confident about.”
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#163A32]/85 leading-relaxed font-normal mb-8">
              <p>
                In Indore’s booming property market, marketing brochures always promise high returns, but rarely explain land diversion status, approach road reservations, or RERA escrow balances.
              </p>
              <p>
                My approach is simple: I represent your interests, not the builder’s quota. From title deed examination to ground infrastructure inspections in Vijay Nagar, Super Corridor, and Nipania, my role is to give you unvarnished truth before you sign.
              </p>
            </div>

            {/* Credential Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5 text-xs text-[#163A32] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B89B67] shrink-0 mt-0.5" />
                <span>30-Year Chain of Title examination</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#163A32] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B89B67] shrink-0 mt-0.5" />
                <span>Indore Master Plan 2021/2041 cross-check</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#163A32] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B89B67] shrink-0 mt-0.5" />
                <span>True RERA carpet area price analysis</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#163A32] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B89B67] shrink-0 mt-0.5" />
                <span>No pressure, high-conviction decision making</span>
              </div>
            </div>

            <div>
              <button
                onClick={onTalkToPramod}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#163A32] hover:bg-[#102C26] text-[#F7F4EC] text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Speak Directly with Pramod</span>
                <span className="text-[#B89B67]">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Premium Statistics Strip */}
        <div className="mt-20 pt-12 border-t border-[#163A32]/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <span className="font-display text-4xl sm:text-5xl font-bold text-[#102C26] block mb-1">
              7+
            </span>
            <span className="text-xs uppercase tracking-wider text-[#163A32]/70 font-medium">
              Years Advisory Experience
            </span>
          </div>
          <div className="p-4 border-l border-[#163A32]/10">
            <span className="font-display text-4xl sm:text-5xl font-bold text-[#102C26] block mb-1">
              500+
            </span>
            <span className="text-xs uppercase tracking-wider text-[#163A32]/70 font-medium">
              Buyers & Families Served
            </span>
          </div>
          <div className="p-4 border-l-0 md:border-l border-[#163A32]/10">
            <span className="font-display text-4xl sm:text-5xl font-bold text-[#102C26] block mb-1">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider text-[#163A32]/70 font-medium">
              Indore Local Market Focus
            </span>
          </div>
          <div className="p-4 border-l border-[#163A32]/10">
            <span className="font-display text-4xl sm:text-5xl font-bold text-[#102C26] block mb-1">
              RERA
            </span>
            <span className="text-xs uppercase tracking-wider text-[#163A32]/70 font-medium">
              Approved Advisory Protocol
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
