import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import StockReducer from './StockReducer'

export default combineReducers({
  auth: AuthReducer,
  stocks: StockReducer
})
