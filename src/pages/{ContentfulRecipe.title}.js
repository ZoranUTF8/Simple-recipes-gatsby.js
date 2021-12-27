import React from "react";
import { graphql } from "gatsby";

const RecipeTemplate = (props) => {
  return (
    <div>
      <h2> {props.params.title}</h2>
    </div>
  );
};

export const query = graphql`
  {
  }
`;

export default RecipeTemplate;
