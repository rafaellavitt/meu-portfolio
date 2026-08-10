import { useState } from 'react'
import HoverUnderline from "./components/HoverUnderline";
import MagneticButton from './components/MagneticButton';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="bg-radial from-[#0d0226] from-40% to-[#10003a]"> {/* tag pai */}
            <header className="px-[4%] flex box-border justify-center h-14">
                <div className="my-8 py-2 px-10 font-medium border-[#bc96e6] border rounded-3xl backdrop-blur-md fixed max-w-7xl flex items-center justify-between gap-15 my-5">
                        {/* menu desktop */}
                        <nav className="">
                            <ul className="flex gap-15 list-none">
                                <li className="inline-block text-[#bc96e6] no-underline">
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
                        <div className="px-4 rounded-md text-[#bc96e6]">    
                            <HoverUnderline href="#projetos">Projetos</HoverUnderline>
                        </div> {/* fechando botao de contato */}
                </div>
            </header>
            <main>
                {/* topo do site */}
                <section className="topo-do-site text-[#bc96e6] pt-16 pb-30 px-4">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="font-poppins items-center justfy-center text-[#bc96e6] mb-8 mt-8 text-2xl">OLÁ SOU</h3>
                        <h1 className="p-10 text-8xl leading-10 font-paytone text-transparent bg-clip-text bg-linear-to-r from-[#5e4976] via-[#bc96e6] to-[#5e4976] m-4">
                        RAFAELLA VITORIA
                        </h1>
                        <div className="h2 my-6">
                            <h2 className="typewriter overflow-hidden whitespace-nowrap border-r-2 border-r-white text-[#bc96e6] my-6 text-3xl tracking-wide">
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
                        <h2 className="titulo text-[#ffff] mt-10 p-10 text-3xl font-medium">Sobre mim:</h2>
                            <p className=" text-[#ffff] pl-10 text-2xl justify-start">
                            I'm a software engineer with experience building enterprise 
                            workflow solutions at Deloitte and developing full-stack products, real-time multiplayer systems, and scalable web applications.
                            At Deloitte, I designed automated invoice approval 
                            logic for Vendor Invoice Management across 25+ geographies, supporting 90% automated processing, and built a custom SAP Fiori launchpad tile used by 10,000+ users.
                            Outside of enterprise work, I build projects that push technical boundaries — 
                            from real-time multiplayer word games with Web Worker trie scanning to full-stack e-commerce platforms deployed on AWS. My stack: React, Node.js, Supabase, and cloud deployment platforms.
                            </p>
                </section>
                {/* especialidades */}
                <section id="especialidades" className="especialidades py-10 px-[4%] flex gap-[10px]">
                        <h2 className="titulo text-[#fff]">MINHAS ESPECIALIDADES</h2>
                        <div className="flex text-[#bc96e6] w-[100%] max-w-[200%] text-center py-[35px] px-[30px] m-auto mt-[30px] mb-[300px] border-2 border-[#bc96e6] rounded-[20px] box-border ">
                            <div className="esp-box hover:bg-black hover:scale-105 transition-all duration-400 ease-in-out"> {/* box html */}
                                <i className="bi bi-filetype-html text-[#bc96e6] block mb-[10px]"></i>
                                    <h3 className ="text-[20px] m-[0]">HTML</h3>
                            </div> {/* fechando esp-box */}
                                <div className="esp-box"> 
                                    <i className="bi bi-filetype-css text-[#bc96e6] block mb-[10px]"></i>
                                        <h3>CSS</h3>
                            </div> {/* fechando esp-box */}
                                <div className="esp-box hover:bg-black hover:scale-105 transition-all duration-400 ease"> 
                                    <i className="bi bi-filetype-js text-[#bc96e6] block mb-[10px]"></i>
                                        <h3>JavaScript</h3>                            
                                </div> {/* fechando esp-box */}
                        </div> {/* fechando flex */}
                </section>
            </main>
    </div>
    )
}
export default App