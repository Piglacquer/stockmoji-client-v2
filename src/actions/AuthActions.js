import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types'
import { navigate } from '@reach/router'

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const usernameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
}

export const loginUser = ({ username, password }) => {
  console.log('hello')
  return dispatch => {
    dispatch({ type: LOGIN_USER })
    return fetch('http://localhost:3000/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        credentials: 'include',
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
      .then(resp => resp.json())
      .then(user => {
        console.log(user)
        loginUserSuccess(dispatch, user)
      })
      .catch(error => loginUserFail(dispatch, error))
  }
}

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  // console.log(user.userId)
  navigate(`/home/${user.userId}`)
}

export const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  })
}
