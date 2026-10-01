import React from 'react';
import { Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3] text-[#163A32]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-[#B89B67] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Advisory Experiences</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#102C26] mb-4">
            CLIENT EXPERIENCES.
          </h2>
          <p className="text-sm md:text-base text-[#163A32]/80 font-light leading-relaxed">
            Real buyers, families, and investors sharing their decision-making journey with Pramod Khichi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFFFF] border border-[#163A32]/10 p-8 flex flex-col justify-between shadow-xs hover:border-[#B89B67] transition-colors relative"
            >
              <Quote className="w-8 h-8 text-[#B89B67]/30 mb-4" />

              <p className="font-display text-base sm:text-lg text-[#163A32] italic leading-relaxed mb-6 font-normal">
                “{t.quote}”
              </p>

              <div className="pt-6 border-t border-[#163A32]/8 flex items-end justify-between">
                <div>
                  <h4 className="font-display text-base font-bold text-[#102C26]">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-[#163A32]/70 font-medium">
                    {t.clientRole} · {t.location}
                  </p>
                  <p className="text-xs text-[#B89B67] font-semibold mt-1">
                    {t.propertyPurchased}
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#163A32]/50 tracking-wider">
                  {t.verifiedYear}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
