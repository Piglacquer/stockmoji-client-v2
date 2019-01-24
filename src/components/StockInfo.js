import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader } from '@material-ui/core'

const StockInfo = (props) => {
  return (
    <Card>
      <CardHeader className='card-header' title={props.stockInfo.company.symbol}
        subheader='September 14, 2016' />
    </Card>
  )
}

const mapStateToProps = state => {
  const { stockInfo } = state.stocks
  return { stockInfo }
}

export default connect(mapStateToProps, null)(StockInfo)
