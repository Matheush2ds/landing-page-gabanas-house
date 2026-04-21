import React from 'react';
import { motion } from 'framer-motion';
import { FaPersonSwimming, FaSnowflake, FaWifi, FaKitchenSet } from 'react-icons/fa6';
import { MdOutdoorGrill } from 'react-icons/md';

const AMENITIES = [
  { num: '01', icon: <FaPersonSwimming />, title: 'Piscina Climatizada', desc: 'Iluminação a LED e hidromassagem particular.' },
  { num: '02', icon: <MdOutdoorGrill />, title: 'Área Gourmet', desc: 'Churrasqueira a carvão e espaço de convivência integrado.' },
  { num: '03', icon: <FaSnowflake />, title: 'Climatização', desc: 'Ar condicionado em todas as suítes e ambientes sociais.' },
  { num: '04', icon: <FaWifi />, title: 'Wi-Fi Fibra', desc: 'Alta velocidade e estabilidade em todo o imóvel.' },
  { num: '05', icon: <FaKitchenSet />, title: 'Cozinha Completa', desc: 'Totalmente equipada para o seu conforto.' },
];

const Amenities = () => {
  return (
    <section className="py-32 lg:py-48 bg-[#000E1D] relative overflow-hidden">
      
      {/* Luz de fundo suave e estática */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gabana-gold/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Cabeçalho */}
        <div className="mb-20 lg:mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-px bg-gabana-gold" />
              <span className="text-gabana-gold text-xs font-sans tracking-[0.4em] uppercase font-bold">
                O Diferencial
              </span>
            </div>
            <h2 className="font-serif text-white leading-[1] tracking-tight" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}>
              A anatomia <br />
              <span className="italic text-gabana-gold">do conforto.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-sm"
          >
            <p className="text-[#F6F4F0]/80 text-lg lg:text-xl font-sans leading-relaxed border-l-2 border-gabana-gold pl-6">
              A exclusividade de um resort, com a privacidade e o calor de um lar 100% seu.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-32 mt-10">
          {AMENITIES.map((item, idx) => {
            const isOdd = idx % 2 !== 0; 

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col p-8 lg:p-12 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gabana-gold/30 transition-all duration-500 ${
                  isOdd ? 'lg:mt-32' : 'lg:mb-32'
                }`}
              >
                <span className="absolute top-4 right-8 font-serif text-white/[0.03] group-hover:text-gabana-gold/10 transition-colors duration-500 text-8xl lg:text-[9rem] leading-none pointer-events-none select-none">
                  {item.num}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-gabana-gold text-5xl lg:text-6xl mb-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">
                    {item.icon}
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="font-serif text-white text-3xl lg:text-4xl mb-4 group-hover:text-gabana-gold transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-[#F6F4F0]/70 text-lg font-sans leading-relaxed group-hover:text-[#F6F4F0] transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gabana-gold group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;