import React from "react";
import RecipesList from "./RecipesList";
import TagList from "./TagList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  //  site:{info:{title}}
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);

  return (
    <section className="recipes-container">
      <h4>ALL RECIPES</h4>
      <RecipesList recipes={recipes} />
      <TagList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;