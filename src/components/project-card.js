import React from "react"
import projectCardStyles from "./projectCardStyles.module.css"
import Img from "gatsby-image"

function ProjectCard({ title, excerpt, link, image }) {
  return (
    <div className={projectCardStyles.wrapper}>
      <div className={projectCardStyles.imageWrapper}>
        <Img fixed={image} className={projectCardStyles.cardImage} />
      </div>
      <div className={projectCardStyles.textWrapper}>
        <h3 className={projectCardStyles.cardTitle}>{title}</h3>
        <p className={projectCardStyles.cardExcerpt}>{excerpt}</p>
        <button role="link" className={projectCardStyles.cardButton}>
          <a href={link} rel="noopener noreferrer" target="_blank">
            View
          </a>
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
