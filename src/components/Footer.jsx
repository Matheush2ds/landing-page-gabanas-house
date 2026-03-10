import React from 'react';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Gabana%27s%20House%20e%20gostaria%20de%20verificar%20disponibilidade!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721?adults=10";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";
  const linkInstagram = "https://www.instagram.com/gabanas_house";

  return (
    <footer className="bg-[#1A1816] pt-32 pb-12 border-t border-[#2C2A28]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F9F8F6] mb-6 tracking-tight">
              Gabana's<span className="italic opacity-80 ml-1">House</span>
            </h2>
            <p className="text-[#A39D98] text-lg max-w-sm leading-relaxed mb-10">
              Sua casa de temporada no coração de Caldas Novas. Onde o conforto da sua família encontra a tranquilidade que vocês merecem.
            </p>
          </div>
          
          <a href={linkInstagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 text-[#A39D98] hover:text-[#D4AF37] transition-colors w-max group">
            <span className="w-12 h-12 rounded-full border border-[#2C2A28] flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
              <FaInstagram className="text-xl" />
            </span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase">Acompanhe</span>
          </a>
        </div>
        
        <div className="lg:col-span-6 lg:col-start-7 bg-[#23211F] p-10 md:p-14 border border-[#2C2A28]">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8A7B66] block mb-4">
            Sua próxima viagem
          </span>
          <h3 className="text-3xl font-serif text-[#F9F8F6] mb-8 leading-snug">
            Vamos agendar as suas datas?
          </h3>
          
          <div className="space-y-6">
            <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#F9F8F6] text-[#1A1816] px-8 py-5 hover:bg-[#E5E0D8] transition-colors group">
              <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-[#25D366]" /> 
                Reserva Direta
              </span>
              <span className="text-[#8A7B66] text-sm group-hover:translate-x-2 transition-transform">→</span>
            </a>
            
            <div className="flex gap-4">
              <a href={linkAirbnb} target="_blank" rel="noreferrer" className="flex-1 border border-[#2C2A28] text-[#A39D98] hover:text-[#F9F8F6] hover:bg-[#FF385C]/10 hover:border-[#FF385C]/30 flex flex-col items-center gap-2 py-6 transition-all">
                <FaAirbnb className="text-2xl" />
                <span className="text-xs font-bold tracking-widest uppercase">Airbnb</span>
              </a>
              <a href={linkBooking} target="_blank" rel="noreferrer" className="flex-1 border border-[#2C2A28] text-[#A39D98] hover:text-[#F9F8F6] hover:bg-[#006CE4]/10 hover:border-[#006CE4]/30 flex flex-col items-center gap-2 py-6 transition-all">
                <FaCalendarCheck className="text-2xl" />
                <span className="text-xs font-bold tracking-widest uppercase">Booking</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-[#2C2A28] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#8A7B66]">
          © {new Date().getFullYear()} Gabana's House
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-[#5C5C5C]">
          Desenvolvido por <span className="text-[#A39D98]">Optima Sistemas</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;