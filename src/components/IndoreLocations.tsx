import React, { useState } from 'react';
import { MapPin, Compass, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { LocationGuide } from '../types';
import { LOCATIONS } from '../data/locations';
import { ResilientImage } from './ResilientImage';

interface IndoreLocationsProps {
  onSelectLocation: (location: LocationGuide) => void;
}

export const IndoreLocations: React.FC<IndoreLocationsProps> = ({ onSelectLocation }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { label: 'All Corridors', value: 'all' },
    { label: 'Established Core', value: 'core' },
    { label: 'Growth & Transit Corridors', value: 'growth' },
    { label: 'Green & Villa Enclaves', value: 'lifestyle' },
  ];

  const filteredLocations = LOCATIONS.filter((loc) => {
    if (activeTab === 'core') return ['vijay-nagar', 'scheme-140'].includes(loc.id);
    if (activeTab === 'growth') return ['super-corridor', 'mr-10', 'rau-pithampur', 'ujjain-road'].includes(loc.id);
    if (activeTab === 'lifestyle') return ['nipania', 'bicholi-mardana'].includes(loc.id);
    return true;
  });

  return (
    <section id="locations" className="py-24 md:py-32 bg-[#F7F4EC] text-[#163A32]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#163A32]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-3">
              <Compass className="w-4 h-4" />
              <span>Micro-Market Intelligence</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#102C26] tracking-tight">
              UNDERSTAND INDORE BEFORE YOU INVEST.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#163A32]/80 max-w-md font-light leading-relaxed">
            Every neighborhood in Indore has distinct civic infrastructure, circle rates, and legal profiles. We track the facts, not broker rumors.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === cat.value
                  ? 'bg-[#163A32] text-[#F7F4EC] shadow-sm'
                  : 'bg-[#FAF8F3] text-[#163A32]/80 hover:bg-[#E8E4DA] border border-[#163A32]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="group bg-[#FFFFFF] border border-[#163A32]/10 hover:border-[#B89B67] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md cursor-pointer"
              onClick={() => onSelectLocation(loc)}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#E8E4DA]">
                <ResilientImage
                  src={loc.image}
                  alt={loc.name}
                  fallbackTitle={loc.name}
                  fallbackSubtitle={loc.tagline}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102C26]/90 via-[#102C26]/30 to-transparent" />

                {/* Tag Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#102C26]/85 text-[#F7F4EC] text-[10px] font-semibold uppercase tracking-wider px-2 py-1 border border-[#B89B67]/30">
                    Indore Belt
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-[#F7F4EC]">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#B89B67] transition-colors flex items-center justify-between">
                    <span>{loc.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </div>

              {/* Text Summary */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#B89B67] uppercase tracking-wider mb-2">
                    {loc.tagline}
                  </p>
                  <p className="text-xs text-[#163A32]/80 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {loc.summary}
                  </p>

                  <div className="space-y-2 border-t border-[#163A32]/10 pt-3 text-[11px]">
                    <div className="flex items-center gap-1.5 text-[#163A32]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#163A32] shrink-0" />
                      <span className="truncate">
                        <strong>Existing:</strong> {loc.existingInfrastructure[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#B89B67]">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">
                        <strong>Under Dev:</strong> {loc.underDevelopment[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#163A32]/8 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#163A32]/70 uppercase tracking-wider">
                    Detailed Dossier
                  </span>
                  <span className="text-xs font-semibold text-[#102C26] group-hover:text-[#B89B67] transition-colors">
                    Explore Analysis →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
