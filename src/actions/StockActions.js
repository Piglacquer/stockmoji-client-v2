import {
  TICKER_CHANGED,
  GET_USER_STOCKS,
  GET_USER_STOCKS_SUCCESS,
  GET_NEW_STOCK_INFO,
  GET_NEW_STOCK_INFO_SUCCESS,
  GET_NEW_STOCK_INFO_FAIL,
  GET_NEW_STOCK_SENTIMENT,
  GET_NEW_STOCK_SENTIMENT_SUCCESS
} from './types'

const prepareTweetData = twitterResp => {
  let tweetBodies = twitterResp.tweets.statuses.map(story => {
    return story.text
  }).join(' ')
  return {
    content: tweetBodies,
    type: 'PLAIN_TEXT'
  }
}

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

export const getNewStockSentiment = (ticker) => {
  return dispatch => {
    dispatch({ type: GET_NEW_STOCK_SENTIMENT })
    return fetch(`https://stockpickeremoji.herokuapp.com/${ticker}`)
      .then(resp => resp.json())
      .then(tweets => prepareTweetData(tweets))
      .then(normalizedTweets => {
        return fetch('https://stockpickeremoji.herokuapp.com/', {
          method: 'POST',
          body: JSON.stringify(normalizedTweets),
          headers: new Headers({
            'content-type': 'application/json'
          })
        })
      })
      .then(resp => resp.json())
      .then(sentiment => dispatch({
        type: GET_NEW_STOCK_SENTIMENT_SUCCESS,
        payload: sentiment
      })
      )
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
