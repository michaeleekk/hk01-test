import axios from 'axios'
import cookie from 'react-cookie'
import { push } from 'react-router-redux'

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
export function setErrorMessage(error) {
  return {
    type: SET_ERROR_MESSAGE,
    error,
  }
}

export const UPDATE_LOGIN_FIELDS = 'UPDATE_LOGIN_FIELDS'
export function updateLoginFields(fields) {
  return {
    type: UPDATE_LOGIN_FIELDS,
    fields,
  }
}

export function login(loginForm) {
  return function(dispatch) {
    dispatch(setErrorMessage(''))

    axios.post('/api/users/login', loginForm)
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' })
      dispatch(push('/'))
    })
    .catch(error => {
      if (error.response && error.response.data && error.response.data.error) {
        dispatch(setErrorMessage(error.response.data.error))
      }
    })
  }
}