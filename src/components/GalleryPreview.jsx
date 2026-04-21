import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const IMAGES = [
  { src: '/img/Piscina.png', label: 'Oásis Particular', sub: 'Piscina Climatizada' },
  { src: '/img/Sala.png', label: 'Integração Total', sub: 'Living & Convivência' },
  { src: '/img/Churrasqueira.png', label: 'Espaço Gourmet', sub: 'Momentos Únicos' },
  { src: '/img/Suite.png', label: 'Descanso Absoluto', sub: 'Suíte Master' },
];

const Card = ({ src, label, sub, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  
  // A mágica 4D de profundidade: diminui e escurece quando o próximo cartão sobe
  const scale = useTransform(progress, range, [1, targetScale]);
  const filterOpacity = useTransform(progress, range, [0, 0.5]);

  // Efeito Tilt Magnético
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ 
          scale, 
          top: `calc(-5vh + ${i * 35}px)` // Cria o degrau de empilhamento
        }}
        className="relative flex flex-col w-[92vw] lg:w-[75vw] h-[75vh] lg:h-[85vh] origin-top"
      >
        <motion.div
          className="w-full h-full relative rounded-t-[2rem] lg:rounded-[2.5rem] overflow-hidden group shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={src} 
            alt={label} 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out" 
          />
          
          {/* Overlay dinâmico: escurece ao ser empurrado para o fundo */}
          <motion.div className="absolute inset-0 bg-[#000E1D]" style={{ opacity: filterOpacity }} />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#000E1D] via-[#000E1D]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Textos flutuantes em 3D */}
          <div 
            className="absolute bottom-12 left-8 lg:bottom-16 lg:left-16 pointer-events-none" 
            style={{ transform: "translateZ(80px)" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#C9A84C]" />
              <p className="text-[#C9A84C] text-[10px] lg:text-xs font-sans tracking-[0.4em] uppercase font-bold drop-shadow-md">
                {sub}
              </p>
            </div>
            <h3 className="text-[#F6F4F0] font-serif text-5xl lg:text-[5.5rem] tracking-tight drop-shadow-2xl leading-none">
              {label}
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const GalleryPreview = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative bg-[#F6F4F0] z-10 pt-32 lg:pt-48 pb-[10vh]">
      
      {/* Cabeçalho Fixo no fundo enquanto os cartões sobem */}
      <div className="max-w-[100rem] mx-auto px-6 lg:px-16 mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 sticky top-10 lg:top-20 z-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-px bg-[#001429]" />
            <span className="text-[#001429] text-xs font-sans tracking-[0.4em] uppercase font-bold">
              Imersão Visual
            </span>
          </div>
          <h2 className="font-serif text-[#001429] leading-[0.9] tracking-tighter" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}>
            Sinta a <br />
            <span className="italic text-[#C9A84C]">atmosfera.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pb-4"
        >
          <Link
            to="/galeria"
            className="group flex items-center gap-6 text-[#001429] hover:text-[#C9A84C] transition-colors duration-500"
          >
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase font-bold">Ver Galeria Completa</span>
            <div className="w-12 h-px bg-[#001429] group-hover:bg-[#C9A84C] group-hover:w-24 transition-all duration-700 ease-out" />
          </Link>
        </motion.div>
      </div>

      <div className="relative mt-20 lg:mt-32">
        {IMAGES.map((img, i) => {
          // Calcula o quanto o cartão atual vai diminuir quando o próximo subir
          const targetScale = 1 - ((IMAGES.length - i) * 0.04);
          const range = [i * 0.25, 1];
          
          return (
            <Card 
              key={i} 
              i={i} 
              {...img} 
              progress={scrollYProgress} 
              range={range} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default GalleryPreview;