import Menu from "./Menu"
import './Contact.css'
import PlayStore from "./img/Play-store.jpg";
import AppStore from "./img/App-store.jpg";
import Facebook from "./img/Facebook.png";
import Twitter from "./img/twitter.jpg";
import Instagram from "./img/insta.png";
import LinkedIn from "./img/LinkedIn.jpg";

export default function Contact() {
    return(
        <>
            <header>
                <Menu/>
            </header>

            <div id="box">
                <p>
                    Telefone: +244 928374823 / +244 937332732 <br /><br /><br />
                    E-mail: lost.found@findit.co.ao<br /><br /><br />
                    Termos de política e privacidade
                </p>

                <div id="media">
                    <p>Siga-nos nas nossas redes sociais:</p>

                    <a href=""><img src={Facebook} alt="Facebook" id="FB"/></a>
                    <a href=""><img src={Twitter} alt="Twitter" id="TT"/></a>
                    <a href=""><img src={Instagram} alt="Instragam" id="IG"/></a>
                    <a href=""><img src={LinkedIn} alt="LinkedIn" id="LI"/></a>
                </div>

                <div id="app2">
                    <p>Baixa a App</p>

                    <a href=""><img src={PlayStore} alt="App Store" id="AS"/></a>
                    <a href=""><img src={AppStore} alt="Play Store" id="PS"/></a>
                </div>
            </div>
        </>
    )
}