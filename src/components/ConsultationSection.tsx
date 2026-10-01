import React, { useState } from 'react';
import { Send, MessageSquare, ShieldCheck, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { ConsultationLead, Property } from '../types';
import { ResilientImage } from './ResilientImage';

interface ConsultationSectionProps {
  initialProperty?: Property | null;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ initialProperty }) => {
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    email: string;
    propertyType: string;
    preferredLocation: string;
    budgetRange: string;
    message: string;
  }>({
    name: '',
    phone: '',
    email: '',
    propertyType: initialProperty?.type || 'Apartment',
    preferredLocation: initialProperty?.location || 'Vijay Nagar',
    budgetRange: initialProperty ? initialProperty.price : '₹1 Cr – ₹2 Cr',
    message: initialProperty
      ? `Hi Pramod, I am interested in exploring ${initialProperty.title} located in ${initialProperty.location}. Please share complete due diligence documents and visit slots.`
      : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newLead: ConsultationLead = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('pramod_consultation_leads') || '[]');
      existingLeads.push(newLead);
      localStorage.setItem('pramod_consultation_leads', JSON.stringify(existingLeads));
    } catch {
      // Local storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Pramod, I came across Reality With Pramod. I am looking for a ${formData.propertyType} in ${formData.preferredLocation} (Budget: ${formData.budgetRange}). My name is ${formData.name || 'a homebuyer'}. Can we schedule an advisory call?`
    );
    return `https://wa.me/919826000000?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#163A32] text-[#F7F4EC] overflow-hidden">
      {/* Background Architectural Accent with Scrim */}
      <div className="absolute inset-0 z-0 opacity-15">
        <ResilientImage
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Indore Villa Architecture"
          fallbackTitle="Consultation Backdrop"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-[#B89B67] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidential Advisory</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                HAVE A PROPERTY IN MIND?
              </h2>

              <p className="text-base sm:text-lg text-[#DDE5DE] font-light leading-relaxed mb-8">
                Tell us what you’re looking for and let’s discuss the next step. Every consultation includes an objective title, circle rate, and location check.
              </p>

              <div className="space-y-4 border-t border-[#B89B67]/25 pt-6 text-sm text-[#DDE5DE] mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#102C26] border border-[#B89B67]/40 flex items-center justify-center text-[#B89B67] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#B89B67] block font-semibold">Location</span>
                    <span className="text-white font-medium">Indore, Madhya Pradesh, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#102C26] border border-[#B89B67]/40 flex items-center justify-center text-[#B89B67] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#B89B67] block font-semibold">Advisory Desk</span>
                    <span className="text-white font-medium">pramod@realitywithpramod.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#102C26] border border-[#B89B67]/40 flex items-center justify-center text-[#B89B67] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-[#B89B67] block font-semibold">Instagram Direct</span>
                    <span className="text-white font-medium">@realitywithpramod</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="p-6 bg-[#102C26] border border-[#B89B67]/30">
              <p className="text-xs text-[#B89B67] uppercase font-bold tracking-wider mb-2">
                Prefer Instant Messaging?
              </p>
              <p className="text-xs text-[#DDE5DE]/85 leading-relaxed mb-4">
                Send Pramod a direct message with property links, colony names, or specific paperwork queries.
              </p>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#B89B67] hover:bg-[#D5BD8D] text-[#102C26] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Pramod Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Lead Form */}
          <div className="lg:col-span-7 bg-[#102C26] p-8 md:p-12 border border-[#B89B67]/30 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[#163A32] border border-[#B89B67] flex items-center justify-center mx-auto mb-6 text-[#B89B67]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#DDE5DE] max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Thank you, <strong>{formData.name}</strong>. Pramod will personally review your requirements and reach out within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 border border-[#B89B67] text-[#B89B67] hover:bg-[#B89B67] hover:text-[#102C26] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    Request an Advisory Consultation
                  </h3>
                  <p className="text-xs text-[#DDE5DE]/70">
                    Share your requirements for personalized due diligence and property options.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B89B67] font-medium mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#163A32]/90 border border-[#B89B67]/30 px-3.5 py-2.5 text-xs text-white placeholder-[#DDE5DE]/40 focus:outline-none focus:border-[#B89B67]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B89B67] font-medium mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98260 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#163A32]/90 border border-[#B89B67]/30 px-3.5 py-2.5 text-xs text-white placeholder-[#DDE5DE]/40 focus:outline-none focus:border-[#B89B67]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B89B67] font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#163A32]/90 border border-[#B89B67]/30 px-3.5 py-2.5 text-xs text-white placeholder-[#DDE5DE]/40 focus:outline-none focus:border-[#B89B67]"
                    />
                  </div>

                  {/* Looking For */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B89B67] font-medium mb-1.5">
                      Looking For
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#163A32]/90 border border-[#B89B67]/30 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#B89B67]"
                    >
                      <option value="Apartment">Luxury Apartment</option>
                      <option value="Villa">Independent Villa / Bungalow</option>
                      <option value="Penthouse">Duplex Penthouse</option>
                      <option value="Plot">Freehold Residential Plot</option>
                      <option value="Commercial">Commercial Office / Retail</option>
                      <option value="AdvisoryOnly">Property Verification Only</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B89B67] font-medium mb-1.5">
                      Preferred Indore Location
                    </label>
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full bg-[#163A32]/90 border border-[#B89B67]/30 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#B89B67]"
                    >
                      <option value="Vijay Nagar">Vijay Nagar (Scheme 54/78)</option>
                      <option value="Super Corridor">Super Corridor / Airport Belt</option>
                      <option value="Nipania">Nipania Luxury Belt</option>
                      <option value="Bicholi Mardana">Bicholi Mardana & Bypass</option>
                      <option value="Scheme No. 140">Scheme No. 140 / Pipliyahana</option>
                      <option value="MR-10 Main Road">MR-10 Main Transit Corridor</option>
                      <option value="Rau">Rau / Pithampur Road</option>
                      <option value="Ujjain Road">Ujjain Road / Sanwer</option>
                      <option value="OpenToAdvice">Open to Pramod’s Recommendation</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B89B67] font-medium mb-1.5">
                      Target Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#163A32]/90 border border-[#B89B67]/30 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#B89B67]"
                    >
                      <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                      <option value="₹50L – ₹1 Cr">₹50 Lakhs – ₹1 Crore</option>
                      <option value="₹1 Cr – ₹2 Cr">₹1 Crore – ₹2 Crore</option>
                      <option value="₹2 Cr – ₹4 Cr">₹2 Crore – ₹4 Crore</option>
                      <option value="₹4 Cr+">₹4 Crore+ (Ultra Luxury / Estate)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B89B67] font-medium mb-1.5">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your timeline, whether you need immediate possession or under-construction, or if you want a specific colony checked..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#163A32]/90 border border-[#B89B67]/30 p-3 text-xs text-white placeholder-[#DDE5DE]/40 focus:outline-none focus:border-[#B89B67]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#B89B67] hover:bg-[#D5BD8D] text-[#102C26] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Details...' : 'Request a Consultation'}</span>
                </button>

                <p className="text-[11px] text-[#DDE5DE]/60 text-center leading-normal">
                  Your contact details are strictly confidential. We never sell your number to spam broker call centers.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
