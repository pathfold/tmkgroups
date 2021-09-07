import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import logo from "../images/newLogo.svg";
import logoBlack from "../images/newLogoBlack.svg";
import {Link} from "gatsby";
import {Navbar} from "react-bootstrap";

import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const HeaderParent = styled("div")`
    background: white;
    display: block;
    box-shadow: 0 0.5px 2px #d1d1d1;
    width: 100%;
    z-index: 1000;
    position: fixed;
`

const HeaderChild = styled("div")`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40px;
`
const Brand = (props) => (
    <a href={props.url} style={{height: `50px`, margin: `10px 0px`}}>
        <img src={props.logo} alt="brand logo" style={{ height: `50px`, display: `block`}} />
    </a>
);

const Nav = styled("div")`
    display: flex;
    flex-direction: row;

    .nav-element{
        /*
        &:last-of-type{
            color: #8dcaff;
        }

        &:last-of-type:hover{
            border-bottom: 3px solid #8dcaff;
        }*/

        color: black;
        font-size: 16px;
        margin-right: 20px;
        padding: 0 10px;
        line-height: 70px;
        height: 100%;
        display: inline-block;
        text-align: center;
        transition: 0.3s;
        border-bottom: 3px solid transparent;
        text-decoration: none;
        letter-spacing: 0.13rem;
    }
    .nav-element:hover {
        color: #8dcaff;
        border-bottom: 3px solid #8dcaff;
    }
`

const SocialNav = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;

    a {
        margin-right: 20px;
    }

    svg {
        transition: .3s;
        color: black;
        height: 15px;
        width: 15px;
    }

    svg:hover {
        color: #8dcaff;
    }
`

const SocialLogo = (props) => {
    return (
        <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={props.logo}/>
        </a>
    );
}

export default function Header(){
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const url_split = url.split("/");
    const path = url_split[3];

    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
          return setHeader("header")
        } else if (window.scrollY > 70) {
          return setHeader("header2")
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <HeaderParent className={header}>
            <HeaderChild>
                <Brand logo={(["about", "contact", "gallery"].includes(path) || header === "header2") ? logoBlack : logo} url="/"/>
                <Nav>
                    <Link to="/about" className="nav-element">About</Link>
                    <Link to="/gallery" className="nav-element">Gallery</Link>
                    <Link to="/contact" className="nav-element">Contact</Link>

                    <SocialNav>
                        <SocialLogo logo={faFacebookF}/>
                        <SocialLogo logo={faInstagram}/>
                        <SocialLogo logo={faLinkedinIn}/>
                    </SocialNav>
                </Nav>
            </HeaderChild>
        </HeaderParent>
    );
}

/*
<SocialNav>
    <SocialLogo logo={faFacebookF}/>
    <SocialLogo logo={faInstagram}/>
    <SocialLogo logo={faLinkedinIn}/>
</SocialNav>
*/