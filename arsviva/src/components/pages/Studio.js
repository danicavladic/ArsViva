import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Studio.css';
import onama from '../wall.jpg';
import studios from '../studiosmall.jpg'
import owner from '../person.jpeg'



function Studio() {

    return (
        <>
           <hr className="prva-crta"></hr>
           <img className="aboutUs" src={onama}></img>
           <hr></hr>
            <div className="studio">
                <div className="leftStudio">
                
                </div>
                
            <hr className="prva-crta"></hr>
            <img className="circlePerson" src={owner}></img>
            <p className="aboutOwner"><b>GORDANA ŠIŠKO</b><br></br><br></br>Rođena je u Zagrebu 1966. godine gdje je i diplomirala na Arhitektonskom fakultetu 1991.<br></br><br></br>
            Radila je u Arhtektonu d.o.o. i u projektnom uredu Prigorke d.o.o. kao glavni projektant i voditelj <br></br>projekata do osnivanja vlastitog ureda 2001.</p>
            <hr className="druga-crta"></hr>
            <div className="drugi-div"></div>
           
                <p className="studioTekst"><b>O STUDIU</b><br></br><br></br>ARSVIVA studio d.o.o. je nasljednik Ureda ovlaštene arhitektice Gordane Šiško koji je započeo s
radom 2001. godine. <br></br>Najveći dio projekata vezan je za stambenu arhitekturu; obiteljske i stambene zgrade, rješenja
interijera, <br></br>te uključuje i građevine poslovnih i posebnih namjena.<br></br><br></br>
Osnivanjem ARSIVA studia, zaokružuje se ukupan rad arhitektice koji uz poslove projektiranja <br></br>
građevina i uređenja interijera obuhvaća i njen slikarski rad.</p>
            </div>
            
            <div><br></br><br></br><br></br></div>
            <hr></hr>
            <Footer />




        </>
    );
}

export default Studio;