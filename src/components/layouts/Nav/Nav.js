import React from 'react';
import './Nav.css'
import {Link} from 'gatsby'
import {HomeLink} from  '../../../styles/styledComponent'

const Nav = () => {
    return (
        <div>
            <header>
                <section>
                <HomeLink to="https://www.linkedin.com/in/sutharmayur" id="logo" target="_blank">Nero</HomeLink>

                <label  className="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
                <input type="checkbox" id="toggle-1"/>

                <nav>
                <ul>
                <li><Link to="/"><i className="icon-home"></i>Home</Link></li>
                <li><Link to="/bookmarks/"><i className="icon-user"></i>About</Link></li>
                <li><Link to="/blogs/"><i className="icon-thumbs-up-alt"></i>Portfolio</Link></li>
                <li><Link to="/profile/"><i className="icon-gear"></i>Services</Link></li>
                
                </ul>
                </nav>
                </section>
                </header>

                
        </div>
    );
};

export default Nav;