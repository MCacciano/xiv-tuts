const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, ".env.development") })

module.exports = {
  siteMetadata: {
    title: `XIV | Tuts`,
    description: `A Collection of FFXIV tutorial videos all in one place`,
    author: `Michael Cacciano`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-yt",
      options: {
        key: process.env.YT_API_KEY,
        channelId: "UC5BtIO_vMNvds5sgE-JI6KA",
        maxResults: "50",
      },
    },
    { resolve: `gatsby-plugin-styled-components` },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
