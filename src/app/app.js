import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import Enter from './enter'
import Card from './card'
import Comment from './comment'
import Link from './link'

import style from './app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className={style.navbar}>
          <div className={c(style.wrapper, style.nav)}>
            <div>呼叫律師</div>
            <div>
              <Link href="#step">如何使用</Link>
              <Link href="#fee">費用說明</Link>
            </div>
          </div>
        </nav>
        <article className={style.container}>
          <section>
            <div className={style.cover} />
            <div className={c(style.overlay, style.wrapper, style.main)}>
              <div>
                <h1 className={style.title}>呼叫律師</h1>
                <h2>24 小時警局陪同作筆錄</h2>
                <h3>迅速、專業的警局救援就在您身邊</h3>
                <Enter>開始使用</Enter>
              </div>
            </div>
          </section>
          <section id="step">
            <h1>快速呼叫律師</h1>
            <div className={style.step}>
              <Card
                label="1句話"
                imageClass={style.step1}>
                只要 1 句話:「我要請律師」所有的偵訊程序一切停止
              </Card>
              <Card
                label="快速定位"
                imageClass={style.step2}>
                拿出智慧型手機 GPS 定位，選擇您所在的警察局，您的專屬律師馬上前往救援
              </Card>
              <Card
                label="100 秒搜尋"
                imageClass={style.step3}>
                只要 100 秒即可搜尋您附近的律師，各地都有您的專屬律師守護著您
              </Card>
              <Card
                label="30分鐘抵達"
                imageClass={style.step4}>
                您的專屬律師 30 分鐘馬上抵達，依照法律規定，您的律師抵達前偵訊停止進行
              </Card>
              <Card
                label="保持緘默 耐心等候"
                imageClass={style.step5} />
            </div>
            <Enter>開始使用</Enter>
          </section>
          <section id="fee">
            <div className={style.fee}>
              <img className={style.landscape} src="./image/fee.png" />
              <img className={style.portrait} src="./image/fee-mobile.png" />
            </div>
            <div className={style.overlay}>
              <h1>呼叫律師如何收費？</h1>
              <div className={style.note}>呼叫律師按小時收費，最低收費為2小時</div>
            </div>
          </section>
          <section>
            <h1>呼叫律師 3大保證</h1>
            <div className={style.quality}>
              <Card
                label="專業合格律師"
                imageClass={style.professional}>
                每位律師都是經過法務部認證、專業又合格的律師，確實把關守護您的權益
              </Card>
              <Card
                label="豐富經驗"
                imageClass={style.experience}>
                每位律師都有多年豐富的執業經驗，各個身經百戰，專屬於您的守護者
              </Card>
              <Card
                label="迅速抵達"
                imageClass={style.fast}>
                您的專屬律師30分鐘馬上抵達，即使在警察局您再也不必擔心受怕
              </Card>
            </div>
            <Enter>開始使用</Enter>
          </section>
          <section>
            <div className={style.feedback}>
              <h1>來聽聽使用者的故事</h1>
              <div className={c(style.wrapper, style.comment)}>
                <Comment
                  author="莊先生">
                  2015年5月路過某個抗議會場附近，竟然被警察誤認成抗議民眾，莫名其妙被壓制、逮捕、銬上囚車，事到如今仍心有餘悸，你絕對不想孤身一人被抓到警察局的。
                </Comment>
                <Comment
                  author="吳先生">
                  一群警察沒有搜索票，突然衝進家裡就說要搜索，硬是要我拿出身分證配合盤查，我拿了手機連上「呼叫律師」，有什麼事情等律師來再講！
                </Comment>
              </div>
              <h2>呼叫律師，專家守護</h2>
              <Enter>開始使用</Enter>
            </div>
          </section>
          <footer>
            <div className={c(style.wrapper, style.link)}>
              <Link href="#">呼叫律師</Link>
              <Link>合作提案</Link>
              <Link>問題與建議</Link>
              <Link>關於我們</Link>
            </div>
            <div className={c(style.wrapper, style.app)}>
              <a href="https://itunes.apple.com/us/app/facebook/id1020908548">
                <img src="./image/ios.png" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.tin.lawyer">
                <img src="./image/android.png" />
              </a>
            </div>
            <div className={c(style.wrapper, style.copyright)}>
              <span>COPYRIGHT © 2015 Lawcall ALL RIGHTS RESERVED.</span>
            </div>
          </footer>
        </article>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
