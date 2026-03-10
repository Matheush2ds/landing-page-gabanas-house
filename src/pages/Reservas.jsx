import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck } from 'react-icons/fa6';

const Reservas = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Gostaria%20de%20reservar!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";

  return (
    <div className="py-32 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <Helmet>
        <title>Reservas | Gabana's House Caldas Novas</title>
      </Helmet>

      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8A7B66] block mb-6">Garanta sua data</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-6 leading-tight">Escolha onde<br/>reservar.</h2>
        <p className="text-lg text-[#5C5C5C]">Oferecemos flexibilidade e segurança nas maiores plataformas do mercado.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white border border-[#E5E0D8] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
          <FaWhatsapp className="text-5xl text-[#25D366] mb-8" />
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Reserva Direta</h3>
          <p className="text-[#5C5C5C] mb-10 flex-grow leading-relaxed">A opção com menor taxa. Fale diretamente com o proprietário e garanta as melhores condições.</p>
          <a href={linkWhatsapp} className="w-full bg-[#1A1A1A] text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#333] transition-colors">
            Chamar no WhatsApp
          </a>
        </div>

        <div className="bg-white border border-[#E5E0D8] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
          <FaAirbnb className="text-5xl text-[#FF385C] mb-8" />
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Via Airbnb</h3>
          <p className="text-[#5C5C5C] mb-10 flex-grow leading-relaxed">Somos Superhost. Aproveite a segurança do pagamento parcelado e a garantia AirCover.</p>
          <a href={linkAirbnb} className="w-full border border-[#E5E0D8] text-[#1A1A1A] hover:border-[#FF385C] hover:text-[#FF385C] py-4 font-bold uppercase tracking-widest text-xs transition-colors">
            Ver no Airbnb
          </a>
        </div>

        <div className="bg-white border border-[#E5E0D8] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
          <FaCalendarCheck className="text-5xl text-[#006CE4] mb-8" />
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Via Booking.com</h3>
          <p className="text-[#5C5C5C] mb-10 flex-grow leading-relaxed">Participe do Programa Genius e conte com a facilidade e flexibilidade de cancelamento.</p>
          <a href={linkBooking} className="w-full border border-[#E5E0D8] text-[#1A1A1A] hover:border-[#006CE4] hover:text-[#006CE4] py-4 font-bold uppercase tracking-widest text-xs transition-colors">
            Ver no Booking
          </a>
        </div>

      </div>
    </div>
  );
};

export default Reservas;