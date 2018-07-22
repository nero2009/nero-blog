import React, { Component } from 'react'
import { AboutContainer, AboutTextSection, AboutImageSection, Line, H2, H4, H6  } from "../styles/styledComponent";

class Profile extends Component {
    render () {
        return (
            <div>
            <AboutContainer>
                <AboutTextSection>
                    <H2>about me</H2>
                    <p>Nero Adaware is a front-end developer based in Lagos, Nigeria</p>
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
                    <img src="/static/me.jpg" alt="nero"/>
                </AboutImageSection>
            </AboutContainer>
            <Line/>
            <H4>Projects</H4>
            <ul>
                <li><a href="https://expenses-managers.herokuapp.com/" target="_blank">Expense Manager using React, Redux, Firebase and Enzyme</a></li>
                <li><a href="https://marvelous-mount-rainier-44182.herokuapp.com" target="_blank">Pixabay Image Viewer using React, Redux, Pixabay API and Redux-sagas for handling side effects</a></li>
                <li><a href="#" target="_blank">Sports Blog using Node JS, MongoDb,Express-validator and Pug template engine</a></li>
            </ul>
              
            <Line/>
            <H4>Education</H4>
                <H6>Covenant University (2010-2015)</H6>
                <p>Graduated with a Second Class Upper in Computer Engineering</p>
            </div>
        )
    }
}

export default Profile