import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STATS = [
  { num: '01', label: 'Capacidade', value: 'Até 15 hóspedes' },
  { num: '02', label: 'Acomodação', value: '4 suítes privativas' },
  { num: '03', label: 'Lazer', value: 'Piscina climatizada' },
  { num: '04', label: 'Localização', value: 'Centro turístico' },
];

const WA_LINK = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20casa!";

const Hero = () => {
  const heroRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-gabana-bg"
    >
      <motion.div
        className="absolute inset-0 scale-105 origin-top"
        style={{ y: bgY }}
      >
        <img
          src="/img/Piscina1.png"
          alt="Piscina da Gabana's House"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gabana-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-gabana-bg via-gabana-bg/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-gabana-bg/90 via-gabana-bg/30 to-transparent" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-40 lg:pb-56"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-8 h-px bg-gabana-gold" />
          <span className="text-gabana-gold text-[10px] sm:text-xs font-sans tracking-[0.35em] uppercase">
            Refúgio Particular
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-gabana-cream leading-[1.05] tracking-tight mb-10"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Sua casa <br className="hidden lg:block" />
          <span className="italic text-gabana-gold pr-2">feita</span> para <br className="hidden lg:block" />
          memórias.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-[11px] font-sans tracking-[0.3em] uppercase transition-colors duration-500 bg-gabana-gold text-gabana-bg hover:bg-white"
          >
            Verificar Disponibilidade
          </a>
          <p className="text-gabana-cream/80 font-sans text-sm lg:text-base leading-relaxed max-w-sm sm:border-l sm:border-gabana-gold/30 sm:pl-8">
            Privacidade absoluta e lazer de alto padrão em Caldas Novas.
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full z-20 pb-8 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-0 relative">
            
            <motion.div
              className="hidden lg:block absolute top-0 left-0 h-px bg-gabana-gold/20 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%' }}
            />

            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex-1 pt-4 lg:pt-10 pl-6 lg:pl-10 transition-all duration-500 cursor-default ${
                  hoveredIndex !== null && hoveredIndex !== i ? 'opacity-20 blur-[2px]' : 'opacity-100'
                }`}
              >
                <motion.div
                  className="absolute top-0 left-0 w-px bg-gabana-gold/30 origin-top"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: '100%' }}
                />
                
                <motion.span 
                  className="absolute -top-2 lg:top-2 left-6 lg:left-10 font-serif text-gabana-gold/5 text-6xl lg:text-8xl select-none pointer-events-none transition-colors duration-500 group-hover:text-gabana-gold/15"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {stat.num}
                </motion.span>

                <div className="relative z-10">
                  <div className="overflow-hidden mb-2 lg:mb-3">
                    <motion.p
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 1.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="text-gabana-gold text-[9px] sm:text-[10px] font-sans tracking-[0.4em] uppercase"
                    >
                      {stat.label}
                    </motion.p>
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.p
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="text-gabana-cream font-serif text-xl lg:text-2xl tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                    >
                      {stat.value}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;