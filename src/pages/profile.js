import React, { Component } from 'react'
import { AboutContainer, AboutTextSection, AboutImageSection, Line } from "../styles/styledComponent";

class Profile extends Component {
    render () {
        return (
            <div>
            <AboutContainer>
                <AboutTextSection>
                    <h2>about me</h2>
                    <p>Nero Adaware is a front-end developer based in Lagos, Nigeria</p>
                    <h5>
                        I love taking complex problems and turn them into simple & interactive designs. I also
                        love the logic and structure of coding and always thrive to write efficient code, whether it be
                        HTML, CSS, Javascript, React, Express or Nodejs.
                    </h5>
                    <h5>
                        When I am not hacking, you will find me watching/playing football or talking football on twitter.
                    </h5>
                    <h4>Yeah before I forget I love Manchester United</h4>
                </AboutTextSection>
                <AboutImageSection>
                    <img src="/static/me.jpg" alt="nero"/>
                </AboutImageSection>
            </AboutContainer>
            <Line/>
            <h4>Projects</h4>
            <Line/>
            <h4>Education</h4>
            </div>
        )
    }
}

export default Profile