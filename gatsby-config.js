module.exports = {
  siteMetadata: {
    title: 'Nero Blog',
  },
  plugins: ['gatsby-plugin-react-helmet',
  `gatsby-transformer-remark`,
  
  `gatsby-plugin-styled-components`,
  
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `zmjau6w5ke07`,
      accessToken: `ec149aa3c46c8a87c92fdbab37228460aa7a679cba759685c275c94086b0105d`,
    },
},

],
}
