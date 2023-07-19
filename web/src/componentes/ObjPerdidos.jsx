import "./ObjPerdidos.css";
import Menu from "./Menu";
import Samsung from "./img/Samsung.jpg";
import Caderno from "./img/caderno.jpg";
import PortaMinas from "./img/Porta-minas.webp";
import Search from "./Search";

function ObjPerdidos(){
    return(
        <div className="obj-perdidos">
            <header>
                <Menu></Menu>
            </header>

            <Search title = 'Procure aqui os objectos perdidos'/>

            <div id="art-objLost1">
                <img src={PortaMinas} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-objLost2">
                <img src={Caderno} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-objLost3">
                <img src={Samsung} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>
        </div>
    )
}
export default ObjPerdidos;