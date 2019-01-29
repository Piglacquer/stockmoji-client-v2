import React from 'react'
import { connect } from 'react-redux'
import TickerInput from '../components/TickerInput'
import SentimentCard from '../components/SentimentCard'
import CandleStickChart from '../components/CandleStickChart'
import StockInfo from '../components/StockInfo'
import '../styles/css/HomePage.css'

const HomePage = (props) => {
  return (
    <div id='home-page'>
      <TickerInput />
      { props.stockInfo && props.magnitudeScore
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

const mapStateToProps = state => {
  const { stockInfo, magnitudeScore } = state.stocks
  return { stockInfo, magnitudeScore }
}

export default connect(mapStateToProps, null)(HomePage)
