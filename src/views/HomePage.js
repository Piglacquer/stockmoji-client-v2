import React from 'react'
import { connect } from 'react-redux'
import TickerInput from '../components/TickerInput'
import StocksList from '../components/StocksList'
import CandleStickChart from '../components/CandleStickChart'
import StockInfo from '../components/StockInfo'
import '../styles/css/HomePage.css'

const HomePage = (props) => {
  return (
    <div id='home-page'>
      <TickerInput />
      {/* <StocksList /> */}
      { props.stockInfo ? <StockInfo /> : null }
      { props.stockInfo ? <CandleStickChart /> : null}
    </div>
  )
}

const mapStateToProps = state => {
  const { stockInfo } = state.stocks
  return { stockInfo }
}

export default connect(mapStateToProps, null)(HomePage)
