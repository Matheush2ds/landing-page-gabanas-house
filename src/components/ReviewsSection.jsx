import React from 'react';
import { FaStar } from 'react-icons/fa6';

const REVIEWS = [
  { name: "Martins", text: "A casa está linda, tudo novo e limpinho. O proprietário nos recebeu super bem, a piscina climatizada é uma delícia.", date: "Janeiro 2026" },
  { name: "Marlice", text: "Gostei de tudo na casa, espaçosa, todos os quartos com suíte. A localização é excelente, perto de tudo.", date: "Dezembro 2025" },
  { name: "Fernando", text: "Experiência maravilhosa. O local é exatamente como descrito, muito organizado e com todas as comodidades.", date: "Novembro 2025" }
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 xl:px-24 bg-dark-card border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaStar className="text-gold text-3xl animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-serif leading-none text-white">4.9</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white/90">Amada por nossos hóspedes</h3>
          </div>
          <p className="text-gold text-sm uppercase tracking-[0.2em] font-bold">
            Avaliações reais via Booking
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-dark-surface p-8 md:p-10 border border-white/10 rounded-xl flex flex-col justify-between hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-500 group">
              <div>
                <div className="flex gap-1 text-gold text-sm mb-6">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}/>)}
                </div>
                <p className="text-white/70 text-lg italic leading-relaxed mb-8">"{rev.text}"</p>
              </div>
              <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-bg border border-white/10 flex items-center justify-center font-serif text-gold text-xl group-hover:border-gold/50 transition-colors">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{rev.name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;