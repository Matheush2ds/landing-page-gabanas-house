import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaInstagram, FaMagnifyingGlassPlus, FaWhatsapp } from 'react-icons/fa6';
import Seo from '../components/Seo';
import { GALLERY, LINKS } from '../data/site';
import { EASE } from '../lib/motion';
import LiquidButton from '../components/LiquidButton';
import PageHeader from '../components/PageHeader';

const Galeria = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gabana-bg px-6 pb-24 pt-32 lg:px-14 lg:pt-40">
      <Seo
        title="Galeria"
        description="As 20 fotos da Gabana’s House: piscina climatizada, cozinha com churrasqueira, suítes, salão e fachada."
        path="/galeria"
      />

      <PageHeader
        eyebrow={`Galeria · ${GALLERY.length} fotos`}
        title={
          <>
            A casa inteira,
            <br />
            <span className="italic text-gabana-gold">sem filtro de corretor.</span>
          </>
        }
        lede="Fotos feitas na casa, sem render nem montagem. Clique em qualquer uma para ampliar."
      />

      <div className="mx-auto mt-14 max-w-[92rem] lg:mt-20">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {GALLERY.map((img, i) => (
            <motion.li
              key={img.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.05, ease: EASE }}
            >
              <button
                type="button"
                onClick={() => openAt(i)}
                className="group relative block aspect-4/3 w-full cursor-zoom-in overflow-hidden bg-gabana-card"
                aria-label={`Ampliar: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gabana-deep/75 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <FaMagnifyingGlassPlus aria-hidden className="text-2xl text-gabana-gold" />
                  <span className="text-center">
                    <span className="block font-serif text-lg font-light text-gabana-cream">
                      {img.label}
                    </span>
                    <span className="eyebrow mt-1 block text-gabana-muted">{img.sub}</span>
                  </span>
                </span>

                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-gabana-deep/60 to-transparent"
                  aria-hidden
                />
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={GALLERY.map((img) => ({ src: img.src, alt: img.alt }))}
      />

      <motion.div
        className="mt-20 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="text-sm text-gabana-muted">Gostou do que viu?</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <LiquidButton
            href={LINKS.whatsappDates}
            target="_blank"
            rel="noreferrer"
            icon={FaWhatsapp}
          >
            Consultar datas
          </LiquidButton>
          <LiquidButton
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            variant="glass"
            icon={FaInstagram}
          >
            @gabanas_house
          </LiquidButton>
        </div>
        <Link
          to="/"
          className="eyebrow mt-2 text-gabana-muted transition-colors hover:text-gabana-cream"
        >
          Voltar para a casa
        </Link>
      </motion.div>
    </div>
  );
};

export default Galeria;
