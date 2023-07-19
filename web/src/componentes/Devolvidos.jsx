import "./Devolvidos.css";
import Menu from "./Menu";
import PortaMinas from "./img/Porta-minas.webp";
import Conducao1 from "./img/carta-conducao2.png";
import Camera from "./img/Camera-fotografica.webp";
import Search from "./Search";

function Devolvidos(){
    return(
        <div className="returned">
            <header>
                <Menu/>

                
            </header>

            <Search title = 'Procure aqui os itens devolvidos'/>

            <div id="art-return1">
                <img src={Camera} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-return2">
                <img src={Conducao1} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-return3">
                <img src={PortaMinas} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>
        </div>
    )
}
export default Devolvidos;