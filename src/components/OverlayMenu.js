import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import WhilteLogo from "../images/overlay-logo.png"
import DoubleAngle from "../images/double-angle.png"
import CloseButton from "../images/tango_close_button.svg"

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 9999;
  background: #fff;
  left: 0px;
  transition: all 0.3s ease;
  .inner {
    background: #000;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 40px;
  }
  .whiteLogo {
    max-width: 200px;
    margin: 60px 0 40px 0;
  }
  .overlayMenu {
    text-align: left;
    list-style-type: none;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0 0 0 0;
    list-style: none;
    display: block;
  }
  li.overlayActive {
    color: #d22e26;
  }
  li ul {
    padding: 0;
    margin-left: 30px;
  }
  li li {
    position: relative;
    padding-left: 20px;
  }
  li li img {
    position: absolute;
    left: -5px;
    top: 50%;
    width: 15px;
    height: 15px;
    margin-top: -8px;
  }
  a {
    color: #fff;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1.22px;
    line-height: 18px;
    text-transform: uppercase;
    padding: 15px 0;
    display: block;
    text-decoration: none;
    transition: 0.5s all ease;
  }
  a:hover {
    color: #d22e26;
  }
  .angle-down {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;
    right: 23px;
    top: 50%;
    margin-top: -6px;
  }
  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;
  }
`

const OverlayMenu = ({ menuOpen, callback }) => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(
    graphql`
      query OverlayMenu {
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
            }
          }
        }
      }
    `
  )

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img className="whiteLogo" src={WhilteLogo} alt="site-logo" />
        <ul className="overlayMenu">
          {menu.items.map((item, i) => (
            <li key={i}>
              <Link to={item.url} activeClassName="overlayActive">
                {item.title}
              </Link>
              {item.wordpress_children ? (
                <>
                  <ul>
                    {item.wordpress_children.map((child, iChild) => (
                      <li key={iChild} className="mobile-menu-item">
                        <img
                          className="menu-before-icon"
                          src={DoubleAngle}
                          alt="menu-before-icon"
                        />
                        <Link to={child.url} activeClassName="nav-active">
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
