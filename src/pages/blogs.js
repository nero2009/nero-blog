import React from 'react'
import moment from 'moment'
import {graphql} from 'gatsby'

//components
import Layout from '../components/layouts'
import {H3, BlogLink, Excerpt, Date, BlogHeader, Author, PostToolbar, Article} from '../styles/styledComponent'

const RecentBlogPost =({node})=>{
    return(
      <Article key={node.id}>
        <BlogLink 
          to={`/${node.slug}`}
          
        >
          <BlogHeader >
              {node.title}{" "}
              
          </BlogHeader>
          <Excerpt>
            {node.content.childMarkdownRemark.excerpt}
          </Excerpt>
          <PostToolbar>
            <Author>Post by {node.author}</Author>
            <Date >{moment(node.createdat).format("MMMM Do YYYY")}</Date>
          </PostToolbar>
        </BlogLink>
      </Article>
    )
  }

const Blogs = ({data}) => {
    
    return (
      <Layout>
        <div>
          <ul>
              {data.allContentfulBlogpost.edges.map((edge,index)=> <RecentBlogPost key={index} node={edge.node}/>)}
          </ul>
        </div>
      </Layout>
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
           author
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