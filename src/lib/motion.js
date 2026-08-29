export const EASE = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, margin: '-60px' };

export const rise = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.85, delay, ease: EASE },
});

export const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
  transition: { duration: 1, delay, ease: EASE },
});
