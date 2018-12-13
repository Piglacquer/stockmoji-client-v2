import React from 'react'
import { Link } from '@reach/router'
import Animation from '../components/Animation'

const LandingPage = () => {
  return (
    <div>
      <Animation
        width={window.innerWidth * 0.9}
        height={window.innerWidth * 0.45}
        loop={false} />
      <Link to='/login'>Login</Link>
      <Link to='/create'>Create Account</Link>
    </div>
  )
}

export default LandingPage
