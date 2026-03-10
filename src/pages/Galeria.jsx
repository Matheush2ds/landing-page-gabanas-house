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
    <div className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <Helmet>
        <title>Fotos | Gabana's House - Caldas Novas</title>
      </Helmet>

      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8A7B66] block mb-6">Tour Visual</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-6 leading-tight">Conheça<br/>Nosso Cantinho.</h2>
        <p className="text-lg text-[#5C5C5C]">Cada detalhe pensado no seu conforto.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((img, i) => (
          <div 
            key={i} 
            onClick={() => { setIndex(i); setOpen(true); }}
            className="relative aspect-[4/3] bg-[#E5E0D8] overflow-hidden cursor-zoom-in group"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              loading="lazy" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="border border-[#1A1A1A] text-[#1A1A1A] bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-widest">
                Ampliar
              </span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={galleryImages.map(img => ({ src: img.src }))} />

      <div className="text-center mt-24">
         <a href="https://www.instagram.com/gabanas_house" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-10 py-5 border border-[#E5E0D8] text-[#1A1A1A] hover:bg-white hover:shadow-lg transition-all font-bold uppercase tracking-widest text-xs">
           <FaInstagram className="text-xl text-[#E1306C]" /> Veja vídeos no Instagram
         </a>
      </div>
    </div>
  );
};
export default Galeria;