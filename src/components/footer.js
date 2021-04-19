import React from "react";
import styled from "@emotion/styled";
import {Link} from "gatsby";
import logo from "../images/tmkLogoLong.png";

const FooterParent = styled("div")`
    background: black;
    display: block;
    z-index: 100;
    width: 100%;
    padding: 20px 50px;
    justify-content: space-around;
    display: flex;
`

const FooterLogo = props => {
    return (
        <img src={logo} alt="tmk logo" style={{width:`140px`, height:`70px`}}/>
    );
}

const FooterNav = styled("div")`
    display: flex;
    flex-direction: column;

    a {
        margin-right: 20px;
        color: white;
    }
`

export default function Footer(){
    return (
        <FooterParent>
            <FooterLogo/>
            <FooterNav>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
            </FooterNav>
        </FooterParent>
    );
}