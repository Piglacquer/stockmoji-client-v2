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
      { props.stockInfo
        ? <div className='response-container'>
          <SentimentCard />
          <div className='info-chart-container'>
            <CandleStickChart />
            <StockInfo />
          </div>
        </div>
        : null }
    </div>
  )
}

const mapStateToProps = state => {
  const { stockInfo } = state.stocks
  return { stockInfo }
}

export default connect(mapStateToProps, null)(HomePage)
