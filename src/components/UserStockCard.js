import React from 'react'
import { Typography } from '@material-ui/core'
import { renderMagnitudeSwitch, renderSentimentSwitch } from '../helpers/emojis'
import '../styles/css/UserStockCard.css'

const UserStockCard = (props) => {
  return (
    <div className='user-stock-card'>
      <Typography component='h1' className='date'>{new Date(props.stock.date_time).toDateString()}</Typography>
      <Typography component='h1' className='ticker-symbol'>{props.stock.stock_ticker}</Typography>
      <div className='sentiment-wrapper'>
        <Typography component='h3' className='current-price'>{props.stock.current_price}</Typography>
        <div className='score-wrapper'>
          <Typography component='h1'> MAGNITUDE: </Typography>
          <p className='emoji'>{renderMagnitudeSwitch(props.stock.magnitude)}</p>
          <Typography component='h1'>{props.stock.magnitude}</Typography>
        </div>
        <div className='score-wrapper'>
          <Typography component='h1'> SENTIMENT: </Typography>
          <p className='emoji'>{renderSentimentSwitch(props.stock.sentiment)}</p>
          <Typography component='h1'>{props.stock.sentiment}</Typography>
        </div>
      </div>
    </div>
  )
}

export default UserStockCard
