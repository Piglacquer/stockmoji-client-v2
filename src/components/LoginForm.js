import React from 'react'
import { Button, Card, TextField, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, loginUser } from '../actions'
import '../styles/css/LoginForm.css'
import '../styles/css/Buttons.css'

const LoginForm = (props) => {
  return (
    <Card className='login-form-container'>
      <form className='loginForm'>
        <TextField
          required
          label='Username'
          margin='normal'
          variant='outlined'
          autoComplete='username'
          onChange={(e) => props.usernameChanged(e.target.value)}
          value={props.username}
        />
        <TextField
          required
          label='Password'
          type='password'
          margin='normal'
          variant='outlined'
          autoComplete='current-password'
          onChange={(e) => props.passwordChanged(e.target.value)}
          value={props.password}
        />
      </form>
      { props.error ? <Typography className='login-error'>{`${props.error}`}</Typography> : null }
      <Button className='affirmative-button' variant='contained' color='primary' onClick={() => {
        props.loginUser({ username: props.username, password: props.password })
      }}>Login</Button>
    </Card>
  )
}

const mapStateToProps = state => {
  const { username, password, error } = state.auth
  return { username, password, error }
}

export default connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser })(LoginForm)
