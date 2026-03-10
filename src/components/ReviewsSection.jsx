import React from 'react';
import { FaStar } from 'react-icons/fa6';

const REVIEWS = [
  { name: "Martins", text: "A casa está linda, tudo novo e limpinho. O proprietário nos recebeu super bem, a piscina climatizada é uma delícia.", date: "Janeiro 2026" },
  { name: "Marlice", text: "Gostei de tudo na casa, espaçosa, todos os quartos com suíte. A localização é excelente, perto de tudo.", date: "Dezembro 2025" },
  { name: "Fernando", text: "Experiência maravilhosa. O local é exatamente como descrito, muito organizado e com todas as comodidades.", date: "Novembro 2025" }
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 xl:px-24 bg-[#141414] border-t border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaStar className="text-[#D4AF37] text-3xl" />
              <h2 className="text-5xl md:text-6xl font-serif leading-none">4.9</h2>
            </div>
            <h3 className="text-2xl font-serif text-[#F9F8F6]">Amada por nossos hóspedes</h3>
          </div>
          <p className="text-[#8A7B66] text-sm uppercase tracking-[0.2em] font-bold">Avaliações reais via Booking</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-[#0A0A0A] p-10 border border-[#2C2C2C] flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors">
              <div>
                <div className="flex gap-1 text-[#D4AF37] text-xs mb-6">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-[#A39D98] text-lg italic leading-relaxed mb-8">"{rev.text}"</p>
              </div>
              <div className="border-t border-[#2C2C2C] pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#2C2C2C] flex items-center justify-center font-serif text-[#D4AF37]">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{rev.name}</p>
                  <p className="text-xs text-[#5C5C5C] uppercase tracking-widest">{rev.date}</p>
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