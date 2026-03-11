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
    <section className="py-20 lg:py-32 px-6 lg:px-12 xl:px-24 bg-gabana-card border-y border-gabana-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="lg:w-1/3">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gabana-gold block mb-4">O Diferencial</span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-8 lg:mb-10 leading-tight">Por que escolher<br />a nossa casa?</h2>
          <ul className="space-y-6 lg:space-y-8">
            {[
              "Casa inteira 100% privativa para si",
              "Projeto focado em famílias e descanso",
              "Localização premium e silenciosa",
              "Limpeza impecável e enxoval padrão"
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span className="w-6 h-6 rounded-full bg-gabana-gold/10 flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:scale-110 group-hover:bg-gabana-gold/20">
                  <FaCheck className="text-gabana-gold text-xs" />
                </span>
                <span className="text-gabana-muted text-base lg:text-lg group-hover:text-white transition-colors">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 lg:gap-y-12 lg:gap-x-12 lg:pl-16 lg:border-l border-gabana-border">
          {AMENITIES.map((item, idx) => (
            <div key={idx} className="group p-4 -m-4 hover:bg-white/[0.02] rounded-xl transition-all duration-300">
              <div className="text-3xl lg:text-4xl text-gabana-gold mb-4 opacity-80 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 tracking-wide group-hover:text-gabana-gold transition-colors">{item.title}</h3>
              <p className="text-sm text-gabana-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;