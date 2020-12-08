import React from "react"
import Layout from "../components/layout"
import BlogContent from "../components/blog-content"
import useSiteMetadata from "../components/useSiteMetadata"
import { Helmet } from "react-helmet"

export default function Blog() {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <title>{`${title} | Articles`}</title>
        <link rel="canonical" href="https://thecodinghamster.com" />
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <BlogContent />
      </Layout>
    </div>
  )
}
