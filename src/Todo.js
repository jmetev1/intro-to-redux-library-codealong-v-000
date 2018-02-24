import React, { Component } from 'react';
import './App.css';
import {connect } from 'react-redux';

const Todo = () => (
  <div>first todo</div>
)

const TodoViewer = ({todos}) => (
  <div>
    <h1>My todos</h1>
    {/* {todos.map(t => <Todo/>)} */}
    {['one','two'].map(t => <Todo/>)}
  </div>
)

export default TodoViewer;