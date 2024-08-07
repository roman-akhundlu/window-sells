import React from 'react'
import './Navbar.css';
import { toggleOverlayMenu } from '../overlaymenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <nav className="sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="../src/assets/photos/logo.png" alt="" />
          </Link>
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
              <li className="nav-item roboto-bold quicksand cormorant">
                <Link className="nav-link active" aria-current="page" to="/">HOMEPAGE</Link>
              </li>
              <li className="nav-item roboto-bold quicksand cormorant">
                <Link className="nav-link active" to="/aboutus">ABOUT</Link>
              </li>
              <li className="nav-item roboto-bold quicksand cormorant">
                <Link className="nav-link active" to="/post">POST</Link>
              </li>
              <li className="nav-item roboto-bold quicksand cormorant">
                <Link className="nav-link active" to="/portfolio">P.DETAILS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="overlay-menu" className="overlay-menu">
        <ul className="overlay-menu-list">
          <li className="overlay-menu-item"><Link className='overlay-menu-link quicksand cormorant' to="/">HOMEPAGE</Link></li>
          <li className="overlay-menu-item"><Link className='overlay-menu-link quicksand cormorant' to="/aboutus">ABOUT</Link></li>
          <li className="overlay-menu-item"><Link className='overlay-menu-link quicksand cormorant' to="/post">POST</Link></li>
          <li className="overlay-menu-item"><Link className='overlay-menu-link quicksand cormorant' to="/portfolio">P.DETAILS</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar