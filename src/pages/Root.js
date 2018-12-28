import * as React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/privacy'}>Privacy</Link></li>
          </ul>
          <p>root container</p>
          {this.props.children}
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {

  return {};
}

export default connect(mapStateToProps)(Root);
