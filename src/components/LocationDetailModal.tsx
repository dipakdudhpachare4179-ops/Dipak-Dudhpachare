import React from 'react';
import { X, MapPin, CheckCircle2, Clock, Compass, ShieldAlert, ArrowRight } from 'lucide-react';
import { LocationGuide } from '../types';
import { ResilientImage } from './ResilientImage';

interface LocationDetailModalProps {
  location: LocationGuide | null;
  onClose: () => void;
  onConsult: (locationName: string) => void;
}

export const LocationDetailModal: React.FC<LocationDetailModalProps> = ({
  location,
  onClose,
  onConsult,
}) => {
  if (!location) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-[#FAF8F3] text-[#163A32] max-w-4xl w-full border border-[#B89B67]/40 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col my-auto">
        {/* Top Bar */}
        <div className="bg-[#102C26] text-[#F7F4EC] px-6 py-4 flex items-center justify-between border-b border-[#B89B67]/30 shrink-0">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#B89B67]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B89B67]">
              Micro-Market Dossier
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-white font-medium">{location.name}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-1 hover:text-[#B89B67] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Header Banner */}
          <div className="relative aspect-[16/8] overflow-hidden bg-[#E8E4DA] border border-[#163A32]/10">
            <ResilientImage
              src={location.image}
              alt={location.name}
              fallbackTitle={location.name}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102C26]/95 via-[#102C26]/40 to-transparent flex flex-col justify-end p-6 text-[#F7F4EC]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B89B67]">
                Indore Urban Zone
              </span>
              <h2 className="font-display text-3xl font-bold text-white">
                {location.name}
              </h2>
              <p className="text-xs text-[#DDE5DE]/85 mt-1 font-light">
                {location.tagline}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-display text-lg font-bold text-[#102C26] mb-2">
              Strategic Context & Location Dynamics
            </h3>
            <p className="text-sm text-[#163A32]/85 leading-relaxed font-light">
              {location.summary}
            </p>
          </div>

          {/* Infrastructure Breakdown: Existing vs Under Development */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FFFFFF] p-6 border border-[#163A32]/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163A32] mb-3 border-b border-[#163A32]/10 pb-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A32]" />
                <span>Existing Infrastructure (Operational)</span>
              </div>
              <ul className="space-y-2 text-xs text-[#163A32]/85">
                {location.existingInfrastructure.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B89B67] font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B89B67] mb-3 border-b border-[#163A32]/10 pb-2">
                <Clock className="w-4 h-4 text-[#B89B67]" />
                <span>Under Development / Proposed</span>
              </div>
              <ul className="space-y-2 text-xs text-[#163A32]/85">
                {location.underDevelopment.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B89B67] font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing & Dominant Property Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-[#FAF8F3] border border-[#163A32]/10 p-4">
              <span className="font-semibold uppercase tracking-wider text-[#163A32]/70 block mb-1">
                Typical Valuation Spectrum
              </span>
              <p className="font-display text-lg font-bold text-[#102C26]">
                {location.priceRange}
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#163A32]/10 p-4">
              <span className="font-semibold uppercase tracking-wider text-[#163A32]/70 block mb-1">
                Best Suited For
              </span>
              <p className="text-xs text-[#163A32]/85 font-medium">
                {location.idealFor}
              </p>
            </div>
          </div>

          {/* Pramod's Ground Take */}
          <div className="bg-[#163A32] text-[#F7F4EC] p-6 border border-[#B89B67]/30">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89B67] mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Pramod’s Advisory Take & Red Flags</span>
            </div>
            <p className="text-xs sm:text-sm text-[#DDE5DE] leading-relaxed italic font-serif">
              “{location.advisorTake}”
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FFFFFF] px-6 py-4 border-t border-[#163A32]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-[#163A32]/60">
            Evaluating a property in {location.name}? We can review colony sanction papers.
          </span>

          <button
            onClick={() => {
              onClose();
              onConsult(location.name);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#163A32] hover:bg-[#102C26] text-[#F7F4EC] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Consult on {location.name}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B89B67]" />
          </button>
        </div>
      </div>
    </div>
  );
};
