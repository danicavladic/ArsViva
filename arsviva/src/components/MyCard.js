import React from 'react';
import { Link } from 'react-router-dom';
import './MyCard.css';

function MyCard(props) {
  return (
    <>
      <div className="card-container">
          <div className="card-left-side"></div>
          <figure className="card-right-side"><img src={props.src}></img></figure>
      </div>
    </>
  );
}

export default MyCard;