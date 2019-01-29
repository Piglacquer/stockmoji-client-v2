import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'

const StockInfo = (props) => {
  return (
    <Card>
      <CardHeader className='card-header' title={props.stockInfo.company.symbol} subheader={props.stockInfo.company.industry} />
      <CardContent>
        <Typography component='p'>
          {props.stockInfo.company.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const mapStateToProps = state => {
  const { stockInfo } = state.stocks
  return { stockInfo }
}

export default connect(mapStateToProps, null)(StockInfo)
