import React from 'react'
import { Button, Card, TextField } from '@material-ui/core'
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
          id='outlined-required'
          label='Email'
          margin='normal'
          variant='outlined'
          onChange={(e) => props.emailChanged(e.target.value)}
          value={props.username}
        />
        <TextField
          required
          id='outlined-required'
          label='Username'
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
        props.registerUser({ email: props.email, username: props.username, password: props.password })
      }}>Login</Button>
      { props.error ? <p className='login-error'>{`${props.error}`}</p> : null }
    </Card>
  )
}

const mapStateToProps = state => {
  const { email, username, password } = state.auth
  return { email, username, password }
}

export default connect(mapStateToProps, { emailChanged, usernameChanged, passwordChanged, registerUser })(CreateAccountForm)
