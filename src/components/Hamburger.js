import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const HamburgerButton = styled.div`
    display: block;
    width: 44px;
    height: 32px;
    margin-left: auto;
    margin-top: 13px;
    cursor: pointer;

    @media (min-width:768px) {
      display: none;
    }
    span{
        height: 5px;
        margin: 7px 0;
        width: 100%;
        display: block;
        background: #000;
  }
`;


const Hamburger = ({ handleOverlayMenu }) => (
    <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
        <span/>
        <span/>
        <span/>
    </HamburgerButton>
);

Hamburger.propTypes = {
    handleOverlayMenu:PropTypes.func,
};

export default Hamburger;
