import * as React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <p>home container</p>
    );
  }
}


function mapStateToProps(state) {

  return {};
}

export default connect(mapStateToProps)(Home);
