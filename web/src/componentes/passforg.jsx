import './passforg.css'
import { Link } from "react-router-dom"
import Header from './header'

export default function Pass() {
    return(
        <>
            <Header title='Recuperar Passe'/>
            <div className="Well">
            <div className='passe'>
            <h2>Recuperando a palavra passe</h2>
            <br />
            <form id='form1' action="">
                <div className="input-single">
                    <input required type="password" name="" id="mmm" />
                    <label htmlFor="mmm">Código de confirmação</label>
                </div>
            </form>
            <br/>
            <Link style={{display: 'inline-flex',marginLeft: '500px'}} to={"/new-pass"}>Seguinte</Link>
        
            </div>
            </div>
            
        </>
        
    )
}