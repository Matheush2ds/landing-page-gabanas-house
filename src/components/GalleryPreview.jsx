import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const GalleryPreview = () => {
  return (
    <section className="py-24 px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto bg-dark-bg">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-3">
            Design & Conforto
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Um vislumbre da <br/><span className="italic text-white/60">sua estadia.</span>
          </h2>
        </div>
        
        <Link to="/galeria" className="hidden md:flex items-center gap-3 bg-dark-surface border border-white/10 hover:border-gold/50 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg shadow-lg group">
          Ver galeria completa
          <FaArrowRight className="text-gold group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto_auto] md:grid-rows-2 gap-3 md:gap-4 md:h-[70vh] min-h-[500px]">
        
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative aspect-[4/3] md:aspect-auto shadow-2xl">
          <img src="/img/Piscina.png" alt="Piscina de Dia" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          <div className="absolute bottom-0 left-0 p-6 md:p-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Área Externa</p>
            <h3 className="text-2xl md:text-3xl font-serif text-white">Piscina Climatizada</h3>
          </div>
        </div>

        <div className="col-span-1 row-span-1 rounded-xl md:rounded-2xl overflow-hidden group relative aspect-square md:aspect-auto shadow-lg">
          <img src="/img/Churrasqueira.png" alt="Área Gourmet" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-sm md:text-base font-bold tracking-wide">Área Gourmet</p>
          </div>
        </div>

        <div className="col-span-1 row-span-1 rounded-xl md:rounded-2xl overflow-hidden group relative aspect-square md:aspect-auto shadow-lg">
          <img src="/img/Sala.png" alt="Sala de Estar" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-sm md:text-base font-bold tracking-wide">Sala Integrada</p>
          </div>
        </div>

        <div className="hidden md:block col-span-1 row-span-1 rounded-2xl overflow-hidden group relative shadow-lg">
          <img src="/img/Suite.png" alt="Suítes" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-base font-bold tracking-wide">Suítes Premium</p>
          </div>
        </div>

        <div className="hidden md:block col-span-1 row-span-1 rounded-2xl overflow-hidden group relative shadow-lg">
          <img src="/img/fachada.png" alt="Fachada" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-base font-bold tracking-wide">Arquitetura</p>
          </div>
        </div>
      </div>

      {/* Botão Mobile */}
      <div className="mt-8 flex md:hidden justify-center w-full">
        <Link to="/galeria" className="w-full flex items-center justify-center gap-3 bg-dark-surface border border-white/10 hover:border-gold/50 text-white px-8 py-5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg shadow-lg group">
          Ver galeria completa
          <FaArrowRight className="text-gold group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </section>
  );
};

export default GalleryPreview;