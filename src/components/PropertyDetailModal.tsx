import React, { useState } from 'react';
import { X, ShieldCheck, MapPin, CheckCircle2, Calendar, Phone, MessageSquare } from 'lucide-react';
import { Property } from '../types';
import { ResilientImage } from './ResilientImage';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onEnquire,
}) => {
  if (!property) return null;

  const [activeImage, setActiveImage] = useState(property.image);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-[#FAF8F3] text-[#163A32] max-w-4xl w-full border border-[#B89B67]/40 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col my-auto">
        {/* Top Bar */}
        <div className="bg-[#102C26] text-[#F7F4EC] px-6 py-4 flex items-center justify-between border-b border-[#B89B67]/30 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B89B67]">
              Property Dossier
            </span>
            <span className="text-white/40">·</span>
            <span className="text-xs text-[#DDE5DE]">{property.location}</span>
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
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Visual & Gallery Strip */}
          <div>
            <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E4DA] border border-[#163A32]/10 mb-3">
              <ResilientImage
                src={activeImage}
                alt={property.title}
                fallbackTitle={property.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              {property.isDemo && (
                <div className="absolute top-3 left-3 bg-[#B89B67] text-[#102C26] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                  DEMO PROPERTY SPECIFICATION
                </div>
              )}
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-2">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-14 overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img ? 'border-[#B89B67]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Title, Pricing & Configuration */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#163A32]/10 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B89B67] block mb-1">
                {property.configuration}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#102C26]">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-[#163A32]/70 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#B89B67]" />
                <span>{property.area}</span>
              </div>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-[#163A32]/60 uppercase tracking-wider block">
                Guide Price
              </span>
              <span className="font-display text-3xl font-bold text-[#102C26] tabular-nums block">
                {property.price}
              </span>
              <span className="text-xs text-[#B89B67] font-semibold">
                Carpet Area: {property.carpetArea}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-display text-lg font-bold text-[#102C26] mb-2">
              Architectural & Advisory Overview
            </h4>
            <p className="text-sm text-[#163A32]/85 leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Verified Due Diligence & RERA Status */}
          <div className="bg-[#163A32] text-[#F7F4EC] p-5 border border-[#B89B67]/30">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89B67] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Verification & RERA Status</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#DDE5DE]">
              <div>
                <span className="text-[#B89B67] font-semibold">RERA Registration:</span>{' '}
                {property.reraNumber || 'Verified MP RERA Registration'}
              </div>
              <div>
                <span className="text-[#B89B67] font-semibold">Possession Timeline:</span>{' '}
                {property.possessionDate}
              </div>
            </div>
          </div>

          {/* Amenities & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-base font-bold text-[#102C26] mb-3">
                Key Property Highlights
              </h4>
              <ul className="space-y-2">
                {property.highlights.map((hl, idx) => (
                  <li key={idx} className="text-xs text-[#163A32]/85 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B67] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-bold text-[#102C26] mb-3">
                Location & Transit Connectivity
              </h4>
              <ul className="space-y-2">
                {property.connectivity.map((conn, idx) => (
                  <li key={idx} className="text-xs text-[#163A32]/85 flex items-start justify-between border-b border-[#163A32]/8 pb-1">
                    <span className="font-medium">{conn.landmark}</span>
                    <span className="text-[#B89B67] font-semibold">{conn.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#FFFFFF] px-6 py-4 border-t border-[#163A32]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-[11px] text-[#163A32]/60">
            Pramod Khichi provides accompanied site visits and legal document vetting.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onEnquire(property);
              }}
              className="flex-1 sm:flex-none px-6 py-3 bg-[#163A32] hover:bg-[#102C26] text-[#F7F4EC] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B89B67]" />
              <span>Schedule Inspection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
