import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { FAQS } from '../data/site';
import { EASE, rise } from '../lib/motion';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const Faq = () => {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section
      aria-labelledby="faq-titulo"
      className="border-t border-gabana-border bg-gabana-deep py-24 lg:py-32"
    >
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <div className="mx-auto grid max-w-[92rem] gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-14">
        <motion.div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start" {...rise()}>
          <p className="eyebrow mb-6 flex items-center gap-4 text-gabana-gold">
            <span className="rule-x w-10" aria-hidden />
            Dúvidas
          </p>
          <h2
            id="faq-titulo"
            className="font-serif font-light leading-[1.06] tracking-[-0.02em] text-gabana-cream"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            O que perguntam
            <br />
            <span className="italic text-gabana-gold">com mais frequência.</span>
          </h2>
        </motion.div>

        <div className="lg:col-span-7 lg:col-start-6">
          <dl className="border-t border-gabana-border">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;

              return (
                <motion.div
                  key={faq.q}
                  className="border-b border-gabana-border"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                >
                  <dt>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-8 py-6 text-left"
                    >
                      <span
                        className={`font-serif text-lg font-light transition-colors duration-300 lg:text-xl ${
                          isOpen ? 'text-gabana-gold' : 'text-gabana-cream group-hover:text-gabana-gold'
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        aria-hidden
                        className={`shrink-0 text-[0.65rem] transition-colors duration-300 ${
                          isOpen ? 'text-gabana-gold' : 'text-gabana-muted'
                        }`}
                      >
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>
                  </dt>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={panelId}
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-8 text-[0.98rem] leading-[1.75] text-gabana-muted">
                          {faq.a}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Faq;
