import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './servicios-marketing.css'

export default class pymes extends Component {
    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="./imagenes/nosotros2.png" className="img-servicios-marketing" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-center pt-5'>
                            Servicios de Marketing y Publicidad
                        </h1>
                        <p className='texto-servicios-marketing pt-3'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fugit sint ipsum sit inventore hic, temporibus eum vitae laboriosam, sapiente, veritatis eos repellat nemo expedita! Enim quia nesciunt perspiciatis aliquid. Aliquam inventore, eligendi voluptatem atque alias ex, ratione saepe voluptates quis esse, id ullam dolores odit ab architecto dolore.
                        </p>
                        <p className='texto-servicios-marketing'>
                            Totam aspernatur, quod quasi voluptatem odio maxime in inventore tempora dolorem magnam eaque distinctio, voluptate rerum laboriosam alias qui iusto cum sed repellendus. Beatae accusantium excepturi culpa eius distinctio consequatur rerum!
                        </p>
                        <Link type="button" className="boton-pymes btn btn-outline-success " to="/contact">Pedí tu presupuesto</Link>
                    </div>
                </div>
            </div>
        )
    }
}
