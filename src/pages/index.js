import React from "react"
import Layout from "../components/layout"
import MainContent from "../components/main-content"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Phoebe Voong-Fadel | Front-end Developer</title>
        <meta name="description" content="Phoebe Voong-Fadel. Front-end Developer" />
      </Helmet>
      <MainContent />
    </Layout>
  )
}
