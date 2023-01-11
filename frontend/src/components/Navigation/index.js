import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GoSearch } from 'react-icons/go'
// import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import stockx from '../../assets/StockX_logo.png'
import Cart from '../Cart';
import './Navigation.css';
import { useState } from 'react';
import SearchBar from './SearchBar';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showCart, setShowCart] = useState(false)
  // let location = useLocation();

  const toggleCart = () => { 
    showCart ? setShowCart(false) : setShowCart(true)
  }

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
          <NavLink id="stockx-logo" exact to="/"><img id="logo" src={stockx}alt="stockx logo"/></NavLink>
          <div id='search-box'>
            
            {/* <input type="text" placeholder='Search for Brand, Color, etc.' id="search-bar"/> */}
            < SearchBar />
          </div>
        </div>
        <div className='nav-right'>
          <NavLink id="browse-link" to="/listings">Browse</NavLink>
          <NavLink id="about-link" to="/">About</NavLink>
          <Cart />
          {sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

//  <button id='shopping-button' onClick={toggleCart}><AiOutlineShoppingCart /></button> 