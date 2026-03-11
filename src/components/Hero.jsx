import React from 'react';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';

const Hero = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20casa!";

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-zoom-bg scale-105" 
          style={{ backgroundImage: "url('/img/Piscina1.png')" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-transparent to-dark-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-24 pb-12 lg:pb-20 pt-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <div className="max-w-4xl animate-fade-in-up">
          
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-gold px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg">
              <FaLocationDot className="text-sm" /> Rua 7 - Av. A, Qd. 04
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 hidden sm:block">
              Caldas Novas, GO
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-6 tracking-tight drop-shadow-2xl">
            Privacidade absoluta,<br />
            <span className="italic text-gold">lazer inesquecível.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10 drop-shadow-md font-sans">
            Fuja do comum. Uma casa de temporada com estrutura de hotel boutique, desenhada para criar memórias perfeitas em família.
          </p>
        </div>
        
        <div className="flex-shrink-0 w-full lg:w-auto pb-4">
          <a 
            href={linkWhatsapp} 
            target="_blank" rel="noreferrer"
            className="group relative flex items-center justify-center gap-4 bg-gold text-dark-bg px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-hover w-full lg:w-max rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] animate-pulse-glow"
          >
            <FaWhatsapp className="text-2xl" /> 
            <span>Reservar Agora</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full bg-dark-surface/50 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-24 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              { label: 'Capacidade', value: 'Até 10 Hóspedes' },
              { label: 'Estrutura', value: '4 Suítes' },
              { label: 'Lazer', value: 'Piscina Climatizada' },
              { label: 'Localização', value: 'Centro Turístico' }
            ].map((item, index) => (
              <div key={index} className="group cursor-default">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">{item.label}</p>
                <p className="text-lg font-serif text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold rotate-90 origin-left translate-y-4">Scroll</span>
            <div className="w-[1px] h-12 bg-white/20 overflow-hidden mt-6">
              <div className="w-full h-full bg-gold origin-top animate-scroll-flow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;