import "./Achados.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Conducao1 from "./img/carta-conducao2.png";
import Conducao2 from "./img/carta-conducao3.png";
import Caderno from "./img/caderno.jpg";
import iPhone from "./img/iPhone.jpg";
import PortaMinas from "./img/Porta-minas.webp";
import Bolsa from "./img/bolsa.jpg";
import PlayStore from "./img/Play-store.jpg";
import AppStore from "./img/App-store.jpg";
import Search from "./Search";

function Achados(){
    return(
        <div>
            <header>
                <Menu/>

            </header>

            <Search title='Procure aqui itens achados'></Search>

            <div id="doc-found">
                <div id="doc1-found">
                    <img src={Conducao1} alt="doc1"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <div id="doc2-found">
                    <img src={Conducao2} alt="doc2"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <Link to={"/doc-achados"} style={{textDecoration:'none',color:'black'}} id='doc-found-text'>Documentos Achados</Link>
            </div>

            <div id="obj-found">
                <div id="obj1-found">
                    <img src={Caderno} alt="obj1"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <div id="obj2-found">
                    <img src={iPhone} alt="obj2"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <Link to={"/obj-achados"} style={{textDecoration:'none',color:'black'}} id='obj-found-text'>Objectos Achados</Link>
            </div>

            <div id="art-found">
                <div id="art1-found">
                    <img src={PortaMinas} alt="art1"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <div id="art2-found">
                    <img src={Bolsa} alt="art2"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <Link to={"/otr-achados"} style={{textDecoration:'none',color:'black'}} id='art-found-text'>Outros Artigos Achados</Link>
            </div>

            <footer id="foot-found">
                <div id="app4">
                    <p>Baixa a App</p>

                    <a href=""><img src={PlayStore} alt="App Store" id="AS"/></a>
                    <a href=""><img src={AppStore} alt="Play Store" id="PS"/></a>
                </div>
            </footer>
        </div>
    )
}
export default Achados;