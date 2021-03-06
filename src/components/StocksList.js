import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserStocks, isLoggedIn } from '../actions'
import UserStockCard from '../components/UserStockCard'

class StocksList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  createStockCards (stocks) {
    return stocks.map(stock => {
      return (
        <UserStockCard stock={stock} key={`stock ${stock.stock_ticker + stock.id}`} />
      )
    })
  }

  componentDidMount () {
    this.props.isLoggedIn()
      .then(() => this.props.getUserStocks(this.props.userId))
  }

  render () {
    return (
      this.props.userStocks.length > 0 ? this.createStockCards(this.props.userStocks) : null
    )
  }
}

const mapStateToProps = state => {
  const { userStocks } = state.stocks
  const { user, userId } = state.auth
  return { userStocks, user, userId }
}

export default connect(mapStateToProps, { getUserStocks, isLoggedIn })(StocksList)
