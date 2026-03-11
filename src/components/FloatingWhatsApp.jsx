import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const FloatingWhatsApp = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20verificar%20disponibilidade!";

  return (
    <a 
      href={linkWhatsapp} 
      target="_blank" 
      rel="noreferrer" 
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-brand-whatsapp text-white rounded-full flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] z-50 hover:scale-110 transition-transform group animate-pulse-glow"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
      
      <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-dark-bg"></div>
      
      <span className="absolute right-20 bg-dark-surface border border-white/10 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl rounded-md">
        Orçamento Rápido
      </span>
    </a>
  );
};

export default FloatingWhatsApp;