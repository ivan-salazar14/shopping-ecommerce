import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
ReactDOM.render(
  <BrowserRouter>
    <Root>
      <App />
      {/*   <Routes /> */}
    </Root>
  </BrowserRouter>,
  document.getElementById('root')
);
