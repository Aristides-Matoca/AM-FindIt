import "./Perdidos.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Bilhete from "./img/BI2.png";
import Passaporte from "./img/passaporte.png";
import Samsung from "./img/Samsung.jpg";
import Estojo from "./img/Estojo.jpg";
import Carteira from "./img/Carteira.jpg";
import Pulseira from "./img/Pulseira.jpg";
import PlayStore from "./img/Play-store.jpg";
import AppStore from "./img/App-store.jpg";
import Search from "./Search";

function Perdidos(){
    return(
        <div className="lost">
            <header>
                <Menu/>

            </header>

            <Search title = 'Procure aqui todos itens perdidos'/>

            <div id="doc-lost">
                <div id="doc1-lost">
                    <img src={Bilhete} alt="doc1"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <div id="doc2-lost">
                    <img src={Passaporte} alt="doc2"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum.
                    </p>
                </div>

                <Link to={"/doc-perdidos"} style={{textDecoration:'none',color:'black'}} id='doc-lost-text'>Documentos Perdidos</Link>
            </div>

            <div id="obj-lost">
                <div id="obj1-lost">
                    <img src={Samsung} alt="obj1"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <div id="obj2-lost">
                    <img src={Estojo} alt="obj2"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <Link to={"/otr-perdidos"} style={{textDecoration:'none',color:'black'}} id='obj-lost-text'>Objectos Perdidos</Link>
            </div>

            <div id="art-lost">
                <div id="art1-lost">
                    <img src={Carteira} alt="art1"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <div id="art2-lost">
                    <img src={Pulseira} alt="art2"/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                        consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                        Maxime velit ipsam maiores cumque ipsa natus ab!
                    </p>
                </div>

                <Link to={"/otr-perdidos"} style={{textDecoration:'none',color:'black'}} id='art-lost-text'>Outros Artigos Perdidos</Link>
            </div>

            <footer id="foot-lost">
                <div id="app3">
                    <p>Baixa a App</p>

                    <a href=""><img src={PlayStore} alt="App Store" id="AS"/></a>
                    <a href=""><img src={AppStore} alt="Play Store" id="PS"/></a>
                </div>
            </footer>
        </div>
    )
}
export default Perdidos;