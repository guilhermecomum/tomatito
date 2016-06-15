require("./style.css");

import React from 'react';
import ReactDom from 'react-dom';

import TomatoBox from './pomodoro-page';

ReactDom.render(
  <TomatoBox />,
  document.getElementById('app')
);
