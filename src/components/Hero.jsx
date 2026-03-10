import React from 'react';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';

const Hero = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20casa!";

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pb-12 lg:pb-24 px-6 lg:px-12 xl:px-24 pt-32">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/Piscina1.png')" }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <div className="max-w-4xl">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-2 bg-[#141414]/90 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase">
              <FaLocationDot className="text-sm" /> Rua 7 - Av. A, Qd. 04 Lt. 27
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8A7B66] hidden sm:block">
              Caldas Novas, GO
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-6 tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
            Privacidade absoluta,<br />
            <span className="italic text-[#D4AF37]">lazer inesquecível.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F9F8F6] max-w-2xl leading-relaxed mb-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Fuja do comum. Uma casa de temporada com estrutura de hotel boutique, desenhada para criar memórias perfeitas em família.
          </p>
        </div>
        
        <div className="flex-shrink-0 w-full lg:w-auto">
          <a 
            href={linkWhatsapp} 
            target="_blank" rel="noreferrer"
            className="group relative flex items-center justify-center gap-4 bg-[#D4AF37] text-[#0A0A0A] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-[#b5952f] w-full lg:w-max shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            <FaWhatsapp className="text-2xl" /> 
            <span>Reservar via WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto mt-16 border-t border-[#2C2C2C] pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-left">
          <p className="text-[#8A7B66] text-xs font-bold uppercase tracking-widest mb-1">Capacidade</p>
          <p className="text-lg font-serif text-white">Até 10 Hóspedes</p>
        </div>
        <div className="text-left">
          <p className="text-[#8A7B66] text-xs font-bold uppercase tracking-widest mb-1">Estrutura</p>
          <p className="text-lg font-serif text-white">4 Quartos (Suítes)</p>
        </div>
        <div className="text-left">
          <p className="text-[#8A7B66] text-xs font-bold uppercase tracking-widest mb-1">Lazer</p>
          <p className="text-lg font-serif text-white">Piscina Climatizada</p>
        </div>
        <div className="text-left">
          <p className="text-[#8A7B66] text-xs font-bold uppercase tracking-widest mb-1">Localização</p>
          <p className="text-lg font-serif text-white">Centro Turístico</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;