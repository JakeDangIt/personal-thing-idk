import './brand.css';
import React from 'react';
import {steam, xbox, ps, epic, nintendo} from './imports.js'

const Brand = () => {
  return (
    <div className='celeste__brand section__padding '>
      <div>
        <a href='http://store.steampowered.com/app/504230/Celeste/'>
          <img src={steam} alt="steam" />
        </a>
      </div>
      <div>
        <a href='https://www.microsoft.com/en-ca/store/p/celeste/bwmql2rpwbhb'>
          <img src={xbox} alt="xbox" />
        </a>
      </div>
      <div>
        <a href='https://www.playstation.com/en-ca/games/celeste-ps4/'>
          <img src={ps} alt="ps" />
        </a>
      </div>
      <div>
        <a href='https://store.epicgames.com/en-US/p/celeste'>
          <img src={epic} alt="epic" />
        </a>
      </div>
      <div>
        <a href='https://www.nintendo.com/store/products/celeste-switch/'>
          <img src={nintendo} alt="nintendo" />
        </a>
      </div>
    </div>
  )
}

export default Brand
