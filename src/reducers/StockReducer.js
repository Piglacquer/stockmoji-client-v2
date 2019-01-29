import {
  GET_USER_STOCKS,
  GET_USER_STOCKS_SUCCESS,
  GET_USER_STOCKS_FAIL,
  TICKER_CHANGED,
  GET_NEW_STOCK_INFO,
  GET_NEW_STOCK_INFO_SUCCESS,
  GET_NEW_STOCK_SENTIMENT,
  GET_NEW_STOCK_SENTIMENT_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  userStocks: null,
  ticker: '',
  stockInfo: null,
  loading: false,
  error: '',
  sentimentScore: '',
  magnitudeScore: ''
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
    case GET_NEW_STOCK_INFO:
      return { ...state, loading: true }
    case GET_NEW_STOCK_INFO_SUCCESS:
      return { ...state, loading: false, stockInfo: action.payload }
    case GET_NEW_STOCK_SENTIMENT:
      return { ...state, loading: true }
    case GET_NEW_STOCK_SENTIMENT_SUCCESS:
      return { ...state, loading: false, sentimentScore: action.payload.score, magnitudeScore: action.payload.magnitude }
    default:
      return state
  }
}
