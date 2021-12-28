import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
    <SEO title="Greška" description="Greška"/>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>stranica nije pronađena</h3>
        </section>
      </main>
    </Layout>
  )
};

export default Error;
