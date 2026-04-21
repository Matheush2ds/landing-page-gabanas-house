import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck } from 'react-icons/fa6';

const LINKS = {
  whatsapp: 'https://wa.me/5564992415277?text=Gostaria%20de%20reservar!',
  airbnb: 'https://www.airbnb.com.br/rooms/952305594473672721',
  booking: 'https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html',
};

const Reservas = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    window.scrollTo(0, 0);
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#000E1D] pt-32 pb-16 px-6 relative overflow-hidden flex flex-col justify-between">
      <Helmet>
        <title>Reservas | Gabana's House — Caldas Novas</title>
        <meta name="description" content="Reserve a Gabana's House diretamente pelo WhatsApp ou nas plataformas parceiras." />
      </Helmet>

      <motion.div 
        className="fixed top-0 left-0 w-96 h-96 bg-[#C9A84C]/15 rounded-full blur-[120px] pointer-events-none z-0"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />

      <div className="flex-grow flex items-center justify-center relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-gabana-gold/50" />
            <span className="text-gabana-gold text-[10px] sm:text-xs font-sans tracking-[0.4em] uppercase font-bold">
              Concierge Exclusivo
            </span>
            <div className="w-16 h-px bg-gabana-gold/50" />
          </div>

          <h1 className="font-serif text-[#F6F4F0] leading-[0.95] tracking-tight mb-8" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
            A sua estadia <br />
            <span className="italic text-gabana-gold">começa aqui.</span>
          </h1>
          
          <p className="text-[#F6F4F0]/60 font-sans text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-16 text-balance">
            Garanta as melhores condições, total flexibilidade e isenção de taxas falando diretamente conosco.
          </p>

          <motion.a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center justify-center gap-6 px-12 lg:px-20 py-6 lg:py-8 overflow-hidden bg-gabana-gold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="absolute inset-0 w-full h-full bg-[#F6F4F0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
            <FaWhatsapp className={`relative z-10 text-3xl lg:text-4xl transition-colors duration-500 ${isHovered ? 'text-[#25D366]' : 'text-[#000E1D]'}`} />
            <span className={`relative z-10 text-xs lg:text-sm font-sans tracking-[0.3em] uppercase font-bold transition-colors duration-500 ${isHovered ? 'text-[#000E1D]' : 'text-[#000E1D]'}`}>
              Reservar via WhatsApp
            </span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="relative z-10 mt-20 border-t border-white/10 pt-8 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="text-[#F6F4F0]/40 text-[10px] font-sans tracking-[0.3em] uppercase text-center md:text-left">
          Ou reserve através de <br className="md:hidden" />nossos parceiros oficiais
        </span>

        <div className="flex items-center gap-8 lg:gap-16">
          <a
            href={LINKS.airbnb}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-[#F6F4F0]/50 hover:text-white transition-colors duration-500"
          >
            <FaAirbnb className="text-2xl lg:text-3xl" />
            <span className="text-[10px] lg:text-xs font-sans tracking-[0.2em] uppercase overflow-hidden">
              <span className="inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">Airbnb</span>
              <span className="block -mt-[14px] group-hover:-translate-y-full transition-transform duration-300">Airbnb</span>
            </span>
          </a>

          <div className="w-px h-8 bg-white/10" />

          <a
            href={LINKS.booking}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-[#F6F4F0]/50 hover:text-white transition-colors duration-500"
          >
            <FaCalendarCheck className="text-xl lg:text-2xl" />
            <span className="text-[10px] lg:text-xs font-sans tracking-[0.2em] uppercase overflow-hidden">
               <span className="inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">Booking</span>
               <span className="block -mt-[14px] group-hover:-translate-y-full transition-transform duration-300">Booking</span>
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Reservas;