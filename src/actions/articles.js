import axios from 'axios'

export const SET_ARTICLES = 'SET_ARTICLES'
function setArticles(articles) {
  return {
    type: SET_ARTICLES,
    articles: articles,
  }
}

export function getArticles() {
  return function(dispatch) {
    axios.get('/api/articles')
    .then(response => {
      dispatch(setArticles(response.data))
    })
  }
}
