import React from 'react';
import { FaStar } from 'react-icons/fa6';

const reviewsData = [
  { id: 1, name: "Martins", source: "Booking", text: "A casa está linda, tudo novo e limpinho. O proprietário nos recebeu super bem, atendeu todas as nossa necessidades, a piscina climatizada é uma delicia.", stars: 5, date: "Estadia em Janeiro" },
  { id: 2, name: "Ingrid", source: "Booking", text: "Casa muito organizada, fui recebida com a casa bem cheirosa e limpa!!", stars: 5, date: "Estadia em Fevereiro" },
  { id: 3, name: "Fernando", source: "Booking", text: "Tivemos uma experiência maravilhosa nesta casa. O local é exatamente como descrito, com todas as comodidades necessárias.", stars: 5, date: "Estadia em Março" }
];

const Reviews = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[#F9F8F6] text-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-end mb-24">
          <div className="lg:w-3/5">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8A7B66] block mb-6">
              A Experiência
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
              Palavras de quem<br />já viveu isso.
            </h2>
          </div>
          <div className="lg:w-2/5 pb-2">
            <p className="text-lg text-[#5C5C5C] leading-relaxed">
              Não se trata apenas de alugar uma casa, mas de garantir que os dias da sua família sejam impecáveis do check-in ao check-out.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-x-16">

          <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E0D8] pb-16 lg:pb-0 lg:pr-16">
            <div>
              <div className="flex gap-1 text-[#D4AF37] text-sm mb-8">
                {[...Array(reviewsData[0].stars)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-[#1A1A1A] mb-12">
                "{reviewsData[0].text}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[#2C2C2C] font-serif text-xl">
                {reviewsData[0].name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm tracking-wide">{reviewsData[0].name}</p>
                <p className="text-xs text-[#8A7B66] uppercase tracking-widest mt-1">{reviewsData[0].date}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-12 justify-center">
            {reviewsData.slice(1).map((review) => (
              <div key={review.id} className="group">
                <div className="flex gap-1 text-[#D4AF37] text-xs mb-4">
                  {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-lg text-[#5C5C5C] leading-relaxed mb-6 group-hover:text-[#1A1A1A] transition-colors duration-300">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-[#E5E0D8] pt-4">
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-[#8A7B66] uppercase tracking-wider">{review.source}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;