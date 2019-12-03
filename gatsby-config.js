/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
        name: 'projects',
        path: path.join(__dirname, 'project')
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark'
  ]
}
