import React from "react";
import Layout from "../components/Layout";
import TagList from "../components/TagList";
import { graphql, Link } from "gatsby";
import tagsSetUp from "../utils/tagsSetUp";

const Tags = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const tags = tagsSetUp(recipes);
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recept.</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
