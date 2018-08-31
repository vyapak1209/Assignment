import {FEED_FETCHED} from '../actions/ActionsTypes'
const INITIAL_STATE = { data: null }

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case FEED_FETCHED:
      return {...state, data: action.payload}
    default:
      return state;
  }
}