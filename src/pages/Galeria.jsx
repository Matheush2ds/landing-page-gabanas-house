import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaInstagram } from 'react-icons/fa6';

const galleryImages = [
  { src: "/img/Piscina1.png", alt: "Piscina Aquecida com Iluminação LED Noturna" },
  { src: "/img/Piscina.png", alt: "Área de Lazer Externa com Piscina e Espreguiçadeiras" },
  { src: "/img/fachada.png", alt: "Fachada Moderna Gabana's House Caldas Novas" },
  { src: "/img/Churrasqueira.png", alt: "Área Gourmet com Churrasqueira Completa" },
  { src: "/img/Cozinha Sinuca.png", alt: "Integração Lazer: Cozinha e Mesa de Sinuca" },
  { src: "/img/Sala.png", alt: "Sala de Estar Confortável com TV" },
  { src: "/img/Cozinha Completa.png", alt: "Cozinha Planejada e Totalmente Equipada" },
  { src: "/img/Cozinha.png", alt: "Visão Geral da Cozinha Americana" },
  { src: "/img/Suite.png", alt: "Suíte Master Espaçosa" },
  { src: "/img/Suite1.png", alt: "Banheiro da Suíte com Acabamento Premium" },
  { src: "/img/Suite2.png", alt: "Detalhes da Suíte Aconchegante" },
  { src: "/img/Quarto1.png", alt: "Quarto de Hóspedes Confortável" },
  { src: "/img/Quarto2.png", alt: "Quarto com Ar Condicionado e Cama Box" },
  { src: "/img/Quarto3.png", alt: "Quarto para Família" },
  { src: "/img/Banheiro1.png", alt: "Banheiro Social Moderno" },
  { src: "/img/Bar.png", alt: "Área de Bar Integrada" },
  { src: "/img/Bar pis.png", alt: "Detalhe do Bar Próximo à Piscina" },
  { src: "/img/Visão escada.png", alt: "Vista Interna do Ambiente" },
  { src: "/img/Entrada.png", alt: "Entrada Principal da Casa" },
  { src: "/img/Garagem.png", alt: "Garagem Coberta e Segura" },
];

const Galeria = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-pad" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Helmet>
        <title>Galeria de Fotos | Gabana's House - Caldas Novas</title>
        <meta name="description" content="Explore cada detalhe da Gabana's House. Fotos da piscina aquecida, quartos, churrasqueira e área de lazer completa em Caldas Novas." />
        <link rel="canonical" href="https://gabanashousetemporada.vercel.app/galeria" />
      </Helmet>

      <div className="section-header">
        <span className="section-tag">Tour Visual</span>
        <h2>Conheça Nosso Cantinho</h2>
        <p>Cada foto reflete o cuidado que temos com seu conforto.</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-item" key={index}>
             <img 
               src={img.src} 
               alt={img.alt} 
               loading="lazy" 
               width="400" 
               height="300"
             />
             <div className="gallery-overlay">
               <span>Ver Detalhes</span>
             </div>
          </div>
        ))}
      </div>

      <div style={{textAlign: 'center', marginTop: '60px', marginBottom: '40px'}}>
         <a href="https://www.instagram.com/gabanas_house" target="_blank" rel="noreferrer" className="insta-feed-link">
           <FaInstagram /> Veja vídeos no Instagram
         </a>
      </div>
    </div>
  );
};

export default Galeria;