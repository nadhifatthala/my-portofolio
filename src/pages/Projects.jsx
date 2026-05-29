import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarsBackground from '../components/StarsBackground'; // Pastikan import ini ada

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "01",
      title: "VIRTUAL REALITY",
      tags: ["React", "Three.js", "Design"],
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1000",
      path: "/project-a"
    },
    {
      id: "02",
      title: "CRYPTO DASH",
      tags: ["Tailwind", "Next.js", "API"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
      path: "/project-b"
    },
    {
      id: "03",
      title: "E-COMMERCE 2.0",
      tags: ["Redux", "Firebase", "UI"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      path: "/project-c"
    },
    {
      id: "04",
      title: "AI DASHBOARD",
      tags: ["Python", "React", "AI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      path: "/project-d"
    }
  ];

  return (
    /* 
       BACKGROUND DISAMAKAN DENGAN PROFILE:
       - Gradient: from-[#020617] via-[#1e1b4b] via-[#2e1065] via-[#1e1b4b] to-[#020617]
    */
    <div className="w-full min-h-screen bg-gradient-to-b from-[#020617] via-[#1e1b4b] via-[#2e1065] via-[#1e1b4b] to-[#020617] relative overflow-x-hidden flex flex-col items-center">
      
      {/* 1. EFEK BINTANG YANG SAMA DENGAN PROFILE */}
      <StarsBackground />

      {/* 2. EFEK GRAIN (Opsional, tetap dipertahankan untuk tekstur premium) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://as1.ftcdn.net/v2/jpg/01/01/24/74/1000_F_101247401_7A9S8T9L1V9yL7v0F1v1zV7J7w3J7w3J.jpg')]"></div>

      {/* --- KONTEN UTAMA --- */}
      <section className="relative z-10 w-full max-w-[1400px] px-6 pt-40 lg:pt-64 pb-40 flex flex-col items-center">
        <br /> <br /> <br /> <br /> 
        {/* HEADER TENGAH */}
        <div className="w-full flex flex-col items-center text-center mb-24 md:mb-44 px-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-10">
            My 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 italic">
              Projects.
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-blue-200/40 text-base md:text-xl font-light leading-relaxed">
            Klik pada kartu untuk melihat detail proyek secara mendalam.
          </p>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full items-start">
          {projects.map((proj) => (
            <div 
              key={proj.id} 
              onClick={() => navigate(proj.path)}
              className="group relative flex flex-col items-center w-full cursor-pointer"
            >
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl md:text-[10rem] font-black text-white/[0.02] italic select-none z-0 transition-colors group-hover:text-blue-500/10">
                {proj.id}
              </span>

              <div className="group relative z-10 w-full bg-white/[0.03] border border-white/10 rounded-[40px] md:rounded-[60px] p-6 md:p-12 overflow-hidden backdrop-blur-3xl transition-all duration-700 hover:border-blue-500/40 shadow-2xl hover:bg-white/[0.07] hover:-translate-y-3">
                
                <div className="w-full overflow-hidden rounded-[25px] md:rounded-[45px] aspect-video mb-10 border border-white/5">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                </div>

                <div className="flex flex-col items-center text-center px-4">
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-4 py-1 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-white/10 rounded-full text-blue-300 bg-blue-500/5">
                  
                      </span>
                    ))}
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 transition-colors group-hover:text-blue-400 leading-none text-white">
                    {proj.title}
                  </h3> <br /> 

                  <p className="text-white text-sm md:text-lg font-semibold leading-relaxed max-w-sm mx-auto mb-8">
                    Menciptakan solusi digital inovatif dengan fokus pada pengalaman pengguna yang luar biasa.
                  </p>

                  <div className="flex items-center gap-3 text-blue-400/40 group-hover:text-blue-400 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">View Project</span>
                    <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-64 md:mt-96 flex flex-col items-center text-center w-full">
            <div className="h-40 w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent mb-16"></div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-20 italic uppercase text-white">
                READY TO START <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">A PROJECT?</span>
            </h2>
            <button 
              onClick={() => window.location.href = "mailto:youremail@gmail.com"}
              className="px-16 py-8 bg-white text-black font-black text-xl uppercase tracking-[0.4em] rounded-full transition-all hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 shadow-[0_30px_60px_rgba(59,130,246,0.3)]"
            >
                GET IN TOUCH
            </button>
        </div>

      </section>
    </div>
  );
};

export default Projects;