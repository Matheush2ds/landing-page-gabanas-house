import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';

const reviewsData = [
  { id: 1, name: "Martins", source: "Booking", text: "A casa está linda, tudo novo e limpinho. O proprietário nos recebeu super bem, atendeu todas as nossa necessidades, a piscina climatizada é uma delicia.", stars: 5, date: "Estadia em Janeiro" },
  { id: 2, name: "Ingrid", source: "Booking", text: "Casa muito organizada, fui recebida com a casa bem cheirosa e limpa!!", stars: 5, date: "Estadia em Fevereiro" },
  { id: 3, name: "Fernando", source: "Booking", text: "Tivemos uma experiência maravilhosa nesta casa. O local é exatamente como descrito, com todas as comodidades necessárias.", stars: 5, date: "Estadia em Março" }
];

const Reviews = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-dark-bg text-white border-t border-white/5 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-end mb-24 animate-fade-in-up">
          <div className="lg:w-3/5">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-6">
              A Experiência
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-white drop-shadow-lg">
              Palavras de quem<br />
              <span className="italic text-white/60">já viveu isso.</span>
            </h2>
          </div>
          <div className="lg:w-2/5 pb-2">
            <p className="text-lg text-white/60 leading-relaxed font-sans">
              Não se trata apenas de alugar uma casa, mas de garantir que os dias da sua família sejam impecáveis do check-in ao check-out.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-x-16">

          <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-16 lg:pb-0 lg:pr-16 relative group">

            <FaQuoteLeft className="absolute -top-8 -left-8 text-8xl text-white/5 -z-10 group-hover:text-gold/10 transition-colors duration-700 transform -scale-x-100" />
            
            <div>
              <div className="flex gap-2 text-gold text-sm mb-10">
                {[...Array(reviewsData[0].stars)].map((_, i) => (
                  <FaStar key={i} className="group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-snug text-white mb-12">
                "{reviewsData[0].text}"
              </p>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-dark-surface border border-white/10 flex items-center justify-center text-gold font-serif text-2xl shadow-lg group-hover:border-gold/30 transition-colors">
                {reviewsData[0].name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-base tracking-wide text-white">{reviewsData[0].name}</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{reviewsData[0].date}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            {reviewsData.slice(1).map((review) => (
              <div key={review.id} className="group p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl hover:bg-dark-surface/50 border border-transparent hover:border-white/5 transition-all duration-500 cursor-default">
                <div className="flex gap-1 text-gold text-xs mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-lg text-white/50 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <p className="font-bold text-sm text-white">{review.name}</p>
                  <p className="text-xs text-white/30 uppercase tracking-wider group-hover:text-gold/60 transition-colors">{review.source}</p>
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