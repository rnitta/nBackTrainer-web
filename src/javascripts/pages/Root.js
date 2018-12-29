import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="mainSection">
          <div className="mainSection-wrapper">{this.props.children}</div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Root;
