import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"
import cuid from "cuid"

import AngleLeft from "../../images/angle-left.png"
import AngleRight from "../../images/angle-right.png"

const ProductSliderWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
  }
  .slick-arrow {
    &:before,
    &:after {
      display: none;
    }
    z-index: 25;

    position: absolute;
    top: 50%;
    display: block;
    width: 17px;
    height: 28px;
    cursor: pointer;
    border: none;
    margin-top: -14px;
  }
  .slick-list,
  .slick-slider {
    display: block;
    position: relative;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
  }
  .gatsby-image-wrapper,
  img {
    max-width:138px !important;
    margin-left:auto;
    margin-right:auto;

  }
  @media only screen and (max-width: 420px) {
    .gatsby-image-wrapper,
    img {
      max-width:138px !important;
    }
  }
`

const ProductBox = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;
  text-align: center;
  background: #fff;
  padding: 15px;
  padding-top:35px;

  h3 {
    color: #000000;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.39px;
    line-height: 28px;
    text-transform: uppercase;
  }
`

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 15, zIndex: 25 }}
      onClick={onClick}
    >
      <img className="next" src={AngleRight} alt="next-items" />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 15 }}
      onClick={onClick}
    >
      <img className="prev" src={AngleLeft} alt="previous-items" />
    </div>
  )
}

const Product = ({ product_title, product_link, product_image }) => (
  <ProductBox to={product_link}>
    {product_image && (
      <Img fluid={product_image.localFile.childImageSharp.fluid} />
    )}
    <h3>{product_title}</h3>
  </ProductBox>
)

const ProductSlider = ({ aside }) => {
  const settings = {
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const {
    wordpressPage: {
      acf: { featured_products },
    },
  } = useStaticQuery(graphql`
    query {
      wordpressPage(wordpress_id: { eq: 7 }) {
        acf {
          featured_products {
            product_title
            product_link
            product_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth:138, quality: 100) {
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

  return (
    <ProductSliderWrapper className="pt-4">
      <Slider {...settings}>
        {featured_products &&
          featured_products.map(item => <Product key={cuid()} {...item} />)}
      </Slider>
    </ProductSliderWrapper>
  )
}

export default ProductSlider
