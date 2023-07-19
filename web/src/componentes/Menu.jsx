import './Home.css'
import { Link } from "react-router-dom"
import Logo0 from "./img/Logo0.png"

function Menu(){
    return(
        <>
            <menu>
                <img id='img1' style={{height:"36px", width:"65px"}} src={Logo0} alt="Logotipo" />
                <nav>
                    <ul>
                        <Link to={"/"}>Página Inicial</Link>
                        <Link to={"/add-artigo"}>Adicionar um Artigo</Link>
                        <Link to={"/help"}>Ajuda</Link>
                        <Link to={"/Contact"}>Contacto</Link>
                        <Link to={"/home"}>Iniciar sessão</Link>
                    </ul>
                </nav>
            </menu>
        </>
    )
}
export default Menu