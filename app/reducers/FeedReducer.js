import { FEED_FETCHED, LOGIN_AGAIN, NEXT_URL } from '../actions/ActionsTypes'
const INITIAL_STATE = { data: null, next: null }

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case NEXT_URL:
      return { ...state, next: action.payload }
    case LOGIN_AGAIN:
      return { ...state, data: action.payload }
    case FEED_FETCHED:
      if (state.data === null ){
        return { ...state, data: action.payload }
      }else{
        return {...state, data: state.data.concat(action.payload)}
      }
    default:
      return state;
  }
}