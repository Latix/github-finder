import React from 'react';
import propTypes from 'prop-types';
import '../../App.css';

const NavBar = ({icon, title}) => {
    // defaultProps = {
    //     title: 'Github Finder',
    //     icon: 'fab fa-github'
    // }
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon} /> {title}
                </h1>
            </nav>
        )
    }
// Navbar.defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
// }

// Navbar.propTypes = {
//     title: propTypes.string.isRequired,
//     icon: propTypes.string.isRequired
// }

export default NavBar;
