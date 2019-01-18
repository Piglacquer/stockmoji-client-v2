import React from 'react'
import { Button, Card, TextField } from '@material-ui/core'
import '../styles/css/LoginForm.css'
import '../styles/css/Buttons.css'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, loginUser } from '../actions'

const LoginForm = (props) => {
  return (
    <Card className='login-form-container'>
      <form className='loginForm'>
        <TextField
          required
          id='outlined-required'
          label='Email'
          margin='normal'
          variant='outlined'
          onChange={(e) => props.usernameChanged(e.target.value)}
          value={props.username}
        />
        <TextField
          required
          id='outlined-required'
          label='Password'
          margin='normal'
          variant='outlined'
          onChange={(e) => props.passwordChanged(e.target.value)}
          value={props.password}
        />
      </form>
      <Button variant='contained' color='primary' onClick={() => {
        props.loginUser({ username: props.username, password: props.password })
      }}>Login</Button>
      { props.error ? <p className='login-error'>{`${props.error}`}</p> : null }
    </Card>
  )
}

const mapStateToProps = state => {
  const { username, password, error } = state.auth
  return { username, password, error }
}

export default connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser })(LoginForm)
