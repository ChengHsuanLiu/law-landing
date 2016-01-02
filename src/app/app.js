import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import Enter from './enter'
import Card from './card'

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
          <img src="./image/main.png" className={style.fullImage}/>
          <div className={style.overlay}>
            <h1 className={style.title}>快速呼叫律師</h1>
            <div>24 小時警局陪同作筆錄</div>
            <div>迅速、專業的警局救援就在您身邊</div>
            <Enter>開始使用</Enter>
          </div>
        </div>
        <div className={style.container}>
          <h1>快速呼叫律師</h1>
          <div className={c(style.wrapper, style.step)}>
            <Card
              label="1句話"
              image="./image/step1.png"
              >
              只要 1 句話:「我要請律師」所有的偵訊程序一切停止
            </Card>
            <Card
              label="快速定位"
              image="./image/step2.png"
              >
              拿出智慧型手機 GPS 定位，選擇您所在的警察局，您的專屬律師馬上前往救援
            </Card>
            <Card
              label="100 秒搜尋"
              image="./image/step3.png"
              >
              只要 100 秒即可搜尋您附近的律師，各地都有您的專屬律師守護著您
            </Card>
            <Card
              label="30分鐘抵達"
              image="./image/step4.png"
              >
              您的專屬律師 30 分鐘馬上抵達，依照法律規定，您的律師抵達前偵訊停止進行
            </Card>
            <Card
              label="保持緘默 耐心等候"
              image="./image/step5.png" />
          </div>
          <Enter>開始使用</Enter>
          <div className={style.cost}>
            <img src="./image/cost_landscape.png" className={style.fullImage}/>
            <div className={style.overlay}>
              <h1 className={style.even}>呼叫律師如何收費？</h1>
              <div>呼叫律師按小時收費，最低收費為2小時</div>
            </div>
          </div>
          <h1>呼叫律師 3大保證</h1>
          <div className={c(style.wrapper, style.quality)}>
            <Card
              label="專業合格律師"
              image="./image/quality_professional.png"
              >
              每位律師都是經過法務部認證、專業又合格的律師，確實把關守護您的權益
            </Card>
            <Card
              label="豐富經驗"
              image="./image/quality_experience.png"
              >
              每位律師都有多年豐富的執業經驗，各個身經百戰，專屬於您的守護者
            </Card>
            <Card
              label="迅速抵達"
              image="./image/quality_fast.png"
              >
              您的專屬律師30分鐘馬上抵達，即使在警察局您再也不必擔心受怕
            </Card>
          </div>
          <Enter>開始使用</Enter>
          <div className={c(style.wrapper, style.feedback)}>
            <h1 className={style.even}>來聽聽使用者的故事</h1>
            <div className={style.commit}>
              2015年5月路過某個抗議會場附近，竟然被警察誤認成抗議民眾，莫名其妙被壓制、逮捕、銬上囚車，事到如今仍心有餘悸，你絕對不想孤身一人被抓到警察局的。
              ─ 莊先生
            </div>
            <div className={style.commit}>
              一群警察沒有搜索票，突然衝進家裡就說要搜索，硬是要我拿出身分證配合盤查，我拿了手機連上「呼叫律師」，有什麼事情等律師來再講！
              ─ 吳先生
            </div>
            <span>呼叫律師，專家守護</span>
            <Enter>開始使用</Enter>
          </div>
          <div className={style.wrapper}>
            <a className={style.link}>呼叫律師</a>
            <a className={style.link}>合作提案</a>
            <a className={style.link}>問題與建議</a>
            <a className={style.link}>關於我們</a>
          </div>
          <div className={style.wrapper}>
            <img src="./image/ios.png" />
            <img src="./image/android.png" />
          </div>
          <div className={style.wrapper}>
            <span>COPYRIGHT © 2015 Lawcall ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
