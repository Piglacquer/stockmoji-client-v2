import React from 'react'
import '../styles/css/LoginForm.css'
import '../styles/css/Buttons.css'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, loginUser } from '../actions'

const LoginForm = (props) => {
  return (
    <div className='login-form-container'>
      <form>
        <div className='form-field'>
          <label htmlFor='username'>Username</label>
          <input required name='username' type='text' onChange={(e) => props.usernameChanged(e.target.value)} value={props.username} />
        </div>
        <div className='form-field'>
          <label htmlFor='password'>Password</label>
          <input required name='password' minLength='6'type='password' onChange={(e) => props.passwordChanged(e.target.value)} value={props.password} />
        </div>
      </form>
      <button className='confirm-button' onClick={() => {
        props.loginUser({ username: props.username, password: props.password })
      }}>Login</button>
      <p>{`${props.error}`}</p>
    </div>
  )
}

const mapStateToProps = state => {
  const { username, password, error } = state.auth
  return { username, password, error }
}

export default connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser })(LoginForm)
