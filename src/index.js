import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import './index.scss';
import { Route, IndexRoute } from 'react-router';
import Products from './products';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Root>
      <App />
    </Root>
  </BrowserRouter>,
  document.getElementById('root')
);
