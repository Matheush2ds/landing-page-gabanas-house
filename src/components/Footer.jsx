import React from 'react';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck, FaInstagram } from 'react-icons/fa6';

const LINKS = {
  whatsapp: 'https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20verificar%20disponibilidade!',
  airbnb: 'https://www.airbnb.com.br/rooms/952305594473672721',
  booking: 'https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html',
  instagram: 'https://www.instagram.com/gabanas_house',
  optima: 'https://www.instagram.com/optima_sistemas?igsh=MXdkeXFoNXBmN2FzZw=='
};

const Footer = () => {
  return (
    <footer className="bg-[#000E1D] pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-gabana-gold/30 to-transparent" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gabana-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          <div className="lg:col-span-5">
            <h2 className="font-serif text-gabana-cream mb-8 tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              Gabana's<span className="italic text-gabana-gold ml-2">House</span>
            </h2>
            <p className="text-gabana-muted font-sans text-lg leading-relaxed max-w-sm mb-12">
              A redefinição da sua hospedagem em Caldas Novas. Onde o conforto absoluto encontra a sua privacidade.
            </p>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-5 text-gabana-cream hover:text-gabana-gold group transition-colors duration-500">
              <div className="w-12 h-12 border border-gabana-gold/30 flex items-center justify-center rounded-full group-hover:border-gabana-gold transition-colors duration-500">
                <FaInstagram className="text-xl" />
              </div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase">@gabanas_house</span>
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 border border-gabana-border hover:border-gabana-gold/50 bg-gabana-bg hover:bg-gabana-gold hover:text-gabana-bg transition-all duration-500 text-gabana-cream group">
                  <FaWhatsapp className="text-3xl mb-4" />
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-center">Reserva Direta<br/>(Sem Taxas)</span>
                </a>
                <a href={LINKS.airbnb} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 border border-gabana-border hover:border-gabana-gold/50 bg-gabana-bg transition-all duration-500 text-gabana-muted hover:text-gabana-cream">
                  <FaAirbnb className="text-3xl mb-4" />
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase">Airbnb</span>
                </a>
                <a href={LINKS.booking} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 border border-gabana-border hover:border-gabana-gold/50 bg-gabana-bg transition-all duration-500 text-gabana-muted hover:text-gabana-cream">
                  <FaCalendarCheck className="text-3xl mb-4" />
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase">Booking.com</span>
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gabana-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gabana-muted/60 text-[10px] font-sans tracking-[0.25em] uppercase">
            © {new Date().getFullYear()} Gabana's House. Todos os direitos reservados.
          </p>
          <p className="text-gabana-muted/60 text-[10px] font-sans tracking-[0.25em] uppercase flex items-center gap-2">
            Desenvolvido Por 
            <a href={LINKS.optima} target="_blank" rel="noreferrer" className="text-gabana-gold hover:text-white transition-colors duration-300 ml-1">
              Optima Sistemas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;