import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const WA_LINK =
  'https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20verificar%20disponibilidade!';

const FloatingWhatsApp = () => {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl shadow-[0_8px_28px_rgba(37,211,102,0.35)] z-50 hover:scale-110 hover:shadow-[0_12px_36px_rgba(37,211,102,0.45)] transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />

      <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-gabana-bg" />

      <span className="absolute right-16 bg-gabana-navy border border-gabana-border text-gabana-cream px-3 py-2 text-[10px] font-sans tracking-[0.22em] uppercase whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
        Orçamento Rápido
      </span>
    </a>
  );
};

export default FloatingWhatsApp;