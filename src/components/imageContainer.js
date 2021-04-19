import React from "react";
import styled from "@emotion/styled";
import {Link} from "gatsby";

const ContentContainer = styled("div")`
    display: flex;
    align-items: center;
    padding: 50px 0;

    @media (max-width: 1200px){
        flex-direction: column;
        text-align: center;
    }
`

const ImageSection = styled("div")`
    width: 60%;
    display: flex;
    justify-content: center;

    img {
        border-radius: 20px;
        max-height: 270px;
    }

    @media (max-width: 1200px){
        width: 80%;
    }
`

const TextSection = styled("div")`
    margin: 0 80px;
    width: 47%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px){
        width: 60%;
    }

    @media (max-width: 600px){
        width: 70%;
    }
`

export default function ImageContainer(props){
    return (
        <ContentContainer>
            <ImageSection>
                <img src={props.image} alt={props.alt}/>
            </ImageSection>

            <TextSection>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <Link to="/gallery" className="button"><button>Visit Gallery</button></Link>
            </TextSection>
        </ContentContainer>
    );
}