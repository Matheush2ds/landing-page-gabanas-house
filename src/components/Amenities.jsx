import React from 'react';
import { FaPersonSwimming, FaGamepad, FaSnowflake, FaWifi, FaKitchenSet, FaCheck } from 'react-icons/fa6';
import { MdOutdoorGrill } from 'react-icons/md';

const AMENITIES = [
  { icon: <FaPersonSwimming />, title: "Piscina Climatizada", desc: "Com iluminação LED e hidromassagem." },
  { icon: <MdOutdoorGrill />, title: "Área Gourmet", desc: "Churrasqueira a carvão e amplo espaço." },
  { icon: <FaGamepad />, title: "Salão de Jogos", desc: "Mesa de bilhar profissional integrada." },
  { icon: <FaSnowflake />, title: "Ambientes Climatizados", desc: "Ar-condicionado em todas as suítes." },
  { icon: <FaWifi />, title: "Wi-Fi Fibra Óptica", desc: "Alta velocidade para lazer e home office." },
  { icon: <FaKitchenSet />, title: "Cozinha Completa", desc: "Totalmente equipada com eletrodomésticos." }
];

const Amenities = () => {
  return (
    <section className="py-24 px-6 lg:px-12 xl:px-24 bg-[#141414] border-y border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">O Diferencial</span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-10 leading-tight">Por que escolher<br />a nossa casa?</h2>
          <ul className="space-y-8">
            {[
              "Casa inteira 100% privativa para si",
              "Projeto focado em famílias e descanso",
              "Localização premium e silenciosa",
              "Limpeza impecável e enxoval padrão"
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaCheck className="text-[#D4AF37] text-xs" />
                </span>
                <span className="text-[#A39D98] text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 lg:pl-16 lg:border-l border-[#2C2C2C]">
          {AMENITIES.map((item, idx) => (
            <div key={idx} className="group">
              <div className="text-3xl text-[#D4AF37] mb-5 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 tracking-wide">{item.title}</h3>
              <p className="text-sm text-[#8A7B66] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;