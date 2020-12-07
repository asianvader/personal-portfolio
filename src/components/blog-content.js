import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Navbar from "./menu"
import Footer from "./footer"
import blogStyles from "./blog.module.css"
import Social from "./social-media"

export default function BlogContent() {
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
      className={blogStyles.bgImage}
    >
      <Navbar />
      <main>
        <section id="blog-intro" className={blogStyles.blogIntro}>
          <div className={blogStyles.textContainer}>
            <h1 className={blogStyles.blogHeader}>
              Welcome to my blogs and articles page
            </h1>
            <p>
              Please see a list of all my blog articles to date.
            </p>
          </div>
        </section>

        <Social />
      </main>
      <Footer />
    </BackgroundImage>
  )
}
