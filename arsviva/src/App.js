import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import project1 from './components/project1.jpg';
import pp from './components/zid.jpg';
import project5 from './components/5.jpg';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <div className="App">
        <div className="App-mainDiv">
          <div className="App-mainDiv-leftDiv">
            <Router>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Contact' component={Contact} />
              </Switch>
            </Router>
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
            <img className="App-mainDiv-rightDiv-image" src={pp} ></img>
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
      <Router> <Cards /></Router>
      <hr></hr>
      <Router>
        <Footer />
      </Router>
    </>
  );
}

export default App;
