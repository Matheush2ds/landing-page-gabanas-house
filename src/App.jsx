import React, { useEffect, useRef } from 'react';
import './App.css';

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
  return (
    <div className="App">
      
      {/* --- HERO SECTION: Impacto Visual Imediato --- */}
      {/* Usamos a Piscina1.png pois água vende muito bem em Caldas Novas */}
      <header className="hero" style={{ backgroundImage: "url('/img/Piscina1.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <p>Caldas Novas • Goiás</p>
          <h1>Gabana's House</h1>
          <h2 style={{ fontSize: '1.2rem', color: '#ddd', fontFamily: 'Montserrat, sans-serif', marginTop: '10px' }}>
            Hospedagem Premium para Famílias e Grupos
          </h2>
          
          <div style={{ marginTop: '2.5rem' }}>
            <a href="#contato" className="btn-gold">Ver Disponibilidade</a>
            <a href="#tour" className="btn-outline">Fazer Tour</a>
          </div>
        </div>
      </header>

      {/* --- INTRODUÇÃO & LOCALIZAÇÃO --- */}
      <section id="tour" className="features-container">
        <FadeInSection>
          <div className="feature-text">
            <h3 style={{ color: 'var(--gold)', letterSpacing: '2px', fontSize: '0.9rem' }}>LOCALIZAÇÃO ESTRATÉGICA</h3>
            <h2>O melhor de Caldas Novas ao seu alcance.</h2>
            <p style={{ lineHeight: '1.8', color: '#aaa', marginBottom: '20px' }}>
              Localizada a 2 minutos do centro, a Gabana's House une o luxo de uma casa completa com a conveniência urbana. 
              Próximo ao <strong>Supermercado Reis</strong>, academias e à famosa feira local.
            </p>
            <p style={{ lineHeight: '1.8', color: '#aaa' }}>
              A apenas 150 metros do histórico Casarão, você está no coração turístico da cidade, mas com a privacidade que um hotel não oferece.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', border: '1px solid var(--gold)', width: '100%', height: '100%', top: '20px', left: '20px', zIndex: 0 }}></div>
            {/* Fachada para mostrar a imponência da casa */}
            <img 
              src="/img/fachada.png" 
              alt="Fachada imponente da Gabana's House em Caldas Novas" 
              style={{ width: '100%', position: 'relative', zIndex: 1, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
            />
          </div>
        </FadeInSection>
      </section>

      {/* --- ÁREA DE LAZER (O ponto forte) --- */}
      <section className="gallery-section" style={{ background: '#111' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Lazer Privativo & Exclusivo</h2>
            <p style={{ color: '#888' }}>Piscina, Churrasqueira e Área Gourmet só para você.</p>
            <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: '20px auto' }}></div>
          </div>
        </FadeInSection>

        <div className="gallery-grid">
          {/* Destaque para a área de convivência */}
          <div className="gallery-item large">
            <img src="/img/Bar%20pis.png" alt="Área da Piscina com Bar molhado" />
            <div className="img-caption">Bar Molhado</div>
          </div>
          
          <div className="gallery-item">
            <img src="/img/Churrasqueira.png" alt="Área de Churrasqueira completa" />
          </div>
          
          <div className="gallery-item">
            <img src="/img/Cozinha%20Sinuca.png" alt="Mesa de Sinuca e diversão" />
          </div>

          <div className="gallery-item wide">
            <img src="/img/Piscina.png" alt="Piscina iluminada" />
          </div>
        </div>
      </section>

      {/* --- ACOMODAÇÕES (Conforto) --- */}
      <section className="features-container" style={{ direction: 'rtl' }}> 
      {/* direction rtl inverte a ordem texto/imagem para ficar dinâmico */}
        <FadeInSection>
          <div className="feature-text" style={{ direction: 'ltr' }}>
            <h3 style={{ color: 'var(--gold)', letterSpacing: '2px', fontSize: '0.9rem' }}>DESCANSO GARANTIDO</h3>
            <h2>Suítes e Quartos Aconchegantes</h2>
            <p style={{ lineHeight: '1.8', color: '#aaa', marginBottom: '20px' }}>
              Depois de um dia nos clubes de Caldas Novas, descanse em quartos climatizados e espaçosos. 
              Estrutura ideal para acomodar toda a família com conforto.
            </p>
            <ul className="feature-list">
              <li><span className="icon-gold">✓</span> Suítes Privativas</li>
              <li><span className="icon-gold">✓</span> Ar condicionado</li>
              <li><span className="icon-gold">✓</span> Ambientes Planejados</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', direction: 'ltr' }}>
            <img src="/img/Suite.png" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Suíte Master" />
            <img src="/img/Suite1.png" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Banheiro Suíte" />
            <img src="/img/Quarto1.png" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Quarto de Hóspedes" />
            <img src="/img/Quarto2.png" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Quarto Confortável" />
          </div>
        </FadeInSection>
      </section>

      {/* --- ESTRUTURA COMPLETA (Cozinha e Sala) --- */}
      <section className="gallery-section">
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Sinta-se em Casa</h2>
            <p style={{ color: '#888' }}>Cozinha completa e ambientes integrados.</p>
          </div>
        </FadeInSection>
        
        <div className="gallery-grid">
           <div className="gallery-item wide">
            <img src="/img/Cozinha%20Completa.png" alt="Cozinha totalmente equipada" />
          </div>
          <div className="gallery-item">
            <img src="/img/Sala.png" alt="Sala de Estar ampla" />
          </div>
          <div className="gallery-item">
            <img src="/img/Visão%20escada.png" alt="Design interior moderno" />
          </div>
          <div className="gallery-item wide">
             <img src="/img/Entrada.png" alt="Entrada acolhedora" />
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section id="contato" style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/img/Garagem.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <FadeInSection>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Garanta sua data em Caldas Novas</h2>
          <p style={{ marginBottom: '40px', fontSize: '1.2rem', color: '#ccc' }}>
            A Gabana's House é muito disputada em feriados e alta temporada.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="SEU_LINK_AIRBNB" className="btn-gold" style={{ background: '#FF5A5F', borderColor: '#FF5A5F', color: 'white' }}>
              Reservar no Airbnb
            </a>
            <a href="SEU_LINK_BOOKING" className="btn-gold" style={{ background: '#003580', borderColor: '#003580', color: 'white' }}>
              Reservar no Booking
            </a>
          </div>
          <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#666'}}>Também atendemos reservas diretas via WhatsApp</p>
        </FadeInSection>
      </section>

      <footer>
        <p>Gabana's House &copy; 2024 • O melhor de Caldas Novas, Goiás</p>
      </footer>
    </div>
  );
}

export default App;