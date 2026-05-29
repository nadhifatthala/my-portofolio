import React from 'react';
import StarsBackground from '../components/StarsBackground';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
    const contactLinks = [
        {
            name: 'Email',
            label: 'Email Address',
            value: 'nadhifatthala@gmail.com',
            icon: <FaEnvelope />,
            link: 'mailto:rayhanza@example.com',
            color: 'text-white',
            hoverBg: 'hover:border-blue-500/50'
        },
        {
            name: 'LinkedIn',
            label: 'Linkedin',
            value: 'Rayhanza Nadhif Athala',
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/rayhanza-nadhif-athala-3a61b12b8',
            color: 'text-sky-400',
            hoverBg: 'hover:border-sky-500/50'
        },
        {
            name: 'GitHub',
            label: 'Github Repository',
            value: 'nadhifatthala',
            icon: <FaGithub />,
            link: 'https://github.com/nadhifatthala',
            color: 'text-white',
            hoverBg: 'hover:border-white/40'
        },
        {
            name: 'Instagram',
            label: 'Social Media',
            value: '@nadhifatthllh',
            icon: <FaInstagram />,
            link: 'https://instagram.com/username',
            color: 'text-pink-400',
            hoverBg: 'hover:border-pink-500/50'
        },
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] relative overflow-x-hidden flex flex-col items-center">

            <StarsBackground />

            <section className="relative z-10 w-full max-w-[900px] px-6 pt-40 lg:pt-56 pb-40 flex flex-col items-center">

                {/* HEADER */}
                <div className="w-full text-center mb-20 md:mb-32"><br /> <br /> <br /> <br /> <br /> <br />
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter uppercase mb-6 text-white drop-shadow-2xl">
    LET'S
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 ">
        {" "}CONNECT.
    </span>
</h1>
                    
                </div>

                <div className="w-full flex flex-col gap-6 md:gap-8"> {/* Menambah gap antar box */}
                    {contactLinks.map((item, i) => (
                        <a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            /* 
                               py-10 md:py-14 : Memperlebar atas bawah secara signifikan
                               px-10 md:px-16 : Memperlebar kiri kanan agar seimbang
                            */
                            className={`group relative w-full py-10 md:py-14 px-10 md:px-16 bg-black/40 border border-white/20 rounded-[30px] md:rounded-[50px] flex items-center justify-between transition-all duration-500 backdrop-blur-xl hover:bg-white/[0.05] hover:scale-[1.02] shadow-2xl ${item.hoverBg}`}
                        >
                            <div className="flex items-center gap-8 md:gap-12">
                                {/* Icon sedikit diperbesar agar proporsional */}
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl md:text-5xl ${item.color} shadow-inner transition-transform duration-500 group-hover:scale-110`}>
                                    {item.icon}
                                </div>

                                <div className="min-w-0 flex-1">
                                    {/* Label tetap */}
                                    <p className="text-[11px] md:text-xs uppercase tracking-[0.5em] text-white font-black mb-2">
                                        {item.label}
                                    </p>

                                    {/* PERBAIKAN DI SINI: */}
                                    <h3 className="text-2xl md:text-4xl font-black text-whitetracking-tight truncate 
                 leading-[1.2] pb-2 pr-4">
                                        
                                        {item.value}
                                    </h3>
                                </div>
                            </div>

                            {/* Action Indicator */}
                            <div className="flex items-center gap-4 text-white/10 group-hover:text-white transition-all uppercase tracking-[0.3em] text-[12px] font-black italic">
                                <span className="hidden sm:block">Open</span>
                                <FaArrowRight className="group-hover:translate-x-3 transition-transform text-xl" />
                            </div>

                            {/* Glossy Effect Overlay */}
                            <div className="absolute top-0 left-0 w-full h-[45%] bg-white/[0.03] rounded-t-[30px] md:rounded-t-[50px] pointer-events-none"></div>
                        </a>
                    ))}
                </div>

                {/* FOOTER DECORATION */}
                <div className="mt-40 opacity-10 flex flex-col items-center">
                    <div className="h-24 w-[1px] bg-gradient-to-b from-blue-500 to-transparent"></div>
                    <p className="mt-8 text-[11px] font-black tracking-[3em] uppercase italic text-center ml-[3em]">Indonesia</p>
                </div>

            </section>
        </div>
    );
};

export default Contact;