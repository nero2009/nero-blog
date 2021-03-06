import React from 'react'
import {graphql} from 'gatsby'
import { AboutContainer, AboutTextSection, AboutImageSection, Line, H2, H4, H5, SourceLink, ProjectList  } from "../styles/styledComponent";
import Img from 'gatsby-image'

import Layout from '../components/layouts'

const Profile =({data})=> {
        console.log(data)
    
        return (
            <Layout>
            <div>
            <AboutContainer>
                <AboutTextSection>
                    <H2>About me &#128587;&#127999;&zwj;&#9794;</H2>
                    <p>Nero Adaware is a fullstack developer based in Lagos, Nigeria</p>
                    <p>
                        I love taking complex problems and turn them into simple & interactive designs. I also
                        love the logic and structure of coding and always thrive to write efficient code, whether it be
                        HTML, CSS, Javascript, React, Express or Nodejs.
                    </p>
                    <p>
                        When I am not hacking, you will find me watching/playing football or talking football on twitter.
                    </p>
                    <br/>
                    <br/>
                    <p>Yeah before I forget I love Manchester United.</p>
                </AboutTextSection>
                <AboutImageSection>
                    <Img fluid={data.profileImage.childImageSharp.fluid} style={{borderRadius:"50%"}} alt="nero"/>
                </AboutImageSection>
            </AboutContainer>
            <Line/>
            <H2>Projects &#128187;</H2>
            
            <ul>
                <ProjectList>
                    <a href="https://expenses-managers.herokuapp.com/" target="_blank"  rel="noopener noreferrer" >Expense Manager using React, Redux, Firebase and Enzyme.</a> 
                    <SourceLink href="https://github.com/nero2009/expense-manager" target="_blank"  rel="noopener noreferrer"> <i class="fab fa-github"></i> </SourceLink>
                </ProjectList>
                <ProjectList>
                    <a href="https://marvelous-mount-rainier-44182.herokuapp.com" target="_blank"  rel="noopener noreferrer">Pixabay Image Viewer using React, Redux, Pixabay API and Redux-sagas for handling side effects.</a> 
                    <SourceLink href="https://github.com/nero2009/Image-viewer" target="_blank" rel="noopener noreferrer"> <i class="fab fa-github"></i> </SourceLink>
                </ProjectList>
                <ProjectList>
                    <a href="http://neroblog.herokuapp.com/" target="_blank"  rel="noopener noreferrer">Sports Blog using Node JS, MongoDb,Express-validator and Pug template engine.</a>
                    <SourceLink href="https://github.com/nero2009/sports-blog" target="_blank"  rel="noopener noreferrer"> <i class="fab fa-github"></i> </SourceLink>
                </ProjectList>
                <ProjectList>
                    <a href="https://nero-adaware.netlify.com"  rel="noopener noreferrer">Portfolio and Blog Site built with Gatsby, Graphql and Contentful</a>
                    <SourceLink href="https://github.com/nero2009/nero-blog" target="_blank"  rel="noopener noreferrer"> <i class="fab fa-github"></i> </SourceLink>
                </ProjectList>
            </ul>
              
            <Line/>
            <H2>Education &#x1F3EB;</H2>
                <H5>Covenant University (2010-2015)</H5>
                <p>Graduated with a Second Class Upper in Computer Engineering(B.Eng)</p>
            </div>
            </Layout>
        )
    
}

export default Profile

export const pageQuery = graphql`
   query {
    
     profileImage: file(relativePath:{regex: "/Me2/"}){
    	childImageSharp{
        fluid(maxWidth:250){
          ...GatsbyImageSharpFluid
        }
      }
    }
   }
`