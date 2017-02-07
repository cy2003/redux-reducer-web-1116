export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND'){
    return Object.assign({}, state, {friends: state.friends.concat(action.payload)})
    // or return {...state, friends:[...state.friends, action.payload]}
    // the spread operator - future JS.
    // spread operator doesn't change it's original state
  }
  else if (action.type === 'REMOVE_FRIEND'){
    var selectedFriend = state.friends.findIndex(friend => friend.id === action.payload)
    var newFriendsArray = state.friends.slice(0, selectedFriend).concat(state.friends.slice(selectedFriend+1))
    return Object.assign({}, state, {friends: newFriendsArray})
  }
  else {
    return state
  }
}
