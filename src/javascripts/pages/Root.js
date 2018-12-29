import * as React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>root container</p>
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Root;
