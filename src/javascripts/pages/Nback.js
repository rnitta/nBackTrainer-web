import * as React from 'react';
import { connect } from 'react-redux';

class Nback extends React.Component {
  render() {
    return (
      <div className="width100">
        <section className="mainSection-container Home-container">
          <h1>n-backとは</h1>
          <p>preparing...</p>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Nback);
