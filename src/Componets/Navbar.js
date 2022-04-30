// navbar 
import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from '../assets/Group 245.png'
import shopimg from "../assets/Vector.png"
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="/">
  <img src={Logo}/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">HOME</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">ABOUT US</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/servies">SERVICES</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hire">HIRE</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contactus">CONTACT US</Link>
      </li>
    </ul>
    <ul className="navbar-nav mr-auto">
    <li className="nav-item ">
      <Link className="nav-link" to="/shop">+972-56746543231</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/login">LOGIN /</Link>
    </li>
    <l className="nav-item">
      <Link className="nav-link" to="/signup"> REGISTER</Link>
    </l>
    <li className="nav-item">
    <Link className="nav-link" to="/shoppingcard">
    <img src={shopimg}/>
    </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" href="/">0 / 0.00</Link>
</li>
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default Navbar
