import "./ObjAchados.css";
import Menu from "./Menu";
import iPhone from "./img/iPhone.jpg";
import Caderno from "./img/caderno.jpg";
import Bolsa from "./img/bolsa.jpg";
import Search from "./Search";

function ObjAchados(){
    return(
        <div className="obj-achados">
            <header>
                <Menu></Menu>

            </header>

            <Search title = 'Procure aqui os objectos achados'/>

            <div id="art-objFound1">
                <img src={iPhone} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-objFound2">
                <img src={Bolsa} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-objFound3">
                <img src={Caderno} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>
        </div>
    )
}
export default ObjAchados;