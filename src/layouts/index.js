import React from "react";
import Link from "gatsby-link";
import './index.css'
import './icons.css'
import {Container, StyledLink,HomeLink,Line} from '../styles/styledComponent'
import {Helmet} from 'react-helmet'



export default ({ children ,data}) => (
  <Container
  >
  <Helmet>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" 
  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
   crossorigin="anonymous"/>
  </Helmet>
    <Link to={`/`}>
      <HomeLink>
        {`<Nero/>`}
      </HomeLink>
    </Link>
    <StyledLink  to={`/profile/`}>
      Profile
    </StyledLink>
    <StyledLink to={`/blogs/`}>
      Blog
    </StyledLink>
    <Line/>
    {children()}
    <Line/>
    <footer>
      <div className="wrapper">
        <ul>
          <li className="facebook"><i  className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
          <li className="twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
          <li className="instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
          <li className="google"><i className="fa fa-google fa-2x" aria-hidden="true"></i></li>
          <li className="whatsapp"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
        </ul>
      </div>
    </footer>
  </Container>
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