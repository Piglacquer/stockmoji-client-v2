import React from 'react'
import { Router } from '@reach/router'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage'
import CreateAccountPage from './views/CreateAccountPage'
import HomePage from './views/HomePage'

const StockmojiRouter = () => {
  return (
    <Router>
      <LandingPage path='/' exact />
      <LoginPage path='/login' />
      <CreateAccountPage path='/create' />
      <HomePage path='/home/:id' />
    </Router>
  )
}

export default StockmojiRouter
