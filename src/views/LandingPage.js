import React from 'react'
import Animation from '../components/Animation'
import '../styles/css/LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Animation
        width={window.innerWidth * 0.9}
        height={window.innerWidth * 0.3}
        loop={false} />
      <h2 className='tagline'>...a stock sentiment analyzer <span role='img' aria-label='shrugging emoji'>🤷‍♂️</span></h2>
    </div>
  )
}

export default LandingPage
