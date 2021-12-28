import React from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recepti" description="Recepti" />
      <main className="page">
        <h1>Recipes page</h1>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
