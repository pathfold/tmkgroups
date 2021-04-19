import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

export default function Gallery(){
    return (
        <Layout>
            <Helmet>
                <title>Gallery | TMK Photos</title>
            </Helmet>
            <h2>Gallery</h2>
        </Layout>

    );
}