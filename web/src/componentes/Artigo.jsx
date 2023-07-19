import Menu from "./Menu"
import './Artigo.css'
import { Link } from "react-router-dom"

export default function Artigo() {
    return(
        <>
            <header id="cab">
                <Menu/>
            </header>

            <div className="princ">
                <h2 id="img">Imagem</h2>

                <h2 id="descriction">Descrição</h2>

                <form id="form" action="">
                    <label id="lost-found">Achado/Perdido</label>
                    <input type="radio" id="radio1" name="art" required/><p id="radio1-1">Achado</p>
                    <input type="radio" id="radio2" name="art" required/><p id="radio2-1">Perdido</p>

                    <label id="label1">Tipo de Artigo</label>
                    <input type="text" id="in1" required></input>

                    <label id="label2">Local Achado ou Perdido</label><br/>
                    <input type="text" id="in2" required></input>

                    <label id="label3">Detalhes do Artigo</label><br />
                    <input type="text" id="in3" required></input>

                    <label id="contact">Formas de Contacto</label>

                    <label id="label4">Telefone</label>
                    <input type="number" id="in4"></input>

                    <label id="label5">Email</label>
                    <input type="email" id="in5"></input>

                    <div className="ima">
                    <label className="picture2" htmlFor="picture__input">
                        <input type="file" accept="image/*" id="picture__input"/>
                        <span id="name" className="picture__image">Escolha uma foto</span>
                    </label>
                    </div>
                    
                    <button id="artCleB" type="submit">Adicionar Artigo</button>
                </form>
                
            </div>
        </>
    )
}