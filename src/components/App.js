import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css'

import Header from './header'
import Footer from './footer'
import BlogView from './blog_view'
import LoginView from './login_view'
import SignupView from './signup_view'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
              <div className="ads ads_large_ads"></div>
          </div>

          <Route exact path="/" component={BlogView} />
          <Route path="/member/login" component={LoginView} />
          <Route path="/member/registration" component={SignupView} />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
