import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa6';
import { LINKS, SITE } from '../data/site';
import { EASE } from '../lib/motion';
import LiquidButton from './LiquidButton';

const FinalCta = () => (
  <section
    aria-labelledby="cta-titulo"
    className="relative overflow-hidden bg-gabana-deep px-6 py-32 lg:py-44"
  >
    <div className="absolute inset-0" aria-hidden>
      <img
        src="/img/churrasqueira.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gabana-deep/90" />
      <div className="absolute inset-0 bg-linear-to-b from-gabana-deep via-transparent to-gabana-deep" />
    </div>

    <span
      className="pointer-events-none absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-linear-to-b from-transparent to-gabana-gold/40"
      aria-hidden
    />

    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <motion.p
        className="eyebrow mb-8 flex items-center justify-center gap-5 text-gabana-gold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <span className="rule-x w-10" aria-hidden />
        Reserva direta
        <span className="rule-x w-10" aria-hidden />
      </motion.p>

      <motion.h2
        id="cta-titulo"
        className="mb-8 font-serif font-light leading-[1.02] tracking-[-0.025em] text-gabana-cream"
        style={{ fontSize: 'clamp(2.6rem, 6.4vw, 5.2rem)' }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
      >
        Diga as datas.
        <br />
        <span className="italic text-gabana-gold">A gente responde hoje.</span>
      </motion.h2>

      <motion.p
        className="mx-auto mb-12 max-w-lg text-[1.02rem] leading-[1.75] text-gabana-muted"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
      >
        Sem intermediário, sem taxa de plataforma e com flexibilidade para ajustar
        horário de chegada. Falar com a gente é falar com quem cuida da casa.
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
      >
        <LiquidButton
          href={LINKS.whatsappDates}
          target="_blank"
          rel="noreferrer"
          size="lg"
          icon={FaWhatsapp}
        >
          Falar no WhatsApp
        </LiquidButton>
        <a
          href={`tel:${SITE.phoneIntl}`}
          className="text-sm text-gabana-muted transition-colors duration-300 hover:text-gabana-cream"
        >
          ou ligue: {SITE.phoneDisplay}
        </a>
      </motion.div>
    </div>

    <span
      className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-linear-to-t from-transparent to-gabana-gold/40"
      aria-hidden
    />
  </section>
);

export default FinalCta;
