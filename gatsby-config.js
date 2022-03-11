/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  pathPrefix: "/my-covid19",
  siteMetadata: {
    title: `my-covid19`,
    siteUrl: `https://jasonkhew96.github.io/my-covid19/`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
