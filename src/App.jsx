import React, { useEffect, useRef } from 'react';
import './App.css';

// Ícones (Configuração segura para não quebrar o build)
import { 
  FaWifi, FaCar, FaTv, FaSnowflake, FaKitchenSet, FaPersonSwimming, 
  FaDog, FaUsers, FaWhatsapp, FaStar, FaLocationDot, FaUmbrellaBeach 
} from 'react-icons/fa6';
import { BiFridge } from 'react-icons/bi';
import { MdMicrowave, MdOutdoorGrill } from 'react-icons/md';

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
  const linkWhatsapp = "https://wa.me/5564984313444?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20saber%20mais!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";

  const galleryImages = [
    { src: "/img/Piscina1.png", alt: "Piscina Principal" },
    { src: "/img/Piscina.png", alt: "Área de Lazer" },
    { src: "/img/Bar%20pis.png", alt: "Bar Molhado" },
    { src: "/img/Churrasqueira.png", alt: "Área Gourmet" },
    { src: "/img/Cozinha%20Sinuca.png", alt: "Sinuca e Lazer" },
    { src: "/img/fachada.png", alt: "Fachada da Casa" },
    { src: "/img/Sala.png", alt: "Sala de Estar" },
    { src: "/img/Cozinha%20Completa.png", alt: "Cozinha Equipada" },
    { src: "/img/Suite.png", alt: "Suíte Master" },
    { src: "/img/Suite1.png", alt: "Banheiro Suíte" },
    { src: "/img/Quarto1.png", alt: "Quarto Confortável" },
    { src: "/img/Quarto2.png", alt: "Quarto Casal" },
    { src: "/img/Quarto3.png", alt: "Quarto Família" },
    { src: "/img/Bar.png", alt: "Detalhe Bar" },
    { src: "/img/Visão%20escada.png", alt: "Design Interior" },
    { src: "/img/Entrada.png", alt: "Hall de Entrada" },
    { src: "/img/Garagem.png", alt: "Garagem Privativa" },
    { src: "/img/Banheiro1.png", alt: "Banheiro Social" },
  ];

  return (
    <div className="App">
      
      {/* Botão Flutuante */}
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="floating-whatsapp">
        <FaWhatsapp />
      </a>

      <header className="hero" style={{ backgroundImage: "url('/img/Piscina1.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content fade-in-section is-visible">
          <p className="badge">⭐ Mais de 2 anos de Excelência em Caldas Novas</p>
          <h1>Gabana's House</h1>
          <p>Luxo, privacidade e a melhor localização da cidade.</p>
          
          <a href={linkWhatsapp} className="btn-whatsapp">
            <FaWhatsapp /> Falar no WhatsApp
          </a>
          
          <div className="btn-group">
            <a href={linkAirbnb} target="_blank" rel="noreferrer" className="btn-gold">Airbnb</a>
            <a href={linkBooking} target="_blank" rel="noreferrer" className="btn-gold">Booking</a>
          </div>
        </div>
      </header>

      <section className="container-pad">
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Localização Premium</h2>
            <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
              A conveniência de estar no centro com a tranquilidade que você merece.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }} className="split-section">
            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <FaLocationDot style={{ color: 'var(--gold)', fontSize: '1.5rem' }} />
                  <div>
                    <strong>150m do Casarão</strong>
                    <div style={{ fontSize: '0.9rem', color: '#888' }}>Ponto turístico histórico da cidade.</div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <FaCar style={{ color: 'var(--gold)', fontSize: '1.5rem' }} />
                  <div>
                    <strong>2 Minutos do Centro</strong>
                    <div style={{ fontSize: '0.9rem', color: '#888' }}>Acesso rápido a tudo.</div>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <FaUsers style={{ color: 'var(--gold)', fontSize: '1.5rem' }} />
                  <div>
                    <strong>Vizinhança Completa</strong>
                    <div style={{ fontSize: '0.9rem', color: '#888' }}>
                      Ao lado do <strong>Supermercado Reis</strong>, Rua da Feira, Pista de Cooper e as melhores sorveterias.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/place/Gabanas+House+Casa+para+Temporada/@-17.7470599,-48.6229068,16z/data=!4m6!3m5!1s0x94a7312d1659d477:0x7c900e9859e1bdc8!8m2!3d-17.7469986!4d-48.6237007!16s%2Fg%2F11vyw46yl7?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Caldas Novas"
              ></iframe>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="container-pad" style={{ background: '#111' }}>
        <FadeInSection>
          <h2 style={{ textAlign: 'center' }}>Tudo para sua estadia</h2>
          <div className="amenities-grid">
            <div className="amenity-card"><div className="amenity-icon"><FaPersonSwimming /></div><div className="amenity-title">Piscina</div></div>
            <div className="amenity-card"><div className="amenity-icon"><MdOutdoorGrill /></div><div className="amenity-title">Churrasqueira</div></div>
            <div className="amenity-card"><div className="amenity-icon"><FaUmbrellaBeach /></div><div className="amenity-title">Bar Molhado</div></div>
            <div className="amenity-card"><div className="amenity-icon"><FaWifi /></div><div className="amenity-title">Wi-Fi Grátis</div></div>
            <div className="amenity-card"><div className="amenity-icon"><FaCar /></div><div className="amenity-title">Garagem (4 carros)</div></div>
            <div className="amenity-card"><div className="amenity-icon"><FaSnowflake /></div><div className="amenity-title">Ar Condicionado</div></div>
            <div className="amenity-card"><div className="amenity-icon"><FaKitchenSet /></div><div className="amenity-title">Cozinha Completa</div></div>
            <div className="amenity-card"><div className="amenity-icon"><FaDog /></div><div className="amenity-title">Pet Friendly</div></div>
          </div>
        </FadeInSection>
      </section>

      <section className="container-pad">
        <FadeInSection>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Galeria Premium</h2>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* --- AVALIAÇÕES REAIS DO GOOGLE (ELFSIGHT) --- */}
      <section className="container-pad" style={{ background: '#111' }}>
        <FadeInSection>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>O que dizem nossos hóspedes</h2>
          
          {/* Widget Elfsight integrado */}
          <div className="elfsight-app-51eecd09-3bb0-463a-a1d0-9f6af0a06a84" data-elfsight-app-lazy></div>
          
        </FadeInSection>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #222' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Sua estadia em Caldas Novas</h2>
        <p style={{marginBottom: '30px', color: '#aaa'}}>Reservas a partir de R$ 500,00 (Baixa Temporada)</p>
        <div className="btn-group">
          <a href={linkWhatsapp} className="btn-whatsapp"><FaWhatsapp /> Reservar Direto</a>
          <a href={linkAirbnb} target="_blank" rel="noreferrer" className="btn-gold">Airbnb</a>
          <a href={linkBooking} target="_blank" rel="noreferrer" className="btn-gold">Booking</a>
        </div>
        <p style={{ marginTop: '30px', color: '#666', fontSize: '0.8rem' }}>
          Gabana's House © 2024 • Caldas Novas, GO
        </p>
      </footer>
    </div>
  );
}

export default App;