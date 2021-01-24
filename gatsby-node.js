const _ = require('lodash')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    // fmImagesToRelative(node);

    if (_.get(node, 'internal.type') === `MarkdownRemark`) {
        // Get the parent node
        const parent = getNode(_.get(node, 'parent'));
        const slug = createFilePath({ node, getNode, basePath: `pages` })

        // Create a field on this node for the "collection" of the parent
        // NOTE: This is necessary so we can filter `allMarkdownRemark` by
        // `collection` otherwise there is no way to filter for only markdown
        // documents of type `post`.
        createNodeField({
            node,
            name: 'collection',
            value: _.get(parent, 'sourceInstanceName'),
        });
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        })
    }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog-posts" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              rawDate: date
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges
      .filter(({ node }) => !node.frontmatter.draft)
      .forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
          },
        })
      })
  })
}
