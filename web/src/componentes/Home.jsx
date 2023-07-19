import './Home.css'
import { Link } from "react-router-dom"
import Menu from './Menu';
import Bilhete from "./img/BI2.png";
import Samsung from "./img/Samsung.jpg";
import Conducao1 from "./img/carta-conducao2.png";
import Caderno from "./img/caderno.jpg";
import Carteira from "./img/Carteira.jpg";
import Bolsa from "./img/bolsa.jpg";
import Calculadora from "./img/calculadora.webp";
import Conducao2 from "./img/carta-conducao3.png";
import Mochila from "./img/mochila.webp";
import PlayStore from "./img/Play-store.jpg";
import AppStore from "./img/App-store.jpg";
import Search from './Search';

export default function Home(){
    return(
        <div className="home">
            <header>
                <Menu/>
                
            </header>

            <Search title = 'Procure aqui...'/>

            <Link to={"/perdidos"}>
                <div id='perdidos'>

                    <Link to={"/doc-perdidos"} style={{color:'black'}}>
                        <div id='doc-perdidos'>
                            <img src={Bilhete} alt=""/>

                            <p>Documentos</p>
                        </div>
                    </Link>

                    <Link to={"/obj-perdidos"} style={{color:'black'}}>
                        <div id='obj-perdidos'>
                            <img src={Samsung} alt="" />

                            <p>Objectos</p>
                        </div>
                    </Link>

                    <Link to={"/otr-perdidos"} style={{color:'black'}}>
                        <div id='otr-perdido'>
                            <img src={Carteira} alt="" />

                            <p>Outros Artigos</p>
                        </div>
                    </Link>

                    <Link to={"/perdidos"} style={{textDecoration:'none',color:'black'}} id='art-perdidos'>Artigos Perdidos</Link>
                </div>
            </Link>

            <Link to={"/achados"}>
                <div id='achados'>
                    <Link to={"/doc-achados"} style={{color:'black'}}>
                        <div id='doc-achados'>
                            <img src={Conducao1} alt="" />

                            <p>Documentos</p>
                        </div>
                    </Link>

                    <Link to={"/Obj-achados"} style={{color:'black'}}>
                        <div id='obj-achados'>
                            <img src={Caderno} alt="" />

                            <p>Objectos</p>
                        </div>
                    </Link>

                    <Link to={"/Otr-achados"} style={{color:'black'}}>
                        <div id='otr-achados'>
                            <img src={Bolsa} alt="" />
                            
                            <p>Outros Artigos</p>
                        </div>
                    </Link>

                    <Link to={"/achados"} style={{textDecoration:'none',color:'black'}} id='art-achados'>Artigos Achados</Link>
                </div>
            </Link>

            <Link to={"/devolvidos"} style={{textDecoration:'none',color:'black'}}>
                <div id='encontrados'>
                    <div id='doc-encontrados'>
                        <img src={Conducao2} alt="" />

                        <p>Documentos</p>
                    </div>

                    <div id='obj-encontrados'>
                        <img src={Calculadora} alt="" />

                        <p>Objectos</p>
                    </div>

                    <div id='otr-encontrados'>
                        <img src={Mochila} alt="" />

                        <p>Outros Artigos</p>
                    </div>

                    <Link to={"/devolvidos"} style={{textDecoration:'none',color:'black'}} id='art-devolvidos'>Artigos Devolvidos</Link>
                </div>
            </Link>    

            <footer>
                <div id="app0">
                    <p>Baixar a App</p>

                    <a href=""><img src={PlayStore} alt="App Store" id="AS"/></a>
                    <a href=""><img src={AppStore} alt="Play Store" id="PS"/></a>
                </div>
            </footer>
        </div>
    )
}