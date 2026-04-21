import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const FEATURED = {
  text: 'A casa está linda, tudo novo e limpinho. A piscina climatizada é uma delícia e a localização é perfeita — perto de tudo mas com total privacidade. Voltaremos com certeza!',
  author: 'Família Martins',
  date: 'Janeiro 2026',
};

const REVIEWS = [
  {
    name: 'Marlice',
    text: 'Espaçosa, todos os quartos com suíte. Localização excelente, perto de tudo.',
    date: 'Dez 2025',
  },
  {
    name: 'Fernando',
    text: 'Experiência maravilhosa. O local é exatamente como descrito, muito organizado.',
    date: 'Nov 2025',
  },
  {
    name: 'Família Souza',
    text: 'Melhor casa de temporada em Caldas Novas. Área gourmet e piscina incríveis.',
    date: 'Out 2025',
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-gabana-gold text-sm" />
    ))}
  </div>
);

const easing = [0.22, 1, 0.36, 1];

const ReviewsSection = () => {
  return (
    <section className="py-24 lg:py-36 bg-gabana-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: easing }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-5 h-px bg-gabana-gold" />
              <span className="text-gabana-gold text-[10px] font-sans tracking-[0.35em] uppercase">
                Hóspedes
              </span>
            </div>
            <h2
              className="font-serif text-gabana-cream leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}
            >
              O que dizem<br />
              <span className="italic text-gabana-muted">quem já ficou.</span>
            </h2>
          </div>

          <div className="flex items-end gap-3">
            <span
              className="font-serif text-gabana-gold leading-none"
              style={{ fontSize: '4.5rem' }}
            >
              4.9
            </span>
            <div className="pb-2">
              <Stars />
              <p className="text-gabana-muted text-[10px] font-sans tracking-[0.25em] uppercase mt-1.5">
                via Booking.com
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative py-12 lg:py-16 border-t border-b border-gabana-border mb-14 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easing }}
        >
          <span
            className="absolute -top-4 left-0 font-serif text-gabana-gold/8 select-none pointer-events-none leading-none"
            style={{ fontSize: '16rem' }}
            aria-hidden="true"
          >
            "
          </span>

          <div className="relative">
            <p
              className="font-serif italic text-gabana-cream leading-relaxed max-w-4xl"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 2.15rem)' }}
            >
              "{FEATURED.text}"
            </p>
            <div className="flex items-center gap-5 mt-9">
              <div className="w-8 h-px bg-gabana-gold/40" />
              <div>
                <p className="text-gabana-cream text-sm font-sans tracking-[0.18em] uppercase">
                  {FEATURED.author}
                </p>
                <p className="text-gabana-muted text-xs font-sans mt-0.5">{FEATURED.date}</p>
              </div>
              <Stars />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={idx}
              className="group p-7 lg:p-8 border border-gabana-border hover:border-gabana-gold/30 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: easing }}
            >
              <Stars />
              <p className="font-serif italic text-gabana-cream/80 text-lg leading-relaxed my-6">
                "{rev.text}"
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-gabana-border">
                <div className="w-9 h-9 border border-gabana-gold/30 flex items-center justify-center text-gabana-gold font-serif text-lg group-hover:border-gabana-gold transition-colors duration-300">
                  {rev.name.charAt(0)}
                </div>
                <div className="text-right">
                  <p className="text-gabana-cream text-[11px] font-sans tracking-[0.18em] uppercase">
                    {rev.name}
                  </p>
                  <p className="text-gabana-muted text-[11px] font-sans mt-0.5">{rev.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;