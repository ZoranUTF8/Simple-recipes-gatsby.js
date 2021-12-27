import React from "react";
import tagsSetUp from "../utils/tagsSetUp";
import { Link } from "gatsby";
import slugify from "slugify";

const TagList = ({ recipes }) => {
  const tags = tagsSetUp(recipes);

  return (
    <div className="tag-container">
      <h4>recepti</h4>
      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });
          return (
            <Link key={index} to={`/tags/${tag}`}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
