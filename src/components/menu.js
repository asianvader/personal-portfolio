import React, { useState } from "react"
import "./menu.css"

function Navbar() {
  const [opennav, setOpennav] = useState(false)

  function navbarOnClickHandler(e) {
    e.preventDefault()
    !opennav ? setOpennav(true) : setOpennav(false)
    opennav ? setOpennav(false) : setOpennav(true)
  }

  return (
    <header id="navbar" className={opennav ? "opened" : ""}>
      <nav className="navbar-container container">
        <a href="/" className="home-link">
          <div className="navbar-logo"></div>
          Website Name
        </a>
        <button
          type="button"
          onClick={navbarOnClickHandler}
          className="navbar-toggle"
          aria-label="Open navigation menu"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li className="navbar-item">
              <a className="navbar-link" href="#about">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="#wordpress-portfolio">
                Freelance
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="#fun-projects">
                Projects
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
