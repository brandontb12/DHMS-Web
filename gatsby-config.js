const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Defense Health Management System",
    author: "Frontier Technology Inc",
    description: ""
  },
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `src`,
            path: `${__dirname}/src/posts`
        }
    },
   {
       resolve: `gatsby-source-filesystem`,
       options: {
           name: `images`,
           path: `${__dirname}/src/assets/images`
       }
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        specialChars: '/:',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'react-sticky-header',
    'gatsby-plugin-scroll-reveal'
  ],
}
