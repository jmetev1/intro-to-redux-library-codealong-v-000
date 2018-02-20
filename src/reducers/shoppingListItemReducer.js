// let defaultState = {
//   items: []
// };
// export default function shoppingListItemReducer(state = defaultState, action) {
//   switch(action.type) {
//     case 'INCREASE_COUNT':
//       let newState = Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
//       return newState
//     default:
//       return state;
//     }   
// }
let defaultState = {
  items: []
};
export default function shoppingListItemReducer(state = defaultState, action) {
//   switch(action.type) {
//     case 'INCREASE_COUNT':
//       let newState = Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
//       return newState
//     default:
//       return state;
//     }   
// }
// export default function postsReducer(state = [], action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      let newState = Object.assign({}, state, { items: state.items.concat(state.items.length + 1) });
      return newState
    case 'Add_POSTS':
      return [...state, ...action.payload]
    default: return state;
  }
}