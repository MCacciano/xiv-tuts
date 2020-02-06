import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {data.mtq.edges.map(({ node }) => (
          <li>{node.title}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const mizzteqVideos = graphql`
  query MizzTeq {
    mtq: allYtPlaylist {
      edges {
        node {
          title
        }
      }
    }
  }
`

export default IndexPage
