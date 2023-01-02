import React from 'react'
import linkedIn from './linkedin.png'
import github from './github.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <h3>Find Dylan Gavin on Social</h3>
            <a href="https://github.com/scgavin1219"><img id="github" src={github} /></a>
            <a href="https://www.linkedin.com/in/dylan-gavin-a9595150/"><img id ="linkedin" src={linkedIn} /></a>
        </div>
        <div className='footer-middle-left'>
            <h3>Air Jordan</h3>
            <p>Air Jordan 1</p>
            <p>Women's Jordans</p>
            <p>Air Jordan 11</p>
            <p>Air Jordan 4</p>
            <p>Air Jordan 6</p>
        </div>
        <div className='footer-middle-right'>
            <h3>Hot Releases</h3>
            <p>Lighning McQueen Crocs</p>
            <p>Converse Chuck Taylors</p>
            <p>Pokemon Cards</p>
            <p>Magic the Gathering</p>
            <p>SteamDeck</p>
        </div>
        <div className='footer-right'>
            <h3>Hot Cards</h3>
            <p>MTG: Alpha Black Lotus</p>
            <p>MTG: Lightning Bolt</p>
            <p>Pokemon: No. 1 Trainer</p>
            <p>Pokemon: Pikachu Illustrator</p>
            <p>Ted Williams</p>
        </div>
    </div>
  )
}

export default Footer