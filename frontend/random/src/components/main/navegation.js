//rcc es el comando para lo que esta abajo (react created componer)
import React, { Component } from 'react'
//importa el modulo link de react-router-dom para manipular links sin que la pagina recarge
import {Link} from 'react-router-dom'


//el archivo navegation.js para ser usado
export default class navegation extends Component {
render () { //se renderiza el componente
    return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container">
                <Link className="navbar-brand" to="/"><img src="./imagenes/random-logo-blanco.png" style={{width: "5%"}} alt="Random Marketin digital" className="imagenRandom"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>               
                </div>
                </div>
            </nav>
        )
    }
}