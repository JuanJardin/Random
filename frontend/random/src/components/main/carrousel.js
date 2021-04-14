import {Component} from 'react';
import './carrousel.css'
import InfiniteCarousel from "react-leaf-carousel";
export default class Carrousel extends Component{
    render(){
        return(
            <div className="container-fluid  marcas mb-5">
                <h3 className="text-white text-center pt-2 pb-3">
                    -Las siguientes empresas confian en nosotros-
                </h3>
            <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={false}
            showSides={false}
            sidesOpacity={.9}
            sideSize={.5}
            slidesToScroll={1}
            slidesToShow={3}
            scrollOnDevice={false}
          >
            
            <div className=" logo"> <img alt='piacere' src='imagenes/piacere.png' style={{width:"50%"}}/></div>
            <div className=" logo"><img alt='petitplast' src='imagenes/petit-plast.png'style={{width:"50%"}}/></div>
            <div className=" logo"><img alt='salonbalcarce' src='imagenes/salon-balcarse.png'style={{width:"50%"}}/></div>
            <div className=" logo"><img alt='tierracolorada' src='imagenes/tierra-colorada.png'style={{width:"50%"}}/></div>
            <div className="logo"><img alt='toneles' src='imagenes/los-toneles.png'style={{width:"50%"}}/></div>
            <div className=" logo"><img alt='reydelganado' src='imagenes/rey-del-ganado.png'style={{width:"50%"}}/></div>
     
            
          </InfiniteCarousel>
          </div>
        )
    }
}
