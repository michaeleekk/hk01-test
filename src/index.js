import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware, ConnectedRouter as Router } from 'react-router-redux'

import Reducers from './reducers'
import App from './components/App'
import { getArticles } from './actions'
import './index.css'

const middlewares = [thunkMiddleware]
const history = createHistory()

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}
middlewares.push(routerMiddleware(history))

// const store = compose(applyMiddleware(...middlewares))(createStore)(Reducers)
const store = createStore(
  Reducers,
  applyMiddleware(...middlewares)
)

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// initialize the store
store.dispatch(getArticles())
