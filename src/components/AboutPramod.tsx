import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, ShieldCheck, CheckCircle2, Instagram, Edit3, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { ResilientImage } from './ResilientImage';

interface AboutPramodProps {
  onBookConsultation: () => void;
}

export const AboutPramod: React.FC<AboutPramodProps> = ({ onBookConsultation }) => {
  // Primary attached official profile photo
  const profilePhoto = "/144d3797-8496-461e-8c4d-0d0dc0b0ffc3.jpg";
  const fallbackProfilePhoto = "/313b9f2a-02e1-42d8-abbb-fd78005e17c2.jpg";

  // Editable description state with localStorage persistence
  const [description, setDescription] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('promod_profile_desc');
      return saved || "Helping clients discover the right property with personalised real-estate guidance.";
    } catch {
      return "Helping clients discover the right property with personalised real-estate guidance.";
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempDesc, setTempDesc] = useState(description);

  const handleSaveDescription = () => {
    setDescription(tempDesc);
    try {
      localStorage.setItem('promod_profile_desc', tempDesc);
    } catch {
      // fallback
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setTempDesc(description);
    setIsEditing(false);
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F4EC] text-[#163A32] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Luxury Profile Card with Cinematic Scroll & Hover Animations */}
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
              className="group relative bg-[#FFFFFF] border border-[#B89B67]/35 p-6 sm:p-8 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-500 max-w-md mx-auto lg:max-w-none"
            >
              {/* Subtle Champagne Top Accent Hairline */}
              <motion.div
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89B67] via-[#D5BD8D] to-[#B89B67] origin-left"
              />

              {/* 1 & 2: Profile Photo Container with clip-path reveal and 1.05 to 1.0 scale */}
              <motion.div
                variants={{
                  hidden: { clipPath: 'inset(100% 0 0 0)' },
                  visible: {
                    clipPath: 'inset(0% 0 0 0)',
                    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="relative aspect-square sm:aspect-[4/5] overflow-hidden rounded-sm bg-[#FAF8F3] border border-[#163A32]/10 mb-6 shadow-xs"
              >
                <motion.div
                  variants={{
                    hidden: { scale: 1.05 },
                    visible: { scale: 1, transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="w-full h-full"
                >
                  <ResilientImage
                    src={profilePhoto}
                    fallbackSrc={fallbackProfilePhoto}
                    alt="Promod — Real Estate Consultant"
                    fallbackTitle="Promod"
                    fallbackSubtitle="Real Estate Consultant"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </motion.div>

                {/* Subtle Editorial Corner Badge */}
                <div className="absolute top-3 right-3 bg-[#102C26]/85 backdrop-blur-xs text-[#B89B67] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 border border-[#B89B67]/40 shadow-xs">
                  Official Profile
                </div>
              </motion.div>

              {/* Profile Information Block */}
              <div className="space-y-3">
                {/* 3: PROMOD text reveals from below */}
                <div className="overflow-hidden">
                  <motion.h3
                    variants={{
                      hidden: { y: 28, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#102C26]"
                  >
                    PROMOD
                  </motion.h3>
                </div>

                {/* 4: Role text fades in */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.7, delay: 0.38, ease: 'easeOut' } }
                  }}
                  className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B89B67]"
                >
                  Real Estate Consultant
                </motion.p>

                {/* 6: Decorative line draws in smoothly */}
                <motion.div
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1, transition: { duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="h-[1px] bg-[#163A32]/12 w-full origin-left my-2"
                />

                {/* 5: Description appears with subtle upward motion & live editable control */}
                <motion.div
                  variants={{
                    hidden: { y: 14, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.75, delay: 0.52, ease: 'easeOut' } }
                  }}
                  className="relative group/edit"
                >
                  {isEditing ? (
                    <div className="space-y-2 pt-1">
                      <textarea
                        value={tempDesc}
                        onChange={(e) => setTempDesc(e.target.value)}
                        rows={3}
                        className="w-full p-2.5 text-xs text-[#163A32] bg-[#F7F4EC] border border-[#B89B67] focus:outline-none focus:ring-1 focus:ring-[#B89B67] rounded-xs font-normal leading-relaxed"
                        placeholder="Enter profile description..."
                      />
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={handleCancelEdit}
                          className="px-2.5 py-1 text-[11px] text-[#163A32]/70 hover:text-[#163A32] border border-[#163A32]/20 rounded-xs flex items-center gap-1 cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                          <span>Cancel</span>
                        </button>
                        <button
                          onClick={handleSaveDescription}
                          className="px-3 py-1 text-[11px] bg-[#163A32] text-[#F7F4EC] hover:bg-[#102C26] rounded-xs flex items-center gap-1 font-semibold cursor-pointer"
                        >
                          <Check className="w-3 h-3 text-[#B89B67]" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs sm:text-sm text-[#163A32]/85 italic font-serif leading-relaxed font-normal">
                        “{description}”
                      </p>
                      <button
                        onClick={() => {
                          setTempDesc(description);
                          setIsEditing(true);
                        }}
                        title="Edit description"
                        aria-label="Edit description"
                        className="opacity-60 hover:opacity-100 p-1 text-[#B89B67] hover:text-[#102C26] transition-opacity cursor-pointer shrink-0 mt-0.5"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Verified Trust Marker at Bottom of Card */}
              <div className="mt-6 pt-4 border-t border-[#163A32]/8 flex items-center justify-between text-[11px] text-[#163A32]/75">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B89B67]" />
                  <span>Verified Consultant</span>
                </span>
                <span className="text-[#B89B67] font-semibold uppercase tracking-wider">
                  Indore Advisory
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio, Story & Advisory Ethos */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89B67] font-semibold mb-3">
              <Compass className="w-4 h-4" />
              <span>Independent Real Estate Advisory</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#102C26] tracking-tight mb-6">
              MEET PROMOD.
            </h2>

            <p className="font-display text-xl sm:text-2xl text-[#163A32] font-medium leading-snug mb-6">
              Helping buyers and investors understand Indore real estate with practical guidance, local insight and a focus on informed decision-making.
            </p>

            <div className="space-y-4 text-sm text-[#163A32]/85 leading-relaxed font-normal mb-8">
              <p>
                In a city expanding as rapidly as Indore, finding property is easy—what is difficult is finding clarity. Most transactions are clouded by high-pressure sales pitches, hidden infrastructure liabilities, and incomplete revenue paperwork.
              </p>
              <p>
                Through <strong>Reality With Pramod</strong>, Promod operates as an independent advisor rather than a developer representative. He audits municipal survey maps, reviews RERA portals, visits sites during monsoon to check drainage, and sits down with families to analyze their genuine financial horizons.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 pt-4 border-t border-[#163A32]/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89B67] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#102C26] uppercase tracking-wider">
                    Uncompromised Due Diligence
                  </h4>
                  <p className="text-xs text-[#163A32]/75 mt-0.5">
                    We never recommend a property without reviewing original diversion orders and chain deeds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89B67] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#102C26] uppercase tracking-wider">
                    Ground-Reality First
                  </h4>
                  <p className="text-xs text-[#163A32]/75 mt-0.5">
                    We evaluate water supply lines, approach road reservations, and surrounding zoning, not just show-flat interiors.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onBookConsultation}
                className="px-8 py-4 bg-[#163A32] hover:bg-[#102C26] text-[#F7F4EC] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Book a Consultation with Promod</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.instagram.com/realitywithpramod"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 border border-[#163A32]/25 hover:border-[#163A32] text-[#163A32] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#B89B67]" />
                <span>@realitywithpramod</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
