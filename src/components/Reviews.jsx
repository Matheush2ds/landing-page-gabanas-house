import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const FEATURED = {
  text: 'Um refúgio impecável. Cada detalhe exala cuidado e sofisticação. A piscina climatizada é um verdadeiro oásis particular, e a localização oferece o luxo mais raro: o silêncio e a privacidade absoluta a poucos passos do centro. Uma experiência memorável que faremos questão de repetir.',
  author: 'Família Martins',
  date: 'Janeiro 2026',
};

const Stars = () => (
  <div className="flex gap-1.5">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-gabana-gold text-sm" />
    ))}
  </div>
);

const ReviewsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yQuote = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative py-40 lg:py-56 bg-gabana-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative">
        
        <motion.div 
          style={{ y: yQuote }}
          className="absolute top-0 left-0 lg:-left-20 opacity-10 pointer-events-none select-none z-0"
        >
          <span className="font-serif text-gabana-gold leading-none" style={{ fontSize: '25rem' }}>
            "
          </span>
        </motion.div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start gap-16 lg:gap-32">

          <div className="lg:w-1/3 pt-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-40"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gabana-gold" />
                <span className="text-gabana-gold text-[10px] font-sans tracking-[0.4em] uppercase">
                  A Experiência
                </span>
              </div>
              <h2 className="font-serif text-gabana-cream leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Mais que uma estadia.<br />
                <span className="italic text-gabana-muted">Um estilo de vida.</span>
              </h2>
              <div className="flex items-end gap-4 border-l border-gabana-gold/30 pl-6">
                <span className="font-serif text-gabana-gold leading-none text-6xl">4.9</span>
                <div className="pb-1">
                  <Stars />
                  <p className="text-gabana-muted text-[10px] font-sans tracking-[0.2em] uppercase mt-2">Booking.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: yText }}
            className="lg:w-2/3 mt-20 lg:mt-40"
          >
            <p className="font-serif italic text-gabana-cream leading-[1.6] mb-12 text-balance" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
              {FEATURED.text}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-gabana-gold/50 flex items-center justify-center">
                <span className="font-serif text-gabana-gold text-2xl">{FEATURED.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-gabana-cream text-sm font-sans tracking-[0.2em] uppercase">{FEATURED.author}</p>
                <p className="text-gabana-muted text-[11px] font-sans mt-1 uppercase tracking-widest">{FEATURED.date}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;