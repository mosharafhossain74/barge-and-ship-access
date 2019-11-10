import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../components/layout"
import PRODUCTS from "../components/index/Products"

const SIDEPRODUCTS = styled.div`
  .Products__ProductWrapper-ldEqZB.djnYwG {
    display: block !important;
  }
  .container {
    margin: 0;
    padding: 0;
  }
  .Products__ProductWrapper-ldEqZB {
    padding-top: 0 !important;
  }
  .col-md-3 {
    max-width: 100% !important;
    flex: 100%;
  }
  .f-products-box {
    border: none;
  }
  .gatsby-image-wrapper,
  img {
    max-width:138px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .Products__PRODUCTIMAGE-cTXoWI {
    max-height:135px !important;
  }
  .product-mobile-border {
    padding: 0 20px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .gatsby-image-wrapper,
    img {
      max-width:138px !important;
      margin-left: auto;
      margin-right: auto;
    }
    .Products__PRODUCTIMAGE-cTXoWI {
      max-height:135px !important;
    }
    .product-mobile-border {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .gatsby-image-wrapper,
    img {
      max-width:110px !important;
      margin-left: auto;
      margin-right: auto;
    }
    .Products__PRODUCTIMAGE-cTXoWI {
      max-height:100px !important;
    }
    .product-mobile-border {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  @media only screen and (max-width: 767px) {
    .gatsby-image-wrapper,
    img {
      max-width:115px !important;
      margin-left: auto;
      margin-right: auto;
    }
    .Products__PRODUCTIMAGE-cTXoWI {
      max-height:80px !important;
    }
    .product-mobile-border {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`

const postTemplate = ({ data: { post } }) => (
  <Layout>
    <div className="single-post-page pt-7 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="single-post-content">
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div className="post-meta">{post.date}</div>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
          <div className="col-md-3">
            <SIDEPRODUCTS className="sidebar-products">
              <PRODUCTS />
            </SIDEPRODUCTS>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default postTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMM YYYY")
      categories {
        id
        name
        slug
      }
    }
  }
`
