import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ProductWrapper = styled.div`
  padding-top: 1.5rem !important;
  @media only screen and (max-width:767px) {
    padding-top:0 !important;
    margin-top:1.5rem;
    display:none;
  }
  .f-product-wrapper {
    background: #fff;
    padding: 20px 0;
  }
  .f-products-box {
    text-align: center;
    border-right: 1px solid #000;
  }
  @media only screen and (max-width:767px){
    .f-products-box{
      padding-top: 1.5rem !important;
    }
  }
  .f-product-wrapper .row .f-products-box:last-child {
    border: none;
  }
  .f-products-box a {
    text-decoration: none;
  }
  .f-products-box h3 {
    color: #000000;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.39px;
    line-height: 28px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .f-products-box h3 {
      font-size: 18px;
      line-height: 20px;
    }
  }
  @media only screen and (max-width: 767px) {
    .f-products-box {
      border-right: none;
    }
    .product-mobile-border {
      border-bottom: 1px solid #000;
    }
    .f-product-wrapper .row .f-products-box:last-child .product-mobile-border {
      border: none;
    }




  }
`
const PRODUCTIMAGE = styled.div`
  height:140px;
  text-align: center;
  .display-table {
    display: table;
    width: 100%;
    height: 100%;
  }
  .display-table-cell {
    display: table-cell;
    vertical-align: middle;
  }
  .gatsby-image-wrapper,
  img {
    max-width:138px !important;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {

    height:120px;
    .gatsby-image-wrapper,
    img {
      max-width:120px !important;
    }
  }
`

const Product = () => {
  const data = useStaticQuery(graphql`
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
    <ProductWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="f-product-wrapper">
              <div className="row">
                <div className="col-12 col-md-3 f-products-box">
                  <div className="product-mobile-border">
                    <Link
                      to={
                        data.wordpressPage.acf.featured_products[0].product_link
                      }
                    >
                      {data.wordpressPage.acf.featured_products[0].product_image
                        .localFile.childImageSharp.fluid && (
                          <PRODUCTIMAGE>
                            <div className="display-table">
                              <div className="display-table-cell">
                                <Img
                                  fluid={
                                    data.wordpressPage.acf.featured_products[0]
                                      .product_image.localFile.childImageSharp
                                      .fluid
                                  }
                                />
                              </div>
                            </div>
                          </PRODUCTIMAGE>
                        )}
                      <h3>
                        {
                          data.wordpressPage.acf.featured_products[0]
                            .product_title
                        }
                      </h3>
                    </Link>
                  </div>
                </div>

                <div className="col-12 col-md-3 f-products-box">
                  <div className="product-mobile-border">
                    <Link
                      to={
                        data.wordpressPage.acf.featured_products[1].product_link
                      }
                    >
                      {data.wordpressPage.acf.featured_products[1].product_image
                        .localFile.childImageSharp.fluid && (
                          <PRODUCTIMAGE>
                            <div className="display-table">
                              <div className="display-table-cell">
                                <Img
                                  fluid={
                                    data.wordpressPage.acf.featured_products[1]
                                      .product_image.localFile.childImageSharp
                                      .fluid
                                  }
                                />
                              </div>
                            </div>
                          </PRODUCTIMAGE>
                        )}
                      <h3>
                        {
                          data.wordpressPage.acf.featured_products[1]
                            .product_title
                        }
                      </h3>
                    </Link>
                  </div>
                </div>

                <div className="col-12 col-md-3 f-products-box">
                  <div className="product-mobile-border">
                    <Link
                      to={
                        data.wordpressPage.acf.featured_products[2].product_link
                      }
                    >
                      {data.wordpressPage.acf.featured_products[2].product_image
                        .localFile.childImageSharp.fluid && (
                          <PRODUCTIMAGE>
                            <div className="display-table">
                              <div className="display-table-cell">
                                <Img
                                  fluid={
                                    data.wordpressPage.acf.featured_products[2]
                                      .product_image.localFile.childImageSharp
                                      .fluid
                                  }
                                />
                              </div>
                            </div>
                          </PRODUCTIMAGE>
                        )}
                      <h3>
                        {
                          data.wordpressPage.acf.featured_products[2]
                            .product_title
                        }
                      </h3>
                    </Link>
                  </div>
                </div>

                <div className="col-12 col-md-3 f-products-box">
                  <div className="product-mobile-border">
                    <Link
                      to={
                        data.wordpressPage.acf.featured_products[3].product_link
                      }
                    >
                      {data.wordpressPage.acf.featured_products[3].product_image
                        .localFile.childImageSharp.fluid && (
                          <PRODUCTIMAGE>
                            <div className="display-table">
                              <div className="display-table-cell">
                                <Img
                                  fluid={
                                    data.wordpressPage.acf.featured_products[3]
                                      .product_image.localFile.childImageSharp
                                      .fluid
                                  }
                                />
                              </div>
                            </div>
                          </PRODUCTIMAGE>
                        )}
                      <h3>
                        {
                          data.wordpressPage.acf.featured_products[3]
                            .product_title
                        }
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductWrapper>
  )
}

export default Product
