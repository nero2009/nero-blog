import React from 'react'

import './index.css'
import moment from 'moment'
import {H3, BlogLink, H4} from '../styles/styledComponent'

const RecentBlogPost =({node})=>{
    return(
      <div key={node.id}>
        <BlogLink 
          to={`/${node.slug}`}
          
        >
          <H3 >
              {node.title}{" "}
              
          </H3>
          <H4 >{moment(node.createdat).format("MMMM Do YYYY")}</H4>
          <p>
            {node.content.childMarkdownRemark.excerpt}
          </p>
  
        </BlogLink>
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