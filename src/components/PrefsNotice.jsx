import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { EASE } from '../lib/motion';
import { OPEN_PREFS_EVENT, readPrefs, writePrefs } from '../lib/prefs';

const PrefsNotice = () => {
  const [open, setOpen] = useState(false);
  const panel = useRef(null);

  useEffect(() => {
    if (!readPrefs()) {
      // Espera o preloader sair para não empilhar duas coisas na tela.
      const t = setTimeout(() => setOpen(true), 2200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_PREFS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (open) panel.current?.focus();
  }, [open]);

  const decide = (analytics) => {
    writePrefs(analytics);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          ref={panel}
          tabIndex={-1}
          role="dialog"
          aria-modal="false"
          aria-labelledby="aviso-titulo"
          aria-describedby="aviso-texto"
          className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/12 bg-gabana-deep/95 p-6 shadow-[0_1px_0_rgba(255,255,255,.14)_inset,0_24px_60px_-20px_rgba(0,0,0,.9)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-8 lg:inset-x-auto lg:left-8 lg:max-w-md"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-gabana-gold/60 to-transparent"
          />

          <h2 id="aviso-titulo" className="eyebrow mb-4 text-gabana-gold">
            Cookies
          </h2>

          <p id="aviso-texto" className="mb-6 text-sm leading-relaxed text-gabana-muted">
            Usamos cookies de medição para saber quantas pessoas chegam ao site e
            por onde vieram. Eles só são ativados se você aceitar. Os cookies que
            fazem o site funcionar não dependem de escolha.{' '}
            <Link
              to="/privacidade"
              className="text-gabana-cream underline decoration-gabana-gold/50 underline-offset-4 transition-colors hover:text-gabana-gold"
            >
              Política de privacidade
            </Link>
            .
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => decide(true)}
              className="eyebrow flex-1 rounded-full bg-[linear-gradient(160deg,var(--color-gabana-gold-soft),var(--color-gabana-gold)_46%,#a8873f)] px-6 py-3.5 text-gabana-deep shadow-[0_1px_0_rgba(255,255,255,.5)_inset,0_-2px_6px_rgba(80,58,12,.3)_inset,0_8px_20px_-8px_rgba(201,168,76,.5)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => decide(false)}
              className="eyebrow flex-1 rounded-full bg-white/[0.06] px-6 py-3.5 text-gabana-cream ring-1 ring-white/15 backdrop-blur-md transition-colors duration-300 hover:ring-gabana-gold/40"
            >
              Só os essenciais
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default PrefsNotice;
