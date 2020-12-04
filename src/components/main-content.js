import React from "react"
import mainContentStyles from "./main-content.module.css"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PortfolioCard from "./portfolio-card"

const MainContent = () => {
  const data = useStaticQuery(graphql`
    query {
      srilicious: file(relativePath: { eq: "srilicious.png" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      noahs: file(relativePath: { eq: "noahsnursery.png" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nashauna: file(relativePath: { eq: "nashauna.png" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      image: file(relativePath: { eq: "bg-5.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.image.childImageSharp.fluid}
      className={mainContentStyles.bgImage}
    >
      <main>
        <section id="introduction" className={mainContentStyles.introduction}>
          <div className={mainContentStyles.textContainer}>
            <h1 className={mainContentStyles.introHeader}>
              Hello,{" "}
              <span className={mainContentStyles.textPurple}>
                my name is Phoebe.
              </span>{" "}
            </h1>
            <p>
              I'm a front-end developer and I build interactive maps for a
              living. You've stumbled upon my internet home and if you want to
              learn more about me, just keep on scrolling...
            </p>
          </div>
        </section>

        <section id="about">
          <div className={mainContentStyles.textContainer}>
            <h2 className={mainContentStyles.aboutHeader}>About me</h2>
            <p>
              I was born and educated in the U.K. Before entering the world of
              web development, I worked for over a decade at various
              universities in London. Throughout my career in Higher Education,
              I was a strong advocate of using technology and software to
              automate repetitive administrative tasks. So I decided to pursue a
              more technical career.
            </p>
            <p>
              Apart from my passion for learning the latest frontend
              technologies and frameworks, I also write for{" "}
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                freeCodeCamp.org
              </a>
              . You can read my articles{" "}
              <a
                href="https://www.freecodecamp.org/news/author/phoebe"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .{" "}
            </p>
            <p>
              In my spare time, I mentor early-career developers for{" "}
              <a
                href="https://the-collab-lab.codes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Collab Lab
              </a>
              . The Collab Lab is a non-profit and their goal is to help
              under-represented folks break into the tech industry.
            </p>
            <p>
              Aside from work, my two young children keep me occupied. But
              sometimes I manage to bake a cake or two during my spare time.
            </p>
          </div>
        </section>
        <section id="wordpress-portfolio">
          <div className={mainContentStyles.textContainer}>
            <h2 className={mainContentStyles.freelanceHeader}>
              Freelance projects
            </h2>
            <div className={mainContentStyles.portfolioCardWrapper}>
              <PortfolioCard
                image={data.srilicious.childImageSharp.fixed}
                title="Sri-Licious"
                excerpt="A multi-page marketing website. I did a complete redesign of Sri-Licious' website to bring it line with their updated branding."
                link="https://srilicious.co.uk/"
              />

              <PortfolioCard
                image={data.noahs.childImageSharp.fixed}
                title="Noah's Nursery"
                excerpt="A multipage marketing website. I created a playful theme and design to compliment a children's nursery."
                link="https://noahsnursery.co.uk/"
              />

              <PortfolioCard
                image={data.nashauna.childImageSharp.fixed}
                title="Nashauna Manboard"
                excerpt="A single page marketing website for a life coach. The client wanted to stand out through a bold and colourful design."
                link="https://nashaunamanboard.co.uk/"
              />
            </div>
          </div>
        </section>
      </main>
    </BackgroundImage>
  )
}

export default MainContent
