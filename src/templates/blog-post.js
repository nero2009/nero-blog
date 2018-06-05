import React, { Component } from 'react'

class BlogPost extends Component {
    render () {
        const {title,author,content} = this.props.data.contentfulBlogpost
        return (
            <div>
               <h1>{title}</h1> 
               <div>{author}</div> 
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