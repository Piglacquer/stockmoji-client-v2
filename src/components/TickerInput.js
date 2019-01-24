import React from 'react'
import { connect } from 'react-redux'
import { handleTickerChange, getNewStock } from '../actions'
import { TextField, Card, Button } from '@material-ui/core'

const TickerInput = (props) => {
  return (
    <Card>
      <TextField
        required
        label='Ticker'
        type='text'
        margin='normal'
        variant='outlined'
        onChange={(e) => props.handleTickerChange(e.target.value)}
        value={props.ticker}
      />
      <Button variant='outlined' color='primary' onClick={() => props.getNewStock(props.ticker)}>GO</Button>
    </Card>
  )
}

const mapStateToProps = state => {
  const { ticker } = state.stocks
  return { ticker }
}

export default connect(mapStateToProps, { handleTickerChange, getNewStock })(TickerInput)
