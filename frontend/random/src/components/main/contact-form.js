//rcc es el comando para lo que esta abajo (react created componer)
import React, { Component } from "react";
//importa el modulo link de react-router-dom para manipular links sin que la pagina recarge
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./contact-form.css";

//el archivo navegation.js para ser usado
export default class contactForm extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "gmailMessage",
          "template_pg3ivkh",
          e.target,
          "user_4GvoHUdA9xUqlpRj7NqyV"
        )
        .then(
          (result) => {
            <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              Mail enviado.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>;
          },
          (error) => {
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              Error al enviar el mail.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>;
          }
        );
      e.target.reset();
    }

    //se renderiza el componente
    return (
      <div className="container contact">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img
                  src="./imagenes/random-logo-blanco.png"
                  className="logo-contact-form mb-5"
                  alt="Random"
                />
                <h2 style={{ color: "white" }}>Pónte en contacto</h2>
                <h5 style={{ color: "white" }}>
                  Presupuestamos el servicio que necesitas
                </h5>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" for="name">
                    Nombre:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Nombre"
                      name="name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="last-name">
                    Apellido:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="last-name"
                      placeholder="Apellido"
                      name="last-name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="email">
                    Email:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="cel">
                    Número telefónico:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="tel"
                      class="form-control"
                      id="cel"
                      placeholder="Número telefónico"
                      name="cel"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="message">
                    Mensaje:
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2 col-md" for="check=box">
                    Servicios que te interesan:
                  </label>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Publicidad en redes sociales
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Marketing para Ecommerce
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Contenidos en Redes Sociales
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Diseño Web
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Plataforma Ecommerce
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Posicionamiento SEO
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
