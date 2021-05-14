import React from "react";
import Header from "./header";
import { Global } from "@emotion/react"
import globalStyles from "../styles/global";
import Footer from "./footer";

export default function Layout({children}){
    return (
    <div>
        <Header/>
        <Global styles={[globalStyles]}/>
        {children}
    </div>)
}