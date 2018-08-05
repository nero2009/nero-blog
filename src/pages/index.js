import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'
import './index.css'
import moment from 'moment'
import {H3, BlogLink, H4, Date, BlogHeader} from '../styles/styledComponent'
import Home from '../../static/home.jpg'
import PageTransition from 'gatsby-plugin-page-transitions';


const RecentBlogPost =({node})=>{
  return(
    <div key={node.id}>
      <BlogLink 
        to={node.slug}
        
      >
        <BlogHeader>
            {node.title}{" "}
        </BlogHeader>
        <Date>{moment(node.createdat).format("MMMM Do YYYY")}</Date>

      </BlogLink>
      
    </div>
  )
}
const post =()=>{
  return(
    <ul>
            {data.allContentfulBlogpost.edges.slice(0,2).map((edge,index)=> <RecentBlogPost key={index} node={edge.node}/>)}
        </ul>
  )
}

const IndexPage = ({data}) => (
  <div className="index-page">
    <PageTransition>
    
    <div className="intro">
      <img src={Home} alt="home"/>
      <h3>😎👋</h3>
      <p>I am Nero, a Full Stack Developer that specializes in Javascript, React and Node Js. I am an avid learner 
        and I'm passionate about technology. Technology can impact lives and that is something that drives my passion for technology.
      </p>
      <br/>
      <p>Tech is Awesome.</p>
    </div>
    </PageTransition> 
    <div ></div>
    <H3>Recent Posts</H3>
    <div className="recent">

        <h2>No Posts</h2>
       
       
        
    </div>
    
  </div>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery{
     allContentfulBlogpost (filter:{
       node_locale:{eq: "en-US"}
     },
     sort:{ fields:[createdat], order: DESC}
    ){
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