import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); /* code change */

getTweet();

function render() {
  setTimeout(() => {
    
    ReactDOM.render(
      <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
}, 1000);
}
render();
store.subscribe(render);

function getTweet() {
  
  fetch(`http://jsonplaceholder.typicode.com/posts`).then(res => {
    res.json().then(res => {
      res = res.map(t => Object.assign({}, t, {liked: false}))
      let newData = res;
      store.dispatch({
        type : 'ADD_POSTS',
        payload : newData
      });
    })
  });
}