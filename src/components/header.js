import React from "react";
import styled from "@emotion/styled";
import logo from "../images/tmkLogo.png";
import {Link} from "gatsby";

const HeaderParent = styled("div")`
    background: transparent;
    display: block;
    z-index: 100;
    position: fixed;
    width: 100%;
`

const HeaderChild = styled("div")`
    max-width: 1300px;
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
        &:last-of-type{
            color: #8dcaff;
        }

        &:last-of-type:hover{
            border-bottom: 3px solid #8dcaff;
        }

        color: white;
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
    }
    .nav-element:hover {
        border-bottom: 3px solid white;
    }
`

export default function Header(){
    return (
        <HeaderParent>
            <HeaderChild>
                <Brand url="/" logo={logo}/>
                <Nav>
                    <Link to="/contact" className="nav-element">Contact</Link>
                    <Link to="/about" className="nav-element">About</Link>
                    <Link to="/gallery" className="nav-element">Gallery</Link>
                </Nav>
            </HeaderChild>
        </HeaderParent>
    );
}