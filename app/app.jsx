require("./style/style.sass");

import React from 'react';
import ReactDom from 'react-dom';

import TomatoBox from './pomodoro-page';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

const App = () => (
  <MuiThemeProvider muiTheme={lightMuiTheme}>
    <TomatoBox />
  </MuiThemeProvider>
);


ReactDom.render(
  <App />,
  document.getElementById('app')
);
