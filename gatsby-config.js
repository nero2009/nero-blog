
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Nero Blog',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  `gatsby-transformer-remark`,
  {
    resolve: 'gatsby-plugin-page-transitions',
    options: {
      transitionTime: 500
    }
  },
  `gatsby-plugin-styled-components`,
  
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `${process.env.SPACE_ID}`,
      accessToken: `${process.env.ACCESS_TOKEN}`,
    },
},

],
}
