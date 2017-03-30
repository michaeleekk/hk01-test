import { SET_ARTICLES } from '../actions'

function articles(state = [], action) {
  switch (action.type) {
    case SET_ARTICLES:
      return [
        ...state,
        ...action.articles,
      ]
    default:
      return state
  }
}

export default articles
