import React from 'react'
import { connect } from 'react-redux'
import StocksList from '../components/StocksList'

const UserStocksPage = () => {
  return (
    <>
      <h1>user stocks page</h1>
      <StocksList />
    </>
  )
}

export default connect(null, null)(UserStocksPage)
