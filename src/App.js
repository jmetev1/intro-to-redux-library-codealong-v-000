import React, { Component } from 'react';
import './App.css';
import {connect } from 'react-redux';
import TodoViewer from './Todo.js';
import ExportGrade from 'export-grade';

const OneMessage = ({msg, like}) => (
  <div className="post">
    <div>userid is {msg.userId}</div>
    <div>title is {msg.title}</div>
    <button onClick={()=> like(msg.id)}>{msg.liked ? 'Liked' : 'Not liked'}</button>
  </div>
)

class OtherMessageDisplay extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {};
  //   if (this.props && this.props.props) {
  //     this.state = this.props.props;
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props, nextProps)
  //   if(nextProps.props && this.props.props) {
  //       if(nextProps.props.userId != this.props.userId) {
  //           this.setState(nextProps.props)
  //         }
  //       }
  //       // this.state = this.props.props;  
  // }
  render() {
    const { like, msg } = this.props;
    console.log(like)
    // if (this.props && this.props.props) {
    //   console.log(true)
    //   console.log(Object.assign({}, this.props.props))
    //   // const {userId, title, id} = this.props.props;
    // console.log(Object.assign({}, this.props))
    return (
      <div>
        <h1>message everywhere</h1>
        the message is {msg.title}
      </div>
    )  
}
}

const MessagePart = ({msgs, showMore, like, getPosts}) => (
  <div>
    <div>The number of tweets is {msgs.length}
      <div>
        <button onClick={getPosts}>Get Posts</button>
        <button onClick={showMore}>showmore</button>
      </div>
      <div className="row">
        {/* {msgs.map(msg => <OneMessage like={like} msg={msg} key={msg.id}/>)} */}
        {msgs.map(msg => <OtherMessageDisplay like={like} msg={msg} key={msg.id}/>)}
      </div>
    </div>
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
    },
    getPosts: () => {dispatch({type: 'GET_POSTS'})}
}) 

const MessagePart2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagePart)

class App extends Component {
  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
  .then(data => data.json().then(clean => {
    clean = clean.map(p => {
      p.liked = false;
      return p
    })
    this.props.store.dispatch({
      type: "ADD_POSTS",
      payload: clean
    })
  }))
  }
  render() {
    return (
      <div className="App container">
        <header>welcome to less</header>
        <ExportGrade/>
        <TodoViewer />
        <MessagePart2/> 
      </div>
    );
  }
};

export default App;
