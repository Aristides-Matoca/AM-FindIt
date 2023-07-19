import "./OtrPerdidos.css";
import Menu from "./Menu";
import Estojo from "./img/Estojo.jpg";
import Carteira from "./img/Carteira.jpg";
import Pulseira from "./img/Pulseira.jpg";
import Search from "./Search";

function OtrPerdidos(){
    return(
        <div className="otr-perdidos">
            <header>
                <Menu></Menu>

            </header>

            <Search title = 'Procure aqui outros itens perdidos'/>

            <div id="art-otrLost1">
                <img src={Estojo} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-otrLost2">
                <img src={Carteira} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-otrLost3">
                <img src={Pulseira} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>
        </div>
    )
}
export default OtrPerdidos;