import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// ÍCONES
import { 
  FaWifi, FaCar, FaSnowflake, FaKitchenSet, FaPersonSwimming, 
  FaUsers, FaWhatsapp, FaLocationDot, 
  FaAirbnb, FaCalendarCheck, FaGamepad, FaShieldHalved, FaInstagram, FaBars, FaTimes
} from 'react-icons/fa6';
import { MdOutdoorGrill, MdOutlineLiquor, MdLocalGroceryStore, MdRestaurant } from 'react-icons/md';

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

// Componente Navbar para navegação
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">GABANA'S HOUSE</div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#localizacao" onClick={() => setMenuOpen(false)}>Localização</a>
          <a href="#estrutura" onClick={() => setMenuOpen(false)}>Estrutura</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)}>Fotos</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="nav-cta">Reservar</a>
        </div>
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

function App() {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20verificar%20disponibilidade!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";
  const linkInstagram = "https://www.instagram.com/gabanas_house?igsh=a2RpNXMzcHpwc25w";

  const galleryImages = [
    { src: "/img/Piscina1.png", alt: "Piscina Principal Iluminada à noite" },
    { src: "/img/Piscina.png", alt: "Área de Lazer Completa com espreguiçadeiras" },
    { src: "/img/Cozinha%20Sinuca.png", alt: "Integração Gourmet e Lazer" },
    { src: "/img/Churrasqueira.png", alt: "Área de Churrasco Completa" },
    { src: "/img/fachada.png", alt: "Fachada Moderna Gabana's House" },
    { src: "/img/Sala.png", alt: "Sala de TV Confortável" },
    { src: "/img/Cozinha%20Completa.png", alt: "Cozinha Equipada" },
    { src: "/img/Suite.png", alt: "Suíte Master" },
    { src: "/img/Visão%20escada.png", alt: "Design de Interiores" },
  ];

  const ActionButtons = () => (
    <div className="btn-group">
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="btn-big btn-whatsapp-hero">
        <FaWhatsapp /> Falar com Anfitrião
      </a>
      <a href={linkAirbnb} target="_blank" rel="noreferrer" className="btn-big btn-airbnb">
        <FaAirbnb /> Airbnb
      </a>
      <a href={linkBooking} target="_blank" rel="noreferrer" className="btn-big btn-booking">
        <FaCalendarCheck /> Booking
      </a>
      <a href={linkInstagram} target="_blank" rel="noreferrer" className="btn-big btn-instagram">
        <FaInstagram /> Instagram
      </a>
    </div>
  );

  return (
    <div className="App">
      <Navbar />
      
      {/* Botão Flutuante */}
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Falar no WhatsApp">
        <FaWhatsapp />
        <span className="tooltip">Orçamento Rápido</span>
      </a>

      {/* HERO SECTION */}
      <header id="home" className="hero" style={{ backgroundImage: "url('/img/Piscina1.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content fade-in-section is-visible">
          <div className="badge">⭐ Superhost Caldas Novas</div>
          <h1>Gabana's House</h1>
          <p className="hero-subtitle">Conforto, privacidade e a localização mais cobiçada da cidade.</p>
          <p className="hero-description">Transforme sua viagem em uma experiência inesquecível na melhor casa de temporada da região.</p>
          <ActionButtons />
        </div>
        <div className="scroll-indicator">
          <span>Explore</span>
          <div className="arrow"></div>
        </div>
      </header>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="container-pad">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Localização Estratégica</span>
            <h2>No Coração de Caldas Novas</h2>
            <p>Esqueça o carro. Você está a passos de tudo o que precisa.</p>
          </div>

          <div className="location-wrapper">
            {/* Grid de Cards de Proximidade */}
            <div className="proximity-grid">
              <div className="proximity-card">
                <div className="icon-box"><FaLocationDot /></div>
                <div>
                  <h4>150m do Casarão</h4>
                  <p>O ponto turístico mais importante da cidade.</p>
                </div>
              </div>
              <div className="proximity-card">
                <div className="icon-box"><MdLocalGroceryStore /></div>
                <div>
                  <h4>Supermercados</h4>
                  <p>Abasteça a casa com facilidade.</p>
                </div>
              </div>
              <div className="proximity-card">
                <div className="icon-box"><MdRestaurant /></div>
                <div>
                  <h4>Gastronomia</h4>
                  <p>Pizzarias e Hamburguerias ao lado.</p>
                </div>
              </div>
              <div className="proximity-card">
                <div className="icon-box"><MdOutlineLiquor /></div>
                <div>
                  <h4>Conveniência</h4>
                  <p>Distribuidoras e Feira local.</p>
                </div>
              </div>
            </div>

            <div className="map-container">
               <iframe 
                className="map-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.0767597193353!2d-48.6274666!3d-17.743056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ0JzM1LjAiUyA0OMKwMzcnMzAuOSJX!5e0!3m2!1spt-BR!2sbr!4v1629898989898!5m2!1spt-BR!2sbr" 
                loading="lazy"
                title="Mapa Caldas Novas"
              ></iframe>
              <div className="map-overlay-info">
                <FaLocationDot /> Localização Exata enviada após a reserva
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ESTRUTURA */}
      <section id="estrutura" className="container-pad dark-bg">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Comodidades</span>
            <h2>Estrutura Completa</h2>
            <p>Pensada nos mínimos detalhes para o seu conforto absoluto.</p>
          </div>
          
          <div className="amenities-grid">
            <div className="amenity-card">
              <FaPersonSwimming />
              <h3>Piscina Aquecida</h3>
              <p>Com iluminação LED e hidromassagem.</p>
            </div>
            <div className="amenity-card">
              <MdOutdoorGrill />
              <h3>Cozinha Completa</h3>
              <p>Churrasqueira completa integrada.</p>
            </div>
            <div className="amenity-card">
              <FaGamepad />
              <h3>Lazer</h3>
              <p>Mesa de bilhar.</p>
            </div>
            <div className="amenity-card">
              <FaSnowflake />
              <h3>Climatização</h3>
              <p>Ar condicionado nos quartos.</p>
            </div>
            <div className="amenity-card">
              <FaWifi />
              <h3>Conectividade</h3>
              <p>Wi-Fi Fibra de alta velocidade.</p>
            </div>
            <div className="amenity-card">
              <FaShieldHalved />
              <h3>Segurança</h3>
              <p>bairro tranquilo.</p>
            </div>
            <div className="amenity-card">
              <FaKitchenSet />
              <h3>Cozinha</h3>
              <p>Totalmente equipada com utensílios.</p>
            </div>
             <div className="amenity-card">
              <FaCar />
              <h3>Garagem</h3>
              <p>Espaço coberto e seguro.</p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="container-pad">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Visual</span>
            <h2>Conheça cada detalhe</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>Gabana's House</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <a href={linkInstagram} target="_blank" rel="noreferrer" className="insta-feed-link">
               <FaInstagram /> Veja mais vídeos no Instagram
             </a>
          </div>
        </FadeInSection>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Gabana's House</h2>
            <p>Sua casa longe de casa em Caldas Novas.</p>
          </div>
          <div className="footer-actions">
            <h3>Garanta sua data</h3>
            <p className="price">Consulte condições especiais para baixa temporada</p>
            <ActionButtons />
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gabana's House • Todos os direitos reservados.</p>
          <p className="dev-credit">Design Premium por <span className="gold-text">Optima Sistemas</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;