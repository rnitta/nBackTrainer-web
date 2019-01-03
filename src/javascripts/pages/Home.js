import * as React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className="width100">
        <section className="mainSection-container Home-container">
          <h1>nBackTrainerとは</h1>
          <p className="px-20">iOS app</p>
          <p className="px-20">
            <a
              href="https://itunes.apple.com/jp/app/nbacktrainer/id1448011827?mt=8"
              style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2019-01-02&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"
            />
          </p>
        </section>
        <section className="mainSection-container Home-container mt-20">
          <h1>そのうちなにか書くつもりだった</h1>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
