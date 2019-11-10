import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import PostBoxWrapper from "../styles/PostBlockStyles"
import cuid from "cuid"

const MoreWrapper = styled.div`
  .text-center {
    text-align: center;
  }
  .button {
    display: inline-block;
    font-family: "Roboto Condensed", sans-serif;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px -2px;
    color: #000;
    background: rgb(255, 255, 255);
    padding: 0.9em 3em;
    margin-bottom: 40px !important;
    cursor: pointer;
    margin-top: 20px !important;
  }
`

const Post = ({ link, title, excerpt, featured_media }) => {
  return (
    <PostBoxWrapper>
      <div className="h-post-box">
        {featured_media && (
          <div className="post-image">
            <Img fluid={featured_media.localFile.childImageSharp.fluid} />
          </div>
        )}
        <div className="h-post-content">
          <Link className="post-title" to={link}>
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
          <div
            className="h-post-content"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Link className="more-btn" to={link}>
            {" "}
            Keep Reading <span> > </span>
          </Link>
        </div>
      </div>
    </PostBoxWrapper>
  )
}

const Posts = ({ limit, skip, loadMore }) => {
  const [inc, setInc] = useState(1)

  const {
    allWordpressPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            id
            link
            title
            status
            excerpt
            acf {
              small_description
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 176, maxHeight: 176) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const handleLoadMore = () => {
    setInc(p => p + 1)
  }

  let posts =
    limit & skip
      ? edges.slice(skip, skip + limit * inc)
      : limit
      ? edges.slice(0, limit)
      : skip
      ? edges.slice(skip)
      : edges

  let disabled = skip + limit * inc > edges.length

  return (
    <>
      <div className="container">
        <div className="row">
          {posts &&
            posts.map(({ node }) => (
              <div className="col-md-6" key={cuid()}>
                <Post {...node} />
              </div>
            ))}
        </div>
      </div>
      {loadMore && (
        <MoreWrapper>
          <div className="container">
            <div className="row">
              <div
                className="col-md-12"
                onClick={!disabled ? handleLoadMore : null}
                disabled={disabled}
              >
                <div
                  className="text-center"
                  style={{ opacity: disabled ? "0.4" : "1" }}
                >
                  <div className="button">View More</div>
                </div>
              </div>
            </div>
          </div>
        </MoreWrapper>
      )}
    </>
  )
}

export default Posts
