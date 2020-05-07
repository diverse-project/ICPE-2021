const path = require(`path`)
const fs = require('fs')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const defaultTemplate = path.resolve(`src/templates/defaultTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: defaultTemplate,
      context: {} // additional data can be passed via context
    })
  })
}
