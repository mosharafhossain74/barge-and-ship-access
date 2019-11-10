import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Herosection = styled.div`
  overflow: hidden;
  .hero-box {
    position: relative;
  }
  .hero-box h1 {
    color: #ffffff;
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 58px;
    text-transform: uppercase;
    margin-bottom: 0;
    position: absolute;
    bottom: 30px;
    left: 40px;
    z-index: 2;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .hero-box h1 {
      font-size: 30px;
      line-height: 35px;
    }
  }
  @media only screen and (max-width: 767px) {
    .container {
      margin: 0 auto;
      padding: 0;
    }
    .hero-box h1 {
      font-size: 32px;
      line-height: 41px;
      text-align: center;
      display: inline-block;
      left: 0;
      right: 0;
    }
  }
`

const HeroSection = () => {
  const {
    hero: { acf: hero },
    acf,
  } = useStaticQuery(graphql`
    query {
      acf: allWordpressAcfOptions {
        edges {
          node {
            options {
              ad_block_content
            }
          }
        }
      }
      hero: wordpressPage(wordpress_id: { eq: 7 }) {
        acf {
          hero_text
          hero_image {
            localFile {
              childImageSharp {
                resolutions(width: 825, height: 427) {
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
  `)

  const adContent = acf.edges[0].node.options.ad_block_content
  const resolutions = hero.hero_image
    ? hero.hero_image.localFile.childImageSharp.resolutions
    : null
  return (
    <Herosection>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9">
            <div className="hero-box">
              <img src={resolutions.src} alt="hero-banner" />
              <h1 dangerouslySetInnerHTML={{ __html: hero.hero_text }} />
            </div>
          </div>
          <div
            className="col-12 col-md-3 d-none d-md-block"
            dangerouslySetInnerHTML={{ __html: adContent }}
          />
        </div>
      </div>
    </Herosection>
  )
}

export default HeroSection
