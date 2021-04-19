import React from "react";
import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Jumbo2Grand = styled("div")`
    display: flex;
    align-items: center;
    padding: 50px 0;

    @media (max-width: 1300px){
        flex-direction: column;
    }
`

const IconContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    text-align: center;

    .iconCard {
        margin-right: 50px;
    }

    @media (max-width: 1100px){
        flex-wrap: wrap;

        p {
            width: 200px;
        }
    }

    @media (max-width: 800px){
        flex-wrap: wrap;

        .iconCard {
            margin-right: 0px;
        }
    }
`

const Icon = props => {
    return (
        <FontAwesomeIcon icon={props.icon} style={{width: `100px`, height: `100px`, marginBottom:`30px`}}/>
    )
}

const IconCard = props => {
    return (
        <div className="iconCard" style={{display:`flex`, flexDirection:"column", alignItems:`center`}}>
            <Icon icon={props.icon}/>
            <h3>{props.title}</h3>
            <p>Unreal Engine is a state-of-the-art real-time engine and editor that features photorealistic rendering, dynamic physics and effects, lifelike animation, robust data translation, and much more—on a open, extensible platform that won't tie you down.</p>
        </div>
    )
}

export default function Offer(props){
    return (
        <Jumbo2Grand style={{display: `flex`, flexDirection:`column`}}>
            <h2 className="specialHeader">What We Offer</h2>
            <IconContainer>
                <IconCard icon={faHome} title="Interior"/>
                <IconCard icon={faTree} title="Exterior"/>
                <IconCard icon={faCloud} title="Drone Media"/>
                <IconCard icon={faPencilRuler} title="Floor Plans"/>
            </IconContainer>
        </Jumbo2Grand>
    );
}