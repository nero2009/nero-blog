import React from "react";
import Link from "gatsby-link";
import './index.css'
import './icons.css'
import {CustomContainer, StyledLink,HomeLink,Line, FooterDiv, BlueLine, BodyContainer} from '../../styles/styledComponent'
import {Helmet} from 'react-helmet'
import {graphql} from 'gatsby'

import Navbar from '../layouts/Nav/Nav'

export default ({ children ,data}) => (
 
  <BodyContainer
  >
  <Helmet>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"/>
  <link rel="shortcut icon" href="nero-icon.ico"/>
  <title>Nero</title>
  </Helmet>
    <Navbar></Navbar>
    <CustomContainer>
    
    
    {children}
    
    <Line/>
    <footer>
      <div className="wrapper">
        <ul>
          <li className="quora"><a href="https://www.quora.com/profile/Nero-Adaware-1" target="_blank" rel="noopener noreferrer"><i  className="fa fa-quora fa-2x" aria-hidden="true"  style={{fontSize:"14px"}}></i></a></li>
          <li className="twitter"><a href="https://twitter.com/finallynero" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" aria-hidden="true" style={{fontSize:"14px"}}></i></a></li>
          <li className="linkedin"><a href="https://www.linkedin.com/in/adaware-oghenero-529200ba/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" aria-hidden="true" style={{fontSize:"14px"}}></i></a></li>
          <li className="github"><a href="https://github.com/nero2009" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true" style={{fontSize:"14px"}}></i></a></li>
        </ul>
      </div>
      <FooterDiv>
        <p>This Page is open source. <a className="source-link" target="_blank" rel="noopener noreferrer" href="https://github.com/nero2009/nero-blog"><i class="fab fa-github"></i></a></p>
        <p>&copy; 2018 Nero Adaware </p>
      </FooterDiv>
      
    </footer>
  </CustomContainer>
  </BodyContainer>
 
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