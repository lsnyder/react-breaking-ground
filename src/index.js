import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory } from 'react-router'
import About from './modules/About'
import Skills from './modules/Skills'
import Contact from './modules/Contact'
import Experience from './modules/Experience'
import {grey800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey800,
    canvasColor: grey800
  },
  appBar: {
    zIndex: 0
  }
});

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
  //You can pass data into component by using
  //props ex. txt
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="experience" component={Experience}/>
        <Route path="skills" component={Skills}/>
        <Route path="contact" component={Contact}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
