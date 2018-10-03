import React from "react"
import {graphql, Link} from 'gatsby'


const Tags = ({pageContext, data}) =>{
    const {tag} = pageContext;
    const {edges, totalCount} = data.allContentfulBlog;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
    } tagged with "${tag}" `;

    return(
        <div>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({node})=>{
                    const { slug, title, id} = node;
                    return(
                        <li key={id}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>

            <Link to="/tags">All tags</Link>
        </div>
    )
}

export default Tags;

export const pageQuery = graphql`
    query TagPage{
        allContentfulBlog(
            limit: 100
        ){
            totalCount
            edges{
                node{
                    id
                    slug
                    title
                }
            }
        }
    }

`