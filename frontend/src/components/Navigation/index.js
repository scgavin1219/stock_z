import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import stockx from './StockX_logo.png'
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <Link to="/login"><button id='login-button'>Log In</button></Link>
        <Link to="/signup"><button id='signup-button'>Sign Up</button></Link>
      </>
    );
  }

  return (
    <nav>
      <div className='navbar'>
        <NavLink id="stockx-logo" exact to="/"><img src={stockx}/></NavLink>
        <input type="text" placeholder='Search for Brand, Color, etc.' id="search-bar"/>
        <NavLink id="browse-link" to="/">Browse</NavLink>
        <NavLink id="about-link" to="/">About</NavLink>
        <AiOutlineShoppingCart />
        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;