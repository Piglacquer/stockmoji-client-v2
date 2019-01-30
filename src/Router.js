import React from 'react'
import { Router } from '@reach/router'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage'
import CreateAccountPage from './views/CreateAccountPage'
import AboutPage from './views/AboutPage'
import HomePage from './views/HomePage'
import UserStocksPage from './views/UserStocksPage'

const StockmojiRouter = () => {
  return (
    <Router>
      <LandingPage path='/' exact />
      <LoginPage path='/login' />
      <CreateAccountPage path='/create' />
      <AboutPage path='/about' />
      <HomePage path='/home/:id' />
      <UserStocksPage path='user-stocks/:id' />
    </Router>
  )
}

export default StockmojiRouter
