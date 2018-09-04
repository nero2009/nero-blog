import React from 'react'
import moment from 'moment'

const Bookmarks = ({data}) => {
    return (
        <div>
            <header className="bookmark-header" >
                <h1>Bookmarks</h1>
                <h3 className="bookmark-subhead">Random links that might be useful to you, me and future me </h3>
            </header>
            
                {data.allContentfulLinks.edges.map(edge => <BookmarkList key={edge.node.id} node={edge.node}/>) }
            
        </div>
    )
}

const BookmarkList =({node})=>{
    return(
        <div>
            <article>
                <p>
                    <span>{moment(node.date).format("Do MMM YYYY")}</span> <span className="underline"><a className="bookmark-link" href={node.link.url} target="_blank">{node.link.title}</a></span>
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