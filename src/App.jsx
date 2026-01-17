import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { FaBars, FaXmark, FaWhatsapp, FaInstagram, FaAirbnb, FaCalendarCheck } from 'react-icons/fa6';

import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Reservas from './pages/Reservas';
import Promo from './pages/Promo';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>GABANA'S HOUSE</Link>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link to="/galeria" onClick={() => setMenuOpen(false)}>Galeria de Fotos</Link>
          <Link to="/reservas" onClick={() => setMenuOpen(false)} className="nav-cta">Reservar</Link>
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

  const FooterActions = () => (
    <div className="btn-group">
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="btn-big btn-whatsapp-hero">
        <FaWhatsapp /> WhatsApp
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
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reservas />} />
        
        {/* Rotas da Promoção */}
        <Route path="/promo" element={<Promo />} />
        <Route path="/avaliacao" element={<Promo />} />
      </Routes>

      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Falar no WhatsApp">
        <FaWhatsapp />
        <span className="tooltip">Orçamento Rápido</span>
      </a>

      <footer id="contato" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Gabana's House</h2>
            <p>Sua casa de temporada em Caldas Novas.</p>
          </div>
          <div className="footer-actions">
            <h3>Vamos agendar sua data?</h3>
            <p className="price">Fale conosco e consulte condições especiais</p>
            <FooterActions />
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gabana's House • Todos os direitos reservados.</p>
          <p className="dev-credit">Desenvolvido por <span className="gold-text">Optima Sistemas</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;