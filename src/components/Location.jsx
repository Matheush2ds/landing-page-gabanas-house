import React from 'react';
import { FaLocationDot, FaUmbrellaBeach, FaLandmark } from 'react-icons/fa6';
import { MdLocalGroceryStore } from 'react-icons/md';

const Location = () => {
  const mapQuery = "793G+6G Caldas Novas, Goiás";

  return (
    <section className="py-32 px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto bg-dark-bg">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 border border-gold/20 translate-x-4 -translate-y-4 hidden lg:block transition-transform duration-700 group-hover:translate-x-6 group-hover:-translate-y-6 rounded-2xl"></div>
          
          <div className="relative h-[450px] w-full bg-dark-surface z-10 p-2 rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-full rounded-xl grayscale-[60%] contrast-[1.1] opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=m&z=16&output=embed`} 
              loading="lazy" 
              title="Mapa Gabana's House">
            </iframe>
            
            <div className="absolute bottom-6 left-6 right-6 bg-dark-bg/90 backdrop-blur-md border border-dark-surface p-4 rounded-xl flex items-center gap-4 shadow-lg">
              <FaLocationDot className="text-gold text-3xl flex-shrink-0 animate-bounce" /> 
              <p className="text-sm font-bold text-white tracking-wide leading-relaxed">
                Rua 7 - Av. A, qd: 04 Lt: 27<br/>
                <span className="text-white/60 text-xs font-normal">Itaguai 1, Caldas Novas - GO, 75682-010</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-4">
            A Localização
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-12 leading-[1.1]">
            Perto de tudo.<br/>
            <span className="italic text-white/60">Longe do barulho.</span>
          </h2>
          
          <div className="space-y-10">
            {[
              { 
                icon: <FaUmbrellaBeach />, 
                title: "Clubes Termais", 
                desc: "Apenas 300m do Tropical Thermas. Esqueça o carro na garagem e vá a pé." 
              },
              { 
                icon: <FaLandmark />, 
                title: "Centro Histórico", 
                desc: "Localizada vizinha ao Casarão de Caldas Novas, uma das áreas mais seguras da cidade." 
              },
              { 
                icon: <MdLocalGroceryStore />, 
                title: "Conveniência Máxima", 
                desc: "Mercados, padarias e pista de cooper a poucos passos de distância da porta." 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <span className="text-white/40 text-2xl mt-1 group-hover:text-gold transition-colors duration-300">
                  {item.icon}
                </span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold-hover transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Location;