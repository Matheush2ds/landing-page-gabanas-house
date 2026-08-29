import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa6';
import { HERO_STATS, LINKS, SITE } from '../data/site';
import { EASE } from '../lib/motion';
import LiquidButton from './LiquidButton';

const Hero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={ref}
      aria-label="Apresentação"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-gabana-deep"
    >
      <motion.div className="absolute inset-0 origin-top scale-105" style={{ y: bgY }}>
        <img
          src="/img/piscina-noite.webp"
          alt="Piscina climatizada da Gabana’s House iluminada ao anoitecer"
          width="1195"
          height="587"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-t from-gabana-deep via-gabana-deep/55 to-gabana-deep/15" />
      <div className="absolute inset-0 bg-linear-to-r from-gabana-deep/90 via-gabana-deep/30 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-16 pt-36 lg:px-14 lg:pb-24"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.p
          className="eyebrow mb-7 flex items-center gap-4 text-gabana-gold"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          <span className="rule-x w-10" aria-hidden />
          Caldas Novas · Goiás
        </motion.p>

        <motion.h1
          className="mb-9 max-w-[16ch] font-serif font-light leading-[0.98] tracking-[-0.02em] text-gabana-cream"
          style={{ fontSize: 'clamp(3rem, 7.6vw, 6.2rem)' }}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
        >
          A casa inteira <span className="italic text-gabana-gold">é sua</span> pelos dias que ficar.
        </motion.h1>

        <motion.div
          className="flex flex-col items-start gap-8 sm:flex-row sm:items-center lg:gap-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42, ease: EASE }}
        >
          <LiquidButton
            href={LINKS.whatsappDates}
            target="_blank"
            rel="noreferrer"
            size="lg"
            icon={FaWhatsapp}
            className="w-full sm:w-auto"
          >
            Consultar datas
          </LiquidButton>

          <p className="max-w-sm text-[0.95rem] leading-relaxed text-gabana-cream/75 sm:border-l sm:border-gabana-gold/30 sm:pl-8">
            Três suítes, churrasqueira dentro da cozinha e piscina climatizada, a 300 m dos clubes termais.
            Você fala direto com o anfitrião, sem taxa de plataforma.
          </p>
        </motion.div>
      </motion.div>

      {/* Ficha técnica em linha — hairline, não card */}
      <motion.dl
        className="relative z-10 mx-auto grid w-full max-w-[92rem] grid-cols-2 border-t border-gabana-cream/12 px-6 lg:grid-cols-4 lg:px-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: EASE }}
      >
        {HERO_STATS.map(({ label, value }, i) => (
          <div
            key={label}
            className={`py-6 lg:py-8 ${i > 0 ? 'lg:border-l lg:border-gabana-cream/12 lg:pl-8' : ''} ${
              i % 2 === 1 ? 'border-l border-gabana-cream/12 pl-6 lg:pl-8' : ''
            }`}
          >
            <dt className="eyebrow mb-2 text-gabana-gold/80">{label}</dt>
            <dd className="font-serif text-lg font-light text-gabana-cream lg:text-xl">{value}</dd>
          </div>
        ))}
      </motion.dl>

      <span className="sr-only">{SITE.name} em Caldas Novas, Goiás.</span>
    </section>
  );
};

export default Hero;
