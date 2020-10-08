import React from 'react';
import '../../App.css';
import '../Home.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import project1 from '../project1.jpg';
import pp from '../zid.jpg';
import project5 from '../5.jpg';
import { Link } from 'react-router-dom';
import Cards from '../Cards';
import Contact from './Contact';
import Slideshow from '../Slideshow';
import AnotherCard from '../AnotherCard'
import ReverseCard from '../ReverseCard'
import about from '../about.jpg'
import studio from '../studioSmallPhoto.jpg'
import paint from '../painting.jpg'
import cont from '../cont.jpg'


function Home() {
  return (
    <>
      <div className="App">
        <div className="App-mainDiv">
          <div className="App-mainDiv-leftDiv">
            <div className="sidebar">
            </div>
            <hr className="drugaCrta" />
            <hr className="trecaCrta" />
            <div className="cetvrtaCrta"></div>
            <div className="petaCrta"></div>
            <div className="facebook"><i className="fab fa-facebook-f"></i></div>
            <div className="instagram"><i className="fab fa-instagram"></i></div>
            <button className="svi">ALL PROJECTS</button>
          </div>
          <div className="App-mainDiv-rightDiv" >
            <hr className="crta" />
            <div className="vertikalnaCrta"></div>
            <Slideshow className="slideshow"/>
            
            <p className="naslov">WINTER</p>
            <p className="naslov2">FAIRYTALE</p>
            <p className="tekst">"This is not a marketing trick,</p>
            <p className="tekst2">you should totally believe us.</p>
            <p className="tekst2">Visit winter fairytale in Zagreb</p>
            <p className="tekst2">in warm June with a lot of sun."</p>
            <button className="projekt"><div className="pomDiv">SEE THIS PROJECT</div></button>
            <hr className="crta2" />
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="checkUs">CHECK US OUT</p>
      <AnotherCard src={about} label="ABOUT US" text="
      If you want to know more about us, click here"></AnotherCard>
      <div className="sections">
        <AnotherCard src={paint} label="PAINTING" text="
      If you are interested in our painting, click here"></AnotherCard>
      </div>
      <div className="sections-2">
        <ReverseCard src={studio} label="OUR STUDIO" text="
      If you are interested in our projects, click here"></ReverseCard>
      </div>
      <div className="sections-3">
        <ReverseCard src={cont} label="CONTACT" text="
      If you want to contact us, click here"></ReverseCard>
      </div>
      <Router> </Router>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <hr></hr>
      <Router>
        <Footer />
      </Router>
    </>
  );
}

export default Home;
