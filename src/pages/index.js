import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

//! main return
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Početna" description="Početna"/>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Jednostavni recepti</h1>
              <h4>za svačiji ukus</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default IndexPage;
