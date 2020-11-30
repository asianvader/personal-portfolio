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
  const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
  const githubIcon = <FontAwesomeIcon icon={faGithubSquare} size="3x" />
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size="3x" />

  return (
    <div>
      <img src={Phoebe} alt="Phoebe smiling" />
      <h2>
        Hello. <br /> I'm Phoebe Voong-Fadel. I'm a front-end developer.
      </h2>
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
  )
}

export default Sidebar
