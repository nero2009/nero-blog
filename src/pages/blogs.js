import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'
import './index.css'
import moment from 'moment'
import { rhythm } from "../utils/typography";

const RecentBlogPost =({node})=>{
    return(
      <div key={node.id}>
        <Link 
          to={node.slug}
          css={{textDecoration: `none`, color: `inherit`}}
        >
          <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.title}{" "}
              
          </g.H3>
          <g.H4 css={{color:"#BBB", marginTop:"15px"}}>{moment(node.createdat).format("MMMM Do YYYY")}</g.H4>
          <p>
            {node.content.childMarkdownRemark.excerpt}
          </p>
  
        </Link>
      </div>
    )
  }

const Blogs = ({data}) => {
    return (
        <div>
            <ul>
                {data.allContentfulBlogpost.edges.map((edge)=> <RecentBlogPost node={edge.node}/>)}
           </ul>
        </div>
    )
}

export default Blogs

export const allpageQuery = graphql`
   query allpageQuery{
     allContentfulBlogpost (filter:{
       node_locale:{eq: "en-US"}
     }){
       edges{
         node{
           title
           slug
           createdat
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