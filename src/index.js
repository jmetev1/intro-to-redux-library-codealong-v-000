import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(shoppingListItemReducer, 
  applyMiddleware(sagaMiddleware)
); 
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
