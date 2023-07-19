import './welcome.css'
import { Link } from "react-router-dom"
import Header from './header'

export default function NewPass() {
    return(
        <>
            <Header title='Nova passe'></Header>
            <div className="Well">
            <div className='welcome'>
            <h1>Introduzir nova palavra-passe</h1>
            <br />
            <form id='form1' action="">
                <div className="input-single">
                    <input required type="password" name="" id="mmm" />
                    <label htmlFor="mmm">Nova palavra-passe</label>
                </div>
                <div className="input-single">
                    <input required type="password" name="" id="mmm" />
                    <label htmlFor="mmm">Confrimar nova palavra-passe</label>
                </div>
            </form>
            <div><Link className='ll' to={"/home"}>Alterar a palavra-passe</Link></div>
            </div>
            </div>
            
        </>
        
    )
} 