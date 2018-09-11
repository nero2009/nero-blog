import React from 'react'
import moment from 'moment'
import {BookmarkLink, BookmarkHeader, BookmarkSubHeader} from '../styles/styledComponent'

const Bookmarks = ({data}) => {
    return (
        <div>
            <BookmarkHeader  >
                <h1>Bookmarks</h1>
                <BookmarkSubHeader>Random links that might be useful to you, me and future me </BookmarkSubHeader>
            </BookmarkHeader>
                {
                    data.allContentfulLinks.edges.map(edge => <BookmarkList key={edge.node.id} node={edge.node}/>)
                }
        </div>
    )
}

const BookmarkList =({node})=>{
    return(
        <div>
            <article>
                <p>
                    <span>{moment(node.date).format("Do MMM YYYY")}</span> <span>< BookmarkLink href={node.link.url} target="_blank">{node.link.title}</BookmarkLink></span>
                </p>
            </article>
        </div>
    )
}

export default Bookmarks

export const pageQuery = graphql`
    query linkQuery{
        allContentfulLinks (sort:{fields:[date], order:ASC}){
            edges{
                node{
                  id
                  tag
                  date
                  link{
                    title
                    url
                  }
                }
              }
        }
    }

`