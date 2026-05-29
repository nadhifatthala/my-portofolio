import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const desktopLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  const navLinkStyle = "text-white hover:text-blue-400 text-xl font-black uppercase tracking-[0.5em] transition-all relative group";
  const underlineStyle = "absolute -bottom-3 left-0 w-0 h-1.5 bg-blue-400 transition-all group-hover:w-full";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-700 px-6 md:px-20 py-6 md:py-10 ${
          isScrolled && !isMenuOpen
            ? "bg-[#020617]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl" 
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full relative">
          
          {/* LOGO - Tetap di atas overlay */}
          <div className="z-[130]">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
              R<span className="text-blue-400">.</span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-12 md:gap-16">
            {desktopLinks.map((link) => (
              <Link key={link.name} to={link.path} className={navLinkStyle}>
                {link.name}
                <span className={underlineStyle}></span>
              </Link>
            ))}
            <div className={`w-4 h-4 rounded-full animate-ping ${isScrolled ? "bg-purple-500" : "bg-blue-400"}`}></div>
          </div>

          {/* HAMBURGER BUTTON - Tetap di atas overlay */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white text-3xl z-[130] transition-transform active:scale-90"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY (REFINED) --- */}
      <div className={`
        fixed inset-0 bg-[#020617] z-[110] transition-all duration-500 ease-in-out flex flex-col items-center justify-center lg:hidden
        ${isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"}
      `}>
        <div className="flex flex-col items-center gap-10">
          {mobileLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={toggleMenu}
              className="text-white text-4xl sm:text-5xl font-black uppercase tracking-[0.3em] hover:text-blue-400 transition-all text-center"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <p className="text-white/20 text-xs font-black uppercase tracking-[1em] italic">Rayhanza</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;