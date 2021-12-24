import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained default</h4>

        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food recipe one"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
        />
      </article>
      <article>
        <h4>fixed</h4>

        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food recipe one"
          height={600}
          width={300}
          placeholder="blurred"
          layout="fixed"
          
          className="example-img"
        />
      </article>
      <article>
        <h4>full width</h4>

        <StaticImage
          src="../assets/images/recipes/recipe-1.jpeg"
          alt="food recipe one"
          height={400}
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
         
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;

  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;

  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img{
        height: 200px;
    }
  }
`
export default Images;
