import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import StockmojiRouter from './Router.js'
import NavBar from './components/NavBar'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import './styles/css/App.css'

class App extends Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <StockmojiRouter />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
