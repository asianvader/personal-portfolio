import React from "react"
import mainContentStyles from "./main-content.module.css"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PortfolioCard from "./portfolio-card"
import "fontsource-roboto"
import Skills from "./skills"
import Footer from "./footer"
import ProjectCard from "./project-card"

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

      image: file(relativePath: { eq: "bg-6.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1366) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      calculator: file(relativePath: { eq: "calculator.png" }) {
        id
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      drummachine: file(relativePath: { eq: "drummachine.png" }) {
        id
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      choropleth: file(relativePath: { eq: "choropleth.png" }) {
        id
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      exercise: file(relativePath: { eq: "exercise.png" }) {
        id
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pomodoro: file(relativePath: { eq: "pomodoro.png" }) {
        id
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      treemap: file(relativePath: { eq: "treemap.png" }) {
        id
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
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

        <section id="about" className={mainContentStyles.about}>
          <div className={mainContentStyles.textContainer}>
            <h2 className={mainContentStyles.aboutHeader}>About me</h2>
            <p className={mainContentStyles.paragraph}>
              I was born and educated in the U.K. Before entering the world of
              web development, I worked for over a decade at various
              universities in London. Throughout my career in Higher Education,
              I was a strong advocate of using technology and software to
              automate repetitive administrative tasks. So I decided to pursue a
              more technical career. I'm currently working full-time as a Front-end Developer specialising in WebGIS.
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
        <section
          id="wordpress-portfolio"
          className={mainContentStyles.wpPortfolio}
        >
          <div className={mainContentStyles.textContainer}>
            <h2 className={mainContentStyles.freelanceHeader}>
              Freelance projects
            </h2>
            <p>A sample of some of my freelance projects below.</p>
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

        <section id="fun-projects" className={mainContentStyles.funProjects}>
          <div className={mainContentStyles.textContainer}>
            <h2 className={mainContentStyles.funHeader}>Fun Projects</h2>
            <p>I've selected a few of my side projects below.</p>
          </div>
          <div className={mainContentStyles.projectWrapper}>
            <div>
              <ProjectCard
                image={data.calculator.childImageSharp.fixed}
                title="Calculator"
                excerpt="A calculator built with React."
                link="https://codepen.io/asianvader/full/XyxNgO"
              />
              <ProjectCard
                image={data.drummachine.childImageSharp.fixed}
                title="Drum Machine"
                excerpt="A drum machine built with React."
                link="https://codepen.io/asianvader/full/XxagqL"
              />
              <ProjectCard
                image={data.pomodoro.childImageSharp.fixed}
                title="Pomodoro Clock"
                excerpt="A pomodoro clock built with React."
                link="https://codepen.io/asianvader/full/madeyw"
              />
            </div>
            <div>
              <ProjectCard
                image={data.choropleth.childImageSharp.fixed}
                title="Choropleth Map"
                excerpt="A choropleth map created using the D3.js library."
                link="https://codepen.io/asianvader/full/yWbNrB"
              />
              <ProjectCard
                image={data.treemap.childImageSharp.fixed}
                title="Tree Map"
                excerpt="A tree map created using the D3.js library."
                link="https://codepen.io/asianvader/full/zQmXmd"
              />
              <ProjectCard
                image={data.exercise.childImageSharp.fixed}
                title="Exercise Tracker"
                excerpt="A full stack app using JavaScript, Node.js and MongoDB."
                link="https://phoebe-fcc-api-exercise-tracker.glitch.me/"
              />
            </div>
          </div>
        </section>

        <section id="skills" className={mainContentStyles.skills}>
          <div className={mainContentStyles.textContainer}>
            <h2 className={mainContentStyles.skillsHeader}>Technical Skills</h2>
            <p>
              Here are a few technologies I have worked with recently. Please
              checkout my{" "}
              <a
                href="https://www.linkedin.com/in/phoebe-voong-fadel-36961234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn profile
              </a>{" "}
              for more details.
            </p>
          </div>
          <Skills />
        </section>
      </main>
      <Footer />
    </BackgroundImage>
  )
}

export default MainContent
