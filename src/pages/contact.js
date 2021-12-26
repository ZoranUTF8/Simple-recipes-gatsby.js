import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Želiš da stupiš u kontakt?</h3>
            <p>
              I'm baby authentic roof party fanny pack organic green juice
              glossier 3 wolf moon. Brooklyn flexitarian distillery migas
              literally glossier organic humblebrag waistcoat bushwick copper
              mug. Vinyl cray coloring book, air plant irony meh microdosing.
            </p>
            <p>
              {" "}
              Art party cliche cold-pressed pour-over kinfolk small batch
              williamsburg hell of pickled before they sold out.
            </p>
            <p>
              Palo santo keytar leggings shoreditch, pitchfork everyday carry
              VHS lo-fi venmo scenester thundercats butcher. Normcore
              single-origin coffee chartreuse, artisan banh mi try-hard tousled
              woke irony venmo put a bird on it whatever sriracha actually.
              Tousled thundercats skateboard shabby chic raclette.
            </p>
            </article>
            <article>
              <form className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">Vaše ime</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Vaš email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Vaša poruka:</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button className="btn block" type="submit">
                  Pošalji
                </button>
              </form>
            </article>
        </section>
        <section className="featured-recipes">
          <h5>Preporučeni recepti</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
      
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default Contact;
