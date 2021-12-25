import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";



//! main return
const IndexPage = () => {
  return (
    <Layout>
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
   
      </main>
    </Layout>
  );
};

export default IndexPage;
