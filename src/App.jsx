import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="bg-radial from-[#0d0226] from-40% to-[#10003a]"> {/* tag pai */}
            <header className="px-[4%] flex box-border justify-center h-14">
                <div className="interface max-w-7xl flex items-center justify-between gap-15 my-5"> 
                    <div className="logo">
                        <a href="#">
                            <img src="images/logo.png" alt="Logo do portfólio"/>
                        </a>
                    </div>
                    {/* menu desktop */}
                    <nav className="menu-desktop">
                        <ul className="flex items-center gap-15 px-10 list-none">
                            <li className="inline-block">
                                <a href="#inicio" className="text-[#bc96e6] no-underline inline-block">
                                Inicio
                                </a>
                            </li>
                            <li className="inline-block">
                                <a href="#sobre" className="text-[#bc96e6] no-underline inline-block">
                                Sobre
                                </a>
                            </li>
                            <li className="inline-block">
                                <a href="#especialidades" className="text-[#bc96e6] no-underline inline-block">
                                Especialidades
                                </a>
                            </li>
                            <li className="inline-block">
                                <a href="#projetos"  className="text-[#bc96e6] no-underline inline-block">
                                Projetos
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* botão de contato */}
                    <div className="btn-contato px-4 py-2 rounded-md border border-[#bc96e6] text-[#bc96e6] hover:bg-[#bc96e6] hover:text-[#181717] transition-all duration-300">    
                        <a href="#">
                            <button>Contato</button>
                        </a>
                    </div> {/* fechando botao de contato */}
                </div>
            </header>

            <main>
                {/* topo do site */}
                <section className="topo-do-site text-[#bc96e6] my-16 px-4" id="inicio">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="items-center justfy-center text-[#bc96e6] mb-8 mt-8 text-2xl">Olá, sou</h3>
                        <h1 className="p-10 text-[#bc96e6] text-8xl leading-10 font-normal m-4">
                        Rafaella Vitoria
                        </h1>
                        <div className="h2 my-6">
                            <h2 className="typewriter overflow-hidden whitespace-nowrap border-r-2 border-r-white text-[#bc96e6] my-6 text-3xl tracking-wide">
                            Estudante de Análise de Desenvolvimento de Sistemas
                            </h2>
                        </div>
                        <div className="btn-todos flex gap-4 justify-center mt-6">
                            <a href="#">
                                <button className="px-6 py-2 rounded-md border border-[#bc96e6] text-[#bc96e6] font-semibold hover:bg-[#bc96e6] hover:text-[#181717] transition-all duration-300">
                                Entre em contato
                                </button>
                            </a>  
                            <a href="#">
                                <button className="px-6 py-2 rounded-md border border-[#bc96e6] text-[#bc96e6] font-semibold hover:bg-[#bc96e6] hover:text-[#181717] transition-all duration-300">
                                Download Curriculo
                                </button>
                            </a>
                        </div> 
                    </div>
                </section> {/* fechando topo do site */}
                {/* sobre */}
                <section className="w-full py-20 px-[4%]" id="sobre">
                    <div className="flex items-center justify-between">
                        <h2 className="titulo text-[#ffff] m-10">SOBRE MIM:</h2>
                                <p className=" text-[#ffff] m-10">
                                    textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
                                </p>
                    </div>
                </section>
                {/* especialidades */}
                <section className="especialidades py-10 px-[4%] flex gap-[10px]" id="especialidades">
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