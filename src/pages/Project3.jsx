import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project3 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#020617] text-white p-10 pt-32">
      <button onClick={() => navigate('/')} className="mb-10 text-blue-400 font-bold">← BACK TO HOME</button>
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-4 uppercase italic tracking-tighter">E-COMMERCE 2.0</h2>
        <h3 className="text-xl text-gray-400 italic mb-12 underline decoration-blue-500 underline-offset-8">Screenshots and details of the project</h3>
        
        <div className="flex flex-col gap-10">
          <img src="/certs/image5.png" className="w-full rounded-3xl border border-white/10 shadow-2xl" alt="img1" />
          <img src="/certs/image6.png" className="w-full rounded-3xl border border-white/10 shadow-2xl" alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default Project3;