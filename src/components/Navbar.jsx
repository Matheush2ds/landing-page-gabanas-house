import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { FaBars, FaXmark, FaWhatsapp } from 'react-icons/fa6';
import { LINKS } from '../data/site';
import LiquidButton from './LiquidButton';

const NAV_LINKS = [
  { label: 'A casa', to: '/' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Reservas', to: '/reservas' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding,border-color] duration-500 ${
          scrolled
            ? 'border-b border-gabana-border/70 bg-gabana-deep/85 py-4 backdrop-blur-xl'
            : 'border-b border-transparent bg-linear-to-b from-gabana-deep/70 to-transparent py-6'
        }`}
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex max-w-[92rem] items-center justify-between px-6 lg:px-14"
        >
          <Link
            to="/"
            className="font-serif text-[1.6rem] leading-none tracking-tight text-gabana-cream transition-colors duration-300 hover:text-gabana-gold"
          >
            Gabana<span className="text-gabana-gold">’</span>s
            <span className="ml-1.5 italic font-light text-gabana-gold">House</span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `eyebrow relative py-1 transition-colors duration-300 ${
                    isActive ? 'text-gabana-cream' : 'text-gabana-muted hover:text-gabana-cream'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gabana-gold transition-all duration-500 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <LiquidButton
              href={LINKS.whatsappDates}
              target="_blank"
              rel="noreferrer"
              variant="glass"
              icon={FaWhatsapp}
              className="px-7 py-3.5"
            >
              Consultar datas
            </LiquidButton>
          </div>

          <button
            type="button"
            className="-mr-1 p-2 text-xl text-gabana-cream md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <FaBars />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-gabana-deep/80 backdrop-blur-xs md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col justify-center gap-9 border-l border-gabana-border bg-gabana-navy px-9 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute right-7 top-7 p-2 text-xl text-gabana-muted transition-colors hover:text-gabana-cream"
                aria-label="Fechar menu"
              >
                <FaXmark />
              </button>

              <span className="rule-x absolute left-0 top-0 h-1/3 w-px bg-linear-to-b from-transparent via-gabana-gold/40 to-transparent" />

              <nav aria-label="Menu móvel" className="flex flex-col gap-7">
                {NAV_LINKS.map(({ label, to }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="block font-serif text-4xl font-light text-gabana-cream transition-colors duration-300 hover:text-gabana-gold"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
                className="mt-2"
              >
                <LiquidButton
                  href={LINKS.whatsappDates}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  icon={FaWhatsapp}
                  full
                >
                  Consultar datas
                </LiquidButton>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
