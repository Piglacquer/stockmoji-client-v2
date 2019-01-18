import React from 'react'
import { connect } from 'react-redux'
import { emailChanged, usernameChanged, passwordChanged } from '../actions'
import { Link } from '@reach/router'
import '../styles/css/CreateAccountPage.css'

const CreateAccountPage = (props) => {
  return (
    <div id='create-account-page'>
      <form>
        <label>Username</label>
        <input type='text' onChange={(e) => props.usernameChanged(e.target.value)} value={props.username} />
        <label>Email</label>
        <input type='email' onChange={(e) => props.emailChanged(e.target.value)} value={props.email} />
        <label>Password</label>
        <input type='password' onChange={(e) => props.passwordChanged(e.target.value)} value={props.password} />
      </form>
      <Link to='/create'>Create Account</Link>
      <Link to='/login'>Login Page</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

const mapStateToProps = state => {
  const { email, username, password } = state.auth

  return { email, username, password }
}

export default connect(mapStateToProps, { emailChanged, usernameChanged, passwordChanged })(CreateAccountPage)
