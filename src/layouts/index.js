import React from "react";
import Link from "gatsby-link";
import './index.css'
import './icons.css'
import {CustomContainer, StyledLink,HomeLink,Line, FooterDiv, BlueLine} from '../styles/styledComponent'
import {Helmet} from 'react-helmet'




export default ({ children ,data}) => (
 

  
  <CustomContainer
  >
  <Helmet>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
  <title>Nero</title>
  </Helmet>
    
    <Link to={`/`}>
      <HomeLink>
        {`<Nero/>`}
      </HomeLink>
    </Link>
    <StyledLink to={`/bookmarks/`}>
      Bookmarks
    </StyledLink> 
    <StyledLink  to={`/blogs/`}>
      Blog
    </StyledLink>
    <StyledLink to={`/profile/`}>
      Profile
    </StyledLink>
   
    <Line/>
    
    {children()}
    
    <Line/>
    <footer>
      <div className="wrapper">
        <ul>
          <li className="quora"><a href="https://www.quora.com/profile/Nero-Adaware-1" target="_blank"><i  className="fa fa-quora fa-2x" aria-hidden="true"  style={{fontSize:"14px"}}></i></a></li>
          <li className="twitter"><a href="https://twitter.com/finallynero" target="_blank"><i className="fa fa-twitter fa-2x" aria-hidden="true" style={{fontSize:"14px"}}></i></a></li>
          <li className="linkedin"><a href="https://www.linkedin.com/in/adaware-oghenero-529200ba/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true" style={{fontSize:"14px"}}></i></a></li>
          <li className="github"><a href="https://github.com/nero2009" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true" style={{fontSize:"14px"}}></i></a></li>
        </ul>
      </div>
      <FooterDiv>
        <p>This Page is open source. <a className="source-link" target="_blank" href="https://github.com/nero2009/nero-blog">Source</a></p>
        <p>&copy; 2018 Nero Adaware </p>
      </FooterDiv>
      
    </footer>
  </CustomContainer>
 
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