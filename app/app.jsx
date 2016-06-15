require("./style.css");

import React from 'react';
import ReactDom from 'react-dom';

let TomatoBox = require('./pomodoro-page');

ReactDom.render(
  <TomatoBox />,
  document.getElementById('app')
);
