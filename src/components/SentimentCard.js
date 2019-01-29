import React from 'react'
import { connect } from 'react-redux'
import { renderMagnitudeSwitch, renderSentimentSwitch } from '../helpers/emojis'
import '../styles/css/SentimentCard.css'

const SentimentCard = (props) => {
  return (
    <div className='sentiment-card'>
      <h1>IM A CARD</h1>
      <p>{renderMagnitudeSwitch(props.magnitudeScore)}</p>
      <p>{renderSentimentSwitch(props.sentimentScore)}</p>
    </div>
  )
}

const mapStateToProps = state => {
  const { magnitudeScore, sentimentScore } = state.stocks
  return { magnitudeScore, sentimentScore }
}
export default connect(mapStateToProps, null)(SentimentCard)
