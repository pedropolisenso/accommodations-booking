import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './containers/App';

import './styles/main.sass';

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app);
