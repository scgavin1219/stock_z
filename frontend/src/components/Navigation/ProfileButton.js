import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { CgProfile } from "react-icons/cg"
import './Navigation.css'
import { removeItems } from "../../store/cart";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFavorites } from "../../store/favorite";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const logout = (e) => {
    e.preventDefault();
    dispatch(removeItems())
    dispatch(removeFavorites())
    
    dispatch(sessionActions.logout());
    history.push("/login")
  };

  return (
  <>
    <div className='dropdown'>
      <button id="profile-button" onClick={openMenu}>
        <CgProfile className="fa-solid fa-user-circle" id="profile-button"/>
      </button>
      <div className="dropdown-menu">
        {showMenu && (
          <ul className="profile-dropdown">
            <li><span id="bold">USERNAME:</span> {user.username}</li>
            <li><span id="bold">EMAIL: </span>{user.email}</li>
            <li><span id="bold">FAVORITES: </span>{Object.values(favorites).length}</li>
            <li><Link to="/favorites" id="favorites-link"><button id="logout">Take me There!</button></Link></li>
            <li>
              <button id="logout" onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  </>
  );
}

export default ProfileButton;