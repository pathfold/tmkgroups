import React from "react";
import styled from "@emotion/styled"
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Title from "../components/title";

import { SRLWrapper } from "simple-react-lightbox";

import {Tab} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap'; 
import {Button} from "react-bootstrap";

const interiorList = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "i11", "i12", "i13", "i14", "i15", "i16", "i17", "i18", "i19", "i20", "i21", "i22", "i23", "i24", "i25", "i26", "i27", "i28", "i29", "i30", "i31"]
const exteriorList = ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10", "e11", "e12", "e13", "e14"];
const droneList = ["drone1", "drone2", "drone3", "drone4", "drone5", "drone6", "drone7", "drone8", "drone9", "drone10", "drone11", "drone12"];
const floorPlanList = ["fp1", "fp2", "fp3", "fp4", "fp5", "fp6"];

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
    padding: 100px 30px;
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
                <body style="font-family: catamaran"></body>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"/>
            </Helmet>

            <MarginContainer>
                <ContentContainer>
                    <Title top="Gallery" bottom="View our wide collection of varied media in our diverse portfolio"/>

                    <Tabs defaultActiveKey="interior" id="uncontrolled-tab-example" style={{justifyContent:`center`}}>
                        <Tab eventKey="interior" title="Interior">
                            <GalleryContainer>
                                <SRLWrapper>
                                    {interiorList.map((path) => 
                                        {
                                            return <GalleryImg src={require("../images/gallery/interior/" + path + ".jpg").default} />
                                        })
                                    }
                                </SRLWrapper>
                            </GalleryContainer>    
                        </Tab>
                        <Tab eventKey="exterior" title="Exterior">
                            <GalleryContainer>
                                <SRLWrapper>
                                    {exteriorList.map((path) => 
                                        {
                                            return <GalleryImg src={require("../images/gallery/exterior/" + path + ".jpg").default} />
                                        })
                                    }
                                </SRLWrapper>
                            </GalleryContainer>  
                        </Tab>
                        <Tab eventKey="droneImages" title="Drone Images">
                            <GalleryContainer>
                                <SRLWrapper>
                                    {droneList.map((path) => 
                                        {
                                            return <GalleryImg src={require("../images/gallery/droneImages/" + path + ".jpg").default} />
                                        })
                                    }
                                </SRLWrapper>
                            </GalleryContainer> 
                        </Tab>
                        <Tab eventKey="floorPlans" title="Floor Plans">
                            <GalleryContainer>
                                <SRLWrapper>
                                    {floorPlanList.map((path) => 
                                        {
                                            return <GalleryImg src={require("../images/gallery/floorPlans/" + path + ".jpg").default} />
                                        })
                                    }
                                </SRLWrapper>
                            </GalleryContainer> 
                        </Tab>
                    </Tabs>
                </ContentContainer>
            </MarginContainer>
        </Layout>
    );
}