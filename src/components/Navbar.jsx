import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark } from 'react-icons/fa6';

const NAV_LINKS = [
  { label: 'A Casa', to: '/' },
  { label: 'Galeria', to: '/galeria' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-gabana-bg/90 backdrop-blur-xl border-b border-gabana-gold/20 py-4'
            : 'bg-gradient-to-b from-gabana-bg/75 to-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex justify-between items-center">

          <Link
            to="/"
            className="font-serif text-2xl text-gabana-cream hover:text-gabana-gold transition-colors duration-300"
          >
            Gabana's<span className="italic text-gabana-gold ml-1">House</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-gabana-muted hover:text-gabana-cream text-[11px] font-sans tracking-[0.25em] uppercase transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/reservas"
              className="border border-gabana-gold/60 text-gabana-cream hover:bg-gabana-gold hover:text-gabana-bg hover:border-gabana-gold px-7 py-3 text-[11px] font-sans tracking-[0.25em] uppercase transition-all duration-300"
            >
              Reservar
            </Link>
          </div>

          <button
            className="md:hidden text-gabana-cream text-xl z-50 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gabana-bg/70 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 w-[82%] sm:w-[380px] bg-gabana-navy z-50 flex flex-col justify-center px-10 gap-10 md:hidden border-l border-gabana-border"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 text-gabana-muted hover:text-gabana-cream text-xl transition-colors"
              >
                <FaXmark />
              </button>

              <div className="absolute top-0 left-0 w-px h-1/3 bg-gradient-to-b from-transparent via-gabana-gold/40 to-transparent" />

              {[...NAV_LINKS, { label: 'Reservas', to: '/reservas' }].map(({ label, to }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-4xl text-gabana-cream hover:text-gabana-gold transition-colors duration-300 block"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://wa.me/5564992415277?text=Ol%C3%A1%2C%20gostaria%20de%20verificar%20a%20disponibilidade%20da%20casa!"
                target="_blank"
                rel="noreferrer"
                className="mt-2 border border-gabana-gold/60 text-gabana-cream hover:bg-gabana-gold hover:text-gabana-bg text-center py-4 text-[11px] font-sans tracking-[0.25em] uppercase transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
              >
                Reservar Agora
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;