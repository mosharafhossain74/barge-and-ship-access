import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import siteLogo from "../images/site-logo.png"
import Navigation from "./Navigation"

const FooterWrapper = styled.footer`
  background: #fff;
  color: #fff;
  text-align: center;
  padding: 15px 0 0 0;

  .footer-logo {
    text-align: left !important;
  }
  a {
    font-size: 15px;
    padding: 15px;
    margin: 0 5px;
  }
  .footer-logo a {
    margin: 0 !important;
    display: block;
    padding: 0;
  }
  .footer-logo img{
    max-height:50px;
  }
  .footer-bottom {
    background: #384148;
    padding: 10px 0;
    margin-top: 15px;
  }
  .footer-bottom .footer-copy {
    margin: 0;
    opacity: 0.7;
    font-size: 13px;
    font-weight: 300;
    line-height: 24px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: left;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    a {
      padding: 15px 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    .footer-logo {
      text-align: center !important;
    }
    .footer-logo a {
      display: inline-block;
    }
    .footer-bottom .footer-copy {
      text-align: center;
    }
  }
`

const Footer = () => {
  const {
    site,
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 18 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              wordpress_children {
                title
                url
              }
            }
            name
          }
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-3 align-self-center">
            <div className="footer-logo">
              <Link to="/">
                <img src={siteLogo} alt={site.siteMetadata.title} />
              </Link>
            </div>
          </div>
          <div className="col-md-9 main-menu align-self-center">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left">
              <div className="footer-copy">
                  © copyright 2019 Barge And Ship Access - All Right reserved 
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}
export default Footer
