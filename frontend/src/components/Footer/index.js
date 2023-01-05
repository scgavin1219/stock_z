import React from 'react'
import linkedIn from './linkedin.png'
import github from './github.png'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <h3>by Dylan Gavin</h3>
            <a href="https://github.com/scgavin1219"><img id="github" src={github} /></a>
            <a href="https://www.linkedin.com/in/dylan-gavin-a9595150/"><img id ="linkedin" src={linkedIn} /></a>
        </div>
        <div className='footer-middle-left'>
            <h3>Air Jordan</h3>
            <Link id="footer-link" to="/listings/1">Air Jordan 1</Link><br/>
            <Link id="footer-link" to="/listings/3">Air Jordan 4</Link><br/>
            <Link id="footer-link" to="/listings/2">Jordan .06</Link><br/>
            <Link id="footer-link" to="/listings/4">Air Jordan 6</Link><br/>
        </div>
        <div className='footer-middle-right'>
            <h3>Hot Releases</h3>
            <Link id="footer-link" to="/listings/16">Air Pods</Link><br/>
            <Link id="footer-link" to="/listings/7">Pokemon Shoes</Link><br/>
            <Link id="footer-link" to="/listings/12">Vans</Link><br/>
            <Link id="footer-link" to="/listings/16">G-Shock</Link><br/>
            <Link id="footer-link" to="/listings/17">SteamDeck</Link><br/>
        </div>
        <div className='footer-right'>
            <h3>Hot Cards</h3>
            <Link id="footer-link" to="/listings/21">MTG: Alpha Black Lotus</Link><br/>
            <Link id="footer-link" to="/listings/22">MTG: Lightning Bolt</Link><br/>
            <Link id="footer-link" to="/listings/24">PTC: Shining Charizard</Link><br/>
            <Link id="footer-link" to="/listings/25">PTC: Shining Gyarados</Link><br/>
            <Link id="footer-link" to="/listings/23">PTC: No: 1 Trainer</Link><br/>
        </div>
    </div>
  )
}

export default Footer