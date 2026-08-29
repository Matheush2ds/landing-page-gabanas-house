import { motion } from 'motion/react';
import { FaStar } from 'react-icons/fa6';
import { REVIEWS } from '../data/site';
import { EASE, rise } from '../lib/motion';

const Stars = ({ label }) => (
  <span className="flex gap-1" role="img" aria-label={label || 'Cinco de cinco estrelas'}>
    {Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} aria-hidden className="text-[0.7rem] text-gabana-gold" />
    ))}
  </span>
);

const ReviewsSection = () => (
  <section aria-labelledby="avaliacoes-titulo" className="overflow-hidden bg-gabana-bg py-24 lg:py-36">
    <div className="mx-auto max-w-[92rem] px-6 lg:px-14">
      <motion.div
        className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end"
        {...rise()}
      >
        <div>
          <p className="eyebrow mb-6 flex items-center gap-4 text-gabana-gold">
            <span className="rule-x w-10" aria-hidden />
            Hóspedes
          </p>
          <h2
            id="avaliacoes-titulo"
            className="font-serif font-light leading-[1.04] tracking-[-0.02em] text-gabana-cream"
            style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.8rem)' }}
          >
            Quem já ficou
            <br />
            <span className="italic text-gabana-gold">conta melhor que a gente.</span>
          </h2>
        </div>

        <div className="flex items-end gap-4 border-l border-gabana-gold/30 pl-6">
          <span className="font-serif text-6xl font-light leading-none text-gabana-gold">
            {REVIEWS.rating}
          </span>
          <div className="pb-1.5">
            <Stars />
            <p className="eyebrow mt-2 text-gabana-muted">
              {REVIEWS.count} avaliações · {REVIEWS.source}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.figure
        className="relative mb-14 border-y border-gabana-border py-12 lg:mb-16 lg:py-16"
        {...rise(0.1)}
      >
        <span
          className="pointer-events-none absolute -top-10 left-0 select-none font-serif leading-none text-gabana-gold/10"
          style={{ fontSize: '15rem' }}
          aria-hidden
        >
          “
        </span>

        <blockquote className="relative">
          <p
            className="max-w-4xl font-serif font-light italic leading-[1.45] text-gabana-cream"
            style={{ fontSize: 'clamp(1.3rem, 2.9vw, 2.1rem)' }}
          >
            {REVIEWS.featured.text}
          </p>
        </blockquote>

        <figcaption className="mt-9 flex flex-wrap items-center gap-5">
          <span className="rule-x w-8" aria-hidden />
          <span>
            <span className="eyebrow block text-gabana-cream">{REVIEWS.featured.author}</span>
            <span className="mt-1 block text-xs text-gabana-muted">{REVIEWS.featured.date}</span>
          </span>
          <Stars />
        </figcaption>
      </motion.figure>

      <ul className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {REVIEWS.list.map((rev, i) => (
          <motion.li
            key={rev.name}
            className="group flex flex-col border border-gabana-border p-7 transition-colors duration-500 hover:border-gabana-gold/40 lg:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          >
            <Stars />
            <p className="my-6 grow font-serif text-lg font-light italic leading-relaxed text-gabana-cream/85">
              {rev.text}
            </p>
            <div className="flex items-center justify-between border-t border-gabana-border pt-5">
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center border border-gabana-gold/30 font-serif text-lg text-gabana-gold transition-colors duration-400 group-hover:border-gabana-gold"
              >
                {rev.name.charAt(0)}
              </span>
              <span className="text-right">
                <span className="eyebrow block text-gabana-cream">{rev.name}</span>
                <span className="mt-1 block text-xs text-gabana-muted">{rev.date}</span>
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default ReviewsSection;
