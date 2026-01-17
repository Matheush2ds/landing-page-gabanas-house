import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaAirbnb, FaCalendarCheck } from 'react-icons/fa6';

const Reservas = () => {
  const linkWhatsapp = "https://wa.me/5564992415277?text=Gostaria%20de%20reservar!";
  const linkAirbnb = "https://www.airbnb.com.br/rooms/952305594473672721";
  const linkBooking = "https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html";

  return (
    <div className="container-pad" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <Helmet>
        <title>Reservas | Gabana's House Caldas Novas</title>
        <meta name="description" content="Faça sua reserva na Gabana's House pelo Airbnb, Booking ou direto pelo WhatsApp com desconto. Consulte disponibilidade agora." />
        <link rel="canonical" href="https://gabanashousetemporada.vercel.app/reservas" />
      </Helmet>

      <div className="section-header">
        <span className="section-tag">Garanta sua data</span>
        <h2>Escolha onde reservar</h2>
        <p>Oferecemos flexibilidade e segurança em diversas plataformas.</p>
      </div>

      <div className="reserva-grid" style={{ display: 'grid', gap: '20px', maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Card WhatsApp */}
        <div className="amenity-card" style={{ border: '1px solid var(--whatsapp)' }}>
          <FaWhatsapp style={{ fontSize: '3rem', color: 'var(--whatsapp)' }} />
          <h3>Reserva Direta (Menor Taxa)</h3>
          <p>Fale diretamente com o proprietário, sem taxas de plataforma. Pagamento seguro via PIX ou Cartão.</p>
          <a href={linkWhatsapp} className="btn-big btn-whatsapp-hero" style={{ marginTop: '15px', width: '100%' }}>
            Chamar no WhatsApp
          </a>
        </div>

        {/* Card Airbnb */}
        <div className="amenity-card">
          <FaAirbnb style={{ fontSize: '3rem', color: 'var(--airbnb)' }} />
          <h3>Via Airbnb</h3>
          <p>Superhost. Pagamento parcelado e garantia AirCover.</p>
          <a href={linkAirbnb} className="btn-big btn-airbnb" style={{ marginTop: '15px', width: '100%' }}>
            Ver no Airbnb
          </a>
        </div>

        {/* Card Booking */}
        <div className="amenity-card">
          <FaCalendarCheck style={{ fontSize: '3rem', color: 'var(--booking)' }} />
          <h3>Via Booking.com</h3>
          <p>Programa Genius e facilidade de cancelamento.</p>
          <a href={linkBooking} className="btn-big btn-booking" style={{ marginTop: '15px', width: '100%' }}>
            Ver no Booking
          </a>
        </div>

      </div>
    </div>
  );
};

export default Reservas;