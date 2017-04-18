import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from './articles'
import loginForm from './login_form'
import registrationForm from './registration_form'
import isLoggedIn from './is_logged_in'

const Reducers = combineReducers({
  articles,
  loginForm,
  registrationForm,
  isLoggedIn,
  routing: routerReducer,
})

export default Reducers
