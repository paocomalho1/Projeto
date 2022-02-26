import React, { Component } from 'react';
import logo from "../../assets/images/logo.svg"
import iconeFacebook from "../../assets/images/icon-facebook.svg"
import iconeInstagram from "../../assets/images/icon-instagram.svg"
import iconeTwitter from "../../assets/images/icon-twitter.svg"
import iconePinterest from "../../assets/images/icon-pinterest.svg"

class Rodape extends Component {
    render() { 
        return (
            <footer className="rodape">
                <div className="rodape__imgs">
                    <div className="rodape__img"></div>
                    <div className="rodape__img"></div>
                    <div className="rodape__img"></div>
                    <div className="rodape__img"></div>
                </div>
                <div className='rodape__fundo'>
                    <a href=""><img src={logo} alt="" className="rodape__logo" /></a>
                    <nav className="rodape__menu">
                        <ul className="rodape__menu-itens">
                            <li className="rodape__menu-item"><a href="" className="rodape__menu-link">About</a></li>
                            <li className="rodape__menu-item"><a href="" className="rodape__menu-link">Services</a></li>
                            <li className="rodape__menu-item"><a href="" className="rodape__menu-link">Projects</a></li>
                        </ul>
                    </nav>
                    <div className="rodape__icones">
                        <img src={iconeFacebook} alt="" className="rodape__icone" />
                        <img src={iconeInstagram} alt="" className="rodape__icone" />
                        <img src={iconeTwitter} alt="" className="rodape__icone" />
                        <img src={iconePinterest} alt="" className="rodape__icone" />
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Rodape;