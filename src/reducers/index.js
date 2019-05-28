// import combineReducers here
import { combineReducers } from 'redux';

const currentCount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1
    case 'DECREASE_COUNTER':
      return state - 1
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.value]
    case 'REMOVE_USER':
      return state.slice(1)
    default:
      return state
  }
}

const specialText = (state = "", action) => {
  switch (action.type) {
    case 'SET_SPECIAL_TEXT':
      return action.value
    default:
      return state
  }
}

function currentCity(state="", action){
  switch(action.type){
    case "SET_CURRENT_CITY":
      return action.value
    default:
      return state
  }
  // if(action.type === "SET_CURRENT_CITY"){
  //   return action.value;
  // }
  // return state;
}

function currentTemp(state = 0, action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}
function isLoading(state = "", action){
  if(action.type === "SET_IS_LOADING"){
    return action.value
  }
  return state;
}
function videoURL(state ="", action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value
  }
  return state;
}
function searchText(state ="", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value
  }
  return state;
}
function currentUserSort(state ="", action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value
  }
  return state;
}
function videoScale(state ="", action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value
  }
  return state;
}
// combine reducers (and export) here
export default combineReducers({
  currentCount,
  users,
  specialText,
  currentCity,
  currentTemp,
  videoURL,
  isLoading,
  searchText,
  currentUserSort,
  videoScale
})