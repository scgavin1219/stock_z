import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GoSearch } from 'react-icons/go'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import stockx from './StockX_logo.png'
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  let location = useLocation();
  console.log(location, 'location')


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton id='profile-button' user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='nav-login'>
        <Link to="/login"><button id='login-button'>Log In</button></Link>
        <Link to="/signup"><button id='signup-button'>Sign Up</button></Link>
      </div>
    );
  }

  return (
    <nav>
      <div className='navbar'>
        <div className='nav-left'>
          <NavLink id="stockx-logo" exact to="/"><img src={stockx}/></NavLink>
          <div id='search-box'>
            < GoSearch id='search-icon' />
            <input type="text" placeholder='Search for Brand, Color, etc.' id="search-bar"/>
          </div>
        </div>
        <div className='nav-right'>
          <NavLink id="browse-link" to="/listings">Browse</NavLink>
          <NavLink id="about-link" to="/">About</NavLink>
          <button id='shopping-button'><AiOutlineShoppingCart /></button>
          {sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;