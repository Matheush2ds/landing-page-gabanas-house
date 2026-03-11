import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const FinalCta = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20casa!";

  return (
    <section className="relative py-40 px-6 text-center overflow-hidden border-t border-white/5">
      
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity animate-zoom-bg scale-105" 
          style={{ backgroundImage: "url('/img/Piscina1.png')" }}
        ></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-dark-bg"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        <span className="text-gold text-4xl mb-6 block drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">✦</span>
        
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight drop-shadow-xl">
          A sua próxima<br/>
          <span className="italic text-gold">estadia começa aqui.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-sans leading-relaxed">
          Fale conosco diretamente pelo WhatsApp e garanta as melhores condições, tarifas exclusivas e flexibilidade para a sua família.
        </p>
        
        <a 
          href={linkWhatsapp} 
          target="_blank" rel="noreferrer"
          className="group relative flex items-center justify-center gap-4 bg-gold text-dark-bg px-10 md:px-12 py-5 md:py-6 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-hover rounded-lg shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] hover:-translate-y-1 animate-pulse-glow w-full sm:w-max"
        >
          <FaWhatsapp className="text-2xl" /> 
          <span>Falar com o Anfitrião</span>
        </a>
      </div>
    </section>
  );
};

export default FinalCta;