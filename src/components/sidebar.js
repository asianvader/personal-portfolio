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
  const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />
  const githubIcon = <FontAwesomeIcon icon={faGithubSquare} />
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />

  return (
    <div>
      <img src={Phoebe} alt="Phoebe smiling" />
      <h2>
        Hello. <br /> I'm Phoebe Voong-Fadel. I'm a front-end developer.
      </h2>
      {twitterIcon}
      {githubIcon}
      {linkedinIcon}
    </div>
  )
}

export default Sidebar
