import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  text-align: right;
  @media only screen and (max-width: 767px) {
    display: none;
  }
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    position: relative;
    margin: 0 20px;
    transition: all 0.3s ease;
  }
  li:last-child {
    margin-right: 0 !important;
  }
  a {
    color: #000;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1.22px;
    line-height: 18px;
    text-transform: uppercase;
    padding: 14px 30px;
    display: block;
    text-decoration: none;
    transition: 0.5s all ease;
  }
  a:hover,
  a.nav-active {
    background: #384148;
    color: #ffffff !important;
  }
  li ul li {
    display: block;
    margin: 0;
  }
  li ul li a {
    text-align: left;
    display: block;
    text-transform: none;
    padding: 16px 30px;
    color: #000;
  }
  li ul {
    position: absolute;
    top: 85%;
    right: 0;
    width: 270px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 98;
    padding: 0;
    background: #fff;
    border: 2px solid #384148;
  }
  ul li:hover > ul {
    opacity: 1;
    visibility: visible;
    top: 100%;
  }
  .has-children{
    position:relative;
  }
  .has-children:after {
    border-style: solid;
    border-width: 0.1em 0.1em 0 0;
    content: "";
    display: inline-block;
    height: 0.3em;
    left: 0.4em;
    position: relative;
    vertical-align: top;
    width: 0.3em;
    top: 0.25em;
    transform: rotate(135deg);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    li {
      margin: 0 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    a {
      font-size: 15px;
    }

    li {
      margin: 0 10px;
    }
    .angle-down {
      right: 8px;
    }
  }
`

const Navigation = ({ menu }) => (
  <NavigationWrapper>
    <ul>
      {menu.items.map((item, i) => (
        <li key={i}>
          <Link
            to={item.url}
            activeClassName="nav-active"
            className={Boolean(item.wordpress_children) ? "has-children" : null}
          >
            {item.title}
          </Link>
          {item.wordpress_children ? (
            <>
              <ul>
                {item.wordpress_children.map((child, iChild) => (
                  <li key={iChild}>
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
  </NavigationWrapper>
)

Navigation.propTypes = {
  menu: PropTypes.object,
}

export default Navigation
