const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer() // for parsing multipart/form-data
const fs = require('fs')

const { User, Session, Article } = require('./models')

const app = express()

// :TODO: Initialize the stores
if (process.env.NODE_ENV !== 'production') {
  const { MockUsers, MockArticles } = require('./mock')
  User.addUsers(MockUsers)
  Article.addArticles(MockArticles)
}

app.set('port', (process.env.PORT || 3001))

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/api/articles', (req, res) => {
  const { id, timestamp, count } = req.query

  try {
    const articles = Article.getArticles({ id, timestamp, count })
    res.json(articles)
  } catch(err) {
    console.log('[GET articles]', err.message)
    res.status(402)
    res.json({ error: 'Something occured.' })
  }
})

// signup
app.post('/api/users', (req, res) => {
  const { email, password } = req.body

  try {
    User.addUser({ email, password })
    res.json({ success: true })
  } catch(err) {
    res.status(402)
    res.json({ error: err.message })
  }
})

// login
app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body

  try {
    const token = Session.login({ email, password })
    res.json({ token })
  } catch(err) {
    res.status(402)
    res.json({ error: err.message })
  }
})

// logout
app.post('/api/users/logout', (req, res) => {
  const { email, token } = req.body
  Session.logout({ email, token })
  res.json({ success: true })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
