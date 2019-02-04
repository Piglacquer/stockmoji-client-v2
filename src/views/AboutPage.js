import React from 'react'
import { Typography } from '@material-ui/core'
import '../styles/css/AboutPage.css'

const AboutPage = () => {
  return (
    <div id='about-page'>
      <div className='about-block-emoji'>
        <span className='about-emoji' role='img' aria-labelledby='cool-guy emoji'>😎</span>
        <Typography className='about-text' component='h1'> Stockmoji is a application built for you, the market-inclined individual, who has trouble parsing through all of the market news to see whether the outlook of a particular stock is good, bad, or uncertain (yeah, it's uncertain a lot of the time).</Typography>
      </div>
      <div className='about-block-emoji'>
        <Typography className='about-text'> Stockmoji is a application built for you, the market-inclined individual, who has trouble parsing through all of the market news to see whether the outlook of a particular stock is good, bad, or uncertain (yeah, it's uncertain a lot of the time).</Typography>
        <span className='about-emoji' role='img' aria-labelledby='cool-guy emoji'>😎</span>
      </div>
    </div>
  )
}

export default AboutPage
