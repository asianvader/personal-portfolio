import React from "react"
import Layout from "../components/layout"
import MainContent from "../components/main-content"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../components/useSiteMetadata"

export default function Home() {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <title>{`${title} | Home`}</title>
        <link rel="canonical" href="https://thecodinghamster.com" />
        <meta name="description" content={description} />
      </Helmet>

      <Layout>
        <MainContent />
      </Layout>
    </div>
  )
}
