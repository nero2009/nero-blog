import React from 'react'
import Link from 'gatsby-link'

const BlogPost =({node})=>{
  return(
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({data}) => (
  <div>
    <ul>
      {data.allContentfulBlogpost.edges.map((edge)=> <BlogPost node={edge.node}/>)}
    </ul>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery{
     allContentfulBlogpost (filter:{
       node_locale:{eq: "en-US"}
     }){
       edges{
         node{
           title
           slug
           content{
             childMarkdownRemark{
               excerpt
             }
           }
         }
       }
     }
   }
`