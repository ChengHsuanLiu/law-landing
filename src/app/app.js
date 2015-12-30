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
          <div className={style.step}></div>
          <div className={style.step}></div>
          <div className={style.step}></div>
          <div className={style.step}></div>
          <div className={style.step}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
