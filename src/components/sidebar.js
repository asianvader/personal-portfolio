import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import Phoebe from "../images/phoebe.jpg"
import sidebarStyles from "./sidebar.module.css"
import "fontsource-roboto"
import "fontsource-open-sans"

function Sidebar() {
  const twitterIcon = (
    <FontAwesomeIcon
      icon={faTwitterSquare}
      className={sidebarStyles.fontAwesome}
      size="3x"
    />
  )
  const githubIcon = (
    <FontAwesomeIcon
      icon={faGithubSquare}
      className={sidebarStyles.fontAwesome}
      size="3x"
    />
  )
  const linkedinIcon = (
    <FontAwesomeIcon
      icon={faLinkedin}
      className={sidebarStyles.fontAwesome}
      size="3x"
    />
  )

  return (
    <div className={sidebarStyles.container}>
      <div className={sidebarStyles.imgPhoebe}>
        <img src={Phoebe} alt="Phoebe smiling" />
      </div>
      <h2 className={sidebarStyles.sidebarHeader}>
        Phoebe Voong-Fadel </h2>
        <p className={sidebarStyles.tagline}>Front-end developer | Writer | Mentor </p>
      
      <div className={sidebarStyles.buttonContainer}>
        <button class="btn" aria-label="Twitter link">
          <a
            href="https://twitter.com/PhoebeVF"
            rel="noopener noreferrer"
            target="_blank"
          >
            {twitterIcon}
          </a>
        </button>
        <button class="btn" aria-label="Github link">
          <a
            href="https://github.com/asianvader"
            rel="noopener noreferrer"
            target="_blank"
          >
            {githubIcon}
          </a>
        </button>
        <button class="btn" aria-label="LinkedIn link">
          <a
            href="https://www.linkedin.com/in/phoebe-voong-fadel-36961234/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkedinIcon}
          </a>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
