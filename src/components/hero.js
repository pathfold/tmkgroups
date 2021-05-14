import React from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import {Link} from "gatsby";
import landingImg from "../images/exterior1.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Background = styled("div")`
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${ landingImg });
    background-size: cover;
    height: 880px;
    color: white;
    text-align: center;
    //transform: translate3d(0,-80px,0);
`

const MarginContainer = styled("div")`
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
`

const ContentContainer = styled("div")`
    padding: 300px 30px;

    #arrow {
        transition: 0.3s;
    }
    #arrow:hover {
        color: #8dcaff;
        transform: translateY(5px);
    }
`

const Arrow = props => {
    return (
    <a href="#info" style={{ cursor:`pointer`, position: `absolute`, bottom: `70px`, left:`49%`}}>
        <FontAwesomeIcon id="arrow" color="white" size="3x" icon={props.icon} />
    </a>
    )
}

export default function Hero(){
    return (
        <Fade>
        <Background>
            <MarginContainer>
                <ContentContainer>
                    <h1>Photos Of The Highest Quality</h1>
                    <p><i>Committed to crafting the most picture-perfect media for your real estate listings.</i></p>
                    <Link to="/gallery" className="button"><button>Visit Gallery</button></Link>
                    <Arrow icon={ faCaretDown }/>
                </ContentContainer>
            </MarginContainer>
        </Background>
        </Fade>
    );
}