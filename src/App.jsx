import React, { useEffect, useRef } from 'react';
import './App.css';

// ÍCONES SEGUROS (FontAwesome 6)
import { 
  FaWifi, FaCar, FaSnowflake, FaKitchenSet, FaPersonSwimming, 
  FaDog, FaUsers, FaWhatsapp, FaStar, FaLocationDot, 
  FaAirbnb, FaCalendarCheck, FaGamepad, FaShieldHalved 
} from 'react-icons/fa6';
import { MdOutdoorGrill } from 'react-icons/md';

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => currentElement && observer.unobserve(currentElement);
  }, []);
  return <div className="fade-in-section" ref={domRef}>{children}</div>;
};

function App() {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20saber%20mais!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";

  const galleryImages = [
    { src: "/img/Piscina1.png", alt: "Piscina Principal Iluminada" },
    { src: "/img/Piscina.png", alt: "Área de Lazer Completa" },
    { src: "/img/Cozinha%20Sinuca.png", alt: "Mesa de Bilhar e Lazer" },
    { src: "/img/Churrasqueira.png", alt: "Área de Churrasco Gourmet" },
    { src: "/img/Garagem.png", alt: "Garagem Coberta e Segura" },
    { src: "/img/fachada.png", alt: "Fachada da Casa de Temporada" },
    { src: "/img/Sala.png", alt: "Sala de Estar Confortável" },
    { src: "/img/Cozinha%20Completa.png", alt: "Cozinha Totalmente Equipada" },
    { src: "/img/Suite.png", alt: "Suíte Master Climatizada" },
    { src: "/img/Suite1.png", alt: "Banheiro da Suíte" },
    { src: "/img/Quarto1.png", alt: "Quarto de Hóspedes" },
    { src: "/img/Quarto2.png", alt: "Acomodação para Família" },
    { src: "/img/Quarto3.png", alt: "Quarto Confortável" },
    { src: "/img/Bar.png", alt: "Bancada Americana" },
    { src: "/img/Visão%20escada.png", alt: "Arquitetura Moderna" },
    { src: "/img/Entrada.png", alt: "Entrada Principal" },
    { src: "/img/Banheiro1.png", alt: "Banheiro Social" },
  ];

  const ActionButtons = () => (
    <div className="btn-group">
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="btn-big btn-whatsapp-hero">
        <FaWhatsapp /> Reservar via WhatsApp
      </a>
      <a href={linkAirbnb} target="_blank" rel="noreferrer" className="btn-big btn-airbnb">
        <FaAirbnb /> Airbnb
      </a>
      <a href={linkBooking} target="_blank" rel="noreferrer" className="btn-big btn-booking">
        <FaCalendarCheck /> Booking.com
      </a>
    </div>
  );

  return (
    <div className="App">
      
      {/* Botão Flutuante */}
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Falar no WhatsApp">
        <FaWhatsapp />
      </a>

      {/* HERO SECTION */}
      <header className="hero" style={{ backgroundImage: "url('/img/Piscina1.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content fade-in-section is-visible">
          <div className="badge">⭐ Superhost Caldas Novas</div>
          <h1>Gabana's House</h1>
          <p>A experiência premium que sua família merece. Segurança, lazer privativo e a melhor localização da cidade.</p>
          <ActionButtons />
        </div>
      </header>

      {/* LOCALIZAÇÃO */}
      <section className="container-pad">
        <FadeInSection>
          <div className="section-header">
            <h2>Localização Privilegiada</h2>
            <p>Estar no centro com a tranquilidade de um bairro seguro faz toda a diferença.</p>
          </div>

          <div className="location-grid">
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon"><FaLocationDot /></div>
                <div className="feature-content">
                  <strong>150m do Casarão</strong>
                  <p>Vizinho ao ponto turístico mais charmoso da cidade.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><FaCar /></div>
                <div className="feature-content">
                  <strong>2 Minutos do Centro</strong>
                  <p>Acesso rápido a restaurantes, bancos e farmácias.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><FaUsers /></div>
                <div className="feature-content">
                  <strong>Conveniência Total</strong>
                  <p>Ao lado do Supermercado Reis, Rua da Feira e Pista de Cooper.</p>
                </div>
              </div>
            </div>
            
            <div className="location-photo-wrapper">
              <img src="/img/fachada.png" alt="Fachada Gabana's House" loading="lazy"/>
            </div>
          </div>

          <iframe 
            className="map-embed"
            src="https://maps.google.com/maps?q=Casar%C3%A3o%20dos%20Gonzaga%2C%20Caldas%20Novas&t=&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Caldas Novas"
          ></iframe>

        </FadeInSection>
      </section>

      {/* AMENITIES */}
      <section className="container-pad" style={{ background: '#0A0A0A' }}>
        <FadeInSection>
          <div className="section-header">
            <h2>Estrutura Completa</h2>
            <p>Pensamos em cada detalhe para o seu conforto.</p>
          </div>
          
          <div className="amenities-grid">
            <div className="amenity-card">
              <FaPersonSwimming />
              <div className="amenity-title">Piscina Privada</div>
            </div>
            <div className="amenity-card">
              <MdOutdoorGrill />
              <div className="amenity-title">Churrasqueira</div>
            </div>
            <div className="amenity-card">
              <FaGamepad />
              <div className="amenity-title">Mesa de Bilhar</div>
            </div>
            <div className="amenity-card">
              <FaCar />
              <div className="amenity-title">Garagem Coberta</div>
            </div>
            <div className="amenity-card">
              <FaShieldHalved />
              <div className="amenity-title">Segurança Total</div>
            </div>
            <div className="amenity-card">
              <FaWifi />
              <div className="amenity-title">Wi-Fi Fibra</div>
            </div>
            <div className="amenity-card">
              <FaSnowflake />
              <div className="amenity-title">Ar Condicionado</div>
            </div>
            <div className="amenity-card">
              <FaKitchenSet />
              <div className="amenity-title">Cozinha Completa</div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* GALERIA */}
      <section className="container-pad">
        <FadeInSection>
          <div className="section-header">
            <h2>Conheça a Casa</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* PROVA SOCIAL */}
      <section className="container-pad" style={{ background: '#0A0A0A' }}>
        <FadeInSection>
          <div className="section-header">
            <h2>O que dizem nossos hóspedes</h2>
          </div>
          <div className="elfsight-app-51eecd09-3bb0-463a-a1d0-9f6af0a06a84" data-elfsight-app-lazy></div>
        </FadeInSection>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Garanta sua data em Caldas Novas</h2>
        <p className="footer-price">Diárias a partir de R$ 500,00 (Baixa Temporada)</p>
        <ActionButtons />
        
        <div style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
          <p style={{ opacity: 0.6, fontSize: '0.85rem', marginBottom: '5px' }}>
            Gabana's House © {new Date().getFullYear()} • Caldas Novas, GO
          </p>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>
            Desenvolvido por <strong style={{ color: 'var(--gold)' }}>Optima Sistemas e Soluções</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;