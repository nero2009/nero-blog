import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'
import './index.css'
import moment from 'moment'


const RecentBlogPost =({node})=>{
  return(
    <div key={node.id}>
      <Link 
        to={node.slug}
        
      >
        <g.H3 marginBottom="10px">
            {node.title}{" "}
            
        </g.H3>
        <g.H4 css={{color:"#BBB", marginTop:"15px"}}>{moment(node.createdat).format("MMMM Do YYYY")}</g.H4>

      </Link>
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
    </div>
    <div css={{borderBottom:`2px solid grey`, position:`relative`, width:`800px`,marginBottom:`20px`}}></div>
    <h3>Recent Posts</h3>
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