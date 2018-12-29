import * as React from 'react';
import { Router, NavLink, withRouter } from 'react-router-dom';

class Header extends React.Component {
  conditionalNavLink(path, text) {
    if (path === this.props.location.pathname) {
      return <span>{text}</span>;
    }
    return (
      <NavLink exact to={path} activeClassName="RRActiveLink">
        {text}
      </NavLink>
    );
  }
  render() {
    return (
      <header>
        <ul className="Header-navLinksList">
          <li className="Header-navLinksItem">
            {this.conditionalNavLink('/', 'Home')}
          </li>
          <li className="Header-navLinksItem">
            {this.conditionalNavLink('/nback', 'About n-Back')}
          </li>
          <li className="Header-navLinksItem">
            {this.conditionalNavLink('/privacy', 'Privacy')}
          </li>
        </ul>
      </header>
    );
  }
}

export default withRouter(Header);
