module.exports = {
  siteMetadata: {
    title: "Vadim Smirnov",
    description: "Software engineer",
    author: "Vadim Smirnov",
    menuItems: [
      { path: '/about', title: 'About' },
      { path: '/speaking', title: 'Speaking' },
      { path: '/writing', title: 'Writing' },
      { path: '/uses', title: 'Uses' }
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/blog-posts`,
        name: `blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/social-network`,
        name: `socialNetwork`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/cv`,
        name: `cv`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/public-speaking`,
        name: `public-speaking`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
            },
          },
          `gatsby-remark-reading-time`,{
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases:{sh: "bash", js:"javascript"},
              showLineNumbers: true,
            }
          }
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-emotion",
    "gatsby-plugin-optimize-svgs",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}
