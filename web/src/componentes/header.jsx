import React from 'react';
import '../App.css'
import Logo0 from "./img/Logo0.png"

function Header({ title }) {
    return(
        <div>
            <div className="cabecalho">
            <div className='esq'><img id='img1' src={Logo0}  alt="" /></div>
            <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Header