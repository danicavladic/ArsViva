import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import GoogleMapReact from 'google-map-react'
import '../Map.css'
import Map from '../Map';
import kontakt from '../kontakt.jpg';
import '../Contact.css'
import office from '../image0.jpeg';

const location = {
  address: 'Kobiljačka 50, Zagreb, Croatia.',
  lat: 45.828580,
  lng: 16.072950,
}

function Contact() {
  
  return (
    <>
    <hr className="crta-gornja"></hr>
    <div className="contact">
    <img className="contactPhoto" src={office}></img>
                <div className="inlinediv">
                <p className="kontaktTekst"><b>Kontaktirajte nas</b><i class="fa fa-mobile-alt fa-xs"></i>
                <p className="doo">Arsviva d.o.o.</p>
                <hr className="crtica"></hr>
                <p className="adresa">Adresa ureda</p>
                <p className="poljanice">Pete Poljanice 12, 10 040 Zagreb</p>
                <p className="sjediste">Adresa sjedišta</p>
                <p className="adrsj">Gornji vrh 42D,  Jastrebarsko</p>
                <p className="email">Email <i class="fa fa-envelope"></i></p>
                
                <p className="sisko">ured.sisko@gmail.com</p>
                <p className="tel">Kontakt telefoni <i class="fa fa-phone"></i></p>
                <p className="fon">01 7888 359</p>
                <p className="mob">091 5900 285</p>
                 </p>
                 <hr className="crta-donja"></hr>
                 </div>
    <Map location={location} zoomLevel={17} />
                {/* include it here */}
    
    </div>
    <br></br>
            <hr></hr>
            <div>
    <Footer />
  </div>
  
    
   
      
    </>
  );
}

export default Contact;
