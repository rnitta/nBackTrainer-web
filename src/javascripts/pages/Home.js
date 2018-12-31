import * as React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className="width100">
        <section className="mainSection-container Home-container">
          <h1>nBackTrainerとは</h1>
          <p className="px-20">iOS app</p>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
