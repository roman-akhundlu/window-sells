import React from 'react'
import './Navbar.css';
import { toggleOverlayMenu } from '../overlaymenu';

const Navbar = () => {
  return (
    <>
     <nav className="sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../src/assets/photos/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleOverlayMenu} // Attach the function here
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item roboto-bold">
                <a className="nav-link active" aria-current="page" href="../components/Resposive.jsx">HOMEPAGE</a>
              </li>
              <li className="nav-item roboto-bold">
                <a className="nav-link active" href="#">ABOUT</a>
              </li>
              <li className="nav-item roboto-bold">
                <a className="nav-link active" href="#">POST</a>
              </li>
              <li className="nav-item roboto-bold">
                <a className="nav-link active" href="#">P.DETAILS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="overlay-menu" className="overlay-menu">
        <ul className="overlay-menu-list">
          <li className="overlay-menu-item"><a className='overlay-menu-link' href="../components/Resposive">HOMEPAGE</a></li>
          <li className="overlay-menu-item"><a className='overlay-menu-link' href="#">ABOUT</a></li>
          <li className="overlay-menu-item"><a className='overlay-menu-link' href="#">POST</a></li>
          <li className="overlay-menu-item"><a className='overlay-menu-link' href="#">P.DETAILS</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar