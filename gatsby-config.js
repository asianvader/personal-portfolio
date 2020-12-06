const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
  ],
}
