module.exports = {
  siteMetadata: {
    title: `ICPE 2021 - 12th ACM / SPEC International Conference on Computational Performance`,
    description: `The International Conference on Performance Engineering (ICPE) originated twelves years ago from the fusion of an ACM workshop on software and performance prediction and a SPEC workshop focused on benchmarking and performance evaluation. For 2021, it will be held in France, in Rennes from April 19th to April 23rd.`,
    author: `@diverse-team`
  },
  pathPrefix: '/ICPE-2021', // for GitHub Pages, see: https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ICPE 2021`,
        short_name: `ICPE 2021`,
        start_url: `/`,
        background_color: `#b52c49`,
        theme_color: `#b52c49`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1680
            }
          }
        ]
      }
    },
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
