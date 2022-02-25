import React, { Component } from 'react';
import logo from "../assets/images/logo.svg"
import ceta from "../assets/images/icon-arrow-down.svg"


class Cabecalho extends Component {
    render() { 
        return (
            <header className="cabecalho">
                <div className="cabecalho__conteiner">
                    <a href=""><img src={logo} alt="" className="logo" /></a>
                    <nav className="cabecalho__menu menu">
                        <ul className="menu__itens">
                            <li className="menu__item"><a href="" className="menu__link">About</a></li>
                            <li className="menu__item"><a href="" className="menu__link">Services</a></li>
                            <li className="menu__item"><a href="" className="menu__link">Projects</a></li>
                            <li className="menu__item"><a href="" className="menu__link">Contact</a></li>
                        </ul>
                        <a href="" className="menu__hamburger">
                            <span className="menu__hamburger-bar"></span>
                            <span className="menu__hamburger-bar"></span>
                            <span className="menu__hamburger-bar"></span>
                        </a>
                    </nav>
                </div>
                <div className="conteiner">
                    <h1 className="cabecalho__titulo">We are creatives</h1>
                    <img src={ceta} alt="" className="cabecalho__ceta" />
                </div>
    
            </header>
        );
    }
}
 
export default Cabecalho;