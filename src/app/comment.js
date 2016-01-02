import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './comment.css';

export default (props) => {
  return (
    <div className={style.comment}>
      <div>{props.children}</div>
      <div className={style.author}>─ {props.author}</div>
    </div>
  );
};