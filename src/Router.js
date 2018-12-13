import React from 'react'
import { Router } from '@reach/router'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage'
import CreateAccountPage from './views/CreateAccountPage'

const StockmojiRouter = () => {
  return (
    <Router>
      <LandingPage path='/' exact />
      <LoginPage path='/login' />
      <CreateAccountPage path='/create' />
    </Router>
  )
}

export default StockmojiRouter
