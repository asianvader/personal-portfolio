import React from "react"
import portfolioCardStyles from "./portfoliocard.module.css" 
import Img from "gatsby-image"

function PortfolioCard({ title, excerpt, link, image }) {
  return (
    <div className={portfolioCardStyles.wrapper}>
        <Img fixed={image} />
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <button role="link">
        <a href={link} rel="noopener noreferrer" target="_blank">
          Live Site
        </a>
      </button>
    </div>
  )
}

export default PortfolioCard
