import React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import Gallery from "../examples/gallery";

const GraphqlTest = () => {
  return (
    <Layout>
      <main className="page">
        <h2>Testing</h2>
        <Gallery />
      </main>
    </Layout>
  );
};

export default GraphqlTest;
