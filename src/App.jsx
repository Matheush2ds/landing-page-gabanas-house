import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// ÍCONES
import { 
  FaWifi, FaCar, FaSnowflake, FaKitchenSet, FaPersonSwimming, 
  FaUsers, FaWhatsapp, FaLocationDot, 
  FaAirbnb, FaCalendarCheck, FaGamepad, FaShieldHalved, FaInstagram, FaBars, FaXmark,
  FaLandmark, FaPersonRunning, FaUmbrellaBeach
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

// Componente Navbar
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
          {menuOpen ? <FaXmark /> : <FaBars />}
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
    { src: "/img/fachada.png", alt: "Fachada da Casa de Temporada" },
    { src: "/img/Sala.png", alt: "Sala de TV Confortável" },
    { src: "/img/Cozinha%20Completa.png", alt: "Cozinha Equipada" },
    { src: "/img/Suite.png", alt: "Suíte Master" },
    { src: "/img/Visão%20escada.png", alt: "Ambiente Aconchegante" },
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
          <p className="hero-description">Transforme sua viagem em memórias incríveis na casa de temporada mais aconchegante da região.</p>
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
            <span className="section-tag">Localização Privilegiada</span>
            <h2>História e Lazer ao seu redor</h2>
            <p>A tranquilidade que sua família precisa, perto de tudo o que vocês merecem.</p>
          </div>

          <div className="location-wrapper">
            {/* Grid de Cards de Proximidade */}
            <div className="proximity-grid">
              
              <div className="proximity-card">
                <div className="icon-box"><FaLandmark /></div>
                <div>
                  <h4>Vizinho ao Casarão</h4>
                  <p>Ao lado do <strong>Casarão dos Gonzaga</strong>. Sede da fazenda do 1º prefeito, é uma joia colonial do séc. XIX e ícone histórico.</p>
                </div>
              </div>

              <div className="proximity-card">
                <div className="icon-box"><FaUmbrellaBeach /></div>
                <div>
                  <h4>300m do Clube Tropical</h4>
                  <p>Acesso rápido ao <strong>Tropical Thermas Clube II</strong>. Diversão garantida a poucos passos de casa.</p>
                </div>
              </div>

              <div className="proximity-card">
                <div className="icon-box"><FaPersonRunning /></div>
                <div>
                  <h4>Vida Saudável</h4>
                  <p>Pratique exercícios na <strong>Pista de Cooper</strong> e visite a famosa <strong>Rua da Feira</strong> para compras locais.</p>
                </div>
              </div>

              <div className="proximity-card">
                <div className="icon-box"><MdLocalGroceryStore /></div>
                <div>
                  <h4>Facilidades</h4>
                  <p>Região servida por supermercados, padarias e ótimas opções gastronômicas.</p>
                </div>
              </div>
            </div>

            <div className="map-container">
               {/* Mapa Colorido (filtro removido no CSS) com link atualizado */}
               <iframe 
                className="map-embed"
                src="https://www.google.com/maps/place/Gabanas+House+Casa+para+Temporada/@-17.7469558,-48.6237835,292m/data=!3m1!1e3!4m14!1m7!3m6!1s0x94a7312d1659d477:0x7c900e9859e1bdc8!2sGabanas+House+Casa+para+Temporada!8m2!3d-17.7469986!4d-48.6237007!16s%2Fg%2F11vyw46yl7!3m5!1s0x94a7312d1659d477:0x7c900e9859e1bdc8!8m2!3d-17.7469986!4d-48.6237007!16s%2Fg%2F11vyw46yl7?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
                loading="lazy"
                title="Mapa Caldas Novas"
              ></iframe>
              <div className="map-overlay-info">
                <FaLocationDot /> Rua 7 - Av. A, Qd. 04 Lt. 27 - Itaguai 1
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ESTRUTURA */}
      <section id="estrutura" className="container-pad dark-bg">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Nossa Casa</span>
            <h2>Estrutura Completa</h2>
            <p>Cada detalhe foi preparado para você se sentir em casa.</p>
          </div>
          
          <div className="amenities-grid">
            <div className="amenity-card">
              <FaPersonSwimming />
              <h3>Piscina Aquecida</h3>
              <p>Com iluminação LED e hidromassagem para relaxar.</p>
            </div>
            <div className="amenity-card">
              <MdOutdoorGrill />
              <h3>Área Gourmet</h3>
              <p>Churrasqueira completa para o almoço em família.</p>
            </div>
            <div className="amenity-card">
              <FaGamepad />
              <h3>Diversão</h3>
              <p>Mesa de bilhar para os momentos de lazer.</p>
            </div>
            <div className="amenity-card">
              <FaSnowflake />
              <h3>Climatização</h3>
              <p>Ar condicionado para noites tranquilas.</p>
            </div>
            <div className="amenity-card">
              <FaWifi />
              <h3>Wi-Fi</h3>
              <p>Internet Fibra rápida e estável.</p>
            </div>
            <div className="amenity-card">
              <FaShieldHalved />
              <h3>Segurança</h3>
              <p>Bairro tranquilo e monitorado.</p>
            </div>
            <div className="amenity-card">
              <FaKitchenSet />
              <h3>Cozinha</h3>
              <p>Equipada com tudo que você precisa.</p>
            </div>
             <div className="amenity-card">
              <FaCar />
              <h3>Garagem</h3>
              <p>Espaço coberto para seu veículo.</p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="container-pad">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Fotos</span>
            <h2>Conheça nosso cantinho</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>Ver Foto</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <a href={linkInstagram} target="_blank" rel="noreferrer" className="insta-feed-link">
               <FaInstagram /> Acompanhe no Instagram
             </a>
          </div>
        </FadeInSection>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Gabana's House</h2>
            <p>Sua casa de temporada em Caldas Novas.</p>
          </div>
          <div className="footer-actions">
            <h3>Vamos agendar sua data?</h3>
            <p className="price">Fale conosco e consulte condições especiais</p>
            <ActionButtons />
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gabana's House • Todos os direitos reservados.</p>
          <p className="dev-credit">Feito com carinho por <span className="gold-text">Optima Sistemas</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;