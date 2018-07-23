import React from 'react'

import './index.css'
import moment from 'moment'
import {H3, BlogLink, Excerpt, Date, BlogHeader} from '../styles/styledComponent'

const RecentBlogPost =({node})=>{
    return(
      <div key={node.id}>
        <BlogLink 
          to={`/${node.slug}`}
          
        >
          <BlogHeader >
              {node.title}{" "}
              
          </BlogHeader>
          <Date >{moment(node.createdat).format("MMMM Do YYYY")}</Date>
          <Excerpt>
            {node.content.childMarkdownRemark.excerpt}
          </Excerpt>
  
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