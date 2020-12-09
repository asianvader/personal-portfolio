import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from "../components/content404.module.css"
import Navbar from "../components/menu"
import Footer from "./footer"

export default function PageNotFoundContent() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-6.png" }) {
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
      className={styles.bg}
    >
      <Navbar />
      <main>
        <section className={styles.mainSection}>
          <h1 className={styles.heading}>Uh oh. Page not found.</h1>
          <p>
            <Link to="/">Head home</Link>
          </p>
        </section>
      </main>
      <Footer />
    </BackgroundImage>
  )
}
