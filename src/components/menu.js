import React, { useState } from "react"
import "./menu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

function Navbar() {
  const [opennav, setOpennav] = useState(false)

  const codeIcon = (
    <FontAwesomeIcon
      icon={faCode}
      className="fontawesome"
      title="Go to home page"
      size="2x"
    />
  )

  function navbarOnClickHandler(e) {
    e.preventDefault()
    !opennav ? setOpennav(true) : setOpennav(false)
    opennav ? setOpennav(false) : setOpennav(true)
  }

  return (
    <header id="navbar" className={opennav ? "opened" : ""}>
      <nav className="navbar-container container">
        <Link to="/" className="home-link">
          <div className="navbar-logo">{codeIcon}</div>
        </Link>
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
              <AnchorLink className="navbar-link" to="/#about">
                About
              </AnchorLink>
            </li>
            <li className="navbar-item">
              <AnchorLink className="navbar-link" to="/#wordpress-portfolio">
                Freelance
              </AnchorLink>
            </li>
            <li className="navbar-item">
              <AnchorLink className="navbar-link" to="/#fun-projects">
                Projects
              </AnchorLink>
            </li>
            <li className="navbar-item">
              <AnchorLink className="navbar-link" to="/#skills">
                Skills
              </AnchorLink>
            </li>
            <li className="navbar-item">
              <AnchorLink className="navbar-link" to="/#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
