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
      {/* --- MOBILE MENU OVERLAY (HALF WINDOW / 50vh) --- */}
<>
  {/* 1. Backdrop (Latar belakang transparan untuk area bawah) */}
  <div 
    onClick={toggleMenu}
    className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden transition-all duration-500 ${
      isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  />

  {/* 2. Menu Drawer (Hanya Setengah Jendela) */}
  <div className={`
    fixed top-0 left-0 w-full z-[110] lg:hidden
    bg-[#020617]/95 backdrop-blur-3xl border-b border-white/10
    transition-all duration-500 ease-in-out transform
    ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
    /* Tinggi Tepat Setengah Window */
    h-[50vh] flex flex-col justify-center items-center px-8
  `}>
    
    {/* Dekorasi Garis Cahaya di dalam menu */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

    {/* Links Menu */}
    <div className="flex flex-col items-center gap-8 w-full">
      {mobileLinks.map((link, index) => (
        <Link 
          key={link.name} 
          to={link.path} 
          onClick={toggleMenu}
          className={`text-white text-3xl font-black uppercase tracking-[0.3em] transition-all duration-500 hover:text-blue-400 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {link.name}
        </Link>
      ))}
    </div>

    {/* Footer Kecil di bawah Menu Laci */}
    <div className="absolute bottom-6 flex flex-col items-center gap-2">
      <div className="w-10 h-[1px] bg-white/20"></div>
      <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.5em]">
        Rayhanza Portfolio
      </p>
    </div>
  </div>
</>
    </>
  );
};

export default Navbar;