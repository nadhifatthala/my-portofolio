import React from 'react';

const Skills = () => {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Vite", "Node.js", "Git"];
  return (
    <div className="min-h-screen w-full bg-[#0f1115] pt-32 px-10">
      <h2 className="text-5xl font-black text-white mb-10 tracking-tighter">MY SKILLS<span className="text-blue-500">.</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="p-10 border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 transition-all cursor-default">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;