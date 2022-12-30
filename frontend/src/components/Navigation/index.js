import React from 'react';
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
        <NavLink exact to="/"><img src={stockx}/></NavLink>
        <input type="text" placeholder='Search for brand, corlor, etc.' id="search-bar"/>
        <NavLink to="/">Browse</NavLink>
        <NavLink to="/">About</NavLink>
        {sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;