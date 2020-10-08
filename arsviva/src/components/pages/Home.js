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
import a from '../b.jpg'
import arh from '../arh1.jpg'
import edit from '../edit.jpg'
import iph from '../iph2.jpg'


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
            <button className="svi">SVI PROJEKTI</button>
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
            <button className="projekt"><div className="pomDiv">VIDI OVAJ PROJEKT</div></button>
            <hr className="crta2" />
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="checkUs">UPOZNAJTE NAS</p>
      <div className="crta-div-green"></div>
      <p className="pajdasi">Arsviva studio</p>
      <p className="drugi-pajdasi">Upoznajte naš <br></br> Arsviva studio. </p>
      <div className="zeleni-div"></div>
      <div className="zeleni-div-2"><img className="a" src={a}></img></div>
      <p className="onamaslika"><b>O NAMA   <i class="fa fa-info"></i></b><br></br><br></br>Ako želite saznati nešto o <br></br>našem studiu, kliknite ovdje.</p>
      <div className="zeleni-div-3"><img className="b" src={arh}></img></div>
      <p className="onamaslika-2"><b>ARHITEKTURA</b><br></br><br></br>Ako želite saznati nešto o <br></br>našim arhitektonskim projektima, <br></br> kliknite ovdje. <i class="fa fa-building"></i></p>
      <div className="zeleni-div-4"><img className="c" src={edit}></img></div>
      <p className="onamaslika-3"><b>SLIKARSTVO   <i class="fas fa-palette"></i></b><br></br><br></br>Ako želite saznati nešto o <br></br>našim slikarskim radovima, <br></br> kliknite ovdje.</p>
      <div className="zeleni-div-5"><img className="d" src={iph}></img></div>
      <p className="onamaslika-4"><b>KONTAKT  </b><br></br><br></br>Ako nas želite kontaktirati, <br></br> kliknite ovdje.  <i class="fa fa-comment"></i></p>
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
