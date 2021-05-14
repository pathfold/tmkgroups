import React from "react";
import styled from "@emotion/styled";

const HighContainer = styled("div")`
    text-align: center;
    margin: 50px 0px;

     span {
         font-weight: lighter;
     }
`

export default function Title(props) {
    return (
    <HighContainer>
        <h2>{props.top}</h2>
        <span>{props.bottom}</span>
    </HighContainer>
    );
}