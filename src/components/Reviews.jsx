import React from 'react';
import { FaStar, FaCalendarCheck } from 'react-icons/fa6';
import { MdSentimentVerySatisfied, MdCleaningServices } from 'react-icons/md';
import { FaWifi, FaLocationDot } from 'react-icons/fa6';
import './Reviews.css'; // Certifique-se que o CSS está nesta pasta

// Dados Reais do seu Booking
const reviewsData = [
  {
    id: 1,
    name: "Martins",
    source: "Booking",
    text: "A casa está linda, tudo novo e limpinho. O proprietário nos recebeu super bem, atendeu todas as nossa necessidades, a piscina climatizada é uma delicia.",
    stars: 5,
    date: "Brasil"
  },
  {
    id: 2,
    name: "Ingrid",
    source: "Booking",
    text: "Casa muito organizada, fui recebida com a casa bem cheirosa e limpa!!",
    stars: 5,
    date: "Brasil"
  },
  {
    id: 3,
    name: "Fernando",
    source: "Booking",
    text: "Tivemos uma experiência maravilhosa nesta casa. O local é exatamente como descrito, muito organizado e com todas as comodidades necessárias...",
    stars: 5,
    date: "Brasil"
  },
  {
    id: 4,
    name: "Marlice",
    source: "Booking",
    text: "Gostei de tudo na casa, espaçosa, todos os quartos com suíte. A localização é excelente.",
    stars: 5,
    date: "Brasil"
  }
];

const Reviews = () => {
  return (
    <>
      <div className="section-header">
        <span className="section-tag">Depoimentos</span>
        <h2>Quem veio, amou!</h2>
        <p>Nossa dedicação refletida nas notas máximas.</p>
      </div>

      {/* PLACAR DE NOTAS (Design Premium) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginBottom: '50px' }}>
         <div className="score-badge">
            <span className="score-val">10</span>
            <span className="score-label"><MdCleaningServices/> Limpeza</span>
         </div>
         <div className="score-badge">
            <span className="score-val">9.9</span>
            <span className="score-label"><MdSentimentVerySatisfied/> Conforto</span>
         </div>
         <div className="score-badge">
            <span className="score-val">9.9</span>
            <span className="score-label"><FaWifi/> Comodidades</span>
         </div>
         <div className="score-badge">
            <span className="score-val">9.6</span>
            <span className="score-label"><FaLocationDot/> Localização</span>
         </div>
      </div>

      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
               <div className="review-stars">
                 {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
               </div>
               <div className="review-source-icon">
                 <FaCalendarCheck style={{color: "#003580"}} />
               </div>
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
              <div className="author-avatar">{review.name.charAt(0)}</div>
              <div className="author-info">
                <h5>{review.name}</h5>
                <span>{review.date} • via {review.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;