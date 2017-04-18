import axios from 'axios'
import { push } from 'react-router-redux'

export const SET_REGISTRATION_ERROR_MESSAGE = 'SET_REGISTRATION_ERROR_MESSAGE'
export function setRegistrationErrorMessage(error) {
  return {
    type: SET_REGISTRATION_ERROR_MESSAGE,
    error,
  }
}

export const UPDATE_REGISTRATION_FIELDS = 'UPDATE_REGISTRATION_FIELDS'
export function updateRegistrationFields(fields) {
  return {
    type: UPDATE_REGISTRATION_FIELDS,
    fields,
  }
}

export const CLEAR_REGISTRATION_FIELDS = 'CLEAR_REGISTRATION_FIELDS'
export function clearRegistrationFields(fields) {
  return {
    type: CLEAR_REGISTRATION_FIELDS,
  }
}

export function register(registrationForm) {
  return function(dispatch) {
    if (registrationForm.password !== registrationForm.confirm_password) {
      dispatch(setRegistrationErrorMessage('Two passwords do not match.'))
      return
    }

    dispatch(setRegistrationErrorMessage(''))

    axios.post('/api/users', registrationForm)
    .then(response => {
      dispatch(push('/'))
      dispatch(clearRegistrationFields())
    })
    .catch(error => {
      if (error.response.data && error.response.data.error) {
        dispatch(setRegistrationErrorMessage(error.response.data.error))
      }
    })
  }
}
