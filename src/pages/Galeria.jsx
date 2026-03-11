import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaInstagram } from 'react-icons/fa6';

const galleryImages = [
  { src: "/img/Piscina1.png", alt: "Piscina Aquecida Noturna" },
  { src: "/img/Piscina.png", alt: "Área de Lazer Dia" },
  { src: "/img/Churrasqueira.png", alt: "Área Gourmet" },
  { src: "/img/Cozinha Sinuca.png", alt: "Integração Lazer" },
  { src: "/img/Sala.png", alt: "Sala de TV" },
  { src: "/img/Cozinha Completa.png", alt: "Cozinha Equipada" },
  { src: "/img/Suite.png", alt: "Suíte Casal" },
  { src: "/img/Quarto1.png", alt: "Quarto Hóspedes" },
  { src: "/img/Banheiro1.png", alt: "Banheiro Moderno" },
  { src: "/img/fachada.png", alt: "Fachada" },
  { src: "/img/Suite1.png", alt: "Banheiro da Suíte" },
  { src: "/img/Suite2.png", alt: "Detalhes da Suíte" },
  { src: "/img/Quarto2.png", alt: "Quarto com Ar" },
  { src: "/img/Quarto3.png", alt: "Quarto Família" },
  { src: "/img/Bar.png", alt: "Área de Bar" },
  { src: "/img/Garagem.png", alt: "Garagem Coberta" }
];

const Galeria = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="py-32 px-6 max-w-7xl mx-auto min-h-screen bg-dark-bg">
      <Helmet>
        <title>Fotos | Gabana's House - Caldas Novas</title>
      </Helmet>

      <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in-up">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-6">
          Tour Visual
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
          Conheça<br/>Nosso Cantinho.
        </h2>
        <p className="text-lg text-white/60">
          Cada detalhe pensado no seu conforto e bem-estar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((img, i) => (
          <div 
            key={i} 
            onClick={() => { setIndex(i); setOpen(true); }}
            className="relative aspect-[4/3] bg-dark-surface rounded-xl overflow-hidden cursor-zoom-in group shadow-lg"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              loading="lazy" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-dark-bg/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
              <span className="border border-white/50 text-white bg-dark-bg/50 px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-md">
                Ampliar
              </span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox 
        open={open} 
        close={() => setOpen(false)} 
        index={index} 
        slides={galleryImages.map(img => ({ src: img.src }))} 
      />

      <div className="text-center mt-24">
         <a 
           href="https://www.instagram.com/gabanas_house" 
           target="_blank" 
           rel="noreferrer" 
           className="inline-flex items-center gap-4 px-10 py-5 border border-dark-surface bg-dark-card text-white hover:border-brand-instagram hover:text-brand-instagram transition-all font-bold uppercase tracking-widest text-xs rounded-lg shadow-md"
         >
           <FaInstagram className="text-xl" /> Veja vídeos no Instagram
         </a>
      </div>
    </div>
  );
};

export default Galeria;