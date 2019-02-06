import React, { Component } from 'react'
import { connect } from 'react-redux'
import TickerInput from '../components/TickerInput'
import SentimentCard from '../components/SentimentCard'
import CandleStickChart from '../components/CandleStickChart'
import StockInfo from '../components/StockInfo'
import { isLoggedIn } from '../actions'
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
            </div>
          </div>
          : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { stockInfo, magnitudeScore } = state.stocks
  const { isLoggedIn } = state.auth
  return { stockInfo, magnitudeScore, isLoggedIn }
}

export default connect(mapStateToProps, { isLoggedIn })(HomePage)
