import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen Navigasi
// Pastikan huruf 'n' kecil sesuai dengan nama file di folder kamu
import Navbar from './components/navbar'; 

// Import Halaman-Halaman Utama
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* 
        Wajib menggunakan w-full dan min-h-screen tanpa padding/margin 
        agar background gradasi di setiap halaman bisa tampil FULL.
      */}
      <div className="w-full min-h-screen bg-[#0f1115] text-white">
        
        {/* Navbar diletakkan di luar Routes agar selalu muncul di semua halaman */}
        <Navbar />

        {/* 
          Main wrapper untuk konten. 
          Tidak menggunakan class 'container' agar tidak ada jarak kosong di samping. 
        */}
        <main className="w-full">
          <Routes>
            {/* Halaman Utama (Landing Page) */}
            <Route path="/" element={<Profile />} />
            
            {/* Halaman Lainnya */}
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;