'use client';
import { useState } from 'react'
import HoverUnderline from "./components/HoverUnderline";
import MagneticButton from './components/MagneticButton';
import MouseGlow from "./components/Mouseglow";
import MagneticCard from "./components/MagneticCard.jsx";
import { TextScramble } from './components/TextScramble';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-radial from-[#180427] from-40% to-[#000000]"> {/* tag pai */}
        <MouseGlow>
            <header className="px-[4%] flex box-border justify-center h-14">
                <div className="my-8 py-2 px-10 z-50 font-medium border-primary border rounded-3xl backdrop-blur-md fixed max-w-7xl flex items-center justify-between gap-15 my-5">
                        {/* menu desktop */}
                        <nav className="">
                            <ul className="flex gap-15 list-none">
                                <li className="inline-block no-underline">
                                    <HoverUnderline href="">Início</HoverUnderline>
                                </li>
                                <li className="inline-block">
                                    <HoverUnderline href="#sobre">Sobre</HoverUnderline>
                                </li>
                                <li className="inline-block">
                                    <HoverUnderline href="#especialidades">Especialidades</HoverUnderline>
                                </li>
                                <li className="inline-block">
                                    <HoverUnderline href="#projetos">Projetos</HoverUnderline>
                                </li>
                            </ul>
                        </nav>
                        {/* botão de contato */}
                        <div className="px-4 rounded-md">    
                            <HoverUnderline href="#projetos">Contatos</HoverUnderline>
                        </div> {/* fechando botao de contato */}
                </div>
            </header>
            <main>
                {/* topo do site */}
                <section className="topo-do-site text-primary pt-16 pb-30 px-4">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h3 className="font-poppins items-center justfy-center text-offwhite mb-8 mt-8 text-2xl">OLÁ SOU</h3>
                            <h1 className="p-10 text-8xl leading-10 font-archivoblack text-transparent bg-clip-text bg-linear-to-r from-[#b59bd3] via-[#8156b0] to-[#b59bd3] m-4">
                            RAFAELLA VITORIA
                            </h1>
                            <div className="h2 my-6">
                                <h2 className="typewriter overflow-hidden whitespace-nowrap border-r-2 text-offwhite my-6 text-3xl tracking-wide">
                                Estudante de Análise de Desenvolvimento de Sistemas
                                </h2>
                            </div>
                            <div className="flex gap-10 justify-center mt-6 mb-12">
                                <MagneticButton href="#">Entre em contato</MagneticButton>  
                                <MagneticButton href="#">Download currículo</MagneticButton> 
                            </div> 
                        </div>
                </section> {/* fechando topo do site */}
                {/* sobre */}
                <section id="sobre" className="bg-section-sobre w-full py-20 px-[4%]">
                        <h2 className="titulo text-offwhite text-3xl font-medium pl-10 pb-5 pt-5">Sobre mim:</h2>
                        <div className='flex md:flex-row pl-10'>
                            <p className="text-offwhite pr-60 mt-10 mb-20 text-2xl text-left">
                            I'm a software engineer with experience building enterprise 
                            workflow solutions at Deloitte and developing full-stack products, real-time multiplayer systems, and scalable web applications.
                            At Deloitte, I designed automated invoice approval 
                            logic for Vendor Invoice Management across 25+ geographies, supporting 90% automated processing, and built a custom SAP Fiori launchpad tile used by 10,000+ users. deployed on AWS. My stack: React, Node.js, Supabase, and cloud deployment platforms.
                            </p>
                        <div className="shrink-0 flex items-center mr-35 mb-35">
                            <div className="w-125 h-100 bg-primary rounded-2xl flex items-center justify-center">
                                <svg
                                    width="96" 
                                    height="96"
                                    viewBox="0 0 96 96"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <polyline
                                    points="28,26 8,48 28,70"
                                    stroke="#010101"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    />
                                    <polyline
                                    points="68,26 88,48 68,70"
                                    stroke="#010101"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    />
                                    <line
                                    x1="56"
                                    y1="22"
                                    x2="40"
                                    y2="74"
                                    stroke="#010101"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        </div>
                </section>
                {/* especialidades */}
                <MouseGlow>
                    <section id="especialidades" className="bg-[#0f071a] py-10">
                        <TextScramble className="text-offwhite font-archivoblack text-5xl font-medium text-center pt-25 pb-15">MINHAS ESPECIALIDADES</TextScramble>
                        <div className="mb-100 grid grid-cols-[repeat(3,14rem)] justify-center gap-x-40 gap-y-8 mr-30">
                            <MagneticCard className="w-80 h-50">
                                <span className="text-offwhite text-3xl text-center">React</span>
                            </MagneticCard>
                            <MagneticCard className="w-80 h-50">
                                <span className="text-offwhite text-3xl text-center">Next . js</span>
                            </MagneticCard>
                            <MagneticCard className="w-80 h-50">
                                <span className="text-offwhite text-3xl text-center">Git</span>
                            </MagneticCard>
                            <MagneticCard className="w-80 h-50">
                                <span className="text-offwhite text-3xl text-center">Tailwind CSS</span>
                            </MagneticCard>
                            <MagneticCard className="w-80 h-50">
                                <span className="text-offwhite text-3xl text-center">JavaScript</span>
                            </MagneticCard>
                            <MagneticCard className="w-80 h-50">
                                <span className="text-offwhite text-3xl text-center">GitHub</span>
                            </MagneticCard>
                        </div>
                    </section>
                </MouseGlow>
            </main>
        </MouseGlow>
    </div>
    )
}
export default App