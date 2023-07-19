import "./DocPerdidos.css";
import Menu from "./Menu";
import Conducao2 from "./img/carta-conducao3.png";
import Conducao1 from "./img/carta-conducao2.png";
import Bilhete from "./img/BI2.png";
import Search from "./Search";

function DocPerdidos(){
    return(
        <div className="doc-perdidos">
            <header>
                <Menu></Menu>

            </header>

            <Search title = 'Procure aqui os documentos perdidos'/>

            <div id="art-docLost1">
                <img src={Bilhete} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-docLost2">
                <img src={Conducao1} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-docLost3">
                <img src={Conducao2} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>
        </div>
    )
}
export default DocPerdidos;