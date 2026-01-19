import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaWifi, FaCar, FaSnowflake, FaKitchenSet, FaPersonSwimming, 
  FaLocationDot, FaAirbnb, FaCalendarCheck, FaGamepad, 
  FaShieldHalved, FaLandmark, FaPersonRunning, 
  FaUmbrellaBeach, FaWhatsapp, FaStar 
} from 'react-icons/fa6';
import { MdOutdoorGrill, MdLocalGroceryStore } from 'react-icons/md';
import Reviews from '../components/Reviews'; 

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    });
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);
  return <div className="fade-in-section" ref={domRef}>{children}</div>;
};

const Home = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20an%C3%BAncio%20e%20gostaria%20de%20reservar!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10";
  const mapQuery = "Gabanas House Casa para Temporada, Caldas Novas";

  const handleSniperClick = (e, url) => {
    e.preventDefault(); // Segura o clique por um milésimo de segundo
    
    const callback = () => {
      window.open(url, '_blank'); // Abre o WhatsApp
    };

    // Verifica se o Google Ads (gtag) carregou
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
          'send_to': 'AW-17878593233/uWSYCKXAy-gbENHdls1C', // Seu ID de Conversão
          'event_callback': callback,
          'event_timeout': 2000 // Se o Google demorar, abre mesmo assim
      });
      console.log("🔫 Sniper disparado: Conversão registrada!");
    } else {
      console.log("⚠️ Gtag não detectado (AdBlock?), abrindo direto...");
      callback();
    }
  };

  return (
    <>
      <Helmet>
        <title>Gabana's House | Casa de Temporada em Caldas Novas</title>
        <meta name="description" content="Hospede-se com conforto no centro de Caldas Novas. Casa com piscina aquecida, churrasqueira e wi-fi. Reserve direto!" />
      </Helmet>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/img/Piscina1.png')" }}></div>
        <div className="overlay"></div>
        
        <div className="hero-content fade-in-section is-visible">
          <div className="badge"><FaStar /> Superhost Caldas Novas</div>
          <h1>Gabana's House</h1>
          <p className="hero-subtitle">Conforto, privacidade e a localização mais cobiçada da cidade.</p>
          <p className="hero-description">Transforme sua viagem em memórias incríveis na casa mais aconchegante da região.</p>
          
          <div className="btn-group">
            {/* BOTÃO COM O SNIPER ATIVADO */}
            <a 
              href={linkWhatsapp} 
              onClick={(e) => handleSniperClick(e, linkWhatsapp)}
              className="btn-big btn-whatsapp-hero"
            >
              <FaWhatsapp /> Falar com Anfitrião
            </a>
            
            <a href={linkAirbnb} target="_blank" rel="noreferrer" className="btn-big btn-secondary">
              <FaAirbnb /> Airbnb
            </a>
            <a href="https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html" target="_blank" rel="noreferrer" className="btn-big btn-secondary">
              <FaCalendarCheck /> Booking
            </a>
          </div>
        </div>
        <div className="scroll-indicator"><span>Explore</span><div className="arrow"></div></div>
      </header>

      {/* LOCALIZAÇÃO */}
      <section className="container-pad">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Localização Privilegiada</span>
            <h2>História e Lazer ao seu redor</h2>
            <p>A tranquilidade que sua família precisa, perto de tudo.</p>
          </div>
          <div className="location-wrapper">
            <div className="proximity-grid">
              <div className="proximity-card"><div className="icon-box"><FaLandmark /></div><div><h4>Vizinho ao Casarão</h4><p>Ícone histórico da cidade.</p></div></div>
              <div className="proximity-card"><div className="icon-box"><FaUmbrellaBeach /></div><div><h4>Clubes Termais</h4><p>300m do Tropical Thermas.</p></div></div>
              <div className="proximity-card"><div className="icon-box"><FaPersonRunning /></div><div><h4>Vida Saudável</h4><p>Próximo à Pista de Cooper.</p></div></div>
              <div className="proximity-card"><div className="icon-box"><MdLocalGroceryStore /></div><div><h4>Facilidades</h4><p>Mercados e padarias a pé.</p></div></div>
            </div>
            <div className="map-container">
               <iframe className="map-embed" src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=m&z=17&output=embed&iwloc=near`} loading="lazy" title="Mapa Gabana's House" allowFullScreen></iframe>
               <div className="map-overlay-info"><FaLocationDot /> Rua 7 - Av. A, Qd. 04 Lt. 27</div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ESTRUTURA */}
      <section className="container-pad dark-bg">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Nossa Casa</span>
            <h2>Estrutura Completa</h2>
          </div>
          <div className="amenities-grid">
            <div className="amenity-card"><FaPersonSwimming /><h3>Piscina Aquecida</h3><p>Com LED e hidro.</p></div>
            <div className="amenity-card"><MdOutdoorGrill /><h3>Área Gourmet</h3><p>Churrasqueira completa.</p></div>
            <div className="amenity-card"><FaGamepad /><h3>Diversão</h3><p>Mesa de bilhar.</p></div>
            <div className="amenity-card"><FaSnowflake /><h3>Climatização</h3><p>Ar condicionado nos quartos.</p></div>
            <div className="amenity-card"><FaWifi /><h3>Wi-Fi</h3><p>Internet Fibra rápida.</p></div>
            <div className="amenity-card"><FaShieldHalved /><h3>Segurança</h3><p>Monitorada.</p></div>
            <div className="amenity-card"><FaKitchenSet /><h3>Cozinha</h3><p>Completa e equipada.</p></div>
            <div className="amenity-card"><FaCar /><h3>Garagem</h3><p>Espaço coberto.</p></div>
          </div>
        </FadeInSection>
      </section>

      {/* AVALIAÇÕES */}
      <section className="container-pad">
         <FadeInSection><Reviews /></FadeInSection>
      </section>
    </>
  );
};

export default Home;