import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import StockmojiRouter from './Router.js'
import './App.css'

class App extends Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <StockmojiRouter />
      </Provider>
    )
  }
}

export default App
