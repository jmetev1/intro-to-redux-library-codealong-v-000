import React, { Component } from 'react';
import './App.css';

// class MessagePart extends Component {
const MessagePart = (props) => (
      <div>
        {props.store.getState().items.length}
      </div>
    )

class ClickPart extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }
  render() {
    return (
      <button onClick={(event) => this.handleOnClick(event)} >
        Click 
      </button>
    )
  }
}



class App extends Component {
  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        res.json().then(res => {
          let newData = res;
          console.log(newData)
          let oldState = [
            {1:"a"},
            {2:"b"}
          ]
          let newState = [...newData, ...oldState]
          console.log(newState)
          this.props.store.dispatch({
            type : 'ADD_POSTS',
            payoad : newData
          });
          // this.setState({ posts });
        })
      });
  }
  render() {
    return (
      <div className="App">
        <ClickPart store={ this.props.store }/>
        {/* <p>{this.props.store.getState().items.length}</p> */}
        <MessagePart store={ this.props.store }/>
      </div>
    );
  }
};

export default App;
