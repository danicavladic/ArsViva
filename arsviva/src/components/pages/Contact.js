import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import GoogleMapReact from 'google-map-react'
import '../Map.css'
import Map from '../Map';

const location = {
  address: 'Pete Poljanice 10, Zagreb, Croatia.',
  lat: 45.828580,
  lng: 16.072950,
}

function Contact() {
  
  return (
    <>
    <div className="Mapa">
    <Map location={location} zoomLevel={17} /> {/* include it here */}
    <Footer />
  </div>
    
   
      
    </>
  );
}

export default Contact;
