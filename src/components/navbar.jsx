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

  // Link untuk Desktop (Lengkap)
  const desktopLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  // Link untuk Mobile (Hanya Home & Contact sesuai permintaan)
  const mobileLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  const navLinkStyle = "text-white hover:text-blue-400 text-xl font-black uppercase tracking-[0.5em] transition-all relative group";
  const underlineStyle = "absolute -bottom-3 left-0 w-0 h-1.5 bg-blue-400 transition-all group-hover:w-full";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 md:px-20 py-8 md:py-12 ${
        isScrolled || isMenuOpen
          ? "bg-[#020617]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full relative">
        
        {/* LOGO */}
        <div className="mix-blend-difference z-[110]">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-5xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
            R<span className="text-blue-400">.</span>
          </Link>
        </div>

        {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
        <div className="hidden lg:flex items-center gap-12 md:gap-16">
          {desktopLinks.map((link) => (
            link.isAnchor ? (
              <a key={link.name} href={link.path} className={navLinkStyle}>
                {link.name}
                <span className={underlineStyle}></span>
              </a>
            ) : (
              <Link key={link.name} to={link.path} className={navLinkStyle}>
                {link.name}
                <span className={underlineStyle}></span>
              </Link>
            )
          ))}
          <div className={`w-4 h-4 rounded-full animate-ping transition-colors duration-500 ${isScrolled ? "bg-purple-500" : "bg-blue-400"}`}></div>
        </div>

        {/* --- HAMBURGER BUTTON --- */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white text-4xl z-[110] transition-transform active:scale-90"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* --- MOBILE MENU OVERLAY (REFINED) --- */}
        <div className={`
          fixed inset-0 bg-[#020617] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-16 lg:hidden
          ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}
        `}>
          {mobileLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={toggleMenu}
              className="text-white text-5xl font-black uppercase tracking-[0.4em] hover:text-blue-400 transition-all transform active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Elemen Dekoratif agar tidak sepi */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <p className="text-white/20 text-xs font-black uppercase tracking-[1em] italic">Rayhanza</p>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;