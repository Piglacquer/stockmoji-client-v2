import {
  TICKER_CHANGED,
  GET_USER_STOCKS,
  GET_USER_STOCKS_SUCCESS,
  GET_NEW_STOCK_INFO,
  GET_NEW_STOCK_INFO_SUCCESS,
  GET_NEW_STOCK_INFO_FAIL,
  GET_NEW_STOCK_SENTIMENT,
  GET_NEW_STOCK_SENTIMENT_SUCCESS,
  ADD_USER_STOCK_SUCCESS,
  RESET_STOCK_INFO
} from './types'

/// HELPERS
const prepareTweetData = twitterResp => {
  let tweetBodies = twitterResp.tweets.statuses.map(story => {
    return story.text
  }).join(' ')
  return {
    content: tweetBodies,
    type: 'PLAIN_TEXT'
  }
}

const getSentiment = (data) => {
  return fetch('https://stockpickeremoji.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
}

const errorFactory = (message, data) => {
  const err = new Error(message)
  return Object.assign(err, data)
}

const isError = (response) => {
  return response.status === 200 ? response.json() : Promise.reject(errorFactory('Wake up sleepyhead', { status: response.status }))
}

const promiseTimeout = (msec) => {
  return promise => {
    const timeout = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Timeout expired')), msec))
    return Promise.race([promise, timeout])
  }
}

/// ACTIONS
export const getUserStocks = (userId) => {
  return dispatch => {
    dispatch({ type: GET_USER_STOCKS })
    return fetch(`https://stockmoji-server-db.herokuapp.com/stocks/${userId}`, {
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

export const getNewStockSentiment = (ticker) => {
  return dispatch => {
    dispatch({ type: GET_NEW_STOCK_SENTIMENT })
    return promiseTimeout(6500)(fetch(`https://stockpickeremoji.herokuapp.com/${ticker}`))
      .then(isError)
      .then(prepareTweetData)
      .then(getSentiment)
      .then(isError)
      .then(sentiment => dispatch({
        type: GET_NEW_STOCK_SENTIMENT_SUCCESS,
        payload: sentiment
      })
      )
      .catch(err => {
        console.error(err)
        return getNewStockSentiment(ticker)(dispatch)
      })
  }
}

export const getNewStockInfo = (ticker) => {
  return dispatch => {
    dispatch({ type: GET_NEW_STOCK_INFO })
    fetch(`https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote,company,chart&range=6m&last=1`)
      .then(resp => resp.json())
      .then(stockInfo => dispatch({
        type: GET_NEW_STOCK_INFO_SUCCESS,
        payload: stockInfo
      }))
      .catch(error => dispatch({
        type: GET_NEW_STOCK_INFO_FAIL,
        payload: error
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

export const addNewStock = (stock) => {
  return dispatch => {
    fetch('https://stockmoji-server-db.herokuapp.com/stocks', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify(stock)
    })
      .then(resp => resp.json())
      .then(stock => dispatch({
        type: ADD_USER_STOCK_SUCCESS,
        payload: stock
      })
      )
  }
}

export const resetStockInfo = () => {
  return ({
    type: RESET_STOCK_INFO
  })
}
