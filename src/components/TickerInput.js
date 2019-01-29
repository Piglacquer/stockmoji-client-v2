import React from 'react'
import { connect } from 'react-redux'
import { handleTickerChange, getNewStockInfo, getNewStockSentiment } from '../actions'
import { TextField, Card, Button } from '@material-ui/core'
import '../styles/css/TickerInput.css'

const TickerInput = (props) => {
  return (
    <Card className='ticker-input'>
      <TextField
        required
        label='Ticker'
        type='text'
        margin='normal'
        variant='outlined'
        onChange={(e) => props.handleTickerChange(e.target.value)}
        value={props.ticker}
      />
      <Button
        variant='outlined'
        color='primary'
        onClick={() => {
          props.getNewStockSentiment(props.ticker)
          props.getNewStockInfo(props.ticker)
        }}>
          GO
      </Button>
    </Card>
  )
}

const mapStateToProps = state => {
  const { ticker } = state.stocks
  return { ticker }
}

export default connect(mapStateToProps, { handleTickerChange, getNewStockInfo, getNewStockSentiment })(TickerInput)
