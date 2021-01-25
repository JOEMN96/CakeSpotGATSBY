require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`Heroslider`, `Featured-Contents`, `blogs`, `cakes`],
        //If using single types place them in this array.
        singleTypes: [],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        specialChars: "/:",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_API_KEY,
          authDomain: process.env.GATSBY_API_AUTHDOMAIN,
          projectId: process.env.GATSBY_API_PROJECTID,
          storageBucket: process.env.GATSBY_API_STORAGEBUCKET,
          messagingSenderId: "768970806918",
          appId: process.env.GATSBY_API_APPID,
          measurementId: "G-BNS7V75FJZ",
        },
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Products"],
        secretKey: process.env.GATSBY_STRIPE_TEST,
        downloadFiles: true,
      },
    },
  ],
};
