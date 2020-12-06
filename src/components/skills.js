import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faWordpressSimple,
} from "@fortawesome/free-brands-svg-icons"
import skillsStyles from "./skills.module.css"
import mongodb from "../images/mongo.png"
import ol from "../images/ol.png"

function Skills() {
  const htmlIcon = <FontAwesomeIcon icon={faHtml5} size="2x" />
  const cssIcon = <FontAwesomeIcon icon={faCss3Alt} size="2x" />
  const jsIcon = <FontAwesomeIcon icon={faJsSquare} size="2x" />
  const reactIcon = <FontAwesomeIcon icon={faReact} size="2x" />
  const nodeJsIcon = <FontAwesomeIcon icon={faNodeJs} size="2x" />
  const wpIcon = <FontAwesomeIcon icon={faWordpressSimple} size="2x" />

  return (
    <div className={skillsStyles.wrapper}>
      <ul>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>{htmlIcon}</div>{" "}
          <p className={skillsStyles.logoText}>HTML5</p>
        </li>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>{cssIcon}</div>{" "}
          <p className={skillsStyles.logoText}>CSS/CSS3</p>
        </li>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>{jsIcon}</div>{" "}
          <p className={skillsStyles.logoText}>JavaScript ES6+</p>
        </li>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>
            <img src={ol} alt="" className={skillsStyles.logo} />
          </div>
          <p className={skillsStyles.logoText}>OpenLayers</p>
        </li>
      </ul>
      <ul>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>{reactIcon}</div>{" "}
          <p className={skillsStyles.logoText}>React</p>
        </li>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>{nodeJsIcon}</div>{" "}
          <p className={skillsStyles.logoText}>Node.js</p>
        </li>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>
            <img src={mongodb} alt="" className={skillsStyles.logo} />
          </div>
          <p className={skillsStyles.logoText}>MongoDB</p>
        </li>
        <li className={skillsStyles.logoItem}>
          <div className={skillsStyles.iconwrapper}>{wpIcon}</div>{" "}
          <p className={skillsStyles.logoText}>WordPress</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills
