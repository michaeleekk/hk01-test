const crypto = require('crypto')

const {
  isEmail,
  isPasswordFormat,
  hashString,
  randomString,
} = require('./utils')

const userStore = []
const sessionStore = {}
const articleStore = []

const User = {
  getUser: ({ email, password }) => {
    const users = userStore.filter((u) => {
      if (
        u.email === email && 
        (typeof password === 'undefined' || u.password === hashString(password))
      ) {
        return u
      }
    })

    if (users.length === 0) return null
    return users[0]
  },
  addUser: ({ email, password }) => {
    if (!isEmail(email)) {
      throw Error('Invalid email')
    } else if (!isPasswordFormat(password)) {
      throw Error('Invalid password format, expected 6-12 alphanumeric.')
    }

    const user = User.getUser({ email })
    if (user) {
      throw Error('This email is already registered.')
    }

    userStore.push({
      email,
      password: hashString(password),
    })
  },
  addUsers: (users) => {
    users.map((user) => {
      User.addUser(user)
    })
  },
}

const Session = {
  addSession: function({ email }) {
    const token = randomString(256)
    sessionStore[token] = email
    return token
  },
  removeSession: function({ email, token }) {
    if (typeof sessionStore[token] !== 'undefined' && sessionStore[token] === email) {
      delete sessionStore[token]
      return true
    }
    return false
  },
  login: function({ email, password }) {
    const user = User.getUser({ email, password })
    if (!user) throw Error('Can\'t find the user.')

    const token = Session.addSession({ email })
    return token
  },
  logout: function({ email, token }) {
    Session.removeSession({ email, token })
  },
}

const Article = {
  getArticles: ({ id, timestamp, count = 5 }) => {
    // get the first index of the articles just after timestamp
    let idx
    if (typeof id !== 'undefined') {
      idx = parseInt(id) + 1
    } else if (typeof timestamp !== 'undefined') {
      idx = articleStore.find((article) => {
        if (typeof timestamp !== 'undefined') {
          return article.timestamp >= timestamp
        }
      })
    } else {
      idx = 0
    }

    // get 'count' of articles
    return articleStore.slice(idx, idx + count)
  },
  addArticle: (article) => {
    articleStore.push(article)
  },
  addArticles: (articles) => {
    articles.map((article) => {
      Article.addArticle(article)
    })
  },
}

module.exports = { User, Session, Article }
