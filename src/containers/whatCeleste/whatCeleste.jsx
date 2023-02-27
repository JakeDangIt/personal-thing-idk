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
        <h1 className='gradient-text'>
          Impressively intuitive response to your touch
        </h1>
        <p>
          Explore the gameplay
        </p>
      </div>
      <div className='celeste__whatCeleste-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default whatCeleste
