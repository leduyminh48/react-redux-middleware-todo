import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoApp } from './reducers';

import App from './App';
import './index.css';

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //TODO: remove after DEV
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
