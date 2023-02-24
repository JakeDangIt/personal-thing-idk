import './navbar.css';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from '../../assets/celeste-logo.png'
import React from 'react';

const Navbar = () => {
  return (
    <div className='celeste__navbar'>
      <div className='celeste__navbar-links'>
        <div className='celeste__navbar-links_logo'>
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <div className='celeste__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#gameplay'>Gameplay</a></p>
          <p><a href='#mechanics'>Mechanics</a></p>
          <p><a href='#speedrunning'>Speedrunning</a></p>
          <p><a href='#purchase'>Purchase</a></p>
        </div>
      </div>
      <div className='celeste__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
