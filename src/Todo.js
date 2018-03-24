import React from 'react';
import './App.css';
import {connect } from 'react-redux';

const Todo = ({todo}) => (
  <div>
    <h1>first todo</h1>
    title is {todo.title}  
  </div>
)

class TodoViewerA extends React.Component {
  render() {
    const {todos, getTodos} = this.props;
    return (
      <div>
        <h1>My todos</h1>
        <button onClick={getTodos}>GetTodo</button>
        {todos.map((t,i) => <Todo todo={t} key={i}/>)}
      </div>
    )
  }
}

// const TodoViewerA = ({todos, getTodos}) => (
//   <div>
//     <h1>My todos</h1>
//     <button onClick={getTodos}>GetTodo</button>
//     {todos.map((t,i) => <Todo key={i}/>)}
//   </div>
// )

const mapStateToProps = state => {
  return {todos: state.todos}
};

const mapDispatchToprops = dispatch => ({
  getTodos: () => dispatch({
    type: "GET_TODO"
  })
})

const TodoViewer = connect(mapStateToProps, mapDispatchToprops)(TodoViewerA)
export default TodoViewer;
