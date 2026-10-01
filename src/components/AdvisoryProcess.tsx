import React, { useState } from 'react';
import { Compass, Search, FileCheck, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface AdvisoryProcessProps {
  onStartConsultation: () => void;
}

export const AdvisoryProcess: React.FC<AdvisoryProcessProps> = ({ onStartConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: 'Local Market Understanding',
      desc: 'Decoding real transactions versus asking rates. Knowing which builders actually deliver on time and which schemes have pending municipal easements.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Property Shortlisting',
      desc: 'Filtering out projects with inflated super built-up loading, compromised road approaches, or high-tension electricity lines nearby.',
      icon: Search,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Due Diligence & Title Audit',
      desc: 'Reviewing Khasra-Khatauni, SDO Section 172 diversion, TNCP stamps, and 30-year registry chains before token money is exchanged.',
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Site Visits & Negotiation',
      desc: 'Walking the ground together, checking groundwater and substation power, and negotiating fair commercial terms directly with decision-makers.',
      icon: MapPin,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const timelineSteps = [
    {
      num: '01',
      name: 'Understand',
      desc: 'We define your timeline, budget ceiling, preferred micro-corridors, and end-use vs investment horizon.',
      deliverable: 'Client Requirements Blueprint',
    },
    {
      num: '02',
      name: 'Shortlist',
      desc: 'We curate 2 to 4 verified properties matching your criteria, filtering out legal liabilities.',
      deliverable: 'Comparative Valuation Report',
    },
    {
      num: '03',
      name: 'Visit',
      desc: 'Guided physical inspection covering ventilation, access roads, sunlight, and surrounding zoning.',
      deliverable: 'On-Site Technical Assessment',
    },
    {
      num: '04',
      name: 'Evaluate',
      desc: 'Complete legal title examination, diversion check, and RERA MP status review by independent legal counsel.',
      deliverable: 'Title Due Diligence Dossier',
    },
    {
      num: '05',
      name: 'Decide',
      desc: 'Favorable price negotiation, registry draft structuring, stamp duty calculation, and safe closing.',
      deliverable: 'Clear Deed & Peace of Mind',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3] text-[#163A32]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section 1: Advice Without the Noise */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-[#B89B67] font-semibold">
            <span>Client First Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#102C26] mb-4">
            PROPERTY ADVICE WITHOUT THE NOISE.
          </h2>
          <p className="text-sm md:text-base text-[#163A32]/80 font-light leading-relaxed">
            Eliminating aggressive sales pitches. Our advisory is structured around forensic verification, legal clarity, and local market reality.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#163A32]/10 p-6 flex flex-col justify-between hover:border-[#B89B67] transition-all duration-300 shadow-xs group"
              >
                <div>
                  <div className="w-10 h-10 bg-[#F7F4EC] border border-[#B89B67]/30 flex items-center justify-center mb-6 text-[#102C26] group-hover:bg-[#163A32] group-hover:text-[#F7F4EC] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#102C26] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#163A32]/80 leading-relaxed font-light mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="aspect-[16/9] overflow-hidden bg-[#E8E4DA] border border-[#163A32]/10">
                  <ResilientImage
                    src={pillar.image}
                    alt={pillar.title}
                    fallbackTitle={pillar.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: Process Timeline */}
        <div className="bg-[#163A32] text-[#F7F4EC] p-8 md:p-14 border border-[#B89B67]/30 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#B89B67]/25 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold block mb-2">
                Structured Advisory Protocol
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                THE 5-STEP DECISION TIMELINE
              </h3>
            </div>
            <button
              onClick={onStartConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B89B67] hover:bg-[#D5BD8D] text-[#102C26] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Begin Your Search</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
            {timelineSteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                  activeStep === idx
                    ? 'bg-[#102C26] border-[#B89B67] text-white shadow-md'
                    : 'bg-[#1A4239]/60 border-[#B89B67]/20 text-[#DDE5DE]/70 hover:bg-[#1A4239]'
                }`}
              >
                <span className="text-xs font-bold text-[#B89B67] block mb-1">
                  {step.num}
                </span>
                <span className="text-sm font-semibold tracking-wide block">
                  {step.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-[#102C26] p-6 md:p-8 border border-[#B89B67]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89B67] mb-2">
                <span>Phase {timelineSteps[activeStep].num} · {timelineSteps[activeStep].name}</span>
              </div>
              <p className="text-base text-[#F7F4EC] font-light leading-relaxed mb-4">
                {timelineSteps[activeStep].desc}
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[#D4B886] font-medium bg-[#163A32] px-3 py-1.5 border border-[#B89B67]/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Deliverable: {timelineSteps[activeStep].deliverable}</span>
              </div>
            </div>

            <button
              onClick={() => setActiveStep((prev) => (prev < timelineSteps.length - 1 ? prev + 1 : 0))}
              className="text-xs font-semibold uppercase tracking-wider text-[#B89B67] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              {activeStep < timelineSteps.length - 1 ? 'Next Step →' : 'Restart Timeline ↺'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
