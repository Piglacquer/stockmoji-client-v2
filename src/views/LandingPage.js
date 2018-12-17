import React from 'react'
import { Link } from '@reach/router'
import Animation from '../components/Animation'
import '../styles/css/LandingPage.css'
import '../styles/css/Buttons.css'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Animation
        width={window.innerWidth * 0.9}
        height={window.innerWidth * 0.45}
        loop={false} />
      <Link className='confirm_button' to='/login'>Login</Link>
      <Link to='/create'>Create Account</Link>
    </div>
  )
}

export default LandingPage
