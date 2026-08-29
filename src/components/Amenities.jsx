import { motion } from 'motion/react';
import { AMENITIES } from '../data/site';
import { EASE, rise } from '../lib/motion';

const Amenities = () => (
  <section
    aria-labelledby="estrutura-titulo"
    className="relative overflow-hidden bg-gabana-deep py-24 lg:py-36"
  >
    <div
      className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-gabana-gold/8 blur-[140px]"
      aria-hidden
    />

    <div className="relative z-10 mx-auto max-w-[92rem] px-6 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <motion.div className="lg:col-span-7" {...rise()}>
          <p className="eyebrow mb-6 flex items-center gap-4 text-gabana-gold">
            <span className="rule-x w-10" aria-hidden />
            Estrutura
          </p>
          <h2
            id="estrutura-titulo"
            className="font-serif font-light leading-[1.02] tracking-[-0.02em] text-gabana-cream"
            style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.4rem)' }}
          >
            O que já está aqui
            <br />
            <span className="italic text-gabana-gold">quando você chega.</span>
          </h2>
        </motion.div>

        <motion.p
          className="border-l border-gabana-gold/40 pl-6 text-[1.02rem] leading-[1.75] text-gabana-muted lg:col-span-5"
          {...rise(0.15)}
        >
          Nada de lista de extras cobrados à parte. Tudo abaixo entra na diária,
          já testado por quem morou aqui antes de alugar.
        </motion.p>
      </div>

      <ul className="mt-16 border-t border-gabana-border lg:mt-24">
        {AMENITIES.map((item, i) => (
          <motion.li
            key={item.title}
            className="group grid items-baseline gap-x-8 gap-y-2 border-b border-gabana-border py-7 transition-colors duration-500 hover:border-gabana-gold/50 lg:grid-cols-12 lg:py-9"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: i * 0.05, ease: EASE }}
          >
            <span className="font-serif text-sm tabular-nums text-gabana-gold/70 lg:col-span-1">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif text-2xl font-light text-gabana-cream transition-colors duration-400 group-hover:text-gabana-gold lg:col-span-4 lg:text-3xl">
              {item.title}
            </h3>
            <p className="text-[0.98rem] leading-relaxed text-gabana-muted lg:col-span-7">
              {item.desc}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default Amenities;
