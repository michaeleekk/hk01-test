import { SET_REGISTRATION_ERROR_MESSAGE, CLEAR_REGISTRATION_FIELDS, UPDATE_REGISTRATION_FIELDS } from '../actions'

function error(state = '', action) {
  switch (action.type) {
    case SET_REGISTRATION_ERROR_MESSAGE:
      return action.error
    default:
      return state
  }
}

function fields(state = {}, action) {
  switch (action.type) {
    case UPDATE_REGISTRATION_FIELDS:
      return {
        ...state,
        ...action.fields,
      }
    case CLEAR_REGISTRATION_FIELDS:
      return {}
    default:
      return state
  }
}

function registrationForm(state = {
  error: '',
  fields: {},
}, action) {
  switch (action.type) {
    case CLEAR_REGISTRATION_FIELDS:
    case UPDATE_REGISTRATION_FIELDS:
      return {
        ...state,
        fields: fields(state.fields, action),
      }
    case SET_REGISTRATION_ERROR_MESSAGE:
      return {
        ...state,
        error: error(state.error, action),
      }
    default:
      return state
  }
}

export default registrationForm
