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
    <div className="container-pad" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Helmet>
        <title>Fotos | Gabana's House - Caldas Novas</title>
        <meta name="description" content="Veja fotos da piscina, churrasqueira e quartos." />
      </Helmet>

      <div className="section-header">
        <span className="section-tag">Tour Visual</span>
        <h2>Conheça Nosso Cantinho</h2>
        <p>Cada detalhe pensado no seu conforto.</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div className="gallery-item" key={i} onClick={() => { setIndex(i); setOpen(true); }}>
             <img src={img.src} alt={img.alt} loading="lazy" />
             <div className="gallery-overlay"><span>Ampliar</span></div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map(img => ({ src: img.src }))}
      />

      <div style={{textAlign: 'center', marginTop: '60px'}}>
         <a href="https://www.instagram.com/gabanas_house" target="_blank" rel="noreferrer" className="insta-feed-link">
           <FaInstagram /> Veja vídeos no Instagram
         </a>
      </div>
    </div>
  );
};
export default Galeria;