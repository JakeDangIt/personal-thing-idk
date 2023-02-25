import './header.css';
import React from 'react';
import people from '../../assets/people.png';
import wallpaper from '../../assets/celeste wallpaper.jpg'

const Header = () => {
  return (
    <div className='section__padding celeste__header' id='home'>
      <div className='celeste__header-content'>
        <h1 className='gradient__text'>Celeste, the Award-Winning Platformer</h1>

        <p>In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old.</p>

        <div className='celeste__header-content_input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='celeste__header-content_people'>
          <img src={people} alt="people" />
          <p>0 people have been here before.</p>
        </div>

      </div>
      <div className='celeste__header-image'>
        <img src={wallpaper} alt="celeste-wallpaper" />
      </div>
    </div>
  )
}

export default Header
