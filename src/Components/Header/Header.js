import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header_top">
            <p>CONTACT US AT +91-8800554491 | SHIPPING WORLDWIDE</p>
        </div>
        <div className="header_bottom">
        <h1>JJ VALAYA</h1>
        <ul className='links'>
            <li><a href='/'>MEN</a></li>
            <li><a href='/'>WOMEN</a></li>
            <li><a href='/'>NEW ARRIVALS</a></li>
            <li><a href='/'>ART</a></li>
            <li><a href='/'>HOME & LIFESTYLE</a></li>
            <li><a href='/'>VALAYA UPDATES</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header