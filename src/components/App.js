import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Header from '../containers/header'
import Footer from './footer'
import BlogView from './blog_view'
import LoginView from '../containers/login_view'
import RegistrationView from '../containers/registration_view'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
            <div className="ads ads_large_ads"></div>
        </div>

        <Route exact path="/" component={BlogView} />
        <Route path="/member/login" component={LoginView} />
        <Route path="/member/registration" component={RegistrationView} />

        <Footer />
      </div>
    )
  }
}

export default App
