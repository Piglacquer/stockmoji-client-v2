import React from 'react'
import { Button, Card, TextField, Typography } from '@material-ui/core'
import '../styles/css/CreateAccountForm.css'
import '../styles/css/Buttons.css'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, emailChanged, registerUser } from '../actions'

const CreateAccountForm = (props) => {
  return (
    <Card className='register-form-container'>
      <form className='registerForm'>
        <TextField
          required
          label='Email'
          type='email'
          margin='normal'
          variant='outlined'
          onChange={(e) => props.emailChanged(e.target.value)}
          value={props.email}
        />
        <TextField
          required
          label='Username'
          margin='normal'
          variant='outlined'
          onChange={(e) => props.usernameChanged(e.target.value)}
          value={props.username}
        />
        <TextField
          required
          label='Password'
          type='password'
          margin='normal'
          variant='outlined'
          onChange={(e) => props.passwordChanged(e.target.value)}
          value={props.password}
        />
      </form>
      { props.registerError ? <Typography className='login-error'>{`${props.registerError}`}</Typography> : null }
      <Button className='affirmative-button' variant='contained' color='primary' onClick={() => {
        props.registerUser({ email: props.email, username: props.username, password: props.password })
      }}>Register</Button>
    </Card>
  )
}

const mapStateToProps = state => {
  const { email, username, password, registerError } = state.auth
  return { email, username, password, registerError }
}

export default connect(mapStateToProps, { emailChanged, usernameChanged, passwordChanged, registerUser })(CreateAccountForm)
