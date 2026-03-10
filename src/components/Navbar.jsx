import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-[#F9F8F6]/95 backdrop-blur-md py-4 border-b border-[#E5E0D8] shadow-sm' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-500 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
          Gabana's<span className="italic opacity-80 ml-1">House</span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-[#5C5C5C] hover:text-[#1A1A1A]' : 'text-white/80 hover:text-white'}`}>
            A Casa
          </Link>
          <Link to="/galeria" className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-[#5C5C5C] hover:text-[#1A1A1A]' : 'text-white/80 hover:text-white'}`}>
            Galeria
          </Link>
          <Link to="/reservas" className={`px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
            scrolled 
              ? 'bg-[#1A1A1A] text-white hover:bg-[#333]' 
              : 'bg-white text-[#1A1A1A] hover:bg-white/90'
          }`}>
            Reservar
          </Link>
        </div>

        <button 
          className={`md:hidden text-2xl z-50 transition-colors duration-300 ${scrolled || menuOpen ? 'text-[#1A1A1A]' : 'text-white'}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        <div className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#F9F8F6] border-l border-[#E5E0D8] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-center px-12 gap-10 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-4xl font-serif text-[#1A1A1A] border-b border-[#E5E0D8] pb-4">A Casa</Link>
          <Link to="/galeria" onClick={() => setMenuOpen(false)} className="text-4xl font-serif text-[#1A1A1A] border-b border-[#E5E0D8] pb-4">Galeria</Link>
          <Link to="/reservas" onClick={() => setMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.2em] text-white bg-[#1A1A1A] px-8 py-5 text-center mt-8 hover:bg-[#333]">Reservar Agora</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;