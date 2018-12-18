
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
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options:{
      name:`img`,
      path: `${__dirname}/src/img/`
    }
  },
  
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `${process.env.SPACE_ID}`,
      accessToken: `${process.env.ACCESS_TOKEN}`,
    },
},

],
}
