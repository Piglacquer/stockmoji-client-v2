import {
  GET_USER_STOCKS,
  GET_USER_STOCKS_SUCCESS,
  GET_USER_STOCKS_FAIL,
  TICKER_CHANGED,
  GET_NEW_STOCK,
  GET_NEW_STOCK_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  userStocks: null,
  ticker: '',
  stockInfo: null,
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_STOCKS:
      return { ...state, loading: true }
    case GET_USER_STOCKS_SUCCESS:
      return { ...state, loading: false, userStocks: action.payload }
    case GET_USER_STOCKS_FAIL:
      return { ...state, loading: false, error: action.payload }
    case TICKER_CHANGED:
      return { ...state, ticker: action.payload }
    case GET_NEW_STOCK:
      return { ...state, loading: true }
    case GET_NEW_STOCK_SUCCESS:
      return { ...state, loading: false, stockInfo: action.payload }
    default:
      return state
  }
}
