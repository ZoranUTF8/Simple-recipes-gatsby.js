import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import slugify from "slugify";

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
    <Layout>
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* recipe icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Priprema:</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Vrijeme kuvanja:</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Broj porcija:</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/*  recipe tags */}
              <p className="recipe-tags">
                Oznake:
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true });
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>Instrukcije</h4>
              {instructions.map((step, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Korak {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{step}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Sastojci</h4>
                {ingredients.map((ing, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ing}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>Oprema</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
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
