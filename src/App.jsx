import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="bg-[#181717]"> {/* tag pai */}
     <header className="px-[%] flex box-border justify-center">
            <div className="interface max-w-screen-xl flex items-center justify-between gap-15 my-5"> 
                <div className="logo">
                    <a href="#">
                        <img src="images/logo.png" alt="Logo do portfólio"/>
                    </a>
                </div>{/* fechando logo */}
                {/* menu desktop */}
                <nav className="menu-desktop">
                    <ul className="flex items-center gap-[60px] px-10 list-none">
                        <li className="inline-block">
                            <a href="#inicio" className="text-[#f8faed] no-underline inline-block">
                            Inicio
                            </a>
                        </li>
                        <li className="inline-block">
                            <a href="#sobre" className="text-[#f8faed] no-underline inline-block">
                            Sobre
                            </a>
                        </li>
                        <li className="inline-block">
                            <a href="#especialidades" className="text-[#f8faed] no-underline inline-block">
                            Especialidades
                            </a>
                        </li>
                        <li className="inline-block">
                            <a href="#projetos"  className="text-[#f8faed] no-underline inline-block">
                            Projetos
                            </a>
                        </li>
                    </ul>
                </nav> {/* fechando nav */}

                {/* botão de contato */}
                <div className="btn-todos">
                    <div className="btn-contato px-4 py-2 rounded-md border border-[#f8faed] text-[#181717] bg-[#f8faed] hover:text-[#181717] transition-all duration-300">    
                        <a href="#">
                            <button>Contato</button>
                        </a>
                    </div>
                </div> {/* fechando botao de contato */}
            </div> {/* fechando interface */}
        </header>

        <main>
            {/* section topo do site */}
            <section className="topo-do-site text-[#f8faed] my-16 px-4" id="inicio">
                <div className="interface">
                    <div className="flex flex-col items-center justify-center text-center pb-10">
                        <div className="txt-topo-site">
                            <h3 className="items-center justfy-center text-[#f8faed] m-10">Olá, sou</h3>
                            <h1 className="py-[8px] text-[#f8faed] text-4xl leading-10 font-normal">
                            Rafaella Vitória
                            </h1>
                            <div className="inline-block my-6 max-w-full">
                                    <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white text-[#f8faed] m-10">
                                        Estudante de Análise de Desenvolvimento de Sistemas
                                    </h2>
                            </div>
                            <div className="btn-todos flex gap-4 justify-center mt-6">
                                <div className="btn-contato">
                                    <a href="#">
                                        <button className="px-6 py-2 rounded-md border border-[#f8faed] text-[#f8faed] font-semibold hover:bg-[#f8faed] hover:text-[#181717] transition-all duration-300">
                                        Entre em contato
                                        </button>
                                    </a>
                                </div>     
                                <div className="btn-currículo">
                                    <a href="#">
                                        <button className="px-6 py-2 rounded-md border border-[#f8faed] text-[#f8faed] font-semibold hover:bg-[#f8faed] hover:text-[#181717] transition-all duration-300">
                                        Download Curriculo
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* fechando interface */}
            </section> {/* fechando section topo do site */}
            {/* section sobre */}
            <section className="sobre flex py-[20px] px-[4%] gap-[10px]" id="sobre">
                <div className="interface">
                    <div className="flex items-center justify-between">
                        <div className="txt-sobre">
                            <h2 className="titulo text-[#fff] m-10">SOBRE MIM:</h2>
                                <p className=" text-[#fff] m-[40px]">
                                    textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
                                </p>
                        </div> {/* fechando txt-sobre */}
                    </div> {/* fechando sobre.interface.flex */}
                </div> {/* fechando sobre.interface */}
            </section> {/* fechando sobre */}
             {/* section especialidades */}
            <section className="especialidades py-10 px-[4%] flex gap-[10px]" id="especialidades">
                <div className="interface">
                    <h2 className="titulo text-[#fff]">MINHAS ESPECIALIDADES</h2>
                    <div className="flex text-[#f8faed] w-[100%] max-w-[200%] text-center py-[35px] px-[30px] m-auto mt-[30px] mb-[300px] border-2 border-[#f8faed] rounded-[20px] box-border ">
                        <div className="esp-box hover:bg-black hover:scale-105 transition-all duration-400 ease-in-out"> {/* box html */}
                            <i className="bi bi-filetype-html text-[#f8faed] block mb-[10px]"></i>
                                <h3 className ="text-[20px] m-[0]">HTML</h3>
                        </div> {/* fechando esp-box */}
                            <div className="esp-box"> 
                                <i className="bi bi-filetype-css text-[#f8faed] block mb-[10px]"></i>
                                    <h3>CSS</h3>
                        </div> {/* fechando esp-box */}
                            <div className="esp-box hover:bg-black hover:scale-105 transition-all duration-400 ease"> 
                                <i className="bi bi-filetype-js text-[#f8faed] block mb-[10px]"></i>
                                    <h3>JavaScript</h3>                            
                            </div> {/* fechando esp-box */}
                    </div> {/* fechando flex */}
                </div> {/* fechando interface */}
            </section> {/* fechando especialidades */}
        </main>
   </div>
    )
}
export default App