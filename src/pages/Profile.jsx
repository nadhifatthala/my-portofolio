import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarsBackground from '../components/StarsBackground';

// Gabungkan semua icon dari font-awesome (fa) di sini agar tidak duplikat
import {
  FaUser, FaCertificate, FaCode, FaGithub, FaLinkedin, FaTwitter,
  FaInstagram, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaTimes, FaMobileAlt, FaAndroid, FaBrain, FaPalette, FaKeyboard,
  FaMicrosoft, FaBezierCurve
} from 'react-icons/fa';

// Jika ingin pakai icon Figma asli (opsional)
import { SiFigma } from 'react-icons/si';

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

const Profile = () => {
  const navigate = useNavigate();

  // STATE UNTUK MODAL SERTIFIKAT
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCert = (imgUrl) => {
    setSelectedCert(imgUrl);
    setIsModalOpen(true);
  };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    {
      name: 'FULLSTACK DEV',
      icon: <FaCode />,
      color: '#61dafb',
      desc: 'Building modern fullstack web applications using React.js, PHP, MySQL, and REST API integration with a focus on scalability and performance'
    },
    {
      name: 'UI/UX DESIGN',
      icon: <FaBezierCurve />, // atau <SiFigma /> jika di-import
      color: '#a259ff',
      desc: 'Designing intuitive and modern user experiences using Figma with a strong focus on usability and visual consistency.'
    },
    {
      name: 'APP MOBILE DESIGN',
      icon: <FaMobileAlt />,
      color: '#38bdf8',
      desc: 'Creating clean and user-friendly mobile application designs for Android and iOS using Figma.'
    },
    {
      name: 'APP MOBILE DEV',
      icon: <FaAndroid />,
      color: '#3ddc84',
      desc: 'Developing high-performance cross-platform mobile applications using Flutter with modern UI implementation.'
    },
    {
      name: 'DEEP LEARNING',
      icon: <FaBrain />,
      color: '#ff4d4d',
      desc: 'Implementing AI algorithms and neural network models for pattern recognition, prediction, and complex data analysis.'
    },
    {
      name: 'WEB DESIGN',
      icon: <FaPalette />,
      color: '#fbbf24',
      desc: 'Designing modern and professional website interfaces using Figma with a focus on branding and user experience.'
    },
    {
      name: 'DATA ENTRY',
      icon: <FaKeyboard />,
      color: '#94a3b8',
      desc: 'Managing and processing data accurately with organized database handling and efficient administrative workflows.'
    },
    {
      name: 'MICROSOFT SKILL',
      icon: <FaMicrosoft />,
      color: '#00a4ef',
      desc: 'Proficient in Microsoft Office tools such as Word, Excel, and PowerPoint for professional documentation and presentations.'
    },
  ];

  /* ─────────────────────────────────────────────
   UBAH BAGIAN DATA PROJECTS (BARIS 33-100)
───────────────────────────────────────────── */

