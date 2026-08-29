import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HOUSE_INTRO, ROOMS } from '../data/site';
import { EASE, rise } from '../lib/motion';

const TheHouse = () => {
  const [active, setActive] = useState(0);
  const room = ROOMS[active];

  return (
    <section id="a-casa" aria-labelledby="a-casa-titulo" className="bg-gabana-bg py-24 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-14">
        {/* Abertura editorial */}
        <div className="grid gap-12 border-b border-gabana-border pb-16 lg:grid-cols-12 lg:gap-16 lg:pb-24">
          <motion.div className="lg:col-span-7" {...rise()}>
            <p className="eyebrow mb-7 flex items-center gap-4 text-gabana-gold">
              <span className="rule-x w-10" aria-hidden />
              A casa
            </p>
            <h2
              id="a-casa-titulo"
              className="font-serif font-light leading-[1.06] tracking-[-0.015em] text-gabana-cream"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.4rem)' }}
            >
              {HOUSE_INTRO.lede}
            </h2>
          </motion.div>

          <motion.div className="space-y-6 lg:col-span-5 lg:pt-24" {...rise(0.15)}>
            {HOUSE_INTRO.body.map((paragraph, i) => (
              <p key={i} className="text-[1.02rem] leading-[1.75] text-gabana-muted">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Índice de ambientes */}
        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-8 text-gabana-muted">Ambientes</p>

            <ul className="border-t border-gabana-border">
              {ROOMS.map((item, i) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-current={active === i}
                    className="group flex w-full items-center gap-5 border-b border-gabana-border py-5 text-left transition-colors duration-300 lg:py-6"
                  >
                    <span
                      className={`font-serif text-sm tabular-nums transition-colors duration-300 ${
                        active === i ? 'text-gabana-gold' : 'text-gabana-muted/60'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-16 shrink-0 object-cover lg:hidden"
                    />

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-serif text-xl font-light transition-colors duration-300 lg:text-2xl ${
                          active === i ? 'text-gabana-gold' : 'text-gabana-cream'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-gabana-muted">
                        {item.detail}
                      </span>
                    </span>

                    <span
                      className={`hidden h-px shrink-0 bg-gabana-gold transition-all duration-500 lg:block ${
                        active === i ? 'w-10' : 'w-0'
                      }`}
                      aria-hidden
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Visor fixo — desktop */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-4/5 overflow-hidden bg-gabana-card">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={room.image}
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gabana-deep/70 to-transparent" />
                <p className="absolute bottom-6 left-6 font-serif text-2xl font-light text-gabana-cream">
                  {room.name}
                </p>
              </div>
              <span className="mt-3 block border-t border-gabana-border pt-3 text-right eyebrow text-gabana-muted">
                {String(active + 1).padStart(2, '0')} / {String(ROOMS.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHouse;
