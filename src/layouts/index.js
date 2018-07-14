import React from "react";
import Link from "gatsby-link";
import './index.css'
import {Container, StyledLink,HomeLink,Line} from '../styles/styledComponent'



export default ({ children ,data}) => (
  <Container
  >
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