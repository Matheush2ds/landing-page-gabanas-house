import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

const WA_LINK =
  'https://wa.me/5564992415277?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20casa!';

const easing = [0.22, 1, 0.36, 1];

const FinalCta = () => {
  return (
    <section className="relative py-36 lg:py-52 px-6 overflow-hidden bg-gabana-bg">

      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/img/Piscina1.png"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gabana-bg/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-gabana-bg via-transparent to-gabana-bg" />
      </div>

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(201,168,76,0.055), transparent)',
        }}
      />

      {/* 1px gold divider top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-gabana-gold/30" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Label */}
        <motion.div
          className="flex items-center justify-center gap-5 mb-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
        >
          <div className="w-10 h-px bg-gabana-gold/35" />
          <span className="text-gabana-gold text-[10px] font-sans tracking-[0.38em] uppercase">
            Reserve Já
          </span>
          <div className="w-10 h-px bg-gabana-gold/35" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-serif text-gabana-cream leading-[1.03] mb-8"
          style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easing }}
        >
          A sua próxima<br />
          <span className="italic text-gabana-gold">estadia começa aqui.</span>
        </motion.h2>

        {/* 1px gold separator */}
        <motion.div
          className="w-10 h-px bg-gabana-gold/40 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: easing }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Subtext */}
        <motion.p
          className="text-gabana-muted font-sans max-w-lg mx-auto mb-12 leading-relaxed text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2, ease: easing }}
        >
          Fale diretamente com o anfitrião pelo WhatsApp. Sem taxas de plataforma, com mais flexibilidade e as melhores condições para a sua família.
        </motion.p>

        {/* CTA */}
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-5 border border-gabana-gold/60 text-gabana-cream hover:bg-gabana-gold hover:text-gabana-bg hover:border-gabana-gold px-12 py-5 text-[11px] font-sans tracking-[0.3em] uppercase transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.4, ease: easing }}
          whileHover={{ y: -3 }}
        >
          <FaWhatsapp className="text-xl" />
          <span>Falar com o Anfitrião</span>
        </motion.a>
      </div>

      {/* 1px gold divider bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-gabana-gold/30" />
    </section>
  );
};

export default FinalCta;
