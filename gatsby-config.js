require('dotenv').config({ path: `.env` });
module.exports = {
  siteMetadata: {
    title: `Home - Barge And Ship Access`,
    description: `Barge and ship access is a good resource for information on shipping industry safety from loading and unloading of liquid shipment to access for workers.`,
    keywords: `Barge And Ship Access`,
    siteUrl: "http://localhost:8000/",
    url: "https://www.gatsbyjs.org/",
  },
  plugins: [
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-react-helmet`,
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
      resolve: "gatsby-source-wordpress",
      options: {
        excludedRoutes: [
          "/wp/v2/users/**",
          "/wp/v2/settings*",
          "wp/v2/themes*",
        ],
        baseUrl: "bargeandshipaccess.com",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: ["ad_block_content"],
        searchAndReplaceContentUrls: {
          sourceUrl: "https://bargeandshipaccess.com",
          replacementUrl: "",
        },
      },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
