import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //You can pass data into component by using
  //props ex. txt
  <App cat={5}/>,
  document.getElementById('root')
);
