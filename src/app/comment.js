import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './comment.css';

export default (props) => {
  return (
    <div className={style.comment}>
      <h3>{props.children}</h3>
      <h3 className={style.author}>─ {props.author}</h3>
    </div>
  );
};