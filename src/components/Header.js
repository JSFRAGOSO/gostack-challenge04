import React from 'react'
import './Header.css';
import logo from '../assets/facebook-1.svg'
function Header(){
    return (
        <div className="headerContainer">
            <img src={logo} alt = "Facebook"/>
            <div>
                <span>Meu perfil</span>
                <i className="material-icons">account_circle</i>
            </div>
        </div>
    )
}

export default Header;