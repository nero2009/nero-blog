import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import './index.css'
import { rhythm } from "../utils/typography";


export default ({ children ,data}) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={800}
    paddingBottom="0px"
    paddingTop={rhythm(1.5)}
    marginBottom="-20px"
    className="layout" 
    
  >
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {`<Nero Adaware />`}
      </g.H3>
    </Link>
    <Link className="linkStyle" to={`/portfolio/`}>
      Portfolio
    </Link>
    <Link className="linkStyle" to={`/blogs/`}>
      Blog
    </Link>
    <g.Div
      marginBottom="20px"
      marginTop="-20px"
      width="800px"
      borderBottom="1px solid grey"
      position="relative"
    ></g.Div>
    
    {children()}
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`