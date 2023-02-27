import './navbar.css';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from '../../assets/celeste-logo.png'
import React, {useState} from 'react';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='celeste__navbar'>
      <div className='celeste__navbar-links'>
        <div className='celeste__navbar-links_logo'>
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <div className='celeste__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatCeleste'>What is Celeste?</a></p>
          <p><a href='#mechanics'>Mechanics</a></p>
          <p><a href='#speedrunning'>Speedrunning</a></p>
          <p><a href='#purchase'>Purchase</a></p>
        </div>
      </div>
      <div className='celeste__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='celeste__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='celeste__navbar-menu_container scale-up-center'>
            <div className='celeste__navbar-menu_container-links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#gameplay'>Gameplay</a></p>
              <p><a href='#mechanics'>Mechanics</a></p>
              <p><a href='#speedrunning'>Speedrunning</a></p>
              <p><a href='#purchase'>Purchase</a></p>
            </div>
            <div className='celeste__navbar-menu_container-link-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
