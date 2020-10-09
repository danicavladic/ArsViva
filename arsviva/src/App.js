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
import Studio from './components/pages/Studio';
import Architecture from './components/pages/Architecture';
import Painting from './components/pages/Painting';
import ScrollToTop from './components/ScrollToTop.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          
          <Route path='/Contact' component={Contact} />
        
          <Route path='/Studio' component={Studio} />
          <Route path='/Architecture' component={Architecture} />
          <Route path='/Painting' component={Painting} />
          
        </Switch>
      </Router>

    </>
  );
}

export default App;
