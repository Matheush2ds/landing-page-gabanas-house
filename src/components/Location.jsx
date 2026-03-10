import React from 'react';
import { FaLocationDot, FaUmbrellaBeach, FaLandmark } from 'react-icons/fa6';
import { MdLocalGroceryStore } from 'react-icons/md';

const Location = () => {
  const mapQuery = "Gabanas House Casa para Temporada, Caldas Novas";

  return (
    <section className="py-32 px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 border border-[#2C2C2C] translate-x-4 -translate-y-4 hidden lg:block transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6"></div>
          <div className="relative h-[450px] w-full bg-[#141414] z-10 p-2">
            <iframe 
              className="w-full h-full grayscale-[80%] contrast-[1.2] opacity-80" 
              src={`http://googleusercontent.com/maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=m&z=15&output=embed`} 
              loading="lazy" 
              title="Mapa Gabana's House">
            </iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#2C2C2C] p-4 flex items-center gap-4">
              <FaLocationDot className="text-[#D4AF37] text-2xl flex-shrink-0" /> 
              <p className="text-sm font-bold text-white tracking-wide">Rua 7 - Av. A, Qd. 04 Lt. 27<br/><span className="text-[#8A7B66] text-xs font-normal">Caldas Novas - GO</span></p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">A Localização</span>
          <h2 className="text-4xl lg:text-6xl font-serif mb-12 leading-[1.1]">Perto de tudo.<br/><span className="italic text-[#8A7B66]">Longe do barulho.</span></h2>
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <span className="text-[#8A7B66] text-2xl mt-1"><FaUmbrellaBeach /></span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Clubes Termais</h4>
                <p className="text-[#A39D98] leading-relaxed">Apenas 300m do Tropical Thermas. Esqueça o carro na garagem e vá a pé.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-[#8A7B66] text-2xl mt-1"><FaLandmark /></span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Centro Histórico</h4>
                <p className="text-[#A39D98] leading-relaxed">Localizada vizinha ao Casarão de Caldas Novas, uma das áreas mais seguras da cidade.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-[#8A7B66] text-2xl mt-1"><MdLocalGroceryStore /></span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Conveniência Máxima</h4>
                <p className="text-[#A39D98] leading-relaxed">Mercados, padarias e pista de cooper a poucos passos de distância da porta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;