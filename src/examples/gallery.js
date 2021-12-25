import React from "react";
import { graphql, useStaticQuery } from "gatsby";
//! we cannot use static image with dinamic data, and
//! here wea re iterating over nodes an gettind different data
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image;
        const mainImage = getImage(image)

        return (
          <article key={index} className="item">
            <GatsbyImage image={mainImage} alt={name} className="gallery-img" />
            <p>{name}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;
export default Gallery;
