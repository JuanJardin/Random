import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Import the functions/mixins
import './pymes.css'

export default class pymes extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-center pt-5'>
                            Potenciá tu Pymes
                        </h1>
                        <p className='texto-pymes pt-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fugit sint ipsum sit inventore hic, temporibus eum vitae laboriosam, sapiente, veritatis eos repellat nemo expedita! Enim quia nesciunt perspiciatis aliquid. Aliquam inventore, eligendi voluptatem atque alias ex, ratione saepe voluptates quis esse, id ullam dolores odit ab architecto dolore.
                        </p>
                        <p className='texto-pymes'>
                            Totam aspernatur, quod quasi voluptatem odio maxime in inventore tempora dolorem magnam eaque distinctio, voluptate rerum laboriosam alias qui iusto cum sed repellendus. Beatae accusantium excepturi culpa eius distinctio consequatur rerum!
                        </p>
                        <Link type="button" className="boton-pymes btn btn-outline-dark" to="/contact">Mejorá tu Pymes ahora</Link>
                    </div>
                    <div className="col-md-6">
                        <img src="./imagenes/nosotros1.png" className="img-pymes" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
