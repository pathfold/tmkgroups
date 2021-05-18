import React from "react";
import styled from "@emotion/styled";

import Helmet from "react-helmet";
import Layout from "../components/layout";
import Title from "../components/title";

import profile from "../images/profile.jpg";

const MarginContainer = styled("div")`
    max-width: 900px;
    margin: 0 auto;
`

const ContentContainer = styled("div")`
    padding: 100px 50px;
    text-align: center;
`

const InfoContainer = styled("div")`
    margin: 75px 0px;
    //border: 1px solid black;
    //padding: 50px;
`

const ProfileImage = (props) => {
    return (
        <div>
            <img src={profile} style={{height: `250px`, width: `250px`, objectFit:`cover`, borderRadius: `50%`}}/>
        </div>
    );
}

export default function About(){
    return (
        <Layout>
            <Helmet>
                <title>About | TMK Groups</title>
            </Helmet>
            
            <MarginContainer>
                <ContentContainer>
                    <Title top="About Me" bottom="Learn a little more about my experience and love for photography"/>
                    <ProfileImage/>
                    <InfoContainer>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </InfoContainer>
                </ContentContainer>
            </MarginContainer>
        </Layout>
    );
}