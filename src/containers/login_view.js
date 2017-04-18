import { connect } from 'react-redux'
import { updateLoginFields, login } from '../actions'

import View from '../views/login'
const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm.fields,
    error: state.loginForm.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFields: (event) => {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name

      dispatch(updateLoginFields({
        [name]: value
      }))
    },
    onSubmit: (loginForm) => {
      return (event) => {
        event.preventDefault()
        dispatch(login(loginForm))
      }
    },
  }
}

const LoginView = connect(
  mapStateToProps,
  mapDispatchToProps
)(View)

export default LoginView
