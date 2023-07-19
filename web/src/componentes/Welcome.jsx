import './welcome.css'
import { Link } from "react-router-dom"
import Header from './header'


function Welcome() {
    return (
        <>
            <Header title='Iniciar sessão'/>
            <div className='Well'>
            
                <div className="welcome">
                    <h1 id='h1' style={{color:'white'}}>Bem-vindo ao Find It</h1>
                    <br />
                    <form id='form1' action="">
                        <div className="input-single">
                            <input required type="text" name="" id="mmm" />
                            <label htmlFor="mmm">Nome</label>
                        </div>
                        <div className="input-single">
                            <input required type="e-mail" name="" id="mmm" />
                            <label htmlFor="mmmm">E-mail</label>
                        </div>
                    </form>
                    <br />
                    <Link className='ll' to={"/"} >Entrar</Link>
                    <br />
                    <Link className='ll' to={"/new-count"}>Criar conta</Link>
                    <br />
                    <Link className='esqS' to={"/forgetpass"}>Esqueceu a palavra-passe?</Link>
                </div>
            </div>
        </>
        
    )
}
export default Welcome;

