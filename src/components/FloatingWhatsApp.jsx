import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa6';
import { LINKS } from '../data/site';

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar no WhatsApp"
          className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(160deg,#4ce084,#25d366_48%,#12a651)] text-2xl text-white shadow-[0_1px_0_rgba(255,255,255,.5)_inset,0_-2px_8px_rgba(6,80,40,.45)_inset,0_10px_30px_rgba(37,211,102,.35)] transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(255,255,255,.65)_inset,0_-2px_8px_rgba(6,80,40,.4)_inset,0_16px_40px_rgba(37,211,102,.5)] md:bottom-8 md:right-8"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.06 }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-2 top-0 h-1/2 rounded-b-[100%] rounded-t-full bg-[linear-gradient(to_bottom,rgba(255,255,255,.45),transparent)] blur-[2px]"
          />
          <FaWhatsapp aria-hidden className="relative" />
          <span className="eyebrow pointer-events-none absolute right-[4.2rem] whitespace-nowrap border border-gabana-border bg-gabana-navy px-3 py-2 text-gabana-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Consultar datas
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
