import * as React from 'react';
import { connect } from 'react-redux';

class Privacy extends React.Component {
  render() {
    return (
      <p>privacy container</p>
    );
  }
}


function mapStateToProps(state) {

  return {};
}

export default connect(mapStateToProps)(Privacy);