const projects = [
  {
    id: "01",
    title: "Dashboard Food Self-Sufficiency",
    tags: ["React", "Three.js"],
    image: "proyek-html/img/bappenas.png",
    path: "/proyek-html/project1.html" // <── Arahkan ke file HTML di folder public
  },
  {
    id: "02",
    title: "Interactive Learning App",
    tags: ["Next.js", "API"],
    image: "/proyek-html/img/edu4.png",
    path: "/proyek-html/project2.html"
  },
  {
    id: "03",
    title: "Rice Leaf Detection Mobile Application",
    tags: ["Redux", "UI/UX"],
    image: "proyek-html/img/appdev1.png",
    path: "/proyek-html/project3.html"
  },
  {
    id: "04",
    title: "E-Commerce Website Database",
    tags: ["Python", "React"],
    image: "proyek-html/img/db2.png",
    path: "/proyek-html/project4.html"
  }
];

  return (
    <div className="w-full bg-gradient-to-b from-[#020617] via-[#1e1b4b] via-[#2e1065] via-[#1e1b4b] to-[#020617] relative selection:bg-blue-500">
      <StarsBackground />

      {/* ── SECTION 1: HERO ── */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-12 overflow-hidden bg-transparent pt-32 lg:pt-0">

        {/* Background R tetap di tengah */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none text-white/[0.02] z-[1]">
          <h1 className="text-[50vw] lg:text-[50rem] font-black leading-none uppercase">R</h1>
        </div>

        {/* Mengubah max-w-7xl menjadi max-w-[1600px] atau max-w-none agar lebih lebar ke kiri/kanan */}
        <div className="relative z-10 w-full max-w-[1500px] flex flex-col lg:flex-row items-center justify-between gap-12 mt-32 lg:mt-20">
<br /><br />
          {/* Sisi Teks: Memastikan lg:items-start dan lg:text-left tetap terjaga */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            <h2 className="text-[2.5rem] md:text-7xl lg:text-[8.5rem] font-black tracking-tighter leading-[0.9] uppercase drop-shadow-2xl text-white">
              Rayhanza <br /> Nadhif <br /> Athala
            </h2>

            {/* Deskripsi */}
            <p className="text-lg md:text-2xl text-white font-medium mt-10 md:mt-12 max-w-2xl leading-relaxed ">
              Front-end Developer | UI/UX Enthusiast | Android Developer | <br className="hidden md:block" /> Deep Learning
            </p><br />

            {/* Tombol-tombol: justify-start di layar besar memastikannya tetap di kiri */}
            <div className="mt-8 md:mt-12 flex flex-col items-center justify-center w-full">
  <p className="text-lg md:text-2xl text-white font-bold text-center leading-relaxed italic animate-bounce">
    Scroll Down To See About Me 
  </p>
  {/* Opsional: Tambahkan ikon panah bawah agar lebih menarik */}
  <div className="text-white text-2xl mt-2 animate-bounce">
    ↓
  </div>
</div>
          </div>

          {/* BAGIAN FOTO (Tetap di kanan) */}
          {/* SISI FOTO (Bawah di HP, Kanan di Desktop) */}
<div className="flex-1 flex justify-center lg:justify-end order-2 mt-10 lg:mt-0">
  <div className="relative group">
    {/* Efek Glow Aura di belakang foto */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[60px] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
    
    {/* Frame Foto Glassmorphism */}
    <div className=" w-[280px] h-[380px] md:w-[450px] md:h-[600px] rounded-[60px] shadow-2xl flex items-center justify-center backdrop-blur-md rotate-0 lg:rotate-2 overflow-hidden transition-all duration-700 hover:rotate-0 hover:scale-105">
      
      {/* ── UPDATE: MENGAMBIL FOTO DARI FOLDER PUBLIC/CERTS ── */}
      <img 
        src="/certs/gua.png" // <── GANTI 'hero.png' dengan nama file asli kamu (misal: profile.jpg)
        alt="Rayhanza Nadhif Athala"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
      />

    </div>
  </div>
</div>

        </div>
      </section><br /><br />

      {/* ── SECTION 2: ABOUT ME ── */}
      <section id="about" className="relative min-h-fit w-full px-6 md:px-20 pt-0 pb-32 flex flex-col items-center justify-start bg-transparent scroll-mt-32">
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none drop-shadow-2xl text-white whitespace-nowrap mt-0">
            About <span className="text-blue-500 ml-4 md:ml-8">Me.</span>
          </h2>
          <p className="text-lg md:text-2xl font-medium text-blue-200/40 italic mt-4 underline underline-offset-8 decoration-blue-500/30">Interactive Front-end Developer.</p>
          <div className="mt-12 space-y-10 text-xl md:text-5xl leading-tight text-white font-light max-w-6xl mx-auto text-center">
            <p>My name is <span className="font-black text-white">Rayhanza Nadhif Athala</span> and I am a fresh graduate from University of Trunojoyo Madura.</p>
            <p>Graduated from the <span className="text-blue-400 font-bold">Information Systems Study Program</span>, <span className="text-purple-400 font-bold">Department of Informatics Engineering</span>.<br />I am highly interested in the IT field and eager to continue learning and developing my skills.</p>
          </div><br />

          {/* TOMBOL ABOUT (ENLARGED & GLOSSY) */}
          <div className="mt-28 md:mt-40 flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-14 pb-20">
            <button
              onClick={() => scrollToSection('skills')}
              className="group relative min-w-[280px] md:min-w-[360px] px-12 py-7 md:py-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border-2 border-white/30 shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_70px_rgba(59,130,246,0.9)] overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
              <div className="absolute top-0 left-0 w-full h-[45%] bg-white/25 border-b border-white/10 rounded-t-full"></div>
              <span className="relative z-10 text-white font-black text-2xl md:text-4xl italic tracking-[0.1em] uppercase drop-shadow-lg">My Skill</span>
            </button>

            <button
              onClick={() => scrollToSection('certificates')}
              className="group relative min-w-[280px] md:min-w-[360px] px-12 py-7 md:py-10 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full border-2 border-white/30 shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_70px_rgba(168,85,247,0.9)] overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
              <div className="absolute top-0 left-0 w-full h-[45%] bg-white/25 border-b border-white/10 rounded-t-full"></div>
              <span className="relative z-10 text-white font-black text-2xl md:text-4xl italic tracking-[0.1em] uppercase drop-shadow-lg">My Certs</span>
            </button>
          </div>
        </div>
      </section> <br /><br /><br /><br /><br />

      {/* ── SECTION 3: SKILLS ── */}
      <section id="skills" className="relative min-h-screen w-full px-6 md:px-20 py-32 flex flex-col items-center justify-center bg-transparent scroll-mt-32">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase mb-6">My <span className="text-blue-600">Skills.</span></h2>
          <br /><br /><br /><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-10 md:p-12 bg-white/[0.03] border border-white/10 flex flex-col items-center text-center gap-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.07] hover:border-blue-500/40 shadow-2xl rounded-[30px] overflow-hidden"
              >
                {/* Efek Glow di belakang ikon saat hover */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />

                {/* ICON (H3 - Bagian Ikon) */}
                <div
                  className="text-7xl text-white transition-all duration-500 group-hover:scale-110 mb-4 relative z-10"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                {/* JUDUL (H3) */}
                <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight relative z-10">
                  {skill.name}
                </h3>

                {/* DESKRIPSI (P) */}
                <p className="text-white text-sm md:text-base font-medium leading-relaxed max-w-xs relative z-10">
                  {skill.desc}
                </p>

                {/* Garis Aksen Bawah (Opsional agar lebih manis) */}
                <div className="mt-4 w-12 h-1 bg-white/10 rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-blue-500 relative z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section><br /><br /><br /><br />

      {/* ── SECTION 4: PROJECTS (INTEGRATED) ── */}
      <section id="projects" className="relative w-full px-6 md:px-20 py-32 flex flex-col items-center justify-center bg-transparent scroll-mt-32">
        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center">
          <div className="w-full flex flex-col items-center text-center mb-24 md:mb-44 px-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-10 text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic">Projects.</span>
            </h1><br /><br /><br />
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full items-start">
            {projects.map((proj) => (
              <div key={proj.id} 
  onClick={() => window.location.href = proj.path}  className="group relative flex flex-col items-center w-full cursor-pointer">
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl md:text-[10rem] font-black text-white/[0.03] italic select-none z-0 transition-colors group-hover:text-blue-500/10">{proj.id}</span>
                <div className="group relative z-10 w-full bg-white/[0.03] border border-white/10 rounded-[40px] md:rounded-[60px] p-6 md:p-12 overflow-hidden backdrop-blur-3xl transition-all duration-700 hover:border-blue-500/40 shadow-2xl hover:bg-white/[0.07] hover:-translate-y-3">
                  <div className="w-full overflow-hidden rounded-[25px] md:rounded-[45px] aspect-video mb-10 border border-white/5 shadow-inner">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-col items-center text-center px-4">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter mb-6 transition-colors group-hover:text-blue-400 leading-none text-white">{proj.title}</h3>
                    <div className="flex items-center gap-3 text-blue-400/40 group-hover:text-blue-400 transition-all duration-500">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">View Project</span>
                      <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}<br /><br />
          </div>
        </div><br />
      </section>

      {/* ── SECTION 5: CERTIFICATES ── */}
      <section id="certificates" className="relative w-full px-6 md:px-20 py-32 flex flex-col items-center justify-start bg-transparent scroll-mt-32 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
          <div className="mb-20 flex flex-col items-center w-full">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 text-center">MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">CERTIFICATES.</span></h2>
            <p className="text-white italic text-lg md:text-xl max-w-2xl text-center leading-relaxed px-4">Some certificates and achievements that I have earned during my learning journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-[#0a0f1e]/80 border border-blue-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">DiBimbing</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Fullstack Web Development</h3>
              <div className="w-12 h-[3px] bg-blue-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white/80 text-lg font-light leading-relaxed mb-8">Event Online - Fullstack Web Development (22 Mei 2026) by DiBimbing.</p>
              <button onClick={() => openCert('/certs/sertif2.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">View Certificate</button>
            </div>

            <div className="group relative bg-[#0a0f1e]/80 border border-purple-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-500"><svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 3v18M3 12h18M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7" stroke="currentColor" strokeWidth="2" fill="none" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-400">Bappenas</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Internship at Bappenas</h3>
              <div className="w-12 h-[3px] bg-purple-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Ministry of National Development Planning/National Development Planning Agency (Bappenas)</p>
              <button onClick={() => openCert('/certs/image6.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-purple-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-500"><svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 3v18M3 12h18M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7" stroke="currentColor" strokeWidth="2" fill="none" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-400">DQLab</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Guide to Learn R with AI</h3>
              <div className="w-12 h-[3px] bg-purple-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Guide to Learn R with AI at DQLab (18 April 2024)</p>
              <button onClick={() => openCert('/certs/image1.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-all">View Certificate</button>
            </div>

            <div className="group relative bg-[#0a0f1e]/80 border border-blue-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">Dqlab</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">R Fundamental for Data Science  </h3>
              <div className="w-12 h-[3px] bg-blue-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">R Fundamental for Data Science at DQLab</p>
              <button onClick={() => openCert('/certs/image4.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-purple-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-500"><svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 3v18M3 12h18M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7" stroke="currentColor" strokeWidth="2" fill="none" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-400">DQLab</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">DATA SCIENCE FUNDAMENTALS</h3>
              <div className="w-12 h-[3px] bg-purple-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">DATA SCIENCE FUNDAMENTALS </p>
              <button onClick={() => openCert('/certs/image2.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-blue-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">Dqlab</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Python Fundamental for Data Science </h3>
              <div className="w-12 h-[3px] bg-blue-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Python Fundamental for Data Science at DQLab</p>
              <button onClick={() => openCert('/certs/image3.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-blue-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">Kelas Work</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Figma untuk UI/UX Mobile Apps</h3>
              <div className="w-12 h-[3px] bg-blue-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Belajar Figma untuk UI/UX Mobile Apps. Include : Wireframe, Prototyping, Design System and Project </p>
              <button onClick={() => openCert('/certs/mobile.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-blue-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500"><svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">DiBimbing</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Event Data Analytics by DiBimbing</h3>
              <div className="w-12 h-[3px] bg-blue-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Data Analytics "Stop Bilang Cuma Grafik! Ini Cara 'Ramal' Tren Bisnis Pake Power BI!"</p>
              <button onClick={() => openCert('/certs/sertif1.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-purple-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-500"><svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 3v18M3 12h18M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7" stroke="currentColor" strokeWidth="2" fill="none" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-400">DiBimbing</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Graphic Design dan UI/UX</h3>
              <div className="w-12 h-[3px] bg-purple-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Graphic Design dan UI/UX - “Masa Cuma Estetik? Rahasia Color & Typography
                Biar Makin Berkelas!</p>
              <button onClick={() => openCert('/certs/image5.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-purple-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-500"><svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 3v18M3 12h18M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7" stroke="currentColor" strokeWidth="2" fill="none" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-400">RevoU</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Software Engineering</h3>
              <div className="w-12 h-[3px] bg-purple-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Coding Camp : Software Engineering at RevoU </p> <br />
              <button onClick={() => openCert('/certs/image10.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-all">View Certificate</button>
            </div>
            <div className="group relative bg-[#0a0f1e]/80 border border-purple-500/20 rounded-xl p-10 text-left transition-all duration-500 hover:border-purple-500/50 hover:-translate-y-2 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg text-purple-500"><svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 3v18M3 12h18M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7" stroke="currentColor" strokeWidth="2" fill="none" /></svg></div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-purple-400">DiBimbing</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-snug">Cyber Security by DiBimbing</h3>
              <div className="w-12 h-[3px] bg-purple-500 mb-6 transition-all duration-500 group-hover:w-20" />
              <p className="text-white text-lg font-light leading-relaxed mb-8">Event Online - Cyber Security by DiBimbing (18 Mei 2026)</p>
              <button onClick={() => openCert('/certs/cyber.png')} className="px-7 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-all">View Certificate</button>
            </div>
          </div>



          <div className="mt-40 h-64 flex flex-col items-center justify-center opacity-20">
            <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent mb-8" />
            <p className="text-gray-500 tracking-[1em] uppercase text-[10px] font-black italic">End of Portfolio</p>
          </div>
        </div>
      </section>

      {/* --- MODAL IMAGE VIEWER --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative z-[210] max-w-5xl w-full flex flex-col items-center animate-in zoom-in duration-300">
            <button className="absolute -top-12 right-0 md:-right-12 text-white hover:text-red-500 transition-colors text-4xl" onClick={() => setIsModalOpen(false)}><FaTimes /></button>
            <div className="bg-white/5 p-2 rounded-lg border border-white/20 shadow-2xl">
              <img src={selectedCert} alt="Certificate" className="max-h-[80vh] w-auto rounded-sm object-contain" />
            </div>
            <p className="mt-4 text-white/50 italic text-sm tracking-[1em] uppercase">Click anywhere to close</p>
          </div>
        </div>
      )}

      {/* ── SOCIAL MEDIA VERTICAL ── */}
      <div className="hidden sm:flex fixed right-6 md:right-12 top-1/2 -translate-y-1/2 flex-col gap-8 md:gap-12 text-white/30 text-2xl md:text-3xl z-40">
        <a href="#" className="hover:text-blue-400 transition-all transform hover:scale-125 hover:-translate-x-2"><FaTwitter /></a>
        <a href="#" className="hover:text-blue-400 transition-all transform hover:scale-125 hover:-translate-x-2"><FaLinkedin /></a>
        <a href="#" className="hover:text-blue-400 transition-all transform hover:scale-125 hover:-translate-x-2"><FaGithub /></a>
        <a href="#" className="hover:text-blue-400 transition-all transform hover:scale-125 hover:-translate-x-2"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default Profile;