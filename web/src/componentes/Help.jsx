import Menu from "./Menu"
import './Help.css'
import PlayStore from "./img/Play-store.jpg";
import AppStore from "./img/App-store.jpg";
import Facebook from "./img/Facebook.png";
import Twitter from "./img/twitter.jpg";
import Instagram from "./img/insta.png";
import LinkedIn from "./img/LinkedIn.jpg";

export default function Help() {
    return(
        <>
            <header className="cab">
                <Menu/>
            </header>

            <div id="box">
                <p>
                    A FindIt é um sistema de que ajuda a solucionar problemas quando há perda de documentos, objectos ou 
                    qualquer outro<br /><br /><br /><br />
                    Para mais ajuda acesse em: <a href="">suportefindit.com</a> 
                </p>

                <div id="media">
                    <p>
                        Siga-nos nas nossas redes sociais:
                    </p>
                    
                    <a href=""><img src={Facebook} alt="Facebook" id="FB"/></a>
                    <a href=""><img src={Twitter} alt="Twitter" id="TT"/></a>
                    <a href=""><img src={Instagram} alt="Facebook" id="IG"/></a>
                    <a href=""><img src={LinkedIn} alt="Facebook" id="LI"/></a>

                    <div id="app1">
                        <p>Baixa a App</p>

                        <a href=""><img src={PlayStore} alt="App Store" id="AS"/></a>
                        <a href=""><img src={AppStore} alt="Play Store" id="PS"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}