import { put, takeEvery, all, call } from 'redux-saga/effects'

// ...

// Our worker Saga: will perform the async increment task

function getData(loc) {
  return fetch(`http://jsonplaceholder.typicode.com/${loc}`)
  .then(data => data.json().then(clean => clean))
}

function* fetchTodos(action) {
  try {
    const data = yield call(getData, 'todos')
    yield put({type:"FETCHED_TODOS", data})
  }
  catch (error) {
    console.log('error in fetchTodos')
  }
}
function* fetchPosts(action) {
  try {
    const payload = yield call(getData, 'posts')
    yield put({type:"ADD_POSTS", payload})
  }
  catch (error) {
    console.log('error in fetchPostss')
  }
}

function* watchfetchTodos() {
  yield takeEvery('GET_TODO', fetchTodos)
}
function* watchGetPosts() {
  yield takeEvery('GET_POSTS', fetchPosts)
}
export default function* rootSaga() {
  yield all([
    watchfetchTodos(),
    watchGetPosts()
  ])
}
