import React from 'react'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged } from '../actions'
import { Link } from '@reach/router'

const LoginPage = (props) => {
  return (
    <div>
      <form>
        <label>Username</label>
        <input required type='text' onChange={(e) => props.usernameChanged(e.target.value)} value={props.username} />
        <label>Password</label>
        <input required minlength='6'type='password' onChange={(e) => props.passwordChanged(e.target.value)} value={props.password} />
      </form>
      <Link to='/login'>Login</Link>
      <Link to='/create'>Create Account</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

const mapStateToProps = state => {
  const { username, password } = state.auth

  return { username, password }
}

export default connect(mapStateToProps, { usernameChanged, passwordChanged })(LoginPage)
