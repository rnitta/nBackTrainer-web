import * as React from 'react';
import { connect } from 'react-redux';

class Nback extends React.Component {
  render() {
    return (
      <div className="width100">
        <section className="mainSection-container Home-container">
          <h1>免責</h1>
          <p className="px-20">
            このページは、書籍・インターネットで得られる情報を集積してまとめたものであり、書かれている内容について科学的に正しいことを保証するものではありません。
          </p>
        </section>
        <section className="mainSection-container Home-container mt-20">
          <h1>Nバック課題(n-back task)とは</h1>
          <p className="px-20">
            参考:{' '}
            <a
              href="https://ja.wikipedia.org/wiki/N%E3%83%90%E3%83%83%E3%82%AF%E8%AA%B2%E9%A1%8C"
              target="_blank"
            >
              Nバック課題 - Wikipedia
            </a>
          </p>
          <p className="px-20">
            Nバック課題とは、人間の脳の認知能力に関する試験の一つで、ワーキングメモリと関係が深いとされているものです。
          </p>
          <p className="px-20">
            その試験の内容は、一連の記号や音声等の刺激を漸次呈示され、被験者は毎度N個前に呈示されたものに基づいて回答するというものです。（Nは任意に設定され、Nが大きいほうがより高い処理能力が要求されます。）
          </p>
          <p className="px-20">
            この試験を継続的に行うことによって、脳のパフォーマンス、特にワーキングメモリに関する部分が向上すると考えられています[要出典]。
          </p>
        </section>
        <section className="mainSection-container Home-container mt-20">
          <h1>ワーキングメモリとは</h1>
          <p className="px-20">
            参考:{' '}
            <a
              href="https://ja.wikipedia.org/wiki/%E3%83%AF%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%A1%E3%83%A2%E3%83%AA"
              target="_blank"
            >
              ワーキングメモリ - Wikipedia
            </a>
          </p>
          <p className="px-20">
            ワーキングメモリとは、日本語で「作業記憶・作動記憶」と言われ、脳内に一時的に情報をとどめておく（仮想的な）領域の概念です。
          </p>
          <p className="px-20">
            一般に、ワーキングメモリの容量が大きい人の方が動作性のIQテストで高いスコアを記録するとされています。
          </p>
          <p className="px-20">
            また、ワーキングメモリは年齢にかかわらず、大人になっても鍛えることができるとされています。
          </p>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Nback);
