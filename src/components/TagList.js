import React from "react";
import tagsSetUp from "../utils/tagsSetUp";

const TagList = ({ recipes }) => {
  tagsSetUp(recipes)
  return (
    <div>
      <h4>TAG LIST</h4>
    </div>
  );
};

export default TagList;
