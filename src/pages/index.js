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

      </Link>
    </div>
  )
}
const IndexPage = ({data}) => (
  <div> 
    <div className="intro">
      <img src="/static/home.jpg" alt="home" css={{height:`400`, width:`700`,display:`block`, margin:`auto`, marginBottom:`30px`}}/>
      <h3>😎👋</h3>
      <p>I am Nero Adaware, I am a Full Stack Developer that specializes in React and Node Js.  <Link to="/portfolio/">More on</Link></p>
    </div>
    <div css={{borderBottom:`2px solid grey`, position:`relative`, width:`800px`,marginBottom:`20px`}}></div>
    <h3>Recent Posts</h3>
    <div>
       
        <ul>
            {data.allContentfulBlogpost.edges.map((edge)=> <RecentBlogPost node={edge.node}/>)}
        </ul>
        
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery{
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