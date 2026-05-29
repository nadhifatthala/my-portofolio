import React, { useState } from 'react';
import { ShoppingCart, Heart, Phone, Sparkles, Star } from 'lucide-react';
import { KUE_DATA } from './data';

function App() {
  const [cart, setCart] = useState([]);

  const tambahKeKeranjang = (kue) => {
    setCart([...cart, kue]);
  };

  return (
    // Background: Pink sangat muda (Soft Petal)
    <div className="min-h-screen bg-[#FFFAF0] p-4 md:p-8 text-[#4A3728] font-sans">

      {/* --- NAVBAR CARD --- */}
      <nav className="max-w-6xl mx-auto bg-white/90  rounded-3xl shadow-sm border border-pink-100 p-4 mb-8 flex justify-between items-center sticky top-4 z-50">
        <div className="flex items-center gap-2 ml-4">
          <div className="w-10 h-10 bg-[#4A3728] rounded-full flex items-center justify-center text-pink-300">
            <img
              src="/images/logonans.png"
              alt="Icon Nans"
              className="w-13 h-13 object-contain" // Atur ukuran pakai w- (width) dan h- (height)
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-[#4A3728]">NANS.</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:block px-6 py-2 font-bold text-sm text-[#4A3728] hover:text-pink-500 transition">Katalog</button>
          <button className="relative bg-pink-500 text-white p-3 rounded-2xl shadow-lg shadow-pink-200 hover:scale-105 transition-all">
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#4A3728] text-pink-200 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto space-y-8">

        {/* --- HERO CARD --- */}
        <section className="bg-[#FFDAB3] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
          <div className="p-10 md:p-16 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FFDAB3]/20 text-[#1B0C0C] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-black-500/30 mr-7">
              <Star size={14} /> Best Bakery 2026
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FFDAB3]/20 text-[#1B0C0C] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-black-500/30">
              <Star size={14} /> Homemade
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              <span className="text-[#1B0C0C]">Manisnya</span> <span className="text-[#1B0C0C]">Brownis,</span> <br />
              <span className="text-[#1B0C0C]">Gurihnya</span> <span className="text-[#1B0C0C] italic">Kroket.</span>
            </h1>
            <p className="text-[#1B0C0C]/70 text-lg mb-8 max-w-sm">
              Menghadirkan perpaduan rasa terbaik dalam setiap sajian.
              Brownis cokelat yang lembut dan kroket gurih renyah.
            </p>
            <button className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-xl shadow-pink-900/20 mr-10">
              Lihat Menu Favorit
            </button>
            <button className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-pink-900/20">
              <a href="https://wa.me/628123456789">Order via WhatsApp</a>
            </button>
          </div>
          <div className="flex-1 w-full h-[300px] md:h-[500px] mr-3 md:-translate-x-10" >
            <img
              src="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800"
              className="w-full h-full object-cover rounded-[40px]"
              alt="Chocolate Pink Cake"
            />
          </div>
        </section>

        {/* --- PRODUCT GRID (ALL CARDS) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KUE_DATA.map((kue) => (
            <div key={kue.id} className="bg-[#FFDAB3] rounded-[32px] p-5 shadow-xl shadow-pink-200/50 border border-pink-50 flex flex-col hover:scale-[1.02] transition-transform duration-300">
              {/* Image Card Container */}
              <div className="relative h-56 w-full mb-6 rounded-[24px] overflow-hidden">
                <img
                  src={kue.image}
                  alt={kue.nama}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-pink-600 shadow-sm uppercase">
                  New Recipe
                </div>
                <button className="absolute top-3 right-3 p-2.5 bg-white text-pink-500 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition">
                  <Heart size={18} fill={kue.id === 1 ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Content */}
              <div className="px-2 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#4A3728] mb-1">{kue.nama}</h3>
                <p className="text-gray-400 text-xs mb-4 flex-1">{kue.deskripsi}</p>

                <div className="flex items-center justify-between mt-4 bg-[#FDF4F5] p-3 rounded-2xl border border-pink-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-pink-400 uppercase tracking-tighter">Price</span>
                    <span className="text-lg font-black text-[#4A3728]">Rp {kue.harga.toLocaleString()}</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- NEWSLETTER / INFO CARD --- */}


        {/* --- FOOTER CARD --- */}
        <footer className="bg-[#FFDAB3] rounded-t-[40px] p-10 text-center border-t border-pink-100">
          <div className="flex justify-center gap-8 mb-6">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><Star size={20} /></div>
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><Star size={20} /></div>
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><Star size={20} /></div>
          </div>
          <p className="text-[#4A3728] font-bold text-lg mb-2">NANS BAKERY</p>
          <p className="text-[#4A3728]/400 text-xs tracking-widest">© 2024 SWEETNESS DELIVERED BY NANS</p>
        </footer>

      </div>

      {/* --- FLOATING WA BUTTON (CARD STYLE) --- */}

    </div>
  );
}

export default App;