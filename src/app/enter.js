import React from 'react';
import ReactDOM from 'react-dom';
import c from 'classnames';

import style from './enter.css';

export default (props) => {
  return <a className={style.enter}>{props.children}</a>;
};