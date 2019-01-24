import {
  TICKER_CHANGED,
  GET_USER_STOCKS,
  GET_USER_STOCKS_SUCCESS,
  GET_NEW_STOCK,
  GET_NEW_STOCK_SUCCESS
} from './types'

export const getUserStocks = (userId) => {
  return dispatch => {
    dispatch({ type: GET_USER_STOCKS })
    return fetch(`http://localhost:3000/stocks/${userId}`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(stocks => dispatch({
        type: GET_USER_STOCKS_SUCCESS,
        payload: stocks
      }))
  }
}

export const getNewStock = (ticker) => {
  return dispatch => {
    dispatch({ type: GET_NEW_STOCK })
    return fetch(`https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote,company,chart&range=6m&last=1`)
      .then(resp => resp.json())
      .then(stockInfo => dispatch({
        type: GET_NEW_STOCK_SUCCESS,
        payload: stockInfo
      }))
  }
}

export const handleTickerChange = (ticker) => {
  const normalizedTicker = ticker.toUpperCase()
  return ({
    type: TICKER_CHANGED,
    payload: normalizedTicker
  })
}
