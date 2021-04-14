import './App.css';
//importar React
import React from 'react'
//importar router para que react encuente los componentes
import { BrowserRouter as Router, Route } from 'react-router-dom'
//importar bootswatch
import "bootswatch/dist/lux/bootstrap.min.css";
//se importa el componente navegation.js
import Navegation from './components/main/navegation'
import Main from './components/main/main'
import Pymes from './components/main/pymes'
import Carrousel from './components/main/carrousel'
import ServiciosMarketing from './components/main/servicios-marketing'
import ContactForm from './components/main/contact-form'
import About from './components/about/about'


function App() {
  return (
    <Router>
      <Navegation/>
      <Route exact path="/" component = {Main}/>
      <Route exact path="/" component = {Pymes}/>
      <Route exact path="/" component = {Carrousel}/>
      <Route exact path="/" component = {ServiciosMarketing}/>
      <Route exact path="/" component = {ContactForm}/>
      <Route path="/contact" component = {ContactForm}/>
      <Route path="/about" component = {About}/>
    </Router>
  );
}

export default App;

