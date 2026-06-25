import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  const [count, setCount] = useState(0)

  return (
   <> {/* Tag pai */}
     <header className="p-10 px-[4%] flex border-box justify-center">
            <div className="interface max-w-screen-xl flex items-center justify-between gap-20 my-5"> 
                <div className="logo">
                    <a href="#">
                        <img src="images/logo.png" alt="Logo do portfólio"/>
                    </a>
                </div>{/* Fechando logo */}
                {/* menu desktop */}
                <nav className="menu-desktop">
                    <ul className="flex items-center gap-[60px] px-10 list-none">
                        <li className="inline-block">
                            <a href="#topo-do-site" className='text-[#f8faed] no-underline inline-block'>
                            Ínicio
                            </a>
                        </li>
                        <li className="inline-block" className='text-[#f8faed] no-underline inline-block'>
                            <a href="#sobre">
                            Sobre
                            </a>
                        </li>
                        <li className="inline-block" className='text-[#f8faed] no-underline inline-block'>
                            <a href="#especialidades">
                            Especialidades
                            </a>
                        </li>
                        <li className="inline-block" className='text-[#f8faed] no-underline inline-block'>
                            <a href="#Projetos">
                            Projetos
                            </a>
                        </li>
                    </ul>
                </nav> {/* fechando nav */}

                {/* botão de contato */}
                <div className="btn-todos">
                    <div className="btn-contato">    
                        <a href="#">
                            <button>Contato</button>
                        </a>
                    </div>
                </div> {/* fechando botão de contato */}
            </div> {/* fechando interface */}
        </header>

        <main>
            {/* section topo do site */}
            <section className="topo-do-site py-10 px-[4%] text-[#f8faed] m-24" id="topo-do-site">
                <div className="interface">
                    <div className="flex flex-col items-center justify-center text-center gap-[30px]">
                        <div className="txt-topo-site text-center w-24">
                            <h3 className='text-[#f8faed] m-10'>Olá, sou</h3> 
                            <h1 className='py-[10px] text-[#f8faed] text-4x1 leading-10 font-normal '>Rafaella Vitória</h1>
                            <h2><span id="digitacao"></span></h2>
                            <div className="btn-todos">
                                <div className="btn-contato">
                                    <a href="#">
                                        <button>Entre em contato</button>
                                    </a>
                                </div>
                                <div className="btn-currículo">
                                    <a href="#">
                                        <button>Download Curriculo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> {/* fechando flex */}
                </div> {/* fechando interface */}
            </section> {/* fechando topo do site */}
           {/* section sobre */}
            <section className="sobre" id="sobre">
                <div className="interface">
                    <div className="flex">
                        <div className="txt-sobre">
                            <h2 className="titulo">SOBRE MIM:</h2>
                                <p>
                                    textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto
                                </p>
                        <div className="img-topo-site">
                            <img src="images/fotominha.png" alt="Imagem do topo do site"/>
                        </div>
                        </div> {/* fechando txt-sobre */}
                    </div> {/* fechando sobre.interface.flex */}
                </div> {/* fechando sobre.interface */}
            </section> {/* fechando sobre */}
             {/* section especialidades */}
            <section className="especialidades py-10 px-[4%] flex gap-[10px]" id="especialidades">
                <div className="interface">
                    <h2 className="titulo">MINHAS ESPECIALIDADES</h2>
                    <div className="flex ">
                        <div className="esp-box"> {/* box html */}
                            <i className="bi bi-filetype-html"></i>
                                <h3>HTML</h3>
                        </div> {/* fechando esp-box */}
                            <div className="esp-box"> 
                                <i className="bi bi-filetype-css"></i>
                                    <h3>CSS</h3>
                        </div> {/* fechando esp-box */}
                            <div className="esp-box"> 
                                <i className="bi bi-filetype-js"></i>
                                    <h3>JavaScript</h3>                            
                            </div> {/* fechando esp-box */}
                    </div> {/* fechando flex */}
                </div> {/* fechando interface */}
            </section> {/* fechando especialidades */}
             {/* section projetos */}
            <section className="projetos" id="projetos">
                <div className="interface">
                    <h2 className="titulo">MEUS PROJETOS</h2>
                    <div className="flex">
                        <div className="projetos-box"> {/* box projeto1 */}
                            <h3>PROJETO 1</h3>
                                <h4>Em breve</h4>
                        </div> {/* fechando projetos-box 1 */}
                        <div className="projetos-box"> 
                            <h3>PROJETO 2</h3>
                                <h4>Em breve</h4>
                        </div> {/* fechando projetos-box 2 */}
                        <div className="projetos-box">
                            <h3>PROJETO 3</h3>
                                <h4>Em breve</h4>                           
                        </div> {/* fechando projetos-box*/}
                    </div> {/* fechando flex */}
                </div> {/* fechando interface */}
            </section> {/* fechando projetos */}
        </main>
   </>
    )
}
export default App