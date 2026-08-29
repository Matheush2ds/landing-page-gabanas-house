import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaPlus, FaXmark } from 'react-icons/fa6';
import { TOUR } from '../data/site';
import { EASE, rise } from '../lib/motion';

const HouseTour = () => {
  const [sceneId, setSceneId] = useState(TOUR[0].id);
  const [spotIndex, setSpotIndex] = useState(null);

  const scene = TOUR.find((s) => s.id === sceneId) ?? TOUR[0];
  const spot = spotIndex === null ? null : scene.spots[spotIndex];

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSpotIndex(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="tour" aria-labelledby="tour-titulo" className="bg-gabana-deep py-24 lg:py-36">
      <div className="mx-auto max-w-[92rem] px-6 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div className="lg:col-span-6" {...rise()}>
            <p className="eyebrow mb-6 flex items-center gap-4 text-gabana-gold">
              <span className="rule-x w-10" aria-hidden />
              Tour interativo
            </p>
            <h2
              id="tour-titulo"
              className="font-serif font-light leading-[1.04] tracking-[-0.02em] text-gabana-cream"
              style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.8rem)' }}
            >
              Clique nos pontos
              <br />
              <span className="italic text-gabana-gold">e ande pela casa.</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end"
            {...rise(0.15)}
          >
            {TOUR.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSceneId(s.id);
                  setSpotIndex(null);
                }}
                aria-pressed={s.id === sceneId}
                className={`eyebrow relative overflow-hidden rounded-full px-7 py-3.5 transition-all duration-400 ${
                  s.id === sceneId
                    ? 'bg-[linear-gradient(160deg,var(--color-gabana-gold-soft),var(--color-gabana-gold)_46%,#a8873f)] text-gabana-deep shadow-[0_1px_0_rgba(255,255,255,.55)_inset,0_-2px_6px_rgba(80,58,12,.35)_inset,0_8px_22px_-8px_rgba(201,168,76,.5)]'
                    : 'bg-white/[0.06] text-gabana-muted ring-1 ring-white/15 backdrop-blur-md hover:text-gabana-cream hover:ring-gabana-gold/40'
                }`}
              >
                {s.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto mt-12 max-w-[66rem] lg:mt-14"
          {...rise(0.1, 20)}
        >
          <div className="relative overflow-hidden bg-gabana-card">
          <AnimatePresence mode="wait">
            <motion.img
              key={scene.image}
              src={scene.image}
              alt={scene.alt}
              loading="lazy"
              decoding="async"
              className="block w-full select-none"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              draggable={false}
            />
          </AnimatePresence>

          <span
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-gabana-deep/45 via-transparent to-gabana-deep/20"
            aria-hidden
          />

          {/* Pontos */}
          {scene.spots.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setSpotIndex(spotIndex === i ? null : i)}
              aria-label={`Ver ${s.title}`}
              aria-expanded={spotIndex === i}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <span className="relative flex h-9 w-9 items-center justify-center lg:h-11 lg:w-11">
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    spotIndex === i
                      ? 'scale-100 bg-gabana-gold'
                      : 'scale-90 bg-gabana-deep/70 ring-1 ring-gabana-gold/70 backdrop-blur-xs group-hover:scale-100 group-hover:bg-gabana-gold'
                  }`}
                />
                {spotIndex !== i && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-gabana-gold/25 [animation-duration:2.8s]" />
                )}
                <FaPlus
                  aria-hidden
                  className={`relative text-[0.7rem] transition-all duration-400 lg:text-xs ${
                    spotIndex === i
                      ? 'rotate-45 text-gabana-deep'
                      : 'text-gabana-gold group-hover:text-gabana-deep'
                  }`}
                />
              </span>
            </button>
          ))}
          </div>

          {/* Painel do ponto */}
          <AnimatePresence>
            {spot && (
              <motion.aside
                key={spot.title}
                className="relative z-20 flex items-stretch border-t border-gabana-gold/30 bg-gabana-deep/95 backdrop-blur-md sm:absolute sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[24rem] sm:border"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <img
                  src={spot.photo}
                  alt=""
                  loading="lazy"
                  className="hidden w-28 shrink-0 object-cover sm:block"
                />
                <div className="min-w-0 flex-1 p-5 lg:p-6">
                  <p className="eyebrow mb-2 text-gabana-gold">
                    {String(spotIndex + 1).padStart(2, '0')} / {String(scene.spots.length).padStart(2, '0')}
                  </p>
                  <h3 className="mb-2 font-serif text-xl font-light text-gabana-cream">
                    {spot.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gabana-muted">{spot.text}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSpotIndex(null)}
                  aria-label="Fechar"
                  className="shrink-0 self-start p-4 text-gabana-muted transition-colors hover:text-gabana-cream"
                >
                  <FaXmark aria-hidden />
                </button>
              </motion.aside>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="mx-auto mt-5 max-w-[66rem] text-sm text-gabana-muted">
          {scene.spots.length} pontos nesta vista. Toque em cada um para ver a foto e a descrição.
        </p>
      </div>
    </section>
  );
};

export default HouseTour;
