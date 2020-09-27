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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Studio' component={Studio} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
