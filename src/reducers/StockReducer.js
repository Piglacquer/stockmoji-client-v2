import {
  GET_USER_STOCKS,
  GET_USER_STOCKS_SUCCESS,
  GET_USER_STOCKS_FAIL,
  TICKER_CHANGED,
  GET_NEW_STOCK_INFO,
  GET_NEW_STOCK_INFO_SUCCESS,
  GET_NEW_STOCK_INFO_FAIL,
  GET_NEW_STOCK_SENTIMENT,
  GET_NEW_STOCK_SENTIMENT_SUCCESS,
  GET_NEW_STOCK_SENTIMENT_FAIL
} from '../actions/types'

const INITIAL_STATE = {
  userStocks: null,
  ticker: '',
  stockInfo: null,
  error: '',
  sentimentScore: '',
  magnitudeScore: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_STOCKS:
      return { ...state }
    case GET_USER_STOCKS_SUCCESS:
      return { ...state, userStocks: action.payload }
    case GET_USER_STOCKS_FAIL:
      return { ...state, error: action.payload }
    case TICKER_CHANGED:
      return { ...state, ticker: action.payload }
    case GET_NEW_STOCK_INFO:
      return { ...state }
    case GET_NEW_STOCK_INFO_SUCCESS:
      return { ...state, stockInfo: action.payload }
    case GET_NEW_STOCK_INFO_FAIL:
      return { ...state, error: 'Choose a real stock!' }
    case GET_NEW_STOCK_SENTIMENT:
      return { ...state }
    case GET_NEW_STOCK_SENTIMENT_SUCCESS:
      return { ...state, sentimentScore: action.payload.score, magnitudeScore: action.payload.magnitude }
    case GET_NEW_STOCK_SENTIMENT_FAIL:
      return { ...state, ticker: '', error: 'Try again! My server was asleep!' }
    default:
      return state
  }
}
