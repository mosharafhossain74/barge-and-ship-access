/* eslint-disable react/no-danger */
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PostBoxWrapper from "../components/styles/PostBlockStyles"

const archiveTemplate = ({
  data: { file, allWordpressPost },
  pageContext: {
    catId,
    catName,
    catSlug,
    categories,
    humanPageNumber,
    numberOfPages,
  },
}) => (
  <Layout>
    <PostBoxWrapper>
      <div className="container">
        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="col-lg-12">
            <h1 className="page-title">
              Category: <span dangerouslySetInnerHTML={{ __html: catName }} />
            </h1>

            <div className="row">
              {allWordpressPost.edges.map(post => (
                <div className="col-md-6" key={post.node.id}>
                  <div className="h-post-box">
                    {post.node.featured_media &&
                      post.node.featured_media.localFile.childImageSharp
                        .resolutions && (
                        <div className="post-image">
                          <Img
                            resolutions={
                              post.node.featured_media.localFile.childImageSharp
                                .resolutions
                            }
                          />
                        </div>
                      )}

                    <div className="h-post-content">
                      <Link className="post-title" to={`/${post.node.slug}/`}>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: post.node.title,
                          }}
                        />
                      </Link>
                      <p
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

export default archiveTemplate

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 176, height: 176) {
                  src
                  width
                  height
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
