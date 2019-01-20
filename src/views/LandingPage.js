import React from 'react'
import Animation from '../components/Animation'
import { Typography } from '@material-ui/core'
import '../styles/css/LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Animation
        width={window.innerWidth * 0.9}
        height={window.innerWidth * 0.3}
        loop={false} />
      <Typography component='h2' variant='h1' gutterBottom className='tagline'>...a stock sentiment analyzer <span role='img' aria-label='shrugging emoji'>🤷‍♂️</span></Typography>
    </div>
  )
}

export default LandingPage
