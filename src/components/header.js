import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import siteLogo from "../images/site-logo.png"
import Navigation from "./Navigation"

const HeaderWrapper = styled.header`
  border-top: 10px solid #000000;
  padding: 20px 0;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5rem;
  background: #fff;

  @media only screen and (max-width: 767px) {
    .logo {
      max-height: 69px;
      max-width:180px;
    }
  }
`

const Header = ({ children }) => {
  const {
    site,
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      menu: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 3 } }
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
    <HeaderWrapper>
      <div className="container">
        <div className="row">
          <div className="col-8 col-md-4 align-self-center">
            <Link to="/">
              <img
                className="logo"
                src={siteLogo}
                alt={site.siteMetadata.title}
              />
            </Link>
          </div>
          <div className="col-4 col-md-8 main-menu align-self-center">
            {children}
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
