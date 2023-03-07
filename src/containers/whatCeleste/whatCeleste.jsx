import './whatCeleste.css';
import React from 'react';
import { Feature } from '../../components';

const whatCeleste = () => {
  return (
    <div className='celeste__whatCeleste section__margin' id="whatCeleste">
      <div className='celeste_whatCeleste-feature'>
        <Feature title='What is Celeste' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc nisi, porttitor sodales lacus vel, fringilla vehicula lacus. Vestibulum ut dapibus ex. Sed odio tortor, euismod ac condimentum vitae, bibendum.'/>
      </div>
      <div className='celeste__whatCeleste-heading'>
        <h1 className='gradient__text'>
          Impressively intuitive response to your touch and some more words 
        </h1>
        <p>
          Explore the gameplay
        </p>
      </div>
      <div className='celeste__features-container'>
        <Feature title='Controls' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lectus ullamcorper, molestie est et.'/>
        <Feature title='Adaptability' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lectus ullamcorper, molestie est et.'/>
        <Feature title='User-friendly' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lectus ullamcorper, molestie est et.'/>
      </div>
    </div>
  )
}

export default whatCeleste
