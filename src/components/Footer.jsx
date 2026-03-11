import React from 'react';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20verificar%20disponibilidade!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";
  const linkInstagram = "https://www.instagram.com/gabanas_house";

  return (
    <footer className="bg-dark-bg pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">
              Gabana's<span className="italic opacity-80 ml-1 text-gold">House</span>
            </h2>
            <p className="text-white/60 text-lg max-w-sm leading-relaxed mb-10 font-sans">
              Sua casa de temporada no coração de Caldas Novas. Onde o conforto da sua família encontra a tranquilidade que vocês merecem.
            </p>
          </div>
          
          <a href={linkInstagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-white/60 hover:text-brand-instagram transition-colors w-max group">
            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-instagram group-hover:bg-brand-instagram/10 transition-colors">
              <FaInstagram className="text-xl" />
            </span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase">Acompanhe</span>
          </a>
        </div>
        
        <div className="lg:col-span-6 lg:col-start-7 bg-dark-surface p-10 md:p-14 border border-white/5 rounded-2xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors duration-700"></div>

          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-4 relative z-10">
            Sua próxima viagem
          </span>
          <h3 className="text-3xl font-serif text-white mb-8 leading-snug relative z-10">
            Vamos agendar as suas datas?
          </h3>
          
          <div className="space-y-4 relative z-10">
            <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white text-dark-bg px-8 py-5 rounded-lg hover:bg-brand-whatsapp hover:text-white transition-all duration-300 shadow-md">
              <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-brand-whatsapp group-hover:text-white transition-colors" /> 
                Reserva Direta
              </span>
              <span className="text-sm opacity-60">→</span>
            </a>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={linkAirbnb} target="_blank" rel="noreferrer" className="flex-1 bg-dark-card border border-white/10 text-white/60 hover:text-brand-airbnb hover:border-brand-airbnb hover:bg-brand-airbnb/5 flex flex-col items-center gap-3 py-6 rounded-lg transition-all duration-300">
                <FaAirbnb className="text-3xl" />
                <span className="text-xs font-bold tracking-widest uppercase">Airbnb</span>
              </a>
              <a href={linkBooking} target="_blank" rel="noreferrer" className="flex-1 bg-dark-card border border-white/10 text-white/60 hover:text-brand-booking hover:border-brand-booking hover:bg-brand-booking/5 flex flex-col items-center gap-3 py-6 rounded-lg transition-all duration-300">
                <FaCalendarCheck className="text-3xl" />
                <span className="text-xs font-bold tracking-widest uppercase">Booking</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-xs font-bold uppercase tracking-widest text-white/40">
          © {new Date().getFullYear()} Gabana's House
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-white/40">
          Desenvolvido por <span className="text-white/80">Optima Sistemas</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;