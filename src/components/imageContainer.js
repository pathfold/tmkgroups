import React from "react";
import styled from "@emotion/styled";
import {Link} from "gatsby";

const ContentContainer = styled("div")`
    display: flex;
    align-items: center;
    padding: 100px 0;

    @media (max-width: 1200px){
        flex-direction: column;
        text-align: center;
    }
`

const ImageSection = styled("div")`
    width: 45%;
    display: flex;
    justify-content: center;

    img {
        border-radius: 5%;
        max-height: 400px;
    }

    @media (max-width: 1200px){
        width: 80%;

        img {
            margin-bottom: 30px;
        }
    }
`

const TextSection = styled("div")`
    margin: 0 100px;
    width: 55%;
    display: flex;
    flex-direction: column;

    p {
        line-height: 35px;
    }

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
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Link to="/gallery" className="button"><button>Visit Gallery</button></Link>
            </TextSection>
        </ContentContainer>
        );
    
}