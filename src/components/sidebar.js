import React from "react"
import sidebarStyles from "./sidebar.module.css"
import "fontsource-roboto"
import "fontsource-open-sans"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Social from "./social-media"

function Sidebar() {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "phoebe.jpg" }) {
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
        <Img
          className={sidebarStyles.imgPhoebe}
          fixed={data.image.childImageSharp.fixed}
          alt="Phoebe smiling"
        />
      </div>
      <h2 className={sidebarStyles.sidebarHeader}>Phoebe Voong-Fadel </h2>
      <p className={sidebarStyles.tagline}>
        Front-end developer | Writer | Mentor{" "}
      </p>
      <Social />

      <div className={sidebarStyles.footer}>
        <p>
          © 2020 Built by me with{" "}
          <span role="img" aria-label="love">
            ❤️{" "}
          </span>
          and Gatsby.js
        </p>
      </div>
    </div>
  )
}

export default Sidebar
