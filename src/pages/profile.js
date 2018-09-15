import React from 'react'
import { AboutContainer, AboutTextSection, AboutImageSection, Line, H2, H4, H5, SourceLink  } from "../styles/styledComponent";
import Img from 'gatsby-image'

const Profile =({data})=> {
    
        return (
            <div>
            <AboutContainer>
                <AboutTextSection>
                    <H2>about me</H2>
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
                    <Img sizes={data.profileImage.childImageSharp.sizes} alt="nero"/>
                </AboutImageSection>
            </AboutContainer>
            <Line/>
            <H4>Projects</H4>
            
            <ul>
                <li>
                    <a href="https://expenses-managers.herokuapp.com/" target="_blank">Expense Manager using React, Redux, Firebase and Enzyme.</a> 
                    <SourceLink href="https://github.com/nero2009/expense-manager" target="_blank" >Source</SourceLink>
                </li>
                <li>
                    <a href="https://marvelous-mount-rainier-44182.herokuapp.com" target="_blank">Pixabay Image Viewer using React, Redux, Pixabay API and Redux-sagas for handling side effects.</a> 
                    <SourceLink href="https://github.com/nero2009/Image-viewer" target="_blank">Source</SourceLink>
                </li>
                <li>
                    <a href="http://neroblog.herokuapp.com/" target="_blank">Sports Blog using Node JS, MongoDb,Express-validator and Pug template engine.</a>
                    <SourceLink href="https://github.com/nero2009/sports-blog" target="_blank" >Source</SourceLink>
                </li>
                <li><a href="https://nero-adaware.netlify.com">Portfolio and Blog Site built with Gatsby, Graphql and Contentful</a>
                <SourceLink href="https://github.com/nero2009/nero-blog" target="_blank" >Source</SourceLink>
                </li>
            </ul>
              
            <Line/>
            <H4>Education</H4>
                <H5>Covenant University (2010-2015)</H5>
                <p>Graduated with a Second Class Upper in Computer Engineering</p>
            </div>
        )
    
}

export default Profile

export const pageQuery = graphql`
   query imageQuery{
    
     profileImage: file(relativePath:{regex: "/nero/"}){
    	childImageSharp{
        sizes(maxWidth:250){
          ...GatsbyImageSharpSizes
        }
      }
    }
   }
`