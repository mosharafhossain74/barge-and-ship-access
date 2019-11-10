import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Freetextwrapper = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }
  .padding0 {
    padding: 0;
  }
  .open-text-content {
    padding: 40px;
    height: 400px;
    background: #fff;
  }
  .open-text-content h1{
    line-height:30px;
  }
  .display-table {
    display: table;
    width: 100%;
    height: 100%;
  }
  .display-table-bottom {
    display: table-cell;
    vertical-align: bottom;
  }
  .gatsby-image-wrapper {
    position: relative;
    top: 7px;
  }
`

const FreeText = () => {
  const {
    freetext: { acf: freetext },
  } = useStaticQuery(graphql`
    query {
      freetext: wordpressPage(wordpress_id: { eq: 7 }) {
        acf {
          free_text
          open_text_right_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 570, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Freetextwrapper className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 align-self-end padding0">
            <div className="open-text-content">
              <div className="display-table">
                <div className="display-table-bottom">
                  <div
                    dangerouslySetInnerHTML={{ __html: freetext.free_text }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 padding0">
            <div className="freetext-right-image">
              <Img
                fluid={
                  freetext.open_text_right_image.localFile.childImageSharp.fluid
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Freetextwrapper>
  )
}

export default FreeText
