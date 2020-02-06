import React from "react"
import { graphql } from "gatsby"

import ReactPlayer from "react-player"

import Layout from "../components/layouts/main/layout"
// import Image from "../components/shared/image"
import SEO from "../components/shared/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      {data.mtq.edges.map(({ node }, i) => {
        return (
          i < 3 && (
            <div>
              <h3>{node.title}</h3>
              {node.items.map(
                (item, j) =>
                  j < 3 && (
                    <div>
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                        playing={false}
                        controls
                        config={{
                          youtube: {
                            playerVars: { showinfo: 1 },
                          },
                        }}
                      />
                    </div>
                  )
              )}
            </div>
          )
        )
      })}
    </Layout>
  )
}

export const mizzteqVideos = graphql`
  query MizzTeq {
    mtq: allYtPlaylist {
      edges {
        node {
          title
          items {
            snippet {
              resourceId {
                videoId
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
