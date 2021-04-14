import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './main.css'

export default class main extends Component {
    render() {
        return (
            <div>
                <img src="./imagenes/equipo-random.jpg" className="img img-fluid"  alt=""/>
                <Link type="button" className=" boton-main btn btn-outline-light" to="/contact">Al cambio lo hacemos nosotros</Link>
            </div>
            
        )
    }
}