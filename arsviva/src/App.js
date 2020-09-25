import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import project1 from './components/project1.jpg'

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
          
        </Switch>
      </Router>
      <div className="sidebar">
          
          </div>
      <button className="svi">SVI PROJEKTI</button>
      </div>
      <div className="App-mainDiv-rightDiv" >
        <hr className="crta"/>
        <div className="vertikalnaCrta"></div>
        
        <img className="App-mainDiv-rightDiv-image" src={project1} ></img>
        <p className="naslov">WINTER</p>
        <p className="naslov2">FAIRYTALE</p>
        <p className="tekst">"This is not a marketing trick,</p>
        <p className="tekst2">you should totally believe us.</p>
        <p className="tekst2">Visit winter fairytale in Zagreb</p>
        <p className="tekst2">in warm June with a lot of sun."</p>
        <button className="projekt"><div className="pomDiv">VIDI PROJEKT</div></button>
        <hr className="crta2"/>
      </div>
      </div>
    </div>
    </> 

   
  );
}

export default App;
