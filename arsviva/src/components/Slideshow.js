import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import first from './project1.jpg'

function Slideshow() {
  
    return (
      <>
      
      <Carousel >
                <div>
                    <img className="App-mainDiv-rightDiv-image" src={first} />
                </div>
                <div>
                    <img className="App-mainDiv-rightDiv-image" src={first} />
                </div>
                <div>
                    <img className="App-mainDiv-rightDiv-image" src={first} />
                </div>
            </Carousel>
    
      
     
        
      </>
    );
  }
  /* <img className="App-mainDiv-rightDiv-image" src={pp} ></img> */
  export default Slideshow;