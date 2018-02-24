import React, { Component } from 'react';
import './App.css';
import {connect } from 'react-redux';
import TodoViewer from './Todo.js';

const OneMessage = ({msg, like}) => (
  <div>
    <div>userid is {msg.userId}</div>
    <div>title is {msg.title}</div>
    <div>{msg.liked ? 'Liked' : 'Not liked'}</div>
    <button onClick={()=> like(msg.id)}>Like this</button>
  </div>
)

const MessagePart = ({msgs, showMore, like}) => (
  <div>The number of tweets is {msgs.length}
    <div>
      <button onClick={showMore}>showmore</button>
    </div>    
    {msgs.map(msg => <OneMessage like={like} msg={msg} key={msg.id}/>)}
  </div>
)

const mapStateToProps = state => {
  return {
    msgs : state.visible
  }
}
const mapDispatchToProps = dispatch => ({
    showMore: () => {
      dispatch({
        type: 'SHOW_MORE'
      })
    },
    like: (id) => {
      dispatch({
        type: 'LIKE',
        id:id
      })
    }
}) 

const MessagePart2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagePart)

class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoViewer/>
        {/* <RealLoader></RealLoader> */}
        {/* <ClickPart store={ this.props.store }/> */}
        {/* <p>{this.props.store.getState().items.length}</p> */}
        <MessagePart2/> 
      </div>
    );
  }
};

export default App;
