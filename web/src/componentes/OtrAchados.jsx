import "./OtrAchados.css";
import Menu from "./Menu";
import Carteira from "./img/Carteira.jpg";
import Mochila from "./img/mochila.webp";
import Calculadora from "./img/calculadora.webp";
import Search from "./Search";

function OtrAchados(){
    return(
        <div className="otr-achados">
            <header>
                <Menu></Menu>

            </header>

            <Search title = 'Procure aqui outros itens achados'/>

            <div id="art-otrFound1">
                <img src={Mochila} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-otrFound2">
                <img src={Carteira} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-otrFound3">
                <img src={Calculadora} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>
        </div>
    )
}
export default OtrAchados;