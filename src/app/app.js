import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={style.nav}>
          <div>呼叫律師</div>
          <div>
            <a>如何使用</a>
            <a>費用說明</a>
          </div>
        </div>
        <div className={style.main}>
          <img src="./main-text.png" />
          <a className={style.enterBtn}>
            開始使用
          </a>
        </div>
        <div className={style.sop}>
          <h1>快速呼叫律師</h1>
          <div className={style.step}>
            <div className={style.card}>
              <div className={style.image}>
                <img src="./step1.png" />
              </div>
              <h2>1句話</h2>
              <span>只要 1 句話:「我要請律師」所有的偵訊程序一切停止</span>
            </div>
            <div className={style.card}>
              <div className={style.image}>
                <img src="./step2.png" />
              </div>
              <h2>快速定位</h2>
              <span>拿出智慧型手機 GPS 定位，選擇您所在的警察局，您的專屬律師馬上前往救援</span>
            </div>
            <div className={style.card}>
              <div className={style.image}>
                <img src="./step3.png" />
              </div>
              <h2>100 秒搜尋</h2>
              <span>只要 100 秒即可搜尋您附近的律師，各地都有您的專屬律師守護著您</span>
            </div>
            <div className={style.card}>
              <div className={style.image}>
                <img src="./step4.png" />
              </div>
              <h2>30分鐘抵達</h2>
              <span>您的專屬律師 30 分鐘馬上抵達，依照法律規定，您的律師抵達前偵訊停止進行</span>
            </div>
            <div className={style.card}>
              <div className={style.image}>
                <img src="./step5.png" />
              </div>
              <h2>保持緘默<br/>耐心等候</h2>
            </div>
          </div>
          <a className={style.enterBtn}>
            開始使用
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
