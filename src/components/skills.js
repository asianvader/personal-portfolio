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
        <li>
          {htmlIcon} <p>HTML5</p>
        </li>
        <li>
          {cssIcon} <p>CSS/CSS3</p>
        </li>
        <li>
          {jsIcon} <p>JavaScript ES6+</p>
        </li>
        <li>
          <img src={ol} alt="" className={skillsStyles.logo} />
          <p>OpenLayers</p>
        </li>
      </ul>
      <ul>
        <li>
          {reactIcon} <p>React</p>
        </li>
        <li>
          {nodeJsIcon} <p>Node JS</p>
        </li>
        <li>
          <img src={mongodb} alt="" className={skillsStyles.logo} />
          <p>MongoDB</p>
        </li>
        <li>
          {wpIcon} <p>WordPress</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills
