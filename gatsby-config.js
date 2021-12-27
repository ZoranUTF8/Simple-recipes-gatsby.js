/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Jednostavni Recepti",
    description: "Stranica za recepte",
    author: "Zoran Janjic",
    person: {
      name: "Zoran",
      age: 32,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "Nikola",
        age: 42,
      },
      {
        name: "Stefan",
        age: 23,
      },
      {
        name: "Miloje",
        age: 56,
      },
    ],
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qfh4nkfldy55`,
        accessToken: process.env.CONTENTFULL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
};
