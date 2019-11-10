/* eslint-disable react/no-danger */
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PostBoxWrapper from "../components/styles/PostBlockStyles"

const PostTemplate = ({ data: { allWordpressPost } }) => (
  <Layout>
    <PostBoxWrapper>
      <div className="container">
        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="col-lg-12">
            <div className="row">
              {allWordpressPost.edges.map(post => (
                <div className="col-md-6" key={post.node.id}>
                  <div className="h-post-box">
                    <div>
                      {post.node.featured_media &&
                        post.node.featured_media.localFile.childImageSharp
                          .fluid && (
                          <div className="post-image">
                            <Img
                              fluid={
                                post.node.featured_media.localFile
                                  .childImageSharp.fluid
                              }
                            />
                          </div>
                        )}
                    </div>

                    <div className="h-post-content">
                      <Link className="post-title" to={`/${post.node.slug}/`}>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: post.node.title,
                          }}
                        />
                      </Link>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.node.excerpt,
                        }}
                      />
                      <Link className="more-btn" to={`/${post.node.slug}/`}>
                        Keep Reading <span> > </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PostBoxWrapper>
  </Layout>
)

export default PostTemplate

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 176, maxHeight: 176) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          date(formatString: "DD, MMM, YYYY")
        }
      }
    }
  }
`
