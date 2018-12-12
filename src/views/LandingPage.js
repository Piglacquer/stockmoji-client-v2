import React from 'react'
import { Link } from '@reach/router'

const LandingPage = ({ email, password, emailChanged }) => {
  return (
    <div>
      <Link to='/login'>Login</Link>
      <Link to='/create'>Create Account</Link>
    </div>
  )
}

export default LandingPage
