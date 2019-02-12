import React from 'react'
import { connect } from 'react-redux'
import StocksList from '../components/StocksList'

const UserStocksPage = () => {
  return (
    <>
      <StocksList />
    </>
  )
}

export default connect(null, null)(UserStocksPage)
