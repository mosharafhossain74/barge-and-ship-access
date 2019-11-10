import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import PostBoxWrapper from "../styles/PostBlockStyles"

const PostBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
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
          }
        }
      }
    }
  `)

  return (
    <PostBoxWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="h-post-box">
              <div className="post-image">
                <Img
                  resolutions={
                    data.allWordpressPost.edges[0].node.featured_media.localFile
                      .childImageSharp.resolutions
                  }
                />
              </div>
              <div className="h-post-content">
                <Link
                  className="post-title"
                  to={`/${data.allWordpressPost.edges[0].node.slug}/`}
                >
                  <h3>{data.allWordpressPost.edges[0].node.title}</h3>
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.allWordpressPost.edges[0].node.excerpt,
                  }}
                />
                <Link
                  className="more-btn"
                  to={`/${data.allWordpressPost.edges[0].node.slug}/`}
                >
                  Keep Reading <span> > </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-post-box">
            <div className="post-image">
                <Img
                  resolutions={
                    data.allWordpressPost.edges[1].node.featured_media.localFile
                      .childImageSharp.resolutions
                  }
                />
              </div>
              <div className="h-post-content">
                <Link
                  className="post-title"
                  to={`/${data.allWordpressPost.edges[1].node.slug}/`}
                >
                  <h3>{data.allWordpressPost.edges[1].node.title}</h3>
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.allWordpressPost.edges[1].node.excerpt,
                  }}
                />
                <Link
                  className="more-btn"
                  to={`/${data.allWordpressPost.edges[1].node.slug}/`}
                >
                  Keep Reading <span> > </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-post-box">
            <div className="post-image">
                <Img
                  resolutions={
                    data.allWordpressPost.edges[2].node.featured_media.localFile
                      .childImageSharp.resolutions
                  }
                />
              </div>
              <div className="h-post-content">
                <Link
                  className="post-title"
                  to={`/${data.allWordpressPost.edges[2].node.slug}/`}
                >
                  <h3>{data.allWordpressPost.edges[2].node.title}</h3>
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.allWordpressPost.edges[2].node.excerpt,
                  }}
                />
                <Link
                  className="more-btn"
                  to={`/${data.allWordpressPost.edges[2].node.slug}/`}
                >
                  Keep Reading <span> > </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-post-box">
            <div className="post-image">
                <Img
                  resolutions={
                    data.allWordpressPost.edges[3].node.featured_media.localFile
                      .childImageSharp.resolutions
                  }
                />
              </div>
              <div className="h-post-content">
                <Link
                  className="post-title"
                  to={`/${data.allWordpressPost.edges[3].node.slug}/`}
                >
                  <h3>{data.allWordpressPost.edges[3].node.title}</h3>
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.allWordpressPost.edges[3].node.excerpt,
                  }}
                />
                <Link
                  className="more-btn"
                  to={`/${data.allWordpressPost.edges[3].node.slug}/`}
                >
                  Keep Reading <span> > </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PostBoxWrapper>
  )
}
export default PostBlock
