import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import GoogleMapReact from 'google-map-react'
import '../Map.css'
import Map from '../Map';
import kontakt from '../kontakt.jpg';
import '../Contact.css'

const location = {
  address: 'Kobiljačka 50, Zagreb, Croatia.',
  lat: 45.828580,
  lng: 16.072950,
}

function Contact() {
  
  return (
    <>
    <div className="contact">
    <div className="leftContact">
                <img className="contactPhoto" src={kontakt}></img>
                </div>
                <p className="kontaktTekst"><b>KONTAKT</b><br></br><br></br>ARSVIVA studio d.o.o. <br></br> <br></br> <i>Sjedište </i><br></br> Goli Vrh 42D, Jastrebarsko <br></br><br></br>
<i>Ured</i> <br></br> Pete Poljanice 10, 10 040 Zagreb, Hrvatska <br></br><br></br> <i>Kontakt telefoni:</i><br></br> 01 7888 359 <br></br> 091 5900 285
</p>
                <div><br></br><br></br><br></br></div>
    <Map location={location} zoomLevel={17} /> {/* include it here */}
    <div><br></br><br></br><br></br></div>
            <hr></hr>
    <Footer />
  </div>
    
   
      
    </>
  );
}

export default Contact;
