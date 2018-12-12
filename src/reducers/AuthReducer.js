import {
  EMAIL_CHANGED,
  USERNAME_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  username: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case USERNAME_CHANGED:
      return { ...state, username: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    default:
      return state
  }
}
