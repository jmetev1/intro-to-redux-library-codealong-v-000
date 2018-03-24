let defaultState = {
  visible: [],
  extra: [],
  todos: []
};
 /* eslint-disable */ 
export default function shoppingListItemReducer(state = defaultState, action) {
  console.log('incoming action')
  console.log(action)
  switch (action.type) {
    case 'FETCHED_TODOS': {
      return Object.assign({}, state, {todos: action.data})
    }
    case 'SHOW_MORE': {
      let visible = [...state.visible.slice(), ...state.extra.slice(0, 10)];
      let extra = state.extra.slice(10, state.extra.length);
      let newState = {extra, visible, todos: state.todos.slice()};
      return newState;
      break;
    }
    case 'ADD_POSTS':
      return {
        visible: action.payload.slice(0, 10), 
        extra: action.payload.slice(10, action.payload.length),
        todos: state.todos.slice()
      }; 
    case 'LIKE':
      let index;
      let toLike = state.visible.find((e, i) => {
        if (e.id === action.id) {
          index = i;
          return true;
        }
      });
      let copy = Object.assign({}, toLike)
      copy.liked = true;
      let firstHalf = state.visible.slice(0, index);
      let secondHalf = state.visible.slice(index + 1, state.visible.length);

      let visible1 = firstHalf.concat([copy]).concat(secondHalf);
      let newState2= {
        visible: visible1, 
        todos: state.todos.slice(),
        extra: state.extra.slice()
      }
      return newState2;
    default: return state;
  }
}
//