import { Link, useNavigate } from "react-router-dom"
import './newCont.css'
import Header from "./header";
import { api } from "../library/axios";
import { useState } from "react";


export default function NewCont() {
    
    const[name, setName] = useState("")
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState('')

    async function submit(e){

        e.preventDefault()

        fetch('http://localhost:3000/users', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        }),

        })
   
    }

    function handleChangeNa() {
        setName(event.target.value)
    }

    function handleChangeEm() {
        setEmail(event.target.value)
    }

    function handleChangePa() { 
        setPassword(event.target.value)
    }

   


    return(
        <>

            <Header title='Nova Conta'/>
            <div className="Well">
                <div className="cont">
                    <div className="ima">
                        <label className="picture" htmlFor="picture__input">
                            <input type="file"  accept="image/*" id="picture__input"/>
                            <span id="name" className="picture__image">Escolha uma foto</span>
                        </label>
                    </div>
                    <form onSubmit={submit} id='form1' >
                        <div className="input-single">
                            <input required onChange={handleChangeNa} type="text" className="mmm" id="mmm" />
                            <label htmlFor="mmm">Nome</label>
                        </div>
                        <div className="input-single">
                            <input required onChange={handleChangeEm} type="e-mail" className="mmm" id="mmm" />
                            <label htmlFor="mmmm">E-mail</label>
                        </div>
                        <div className="input-single">
                            <input required onChange={handleChangePa} type="password" className="mmm" id="mmm" />
                            <label htmlFor="mmmm">Palavra-passe</label>
                        </div>
                        <div className="input-single">
                            <input required type="password" className="" id="mmm" />
                            <label htmlFor="mmmm">Confirmar Palavra-passe</label>
                        </div>
                        <button id="btCri" className='ll' onSubmit={() => navigate('/', { replace: false })} type="submit"> Criar Conta</button>
                    </form>
                </div>
            </div> 
        </>    
    )    
}



