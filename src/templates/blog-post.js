import React, { Component } from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layouts'
import {H3,H1, H4, BlogPostContainer, BodyContainer} from '../styles/styledComponent'

class BlogPost extends Component {
    render () {
        const {title,author,content} = this.props.data.contentfulBlogpost
        return (
            <BlogPostContainer>
               <H1>{title}</H1> 
               <H4>{author}</H4> 
                <div style={{padding:'0 20px 0 20px'}} dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}></div>       
            </BlogPostContainer>
        )
    }
}
// BlogPost.proptype ={
//     data:PropTypes.object.isRequired
// }
export default BlogPost

export const pageQuery =graphql`
    query blogPostQuery($slug:String!){
        contentfulBlogpost(slug:{eq:$slug}){
            title
            author
            slug
            content{
                childMarkdownRemark{
                  html
                }
              }
           
        }
    }
`