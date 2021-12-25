import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// data query
const getData = graphql`
  query testQuery{
    site {
      info:siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        siteUrl
        title
      }
    }
  }
`;
// returned data
const FetchData = () => {
  const {site:{info:{title}}} = useStaticQuery(getData);

  return (
    <div>
      <h1>Site title: {title}</h1>
    </div>
  );
};

export default FetchData;
