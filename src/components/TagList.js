import React from "react";
import tagsSetUp from "../utils/tagsSetUp";
import { Link } from "gatsby";

const TagList = ({ recipes }) => {
  const tags = tagsSetUp(recipes);

  return (
    <div className="tag-container">
      <h4>recepti</h4>
      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag;

          return (
            <Link key={index} to={`/${text}`}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
