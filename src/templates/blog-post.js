import React, { Component } from 'react'
import {H3,H1, H4} from '../styles/styledComponent'

class BlogPost extends Component {
    render () {
        const {title,author,content} = this.props.data.contentfulBlogpost
        return (
            <div>
               <H1>{title}</H1> 
               <H4>{author}</H4> 
                <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}></div>       
            </div>
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