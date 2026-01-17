import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaWifi, FaCar, FaSnowflake, FaKitchenSet, FaPersonSwimming, 
  FaLocationDot, FaAirbnb, FaCalendarCheck, FaGamepad, 
  FaShieldHalved, FaInstagram, FaLandmark, FaPersonRunning, 
  FaUmbrellaBeach, FaWhatsapp, FaStar, FaUsers 
} from 'react-icons/fa6';
import { MdOutdoorGrill, MdLocalGroceryStore, MdCleaningServices, MdSentimentVerySatisfied } from 'react-icons/md';
import '../components/Reviews.css';

// Componente para Animação de Fade
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

// DADOS REAIS DAS AVALIAÇÕES (BOOKING)
const reviewsData = [
    {
      id: 1,
      name: "Martins",
      source: "Booking",
      text: "A casa está linda, tudo novo e limpinho. O proprietário nos recebeu super bem, atendeu todas as nossa necessidades, a piscina climatizada é uma delicia.",
      stars: 5,
      date: "Brasil"
    },
    {
      id: 2,
      name: "Ingrid",
      source: "Booking",
      text: "Casa muito organizada, fui recebida com a casa bem cheirosa e limpa!!",
      stars: 5,
      date: "Brasil"
    },
    {
      id: 3,
      name: "Fernando",
      source: "Booking",
      text: "Tivemos uma experiência maravilhosa nesta casa. O local é exatamente como descrito, muito organizado e com todas as comodidades necessárias para uma estadia confortável. A localização é excelente.",
      stars: 5,
      date: "Brasil"
    },
    {
      id: 4,
      name: "Marlice",
      source: "Booking",
      text: "Gostei de tudo na casa, espaçosa, todos os quartos com suíte...",
      stars: 5,
      date: "Brasil"
    }
];

const Home = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20verificar%20disponibilidade!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";
  const linkInstagram = "https://www.instagram.com/gabanas_house?igsh=a2RpNXMzcHpwc25w";

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
    <>
      <Helmet>
        <title>Gabana's House | Casa de Temporada em Caldas Novas</title>
        <meta name="description" content="Hospede-se com conforto no centro de Caldas Novas. Casa com piscina aquecida, churrasqueira, wi-fi e nota 10 em limpeza. Reserve direto!" />
      </Helmet>

      {/* HERO SECTION */}
      <header className="hero" style={{ backgroundImage: "url('/img/Piscina1.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content fade-in-section is-visible">
          <div className="badge">Superhost Caldas Novas</div>
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

      {/* LOCALIZAÇÃO (ESTÁ AQUI!) */}
      <section className="container-pad">
        <FadeInSection>
          <div className="section-header">
            <span className="section-tag">Localização Privilegiada</span>
            <h2>História e Lazer ao seu redor</h2>
            <p>A tranquilidade que sua família precisa, perto de tudo o que vocês merecem.</p>
          </div>

          <div className="location-wrapper">
            <div className="proximity-grid">
              <div className="proximity-card">
                <div className="icon-box"><FaLandmark /></div>
                <div>
                  <h4>Vizinho ao Casarão</h4>
                  <p>Ao lado do <strong>Casarão dos Gonzaga</strong>, ícone histórico da cidade.</p>
                </div>
              </div>
              <div className="proximity-card">
                <div className="icon-box"><FaUmbrellaBeach /></div>
                <div>
                  <h4>300m do Clube Tropical</h4>
                  <p>Acesso rápido ao <strong>Tropical Thermas Clube II</strong>.</p>
                </div>
              </div>
              <div className="proximity-card">
                <div className="icon-box"><FaPersonRunning /></div>
                <div>
                  <h4>Vida Saudável</h4>
                  <p>Próximo à Pista de Cooper e Rua da Feira.</p>
                </div>
              </div>
              <div className="proximity-card">
                <div className="icon-box"><MdLocalGroceryStore /></div>
                <div>
                  <h4>Facilidades</h4>
                  <p>Supermercados, padarias e gastronomia a poucos metros.</p>
                </div>
              </div>
            </div>

            <div className="map-container">
               {/* URL CORRIGIDA PARA O MAPA CARREGAR CORRETAMENTE */}
               <iframe 
                className="map-embed"
                src="https://maps.google.com/maps?q=Rua+7+Av+A+Qd+04+Lt+27+Itaguai+1+Caldas+Novas&t=m&z=16&output=embed&iwloc=near"
                loading="lazy"
                title="Mapa Gabana's House"
                allowFullScreen
              ></iframe>
              <div className="map-overlay-info">
                <FaLocationDot /> Rua 7 - Av. A, Qd. 04 Lt. 27 - Itaguai 1
              </div>
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
            <div className="amenity-card"><FaPersonSwimming /><h3>Piscina Aquecida</h3><p>Com LED e hidromassagem.</p></div>
            <div className="amenity-card"><MdOutdoorGrill /><h3>Área Gourmet</h3><p>Churrasqueira completa.</p></div>
            <div className="amenity-card"><FaGamepad /><h3>Diversão</h3><p>Mesa de bilhar.</p></div>
            <div className="amenity-card"><FaSnowflake /><h3>Climatização</h3><p>Ar condicionado nos quartos.</p></div>
            <div className="amenity-card"><FaWifi /><h3>Wi-Fi</h3><p>Internet Fibra rápida.</p></div>
            <div className="amenity-card"><FaShieldHalved /><h3>Segurança</h3><p>Bairro tranquilo e monitorado.</p></div>
            <div className="amenity-card"><FaKitchenSet /><h3>Cozinha</h3><p>Completa e equipada.</p></div>
            <div className="amenity-card"><FaCar /><h3>Garagem</h3><p>Espaço coberto.</p></div>
          </div>
        </FadeInSection>
      </section>

      {/* AVALIAÇÕES E NOTAS */}
      <section className="container-pad">
         <FadeInSection>
            <div className="section-header">
                <span className="section-tag">Depoimentos</span>
                <h2>Quem veio, amou!</h2>
                <p>Nossa dedicação refletida nas notas máximas de quem se hospedou.</p>
            </div>

            {/* PLACAR DE NOTAS */}
            <div style={{
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '15px', 
                justifyContent: 'center', 
                marginBottom: '50px'
            }}>
                <div className="score-badge">
                    <span className="score-val">10</span>
                    <span className="score-label"><MdCleaningServices/> Limpeza</span>
                </div>
                <div className="score-badge">
                    <span className="score-val">9.9</span>
                    <span className="score-label"><MdSentimentVerySatisfied/> Conforto</span>
                </div>
                <div className="score-badge">
                    <span className="score-val">9.9</span>
                    <span className="score-label"><FaWifi/> Comodidades</span>
                </div>
                <div className="score-badge">
                    <span className="score-val">9.6</span>
                    <span className="score-label"><FaLocationDot/> Localização</span>
                </div>
            </div>

            {/* GRID DE COMENTÁRIOS */}
            <div className="reviews-grid">
                {reviewsData.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="review-stars">
                                {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <div className="review-source-icon">
                                <FaCalendarCheck style={{color: "#003580"}} />
                            </div>
                        </div>
                        <p className="review-text">"{review.text}"</p>
                        <div className="review-author">
                            <div className="author-avatar">{review.name.charAt(0)}</div>
                            <div className="author-info">
                                <h5>{review.name}</h5>
                                <span>{review.date} • via {review.source}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </FadeInSection>
      </section>
    </>
  );
};

export default Home;