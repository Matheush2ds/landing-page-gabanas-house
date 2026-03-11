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
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'bg-gabana-light/90 backdrop-blur-lg py-4 shadow-sm' 
        : 'bg-gradient-to-b from-black/60 to-transparent py-6 lg:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${scrolled ? 'text-gabana-dark' : 'text-white'}`}>
          Gabana's<span className="italic opacity-80 ml-1">House</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {['A Casa', 'Galeria'].map((item) => (
            <Link key={item} to={item === 'A Casa' ? '/' : `/${item.toLowerCase()}`} className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${scrolled ? 'text-gray-600 hover:text-gabana-dark' : 'text-white/80 hover:text-white'}`}>
              {item}
            </Link>
          ))}
          <Link to="/reservas" className={`px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl ${
            scrolled 
              ? 'bg-gabana-dark text-white hover:bg-black hover:-translate-y-1' 
              : 'bg-white text-gabana-dark hover:bg-white/90 hover:-translate-y-1'
          }`}>
            Reservar
          </Link>
        </div>

        <button 
          className={`md:hidden text-2xl z-50 transition-colors duration-300 ${scrolled || menuOpen ? 'text-gabana-dark' : 'text-white'}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`} onClick={() => setMenuOpen(false)}></div>

        <div className={`fixed inset-y-0 right-0 w-[85%] sm:w-[400px] bg-gabana-light shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-center px-10 gap-8 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-4xl font-serif text-gabana-dark border-b border-gray-200 pb-4">A Casa</Link>
          <Link to="/galeria" onClick={() => setMenuOpen(false)} className="text-4xl font-serif text-gabana-dark border-b border-gray-200 pb-4">Galeria</Link>
          <Link to="/reservas" onClick={() => setMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.2em] text-white bg-gabana-dark px-8 py-5 text-center mt-4 hover:bg-black transition-colors">Reservar Agora</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;