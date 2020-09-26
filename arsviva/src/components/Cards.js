import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import project1 from './project1.jpg';
import p2 from './2.jpg';
import p3 from './3.jpg';
import p4 from './4.jpg';
import p5 from './5.jpg';
import p6 from './6.jpg';
import p7 from './7.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="checkOut">CHECK OUT OUR PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={project1}
              text='Hire D&D to get the best website possible!'
              label='COMFORTABLE'
              path='/services'
            />
            <CardItem
              src={p7}
              text='Hire D&D to get the best website possible!'
              label='LUXURIOUS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={p3}
              text='Hire D&D to get the best website possible!'
              label='COMPACT'
              path='/services'
            />
            <CardItem
              src={p4}
              text='Hire D&D to get the best website possible!'
              label='MARVELOUS'
              path='/products'
            />
            <CardItem
              src={p5}
              text='Hire D&D to get the best website possible!'
              label='BEST SELLING!'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
