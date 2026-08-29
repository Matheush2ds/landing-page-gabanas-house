import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EASE } from '../lib/motion';

const KEY = 'gh:visited';

const firstVisit = () => {
  try {
    return sessionStorage.getItem(KEY) !== '1';
  } catch {
    return true; // aba anônima: mostra e não memoriza
  }
};

const Preloader = () => {
  const reduce = useReducedMotion();
  const [pending, setPending] = useState(firstVisit);
  const show = pending && !reduce;

  useEffect(() => {
    if (!show) return;

    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      setPending(false);
      document.body.style.overflow = '';
      try {
        sessionStorage.setItem(KEY, '1');
      } catch {
        /* sem storage: só não memoriza */
      }
    }, 1700);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-gabana-deep"
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="overflow-hidden px-6 text-center">
            <motion.p
              className="font-serif text-4xl font-light tracking-tight text-gabana-cream sm:text-5xl"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            >
              Gabana<span className="text-gabana-gold">’</span>s
              <span className="ml-2 italic text-gabana-gold">House</span>
            </motion.p>

            <motion.span
              className="mx-auto mt-7 block h-px w-40 origin-left bg-gabana-gold/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            />

            <motion.p
              className="eyebrow mt-6 text-gabana-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Caldas Novas · Goiás
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
