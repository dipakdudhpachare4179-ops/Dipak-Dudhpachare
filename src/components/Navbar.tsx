import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Properties', id: 'properties' },
    { label: 'Indore Insights', id: 'locations' },
    { label: 'Knowledge Hub', id: 'knowledge' },
    { label: 'Videos', id: 'videos' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EC]/95 backdrop-blur-md shadow-xs border-b border-[#B89B67]/20 py-3.5'
            : 'bg-gradient-to-b from-[#102C26]/80 via-[#102C26]/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className={`text-left font-display text-lg md:text-xl font-semibold tracking-wider transition-colors duration-200 ${
              isScrolled ? 'text-[#163A32]' : 'text-[#F7F4EC]'
            }`}
          >
            REALITY WITH PRAMOD
          </button>

          {/* Zone 2: 4-6 clean text navigation links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide uppercase">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-200 relative group py-1 ${
                  isScrolled
                    ? 'text-[#163A32]/80 hover:text-[#163A32]'
                    : 'text-[#F7F4EC]/85 hover:text-[#F7F4EC]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-[#B89B67]' : 'bg-[#D4B886]'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isScrolled
                  ? 'bg-[#163A32] text-[#F7F4EC] hover:bg-[#102C26] shadow-sm'
                  : 'bg-[#B89B67] text-[#102C26] hover:bg-[#D5BD8D]'
              }`}
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`lg:hidden p-2 transition-colors cursor-pointer ${
                isScrolled ? 'text-[#163A32]' : 'text-[#F7F4EC]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#102C26]/98 flex flex-col justify-between pt-24 pb-10 px-8 text-[#F7F4EC] lg:hidden animate-fade-in">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-[#B89B67] font-semibold border-b border-[#B89B67]/20 pb-2">
              Navigation
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left font-display text-2xl text-[#F7F4EC] hover:text-[#B89B67] transition-colors py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-[#B89B67]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 bg-[#B89B67] text-[#102C26] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-[#DDE5DE]/70 text-center">
              Indore Real Estate Advisory · Instagram @realitywithpramod
            </p>
          </div>
        </div>
      )}
    </>
  );
};
