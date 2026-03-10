import React from 'react';

const GalleryPreview = () => {
  return (
    <section className="py-24 px-6 lg:px-12 xl:px-24 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[50vh] min-h-[400px] lg:h-[70vh]">
        <div className="w-full h-full overflow-hidden rounded-l-2xl group cursor-pointer relative">
          <img src="/img/Piscina.png" alt="Piscina de Dia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4 h-full">
          <div className="overflow-hidden group cursor-pointer relative">
            <img src="/img/Churrasqueira.png" alt="Gourmet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="overflow-hidden rounded-tr-2xl group cursor-pointer relative">
            <img src="/img/Sala.png" alt="Sala" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="overflow-hidden group cursor-pointer relative">
            <img src="/img/Suite.png" alt="Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="overflow-hidden rounded-br-2xl group cursor-pointer relative">
            <img src="/img/fachada.png" alt="Fachada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button className="border border-[#2C2C2C] bg-[#141414] hover:bg-[#222] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors">
          Ver todas as fotos
        </button>
      </div>
    </section>
  );
};

export default GalleryPreview;