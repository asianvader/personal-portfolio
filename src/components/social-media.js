import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import socialStyles from "./social.module.css"

export default function SocialButtons() {
  const twitterIcon = (
    <FontAwesomeIcon
      icon={faTwitterSquare}
      className={socialStyles.fontAwesome}
      size="3x"
    />
  )
  const githubIcon = (
    <FontAwesomeIcon
      icon={faGithubSquare}
      className={socialStyles.fontAwesome}
      size="3x"
    />
  )
  const linkedinIcon = (
    <FontAwesomeIcon
      icon={faLinkedin}
      className={socialStyles.fontAwesome}
      size="3x"
    />
  )
  const codepenIcon = (
    <FontAwesomeIcon
      icon={faCodepen}
      className={socialStyles.fontAwesome}
      size="3x"
    />
  )
  return (
    <div className={socialStyles.buttonContainer}>
      <a
        className={socialStyles.icon}
        href="https://www.linkedin.com/in/phoebe-voong-fadel-36961234/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="LinkedIn link"
      >
        {linkedinIcon}
      </a>
      <a
        className={socialStyles.icon}
        href="https://twitter.com/PhoebeVF"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Twitter link"
      >
        {twitterIcon}
      </a>
      <a
        className={socialStyles.icon}
        href="https://github.com/asianvader"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Github link"
      >
        {githubIcon}
      </a>

      <a
        className={socialStyles.icon}
        href="https://codepen.io/asianvader"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Codepen link"
      >
        {codepenIcon}
      </a>
    </div>
  )
}
