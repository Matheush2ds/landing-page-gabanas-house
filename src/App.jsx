import React, { useEffect, useRef } from 'react';
import './App.css';

import { FaWifi, FaCar, FaTv, FaSnowflake, FaKitchenSet, FaPersonSwimming } from 'react-icons/fa6';
import { BiFridge } from 'react-icons/bi';
import { MdMicrowave } from 'react-icons/md';

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
  // Links de Reserva
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10&search_mode=regular_search&check_in=2026-01-08&check_out=2026-01-13&children=0&infants=0&pets=0&source_impression_id=p3_1767838396_P3N9sbgmH5rWLSv3&previous_page_section_name=1000&federated_search_id=8ff82970-de9c-4913-b29e-35d38073ccb6";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html?label=pt-br-booking-desktop-9_uvqir24qvA6x6xGiDvCQS652796015463%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9220648%3Ali%3Adec%3Adm&aid=2311236&ucfs=1&dest_id=-633378&dest_type=city&group_adults=10&no_rooms=1&group_children=0&srpvid=dca22420eda96917108f5643fc2f5e02&srepoch=1767838572&atlas_src=sr_iw_title";

  return (
    <div className="App">
      
      {/* 1. HERO - CAPA */}
      <header className="hero" style={{ backgroundImage: "url('/img/Piscina1.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content fade-in-section is-visible">
          <p>Caldas Novas • Goiás</p>
          <h1>Gabana's House</h1>
          
          {/* Tag de Preço em Destaque */}
          <div className="price-tag">
             Reservas a partir de R$ 500,00 (Baixa Temporada)
          </div>

          <div className="btn-group">
            <a href={linkAirbnb} target="_blank" rel="noreferrer" className="btn-gold">
              Reservar no Airbnb
            </a>
            <a href={linkBooking} target="_blank" rel="noreferrer" className="btn-outline">
              Booking.com
            </a>
          </div>
        </div>
      </header>

      {/* 2. O QUE O LUGAR OFERECE (ÍCONES VIA BIBLIOTECA) */}
      <section className="container-pad amenities-section">
        <FadeInSection>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>O que esse lugar oferece</h2>
          <div className="amenities-grid">
            
            <div className="amenity-card">
              <div className="amenity-icon">
                <FaKitchenSet />
              </div>
              <div className="amenity-title">Cozinha Completa</div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <FaWifi />
              </div>
              <div className="amenity-title">Wi-Fi Rápido</div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <FaCar />
              </div>
              <div className="amenity-title">Garagem (4 carros)</div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <FaPersonSwimming />
              </div>
              <div className="amenity-title">Piscina Privada</div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <FaTv />
              </div>
              <div className="amenity-title">Smart TV</div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <FaSnowflake />
              </div>
              <div className="amenity-title">Ar-condicionado</div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <BiFridge />
              </div>
              <div className="amenity-title">Refrigerador</div>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">
                <MdMicrowave />
              </div>
              <div className="amenity-title">Microondas</div>
            </div>

          </div>
        </FadeInSection>
      </section>

      {/* 3. INTRODUÇÃO E LOCALIZAÇÃO */}
      <section className="container-pad split-section">
        <FadeInSection>
          <div className="text-content">
            <h3 style={{ color: 'var(--gold)', letterSpacing: '2px', fontSize: '0.9rem', marginBottom:'10px' }}>PREMIUM</h3>
            <h2>Localização Privilegiada</h2>
            <p>
              A 2 minutos do centro, perto do <strong>Supermercado Reis</strong> e da famosa feira. 
              Sua família terá conforto total com estacionamento incluso e segurança.
            </p>
            <p>
              Relaxe na nossa área gourmet completa enquanto as crianças curtem a piscina.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <img 
            src="/img/fachada.png" 
            alt="Fachada Gabana's House" 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
          />
        </FadeInSection>
      </section>

      {/* 4. GALERIA */}
      <section className="container-pad" style={{ background: '#111' }}>
        <FadeInSection>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Ambientes</h2>
          <div className="gallery-grid">
            <div className="gallery-item wide">
              <img src="/img/Bar%20pis.png" alt="Área da Piscina" />
            </div>
            <div className="gallery-item">
              <img src="/img/Churrasqueira.png" alt="Churrasqueira" />
            </div>
            <div className="gallery-item">
              <img src="/img/Cozinha%20Completa.png" alt="Cozinha" />
            </div>
            <div className="gallery-item">
              <img src="/img/Quarto1.png" alt="Quarto" />
            </div>
            <div className="gallery-item">
              <img src="/img/Sala.png" alt="Sala" />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* 5. RODAPÉ / CTA FINAL */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Pronto para relaxar?</h2>
        <div className="btn-group">
          <a href={linkAirbnb} target="_blank" rel="noreferrer" className="btn-gold">
             Reservar Airbnb
          </a>
          <a href={linkBooking} target="_blank" rel="noreferrer" className="btn-outline">
             Reservar Booking
          </a>
        </div>
        <p style={{ marginTop: '30px', color: '#666', fontSize: '0.8rem' }}>
          Gabana's House &copy; 2024 • Caldas Novas, GO
        </p>
      </footer>
    </div>
  );
}

export default App;