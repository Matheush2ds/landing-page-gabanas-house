import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaUmbrellaBeach, FaLandmark } from 'react-icons/fa6';
import { MdLocalGroceryStore } from 'react-icons/md';

const HIGHLIGHTS = [
  {
    icon: <FaUmbrellaBeach />,
    title: 'Clubes Termais',
    desc: 'Apenas 300m do Tropical Thermas. Esqueça o carro na garagem e vá a pé.',
  },
  {
    icon: <FaLandmark />,
    title: 'Centro Histórico',
    desc: 'Vizinha ao Casarão de Caldas Novas, uma das áreas mais seguras e valorizadas da cidade.',
  },
  {
    icon: <MdLocalGroceryStore />,
    title: 'Conveniência Total',
    desc: 'Mercados, padarias e pista de cooper a poucos passos da porta.',
  },
];

const easing = [0.22, 1, 0.36, 1];
const MAP_QUERY = '793G+6G Caldas Novas, Goiás';

const Location = () => {
  return (
    <section className="py-24 lg:py-36 bg-gabana-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-16 lg:gap-20">

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, ease: easing }}
          >
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gabana-gold/20 pointer-events-none" />

              <div className="relative h-[420px] lg:h-[480px] overflow-hidden bg-gabana-card">
                <iframe
                  className="w-full h-full grayscale-[65%] contrast-[1.1] opacity-80"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=m&z=16&output=embed`}
                  loading="lazy"
                  title="Localização Gabana's House"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gabana-bg/92 backdrop-blur-sm border-t border-gabana-border px-6 py-4 flex items-center gap-4">
                  <FaLocationDot className="text-gabana-gold text-xl flex-shrink-0" />
                  <div>
                    <p className="text-gabana-cream text-sm font-sans font-medium leading-tight">
                      Rua 7 - Av. A, Qd 04 Lt 27
                    </p>
                    <p className="text-gabana-muted text-[11px] font-sans mt-0.5">
                      Itaguai 1, Caldas Novas - GO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, ease: easing }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-5 h-px bg-gabana-gold" />
              <span className="text-gabana-gold text-[10px] font-sans tracking-[0.35em] uppercase">
                Localização
              </span>
            </div>

            <h2
              className="font-serif text-gabana-cream mb-14 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Perto de tudo.<br />
              <span className="italic text-gabana-muted">Longe do barulho.</span>
            </h2>

            <div className="space-y-10">
              {HIGHLIGHTS.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-5 items-start group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.2 + idx * 0.1, ease: easing }}
                >
                  <div className="w-9 h-9 border border-gabana-gold/30 flex items-center justify-center text-gabana-gold/60 group-hover:border-gabana-gold group-hover:text-gabana-gold transition-all duration-300 flex-shrink-0 mt-0.5 text-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-gabana-cream text-xl mb-1.5 group-hover:text-gabana-gold transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gabana-muted font-sans text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;