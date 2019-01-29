import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import '../styles/css/StockInfo.css'

const StockInfo = (props) => {
  return (
    <div className='stock-info-card'>
      <div className='stock-info-header'>
        <Typography className='stock-info-title' component='h1'>{props.stockInfo.company.symbol}</Typography>
        <div className='tags'>
          {props.stockInfo.company.tags.map((tag, i) => <Typography component='p' key={`${tag} + ${i}`} className='tag'>{tag}</Typography>)}
        </div>
      </div>
      <div className='stock-info-body'>
        <div className='wk52'>
          <Typography>52WKHIGH: {props.stockInfo.quote.week52High}</Typography>
          <Typography>52WKLOW: {props.stockInfo.quote.week52Low}</Typography>
        </div>
        <Typography className='description'>{props.stockInfo.company.description}</Typography>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { stockInfo } = state.stocks
  return { stockInfo }
}

export default connect(mapStateToProps, null)(StockInfo)
