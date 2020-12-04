import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import sidebarStyles from "./sidebar.module.css"
import "fontsource-roboto"
import "fontsource-open-sans"
import { graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

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

  const data = useStaticQuery(graphql`
  query Images {
    image: file(relativePath: {eq: "phoebe.jpg"}) {
      id
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  return (
    <div className={sidebarStyles.container}>
      <div className={sidebarStyles.imgPhoebeWrapper}>
        <Img className={sidebarStyles.imgPhoebe} fixed={data.image.childImageSharp.fixed} alt="Phoebe smiling" />
      </div>
      <h2 className={sidebarStyles.sidebarHeader}>
        Phoebe Voong-Fadel </h2>
        <p className={sidebarStyles.tagline}>Front-end developer | Writer | Mentor </p>
      
      <div className={sidebarStyles.buttonContainer}>
        <button className="btn" aria-label="Twitter link">
          <a
            href="https://twitter.com/PhoebeVF"
            rel="noopener noreferrer"
            target="_blank"
          >
            {twitterIcon}
          </a>
        </button>
        <button className="btn" aria-label="Github link">
          <a
            href="https://github.com/asianvader"
            rel="noopener noreferrer"
            target="_blank"
          >
            {githubIcon}
          </a>
        </button>
        <button className="btn" aria-label="LinkedIn link">
          <a
            href="https://www.linkedin.com/in/phoebe-voong-fadel-36961234/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkedinIcon}
          </a>
        </button>
      </div>
      <div className={sidebarStyles.footer}>
        <p>© 2020 Built by me with ❤️ and Gatsby.js</p>
      </div>
    </div>
  )
}

export default Sidebar
