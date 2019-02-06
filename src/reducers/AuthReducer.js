import {
  EMAIL_CHANGED,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT_USER,
  IS_LOGGED_IN
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  username: '',
  password: '',
  user: null,
  loginError: '',
  registerError: '',
  loading: false,
  loggedIn: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case USERNAME_CHANGED:
      return { ...state, username: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOGIN_USER:
      return { ...state, error: '', loading: true }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        loading: false,
        loggedIn: true
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loginError: action.payload,
        password: '',
        loading: false
      }
    case REGISTER_USER:
      return { ...state, error: '', loading: true }
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, email: '', password: '' }
    case REGISTER_USER_FAIL:
      return { ...state, loading: false, registerError: action.payload, password: '' }
    case LOGOUT_USER:
      return { ...state, user: null, loggedIn: false }
    case IS_LOGGED_IN:
      return { ...state, loggedIn: true }
    default:
      return state
  }
}
