import { connect } from 'react-redux'
import { updateRegistrationFields, register } from '../actions'

import View from '../views/registration'
const mapStateToProps = (state) => {
  return {
    registrationForm: state.registrationForm.fields,
    error: state.registrationForm.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFields: (event) => {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name

      dispatch(updateRegistrationFields({
        [name]: value
      }))
    },
    onSubmit: (registrationForm) => {
      return (event) => {
        event.preventDefault()
        dispatch(register(registrationForm))
      }
    },
  }
}

const RegistrationView = connect(
  mapStateToProps,
  mapDispatchToProps
)(View)

export default RegistrationView
