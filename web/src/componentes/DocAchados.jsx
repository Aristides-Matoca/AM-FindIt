import "./DocAchados.css";
import Menu from "./Menu";
import Conducao2 from "./img/carta-conducao3.png";
import Conducao1 from "./img/carta-conducao2.png";
import Bilhete from "./img/BI2.png";
import Search from "./Search";

function DocAchados(){
    return(
        <div className="doc-achados">
            <header>
                <Menu></Menu>

            </header>

            <Search title = 'Procure aqui os documentos achados'/>

            <div id="art-docFound1">
                <img src={Conducao1} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-docFound2">
                <img src={Conducao2} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>

            <div id="art-docFound3">
                <img src={Bilhete} alt="art1"/>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus veritatis 
                    consequuntur dicta eveniet. Voluptatibus aliquam ullam magnam assumenda, aperiam quam rerum. 
                    Maxime velit ipsam maiores cumque ipsa natus ab!
                </p>
            </div>
            
        </div>
    )
}
export default DocAchados;