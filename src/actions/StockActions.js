import {
  TICKER_CHANGED,
  GET_USER_STOCKS,
  GET_USER_STOCKS_SUCCESS
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

export const handleTickerChange = (ticker) => {
  return ({
    type: TICKER_CHANGED,
    payload: ticker
  })
}
