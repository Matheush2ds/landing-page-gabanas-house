import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const FinalCta = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20casa!";

  return (
    <section className="relative py-40 px-6 text-center overflow-hidden border-t border-[#D4AF37]/20">
      <div className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay" style={{ backgroundImage: "url('/img/Piscina1.png')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#141414]/90 to-[#0A0A0A]"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="text-[#D4AF37] text-4xl mb-6 block">✦</span>
        <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">A sua próxima<br/>viagem começa aqui.</h2>
        <p className="text-xl text-[#A39D98] mb-12">Fale connosco diretamente pelo WhatsApp e garanta as melhores condições para as suas datas.</p>
        
        <a 
          href={linkWhatsapp} 
          target="_blank" rel="noreferrer"
          className="inline-flex items-center justify-center gap-4 bg-[#D4AF37] text-[#0A0A0A] px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#b5952f] hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
        >
          <FaWhatsapp className="text-2xl" /> 
          Falar com o Anfitrião
        </a>
      </div>
    </section>
  );
};

export default FinalCta;