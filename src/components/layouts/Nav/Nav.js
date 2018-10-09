import React from 'react';
import './Nav.css'
import {Link} from 'gatsby'
import {HomeLink} from  '../../../styles/styledComponent'

const Nav = () => {
    return (
        <div>
            <header>
                <section>
                <HomeLink to="/" id="logo" target="_blank">Nero</HomeLink>

                <label for="toggle-1" className="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
                <input type="checkbox" id="toggle-1"/>

                <nav>
                <ul>
                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                <li><Link to="/bookmarks/"><i className="fas fa-bookmark"></i>Bookmark</Link></li>
                <li><Link to="/blogs/"><i className="fas fa-book"></i>Blog</Link></li>
                <li><Link to="/profile/"><i class="fas fa-user-secret"></i>Profile</Link></li>
                
                </ul>
                </nav>
                </section>
                </header>

                
        </div>
    );
};

export default Nav;