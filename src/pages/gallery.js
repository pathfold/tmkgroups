import React from "react";
import styled from "@emotion/styled"
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Title from "../components/title";

import i1 from "../images/interior1.jpg";
import i2 from "../images/interior2.jpg";
import i3 from "../images/interior3.jpg";

import e1 from "../images/exterior1.jpg";
import e2 from "../images/exterior2.jpg";
import e3 from "../images/exterior3.jpg";

import { SRLWrapper } from "simple-react-lightbox";

import {Tab} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap'; 
import {Button} from "react-bootstrap";

const GalleryContainer = styled("div")`
    div {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }

    a {
        width: 32.33%;
        margin: .5%; 
    }

    img {
        height: 300px;
        object-fit: cover;
    }

    @media (max-width: 1200px){
        a {
            width: 49%;
            margin: .5%;
        }

        img {
            height: 370px;
        }
    }

    @media (max-width: 700px){
        a {
            width: 100%;
            margin: .5%;
        }
    }
`

const MarginContainer = styled("div")`
    max-width: 1300px;
    margin: 0 auto;
`

const ContentContainer = styled("div")`
    padding: 0px 30px;
`


const GalleryImg = (props) => {
    return (
        <a href={props.src}>
            <img src={props.src}/>
        </a>
    );
}

export default function Gallery(){
    return (
        <Layout>
            <Helmet>
                <title>Gallery | TMK Photos</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </Helmet>

            <MarginContainer>
                <ContentContainer>
                    <Title top="Gallery" bottom="View our wide collection of varied media in our diverse portfolio"/>

                    <Tabs defaultActiveKey="interior" id="uncontrolled-tab-example" style={{justifyContent:`center`}}>
                        <Tab eventKey="interior" title="Interior">
                            <GalleryContainer>
                                <SRLWrapper>
                                    <GalleryImg src={i1}/>
                                    <GalleryImg src={i2}/>
                                    <GalleryImg src={i3}/>
                                    <GalleryImg src={i1}/>  
                                    <GalleryImg src={i2}/>  
                                    <GalleryImg src={i3}/>
                                    <GalleryImg src={i1}/>  
                                    <GalleryImg src={i2}/>  
                                    <GalleryImg src={i3}/>  
                                </SRLWrapper>
                            </GalleryContainer>    
                        </Tab>
                        <Tab eventKey="exterior" title="Exterior">
                            <GalleryContainer>
                                <SRLWrapper>
                                    <GalleryImg src={e1}/>
                                    <GalleryImg src={e2}/>
                                    <GalleryImg src={e3}/>
                                    <GalleryImg src={e1}/>  
                                    <GalleryImg src={e2}/>  
                                    <GalleryImg src={e3}/>
                                    <GalleryImg src={e1}/>  
                                    <GalleryImg src={e2}/>  
                                    <GalleryImg src={e3}/>  
                                </SRLWrapper>
                            </GalleryContainer>  
                        </Tab>
                        <Tab eventKey="droneImages" title="Drone Images">
                            Test
                        </Tab>
                        <Tab eventKey="floorPlans" title="Floor Plans">
                            Test
                        </Tab>
                    </Tabs>
                </ContentContainer>
            </MarginContainer>
        </Layout>
    );
}