import React from 'react';
import { FaStar, FaGoogle, FaAirbnb } from 'react-icons/fa6';
import './Reviews.css';
const reviewsData = [
  {
    id: 1,
    name: "Ana Paula",
    source: "Airbnb",
    date: "Dez 2025",
    text: "A casa é simplesmente maravilhosa! A piscina aquecida fez toda a diferença. Tudo muito limpo e o anfitrião super atencioso.",
    stars: 5
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    source: "Google",
    date: "Jan 2026",
    text: "Melhor localização de Caldas. Perto do centro mas muito silenciosa. A churrasqueira é top!",
    stars: 5
  },
  {
    id: 3,
    name: "Mariana Silva",
    source: "Booking",
    date: "Nov 2025",
    text: "Excelente custo benefício. Acomodou minha família de 10 pessoas confortavelmente.",
    stars: 5
  }
];

const Reviews = () => {
  return (
    <div className="container-pad dark-bg">
      <div className="section-header">
        <span className="section-tag">O que dizem</span>
        <h2>Experiências Reais</h2>
      </div>
      
      <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {reviewsData.map((review) => (
          <div key={review.id} className="amenity-card" style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
               <div style={{ display: 'flex', gap: '5px', color: '#ffb400' }}>
                 {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
               </div>
               {review.source === 'Airbnb' && <FaAirbnb style={{ color: '#FF385C', fontSize: '1.2rem' }} />}
               {review.source === 'Google' && <FaGoogle style={{ color: '#fff', fontSize: '1.2rem' }} />}
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"{review.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {review.name.charAt(0)}
              </div>
              <div>
                <h5 style={{ margin: 0, color: 'white' }}>{review.name}</h5>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>{review.date} via {review.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;