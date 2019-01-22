import React from 'react'
import { connect } from 'react-redux'
import { handleTickerChange } from '../actions'
import { TextField } from '@material-ui/core'

const TickerInput = (props) => {
  return (
    <TextField
      required
      label='Ticker'
      type='text'
      margin='normal'
      variant='outlined'
      onChange={(e) => props.handleTickerChange(e.target.value)}
      value={props.ticker}
    />
  )
}

const mapStateToProps = state => {
  const { ticker } = state.stocks
  return { ticker }
}

export default connect(mapStateToProps, { handleTickerChange })(TickerInput)
