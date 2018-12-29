import * as React from 'react';
import {BrowserRouter as Router, NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <header>
          <ul className='Header-navLinksList'>
            <li><NavLink to={'/'} activeClassName="RRActiveLink">Home</NavLink></li>
            <li><NavLink to={'/privacy'} activeClassName="RRActiveLink">Privacy</NavLink></li>
          </ul>
        </header>
    );
  }
}

export default Header;
