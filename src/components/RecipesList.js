import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, prepTime, cookTime, image } = recipe;
        const recipeImage = getImage(image);
        return (
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage
              image={recipeImage}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>Vrijeme pripreme: {prepTime} min.</p>
            <p>Vrijeme kuhanja: {cookTime} min.</p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
