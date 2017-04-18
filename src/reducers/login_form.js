import { SET_ERROR_MESSAGE, UPDATE_LOGIN_FIELDS } from '../actions'

function error(state = '', action) {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return action.error
    default:
      return state
  }
}

function fields(state = {}, action) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELDS:
      return {
        ...state,
        ...action.fields,
      }
    default:
      return state
  }
}

function loginForm(state = {
  error: '',
  fields: {},
}, action) {
  switch (action.type) {
    case UPDATE_LOGIN_FIELDS:
      return {
        ...state,
        fields: fields(state.fields, action),
      }
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        error: error(state.error, action),
      }
    default:
      return state
  }
}

export default loginForm
