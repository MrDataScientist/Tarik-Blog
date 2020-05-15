import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ErrorImage from '../components/error-image.js'

const NotFoundPage = () => (
  <Layout>

    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Hamster freaking out!! Probably because it's the wrong link mate!</p>
    <ErrorImage />
  </Layout>
)

export default NotFoundPage
