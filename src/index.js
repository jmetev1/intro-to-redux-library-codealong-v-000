import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* code change */


function render() {

  ReactDOM.render(
    <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
  );
}
render();
store.subscribe(render);