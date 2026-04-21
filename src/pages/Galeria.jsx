import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaInstagram, FaMagnifyingGlassPlus } from 'react-icons/fa6';

const IMAGES = [
  { src: '/img/Piscina1.png', alt: 'Piscina Aquecida — Noite', label: 'Piscina', sub: 'Vista noturna' },
  { src: '/img/Piscina.png', alt: 'Área de Lazer — Dia', label: 'Lazer', sub: 'Área externa' },
  { src: '/img/Churrasqueira.png', alt: 'Área Gourmet', label: 'Gourmet', sub: 'Churrasqueira' },
  { src: '/img/Cozinha Sinuca.png', alt: 'Integração Lazer', label: 'Jogos', sub: 'Salão integrado' },
  { src: '/img/Sala.png', alt: 'Sala de TV', label: 'Sala', sub: 'Living' },
  { src: '/img/Cozinha Completa.png', alt: 'Cozinha Equipada', label: 'Cozinha', sub: 'Completa' },
  { src: '/img/Suite.png', alt: 'Suíte Casal', label: 'Suíte Master', sub: 'Acomodação' },
  { src: '/img/Quarto1.png', alt: 'Quarto Hóspedes', label: 'Quarto 1', sub: 'Acomodação' },
  { src: '/img/Banheiro1.png', alt: 'Banheiro Moderno', label: 'Banheiro', sub: 'Detalhes' },
  { src: '/img/fachada.png', alt: 'Fachada', label: 'Fachada', sub: 'Arquitetura' },
  { src: '/img/Suite1.png', alt: 'Banheiro da Suíte', label: 'Suíte 1', sub: 'Detalhes' },
  { src: '/img/Suite2.png', alt: 'Detalhes da Suíte', label: 'Suíte 2', sub: 'Detalhes' },
  { src: '/img/Quarto2.png', alt: 'Quarto com Ar', label: 'Quarto 2', sub: 'Acomodação' },
  { src: '/img/Quarto3.png', alt: 'Quarto Família', label: 'Quarto 3', sub: 'Acomodação' },
  { src: '/img/Bar.png', alt: 'Área de Bar', label: 'Bar', sub: 'Lazer' },
  { src: '/img/Garagem.png', alt: 'Garagem Coberta', label: 'Garagem', sub: 'Estrutura' },
];

const easing = [0.22, 1, 0.36, 1];

const Galeria = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openAt = (i) => { setIndex(i); setOpen(true); };

  return (
    <div className="min-h-screen bg-gabana-bg pt-32 pb-20 px-6">
      <Helmet>
        <title>Galeria | Gabana's House — Caldas Novas</title>
        <meta name="description" content="Veja as fotos da Gabana's House: piscina aquecida, área gourmet, suítes e muito mais." />
      </Helmet>

      <motion.div
        className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easing }}
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-8 h-px bg-gabana-gold" />
          <span className="text-gabana-gold text-[10px] font-sans tracking-[0.38em] uppercase">
            Tour Visual
          </span>
          <div className="w-8 h-px bg-gabana-gold" />
        </div>
        <h1
          className="font-serif text-gabana-cream leading-tight mb-5"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
        >
          Conheça nosso<br />
          <span className="italic text-gabana-muted">cantinho.</span>
        </h1>
        <p className="text-gabana-muted font-sans text-base leading-relaxed">
          Cada detalhe pensado no seu conforto e bem-estar.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto mb-12">
        <div className="h-px bg-gabana-border" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-[4/3] overflow-hidden cursor-zoom-in group bg-gabana-card"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: easing }}
              onClick={() => openAt(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gabana-bg/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <FaMagnifyingGlassPlus className="text-gabana-gold text-2xl" />
                <div className="text-center">
                  <p className="text-gabana-cream font-serif text-lg">{img.label}</p>
                  <p className="text-gabana-muted text-[10px] font-sans tracking-[0.22em] uppercase mt-0.5">
                    {img.sub}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gabana-bg/60 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={IMAGES.map((img) => ({ src: img.src }))}
      />

      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easing }}
      >
        <p className="text-gabana-muted text-sm font-sans mb-6">
          Vídeos, tours e novidades também no Instagram
        </p>
        <a
          href="https://www.instagram.com/gabanas_house"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-4 border border-gabana-border hover:border-gabana-gold/50 text-gabana-muted hover:text-gabana-cream px-10 py-4 text-[11px] font-sans tracking-[0.28em] uppercase transition-all duration-300"
        >
          <FaInstagram className="text-lg" />
          @gabanas_house
        </a>
      </motion.div>
    </div>
  );
};

export default Galeria;