import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserStocks } from '../actions'

class StocksList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.getUserStocks(this.props.user.userId)
  }

  render () {
    return (
      <h1>StocksList</h1>
    )
  }
}

const mapStateToProps = state => {
  const { userStocks } = state.stocks
  const { user } = state.auth
  return { userStocks, user }
}

export default connect(mapStateToProps, { getUserStocks })(StocksList)
