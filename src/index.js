import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Reducers from './reducers'
import App from './components/App'
import { getArticles } from './actions'
import './index.css'

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(Reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// initialize the store
store.dispatch(getArticles())
