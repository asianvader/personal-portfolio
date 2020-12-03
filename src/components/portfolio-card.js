import React from "react"
import portfolioCardStyles from "./portfoliocard.module.css" 
import Img from "gatsby-image"

function PortfolioCard({ title, excerpt, link, image }) {
  return (
    <div className={portfolioCardStyles.wrapper}>
        <Img fluid={image} className={portfolioCardStyles.cardImage} />
      <h3 className={portfolioCardStyles.cardTitle}>{title}</h3>
      <p className={portfolioCardStyles.cardExcerpt}>{excerpt}</p>
      <button role="link" className={portfolioCardStyles.cardButton}>
        <a href={link} rel="noopener noreferrer" target="_blank">
          Live Site
        </a>
      </button>
    </div>
  )
}

export default PortfolioCard
