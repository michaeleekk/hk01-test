import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './articles'
import loginForm from './login_form'
import registrationForm from './registration_form'

const Reducers = combineReducers({
  articles,
  loginForm,
  registrationForm,
  routing: routerReducer,
})

export default Reducers
