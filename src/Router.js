import React from 'react'
import { Router } from '@reach/router'
import LandingPage from './views/LandingPage'

const StockmojiRouter = () => {
  return (
    <Router>
      <LandingPage path='/' />
    </Router>
  )
}

export default StockmojiRouter
