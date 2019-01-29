import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import { renderMagnitudeSwitch, renderSentimentSwitch } from '../helpers/emojis'
import '../styles/css/SentimentCard.css'

const SentimentCard = (props) => {
  return (
    <div className='sentiment-card'>
      <Typography className='header' component='h1'>SCORES</Typography>
      <div className='scores-container'>
        <div className='score-wrapper'>
          <Typography component='h1'> MAGNITUDE: </Typography>
          <p className='emoji'>{renderMagnitudeSwitch(props.magnitudeScore)}</p>
          <Typography component='h1'>{props.magnitudeScore}</Typography>
        </div>
        <div className='score-wrapper'>
          <Typography component='h1'> SENTIMENT: </Typography>
          <p className='emoji'>{renderSentimentSwitch(props.sentimentScore)}</p>
          <Typography component='h1'>{props.sentimentScore}</Typography>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { magnitudeScore, sentimentScore } = state.stocks
  return { magnitudeScore, sentimentScore }
}
export default connect(mapStateToProps, null)(SentimentCard)
