import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
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
  return dispatch => {
    dispatch({ type: LOGIN_USER })
    return fetch('http://localhost:3000/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        credentials: 'include',
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
      .then(resp => {
        return resp.ok ? resp.json() : Promise.reject(new Error('username or password incorrect'))
      })
      .then(user => {
        return setTimeout(() => loginUserSuccess(dispatch, user), 2000)
      })
      .catch(error => setTimeout(() => loginUserFail(dispatch, error), 2000))
  }
}

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  navigate(`/home/${user.userId}`)
}

export const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  })
}

export const registerUser = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER,
    payload: user
  })
}

export const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  })
}

export const registerUserFail = (dispatch, error) => {
  dispatch({
    type: REGISTER_USER_FAIL,
    payload: error
  })
}
