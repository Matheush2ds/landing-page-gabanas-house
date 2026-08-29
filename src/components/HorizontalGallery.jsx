import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { GALLERY_PREVIEW } from '../data/site';
import { EASE } from '../lib/motion';

/** Velocidade do passeio, em % do trilho duplicado por segundo. */
const SPEED = 0.62;
const FRICTION = 0.9;

/** Mantém o valor sempre dentro da faixa, criando o laço infinito. */
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const Panel = ({ src, label, sub, i, eager }) => (
  <figure className="relative h-[56vh] w-[78vw] shrink-0 overflow-hidden bg-gabana-card sm:w-[52vw] lg:h-[58vh] lg:w-[34vw]">
    <img
      src={src}
      alt={label}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className="pointer-events-none h-full w-full object-cover"
      draggable={false}
    />
    <span
      className="pointer-events-none absolute inset-0 bg-linear-to-t from-gabana-deep/85 via-gabana-deep/10 to-transparent"
      aria-hidden
    />
    <figcaption className="pointer-events-none absolute bottom-7 left-7 lg:bottom-9 lg:left-9">
      <span className="eyebrow mb-3 flex items-center gap-3 text-gabana-gold">
        <span className="rule-x w-7" aria-hidden />
        {sub}
      </span>
      <span className="block font-serif text-4xl font-light leading-none tracking-[-0.02em] text-gabana-cream lg:text-5xl">
        {label}
      </span>
    </figcaption>
    <span
      className="pointer-events-none absolute right-6 top-6 font-serif text-sm tabular-nums text-gabana-cream/50"
      aria-hidden
    >
      {String(i + 1).padStart(2, '0')}
    </span>
  </figure>
);

const HorizontalGallery = () => {
  const reduce = useReducedMotion();
  const section = useRef(null);
  const rail = useRef(null);
  const inView = useInView(section, { margin: '-10% 0px' });

  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  // Estado do arraste guardado em ref: não precisa re-renderizar a cada pixel.
  const drag = useRef({ active: false, startX: 0, startBase: 0, velocity: 0, lastX: 0 });

  useAnimationFrame((_, delta) => {
    if (reduce || !inView) return;
    const d = drag.current;

    if (d.active) return; // enquanto o dedo está na tela, quem manda é ele

    if (Math.abs(d.velocity) > 0.001) {
      // Inércia: solta o trilho e ele desliza até parar
      baseX.set(baseX.get() + d.velocity);
      d.velocity *= FRICTION;
      return;
    }

    if (paused || hovering) return;
    baseX.set(baseX.get() - (SPEED * delta) / 1000);
  });

  const pxToPercent = (px) => {
    const w = rail.current?.scrollWidth || 1;
    return (px / w) * 100;
  };

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startBase: baseX.get(),
      velocity: 0,
      lastX: e.clientX,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.active) return;
    baseX.set(d.startBase + pxToPercent(e.clientX - d.startX));
    d.velocity = pxToPercent(e.clientX - d.lastX);
    d.lastX = e.clientX;
  };

  const endDrag = (e) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const autoRunning = !reduce && !paused && !hovering;

  return (
    <section
      ref={section}
      aria-labelledby="galeria-titulo"
      className="relative z-10 overflow-hidden bg-gabana-sand py-20 text-gabana-ink lg:py-28"
    >
      <div className="mx-auto flex max-w-[92rem] flex-col justify-between gap-8 px-6 lg:flex-row lg:items-end lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="eyebrow mb-5 flex items-center gap-4 text-gabana-ink/60">
            <span className="block h-px w-10 bg-gabana-ink/40" aria-hidden />
            Por dentro
          </p>
          <h2
            id="galeria-titulo"
            className="font-serif font-light leading-[0.94] tracking-[-0.03em] text-gabana-ink"
            style={{ fontSize: 'clamp(2.4rem, 5.6vw, 4.6rem)' }}
          >
            Seis lugares
            <br />
            <span className="italic text-gabana-bronze">onde a viagem acontece.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="flex flex-col items-start gap-5 pb-3"
        >
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Retomar o passeio das fotos' : 'Pausar o passeio das fotos'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gabana-ink/25 text-gabana-ink transition-colors duration-300 hover:border-gabana-bronze hover:text-gabana-bronze"
            >
              {paused ? <FaPlay aria-hidden className="ml-0.5 text-[0.6rem]" /> : <FaPause aria-hidden className="text-[0.6rem]" />}
            </button>
            <span className="eyebrow text-gabana-ink/50">
              {reduce ? 'Arraste para o lado' : 'Passa sozinho · arraste para assumir'}
            </span>
          </div>

          <Link
            to="/galeria"
            className="eyebrow group flex items-center gap-5 text-gabana-ink transition-colors duration-500 hover:text-gabana-bronze"
          >
            Ver as 20 fotos
            <span className="block h-px w-12 bg-gabana-ink transition-all duration-500 ease-out group-hover:w-20 group-hover:bg-gabana-bronze" />
          </Link>
        </motion.div>
      </div>

      <div
        className="mt-12 cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing lg:mt-16"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.div ref={rail} className="flex w-max gap-5 px-6 lg:px-14" style={{ x }}>
          {/* Duas voltas do mesmo conjunto: é o que fecha o laço sem emenda */}
          {[0, 1].map((loop) =>
            GALLERY_PREVIEW.map((img, i) => (
              <Panel
                key={`${loop}-${img.src}`}
                i={i}
                eager={loop === 0 && i < 2}
                aria-hidden={loop === 1 || undefined}
                {...img}
              />
            )),
          )}
        </motion.div>
      </div>

      <p className="sr-only" aria-live="polite">
        {autoRunning ? 'As fotos estão passando sozinhas.' : 'O passeio das fotos está parado.'}
      </p>
    </section>
  );
};

export default HorizontalGallery;
