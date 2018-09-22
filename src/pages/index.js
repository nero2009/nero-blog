import React from 'react'
import Img from 'gatsby-image'
import moment from 'moment'
import {graphql} from 'gatsby'
import Layout from '../components/layouts'
import {H3, BlogLink, Date, BlogHeader} from '../styles/styledComponent'


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
// const post =()=>{
  
//   return(
//     <ul>
//             {data.allContentfulBlogpost.edges.slice(0,2).map((edge,index)=> <RecentBlogPost key={index} node={edge.node}/>)}
//         </ul>
//   )
// }

const IndexPage = ({data}) => (
  <Layout>
  <div className="index-page">
   
    
    <div className="intro">
      <Img 
        fluid={data.homeImage.childImageSharp.fluid} 
        alt="home"
        style={{marginBottom: "10px"}}
      />
      <span role="img">😎👋</span>
      <p>I am Nero, a Full Stack Developer that specializes in Javascript, React and Node Js. I am an avid learner 
        and I'm passionate about technology. Technology can impact lives and that is something that drives my passion for technology.
      </p>
      <br/>
      <p>Tech is Awesome.</p>
    </div>
    
    <div ></div>
    <H3>Recent Posts</H3>
    <div className="recent">

        <h2>No Posts</h2>
       
       
        
    </div>
    
  </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
   query {
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
     },
     homeImage: file(relativePath:{regex: "/home/"}){
    	childImageSharp{
        fluid(maxWidth:800){
          ...GatsbyImageSharpFluid
        }
      }
    }
    
   }
`