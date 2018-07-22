import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'
import './index.css'
import moment from 'moment'
import {H3, BlogLink, H4} from '../styles/styledComponent'

const RecentBlogPost =({node})=>{
  return(
    <div key={node.id}>
      <BlogLink 
        to={node.slug}
        
      >
        <H3>
            {node.title}{" "}
        </H3>
        <H4>{moment(node.createdat).format("MMMM Do YYYY")}</H4>

      </BlogLink>
      
    </div>
  )
}
const IndexPage = ({data}) => (
  <div className="index-page"> 
    <div className="intro">
      <img src="/static/home.jpg" alt="home" css={{height:`400`, width:`700`,display:`block`, margin:`auto`, marginBottom:`30px`}}/>
      <h3>😎👋</h3>
      <p>I am Nero, a Full Stack Developer that specializes in Javascript, React and Node Js. I am an avid learner 
        and I'm passionate about technology. Technology can impact lives and that is something that drives my passion for technology.
      </p>
      <br/>
      <p>Tech is Awesome.</p>
    </div>
    <div css={{borderBottom:`2px solid grey`, position:`relative`, width:`800px`,marginBottom:`20px`}}></div>
    <H3>Recent Posts</H3>
    <div className="recent">
       
        <ul>
            {data.allContentfulBlogpost.edges.slice(1,2).map((edge)=> <RecentBlogPost node={edge.node}/>)}
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