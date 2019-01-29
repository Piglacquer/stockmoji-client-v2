import React from 'react'
import { connect } from 'react-redux'
import '../styles/css/SentimentCard.css'

const SentimentCard = (props) => {
  return (
    <div className='sentiment-card'>
      <h1>IM A CARD</h1>
    </div>
  )
}

const mapStateToProps = state => {
  const { } = state
  return { }
}
export default connect(mapStateToProps, null)(SentimentCard)
