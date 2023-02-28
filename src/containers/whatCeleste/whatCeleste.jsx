import './whatCeleste.css';
import React from 'react';
import { Feature } from '../../components';

const whatCeleste = () => {
  return (
    <div className='celeste__whatCeleste section__margin' id="whatCeleste">
      <div className='celeste_whatCeleste-feature'>
        <Feature />
      </div>
      <div className='celeste__whatCeleste-heading'>
        <h1 className='gradient__text'>
          Impressively intuitive response to your touch and some more words that describe the game
        </h1>
        <p>
          Explore the gameplay
        </p>
      </div>
      <div className='celeste__features-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default whatCeleste
