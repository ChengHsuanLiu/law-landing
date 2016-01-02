import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './card.css';

export default (props) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={props.image} />
      </div>
      <h2 className={style.label}>{props.label}</h2>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};