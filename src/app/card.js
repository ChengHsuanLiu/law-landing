import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './card.css';

export default (props) => {
  return (
    <div className={c(style.card, props.column && style.column)}>
      <div className={style.image}>
        <img src={props.image} />
      </div>
      <div>
        <h2 className={style.label}>{props.label}</h2>
        <h3 className={style.content}>{props.children}</h3>
      </div>
    </div>
  );
};