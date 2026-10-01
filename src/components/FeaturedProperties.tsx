import React, { useState, useMemo } from 'react';
import { Eye, MessageSquare, MapPin, Maximize2, ShieldCheck, Filter } from 'lucide-react';
import { Property, PropertyType } from '../types';
import { PROPERTIES } from '../data/properties';
import { ResilientImage } from './ResilientImage';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  onEnquireProperty: (property: Property) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onSelectProperty,
  onEnquireProperty,
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [maxBudget, setMaxBudget] = useState<number>(600); // In Lakhs
  const [searchQuery, setSearchQuery] = useState<string>('');

  const propertyTypes = ['All', 'Apartment', 'Villa', 'Penthouse', 'Plot', 'Commercial'];
  const locations = [
    'All',
    'Nipania',
    'Super Corridor',
    'Vijay Nagar',
    'Bicholi Mardana',
    'Scheme No. 140',
    'MR-10 Main Road',
    'Rau',
  ];

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      const matchesType = selectedType === 'All' || prop.type === selectedType;
      const matchesLocation =
        selectedLocation === 'All' || prop.location.toLowerCase().includes(selectedLocation.toLowerCase());
      const matchesBudget = prop.priceNumeric <= maxBudget;
      const matchesSearch =
        searchQuery === '' ||
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.configuration.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesType && matchesLocation && matchesBudget && matchesSearch;
    });
  }, [selectedType, selectedLocation, maxBudget, searchQuery]);

  return (
    <section id="properties" className="py-24 md:py-32 bg-[#FAF8F3] text-[#163A32]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#163A32]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-3">
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#102C26] tracking-tight">
              FIND A PROPERTY WORTH LOOKING AT.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#163A32]/80 max-w-md font-light leading-relaxed">
            Every listing undergoes our 10-point title, RERA compliance, and master plan check before being featured.
          </p>
        </div>

        {/* Property Discovery & Search Filter Bar: "WHAT ARE YOU LOOKING FOR?" */}
        <div className="bg-[#F7F4EC] p-6 md:p-8 border border-[#B89B67]/25 shadow-xs mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#102C26] font-semibold mb-6">
            <Filter className="w-4 h-4 text-[#B89B67]" />
            <span>WHAT ARE YOU LOOKING FOR? · DISCOVERY FILTERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            {/* Property Type Buttons */}
            <div className="md:col-span-4">
              <label className="block text-xs uppercase tracking-wider text-[#163A32]/70 font-medium mb-2">
                Property Category
              </label>
              <div className="flex flex-wrap gap-1.5">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1.5 text-xs font-medium transition-all duration-150 cursor-pointer whitespace-nowrap ${
                      selectedType === type
                        ? 'bg-[#163A32] text-[#F7F4EC]'
                        : 'bg-[#E8E4DA]/60 text-[#163A32] hover:bg-[#E8E4DA]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Micro-Location Dropdown */}
            <div className="md:col-span-3">
              <label className="block text-xs uppercase tracking-wider text-[#163A32]/70 font-medium mb-2">
                Indore Micro-Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#FAF8F3] border border-[#163A32]/20 px-3 py-2 text-xs text-[#163A32] font-medium focus:outline-none focus:border-[#B89B67]"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'All' ? 'All Indore Locations' : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range Slider */}
            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-[#163A32]/70 font-medium">
                  Max Budget
                </label>
                <span className="text-xs font-semibold text-[#102C26] tabular-nums">
                  Up to ₹{maxBudget >= 600 ? '6 Cr+' : `${(maxBudget / 100).toFixed(1)} Cr`}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                step="25"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-[#163A32] cursor-pointer"
              />
            </div>

            {/* Reset / Status */}
            <div className="md:col-span-2">
              <button
                onClick={() => {
                  setSelectedType('All');
                  setSelectedLocation('All');
                  setMaxBudget(600);
                  setSearchQuery('');
                }}
                className="w-full py-2 border border-[#163A32]/20 hover:border-[#163A32] text-xs font-semibold uppercase tracking-wider text-[#163A32] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 bg-[#F7F4EC] border border-[#163A32]/10 p-8">
            <p className="font-display text-xl text-[#102C26] mb-2">
              No properties matched your current filter criteria.
            </p>
            <p className="text-xs text-[#163A32]/70 mb-4">
              Try adjusting the budget ceiling or location filter, or contact Pramod directly for off-market options.
            </p>
            <button
              onClick={() => {
                setSelectedType('All');
                setSelectedLocation('All');
                setMaxBudget(600);
              }}
              className="px-6 py-2.5 bg-[#163A32] text-[#F7F4EC] text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              Show All Properties
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-[#FFFFFF] border border-[#163A32]/10 hover:border-[#B89B67] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4DA]">
                  <ResilientImage
                    src={property.image}
                    alt={property.title}
                    fallbackTitle={property.title}
                    fallbackSubtitle={property.location}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark subtle overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges: DEMO notice & Type */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-[#102C26]/90 text-[#F7F4EC] text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold border border-[#B89B67]/30">
                      {property.type}
                    </span>

                    {property.isDemo && (
                      <span className="bg-[#B89B67] text-[#102C26] text-[10px] uppercase tracking-widest px-2 py-0.5 font-bold">
                        DEMO
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay: Location */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#F7F4EC]">
                    <div className="flex items-center gap-1.5 text-xs text-[#DDE5DE]">
                      <MapPin className="w-3.5 h-3.5 text-[#B89B67]" />
                      <span className="truncate">{property.location}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#D4B886] tabular-nums">
                      {property.carpetArea}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Price & Configuration */}
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-display text-2xl font-bold text-[#102C26] tabular-nums">
                        {property.price}
                      </span>
                      <span className="text-xs text-[#163A32]/70 font-medium">
                        {property.possessionDate}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-[#102C26] mb-1.5 group-hover:text-[#B89B67] transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-xs text-[#163A32]/75 font-medium mb-4">
                      {property.configuration}
                    </p>

                    {/* Key Highlights */}
                    <ul className="space-y-1.5 mb-6 border-t border-[#163A32]/8 pt-4">
                      {property.highlights.slice(0, 2).map((hl, idx) => (
                        <li key={idx} className="text-xs text-[#163A32]/85 flex items-start gap-2">
                          <span className="text-[#B89B67] font-bold">·</span>
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#163A32]/8 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectProperty(property)}
                      className="px-3 py-2.5 border border-[#163A32]/25 hover:border-[#163A32] text-[#163A32] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Specs</span>
                    </button>

                    <button
                      onClick={() => onEnquireProperty(property)}
                      className="px-3 py-2.5 bg-[#163A32] hover:bg-[#102C26] text-[#F7F4EC] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#B89B67]" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Verified Notice */}
        <div className="mt-12 text-center text-xs text-[#163A32]/60">
          <span>* Demo properties are curated architectural references illustrating real Indore micro-market inventory standards. All listings subject to buyer title inspection.</span>
        </div>
      </div>
    </section>
  );
};
