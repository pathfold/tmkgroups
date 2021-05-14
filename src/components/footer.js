import React from "react";
import styled from "@emotion/styled";
import {Link} from "gatsby";
import logo from "../images/newLogo.svg";
import logoBlack from "../images/newLogoBlack.svg";

const FooterParent = styled("div")`
    background: white;
    box-shadow: 0 -2px 8px #d1d1d1;
    display: block;
    z-index: 100;
    width: 100%;
    padding: 20px 50px;
    justify-content: space-around;
    display: flex;
`

const FooterLogo = props => {
    return (
        <img src={logoBlack} alt="tmk logo" style={{maxHeight: `50px`}}/>
    );
}

const FooterNav = styled("div")`
    display: flex;

    a {
        margin-right: 40px;
        color: black;
        line-height: 50px;
        transition: .3s;
    }

    a:hover {
        color: #8dcaff;
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