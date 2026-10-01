import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919826000000?text=' +
    encodeURIComponent('Hi Pramod, I came across Reality With Pramod and would like to seek real estate guidance for Indore.');

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Pramod Khichi"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#163A32] hover:bg-[#102C26] text-[#F7F4EC] border border-[#B89B67]/50 shadow-xl transition-all duration-300 hover:scale-105"
      >
        <div className="w-2 h-2 rounded-full bg-[#B89B67] animate-ping" />
        <MessageSquare className="w-4 h-4 text-[#B89B67]" />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline text-[#F7F4EC]">
          WhatsApp Pramod
        </span>
      </a>
    </aside>
  );
};
