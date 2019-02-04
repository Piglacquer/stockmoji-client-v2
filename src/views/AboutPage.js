import React from 'react'
import { Typography } from '@material-ui/core'
import '../styles/css/AboutPage.css'

const AboutPage = () => {
  return (
    <div id='about-page'>
      <div className='about-block'>
        <span className='about-emoji' role='img' aria-labelledby='cool-guy emoji'>😎</span>
        <Typography className='about-text' component='h1'> Stockmoji is a application built for you, the market-inclined individual, who has trouble parsing through all of the market news to see whether the outlook of a particular stock is good, bad, or uncertain (yeah, it's uncertain a lot of the time). The sentiments gleaned from all these different sources are condensed into emojis, the language of choice for millenials and beyond.</Typography>
      </div>
      <div className='about-block'>
        <Typography className='about-text'>This is v2 of Stockmoji, an application I built as my capstone project at Galvanize. The original was built in ten days, with three of those days invested in a separate application that I pivoted away from. Ten (seven) days to build a full stack app, using a technology I had never used before (React) was quite the invigorating challenge. I slept the whole day after our presentations <span role='img' aria-labelledby='sleepy emoji'>😴</span>.</Typography>
        <span className='about-emoji' role='img' aria-labelledby='cool-guy emoji'>🤠</span>
      </div>
      <div className='about-block'>
        <span className='about-emoji' role='img' aria-labelledby='cool-guy emoji'>💾</span>
        <Typography className='about-text'>Stockmoji v1 was built with React, React-router, Techan (a charting library built on d3), the Twitter API, the Google Cloud Language API, Node.js, Express, Knex, and PostgreSQL. Stockmoji v2 was also built with React on the frontend; I added Redux, Materialize, and replaced Techan and React-router with React-stockcharts and Reach router. The back end remains mainly unchanged, with the addition of error handling and some refactoring.</Typography>
      </div>
    </div>
  )
}

export default AboutPage
