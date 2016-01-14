import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './card.css';

import transparent from '../www/image/transparent.png'

export default (props) => {
  return (
    <div className={c(style.card)}>
      <div className={c(style.image, props.imageClass)}>
        <img src={transparent} />
      </div>
      <div>
        <h2 className={style.label}>{props.label}</h2>
        <h3 className={style.content}>{props.children}</h3>
      </div>
    </div>
  );
};