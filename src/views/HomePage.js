import React, { Component } from 'react'
import { connect } from 'react-redux'
import TickerInput from '../components/TickerInput'
import SentimentCard from '../components/SentimentCard'
import CandleStickChart from '../components/CandleStickChart'
import StockInfo from '../components/StockInfo'
import { Button } from '@material-ui/core'
import { isLoggedIn, addNewStock } from '../actions'
import '../styles/css/HomePage.css'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.isLoggedIn()
  }

  render () {
    return (
      <div id='home-page'>
        <TickerInput />
        { this.props.stockInfo && this.props.magnitudeScore
          ? <div className='response-container'>
            <CandleStickChart />
            <div className='info-chart-container'>
              <SentimentCard />
              <StockInfo />
              <Button variant='outlined' color='primary' onClick={() => this.props.addNewStock({
                user_id: this.props.user.userId,
                stock_ticker: this.props.stockInfo.company.symbol,
                sentiment: this.props.sentimentScore,
                magnitude: this.props.magnitudeScore,
                current_price: this.props.stockInfo.quote.latestPrice,
                date_time: new Date()
              })}>SAVE</Button>
            </div>
          </div>
          : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { stockInfo, magnitudeScore, sentimentScore } = state.stocks
  const { isLoggedIn, user } = state.auth
  return { stockInfo, magnitudeScore, sentimentScore, isLoggedIn, user }
}

export default connect(mapStateToProps, { isLoggedIn, addNewStock })(HomePage)
