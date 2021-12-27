import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons";

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content: { tags, instructions, ingredients, tools },
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe;

  const pathToImage = getImage(image);

  return (
    <div>
      <main className="page">
          <div className="recipe-page">
              <h2>{title}</h2>
          </div>
      </main>
    </div>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        instructions
        ingredients
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
