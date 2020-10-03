import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Studio.css';
import onama from '../wall.jpg';
import studios from '../studio.jpg'
import owner from '../person.jpeg'
import living from '../bla.jpg'



function Studio() {

    return (
        <>
           <hr className="prva-crta"></hr>
           <img className="aboutUs" src={onama}></img>
           <hr></hr>
            <div className="studio">
               
                
            <hr className="prva-crta"></hr>
            <img className="circlePerson" src={owner}></img>
           
            <p className="aboutOwner"><b>GORDANA ŠIŠKO</b><br></br><br></br>Rođena je u Zagrebu 1966. godine gdje je i diplomirala na Arhitektonskom fakultetu 1991.<br></br>
            Radila je u Arhtektonu d.o.o. i u projektnom uredu Prigorke d.o.o. kao glavni projektant i voditelj <br></br>projekata do osnivanja vlastitog ureda 2001.<br></br></p>
            <hr className="opetcrta"></hr><hr className="druga-crta"></hr><p className="ovl">ovl.arh.</p>
                <div className="prvidiv">
                </div>
                <p className="tekstA"><b>KREATIVNA</b></p>
                <div className="drugidiv">
                </div>
                <p className="tekstB"><b>OVL.ARHIT.</b></p>
                <div className="trecidiv">
                </div>
                <p className="tekstC"><b>INOVATIVNA</b></p>
                </div>
            <hr className="treca-crta"></hr>
            
            <img className="added" src={living}></img>
            <hr></hr>
            <div className="studioDiv"></div>
                
           
                <p className="studioTekst"><b>O STUDIU</b><br></br><br></br>ARSVIVA studio d.o.o. je nasljednik Ureda ovlaštene arhitektice Gordane Šiško koji je započeo s
radom 2001. godine. <br></br>Najveći dio projekata vezan je za stambenu arhitekturu; obiteljske i stambene zgrade, rješenja
interijera, <br></br>te uključuje i građevine poslovnih i posebnih namjena.<br></br><br></br>
Osnivanjem ARSIVA studia, zaokružuje se ukupan rad arhitektice koji uz poslove projektiranja <br></br>
građevina i uređenja interijera obuhvaća i njen slikarski rad.</p>
        <img className="circleStudio" src={studios}></img>
        <hr className="crtaStudio"></hr>
        <p className="arsviva">Arsviva</p>
        <hr className="crtaispod"></hr>
            
            
            <div><br></br><br></br><br></br></div>
            <hr></hr>
            <Footer />




        </>
    );
}

export default Studio;