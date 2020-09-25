import React from 'react';
import './App.css';
import project1 from './project1.jpg'

function App() {
  return (
    <div className="App">
      <div className="App-mainDiv">
      <div className="App-mainDiv-leftDiv"></div>
      <div className="App-mainDiv-rightDiv" >
        <img className="App-mainDiv-rightDiv-image" src={project1}></img>
        
      </div>
      </div>
    </div>
  );
}

export default App;
