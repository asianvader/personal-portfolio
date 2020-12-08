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
      articles: allContentfulArticles(
        sort: { fields: datePublished, order: DESC }
      ) {
        totalCount
        edges {
          node {
            excerpt {
              id
              excerpt
            }
            title
            url
            datePublished(formatString: "MMMM, D YYYY")
          }
        }
      }
    }
  `)

  const articles = data.articles.edges
  console.log(articles)

  console.log(data.articles)
  return (
    <BackgroundImage
      fluid={data.image.childImageSharp.fluid}
      className={blogStyles.bgImage}
    >
      <Navbar />
      <main>
        <section id="blog-intro" className={blogStyles.blogSection}>
          <div className={blogStyles.textContainer}>
            <h1 className={blogStyles.blogHeader}>
              Welcome to my articles page
            </h1>
            <p>
              Please see below a collated list of all my blogs and articles to
              date.
            </p>
          </div>
          {articles.map(({ node }) => (
            <div key={node.excerpt.id} className={blogStyles.articlesWrapper}>
              <h3 className={blogStyles.articleHeading}>
                <a href={node.url} rel="noopener noreferrer" target="_blank">
                  {node.title}
                </a>{" "}
                - <span>{node.datePublished}</span>
              </h3>
              <p className={blogStyles.excerpt}>{node.excerpt.excerpt}</p>
            </div>
          ))}
        </section>
        <div className={blogStyles.socialMedia}>
          <Social />
        </div>
      </main>
      <Footer />
    </BackgroundImage>
  )
}
