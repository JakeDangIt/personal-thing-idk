import './brand.css';
import React from 'react';
import {steam, xbox, ps, epic, nintendo} from './imports.js'

const Brand = () => {
  return (
    <div className='celeste__brand section__padding'>
      <div>
        <img src={steam} alt="steam" />
      </div>
      <div>
        <img src={xbox} alt="xbox" />
      </div>
      <div>
        <img src={ps} alt="ps" />
      </div>
      <div>
        <img src={epic} alt="epic" />
      </div>
      <div>
        <img src={nintendo} alt="nintendo" />
      </div>
    </div>
  )
}

export default Brand
