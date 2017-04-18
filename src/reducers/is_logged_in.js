import cookie from 'react-cookie'

import { SET_IS_LOGGED_IN } from '../actions'

function initialState() {
  const token = cookie.load('token')
  if (typeof token !== 'undefined') return true
  return false
}

function isLoggedIn(state = initialState(), action) {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return action.isLoggedIn
    default:
      return state
  }
}

export default isLoggedIn
