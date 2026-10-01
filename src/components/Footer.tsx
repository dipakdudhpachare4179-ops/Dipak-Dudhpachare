import React from 'react';
import { Instagram, MessageSquare, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenConsultation }) => {
  return (
    <footer className="bg-[#102C26] text-[#F7F4EC] border-t border-[#B89B67]/25 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#B89B67]/20">
          {/* Brand & Wordmark Zone */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-bold tracking-wider text-white mb-2">
              REALITY WITH PRAMOD
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-4">
              Indore Real Estate | Property Advisory
            </p>
            <p className="text-sm text-[#DDE5DE]/80 leading-relaxed font-light max-w-sm mb-6">
              Independent, legal-first real estate guidance for buyers and investors navigating Indore’s luxury, residential, and commercial landscape.
            </p>

            <div className="flex items-center gap-4 text-xs">
              <a
                href="https://www.instagram.com/realitywithpramod"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#B89B67] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@realitywithpramod</span>
              </a>

              <span className="text-[#B89B67]/40">·</span>

              <a
                href="https://wa.me/919826000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#B89B67] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Advisory</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-4">
              Explore Advisory
            </p>
            <ul className="space-y-2.5 text-xs text-[#DDE5DE]/85">
              <li>
                <button
                  onClick={() => onNavigateSection('properties')}
                  className="hover:text-[#B89B67] transition-colors cursor-pointer"
                >
                  Curated Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('locations')}
                  className="hover:text-[#B89B67] transition-colors cursor-pointer"
                >
                  Indore Location Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('knowledge')}
                  className="hover:text-[#B89B67] transition-colors cursor-pointer"
                >
                  Legal Knowledge Hub & Checklists
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('videos')}
                  className="hover:text-[#B89B67] transition-colors cursor-pointer"
                >
                  Real Estate Reels & Video Analyses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-[#B89B67] transition-colors cursor-pointer"
                >
                  About Pramod Khichi
                </button>
              </li>
            </ul>
          </div>

          {/* Micro-Markets Focus */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-4">
              Indore Micro-Markets Covered
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-[#DDE5DE]/80">
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">Vijay Nagar</span>
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">Super Corridor</span>
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">Nipania</span>
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">Bicholi Mardana</span>
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">Scheme No. 140</span>
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">MR-10 Transit</span>
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">Rau Bypass</span>
              <span className="bg-[#163A32] px-2.5 py-1 border border-[#B89B67]/20">Ujjain Road</span>
            </div>

            <div className="mt-6 pt-6 border-t border-[#B89B67]/20">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 bg-[#163A32] hover:bg-[#1A4239] text-[#B89B67] border border-[#B89B67]/40 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Document Verification</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & RERA Statement */}
        <div className="pt-8 text-xs text-[#DDE5DE]/60 space-y-3 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> All property information, architectural renders, specifications, floor plans, pricing, and availability displayed on this website are for general informational and reference purposes only and are subject to change without prior notice. Prospective buyers and investors are strictly advised to inspect original title deeds, municipal sanctions, Town & Country Planning (TNCP) approvals, and RERA Madhya Pradesh portal registrations before committing to any financial transaction or signing agreements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#B89B67]/10 text-[11px]">
            <p>© {new Date().getFullYear()} Reality With Pramod · Pramod Khichi. All Rights Reserved.</p>
            <p>Designed with Light Luxury Standards · Ivory × Champagne × Deep Green</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
