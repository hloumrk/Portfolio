import React from "react";

import { graphql } from "gatsby";

import {Layout } from "../components/struct/layout.js"

export const Home = ({data}) => {
	console.log("data", data.allMarkdownRemark);
	return <Layout><h1>Home</h1></Layout>
}

export default Home;

export const myQuery = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {menu: {eq: "accueil"}}}) {
        edges {
            node {
                frontmatter {
                    categorie
                    menu
                    lang
                    title
                }
                html
                }
            }
        }
    }
`