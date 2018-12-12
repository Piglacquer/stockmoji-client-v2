import React from 'react'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged } from '../actions'
import { Link } from '@reach/router'

const LoginPage = ({ username, password }) => {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type='text' onChange={(e) => usernameChanged(e.target.value)} value={username} />
        <label>Password</label>
        <input type='text' onChange={(e) => passwordChanged(e.target.value)} value={password} />
      </form>
      <Link to='/login'>Login</Link>
      <Link to='/create'>Create Account</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

const mapStateToProps = state => {
  const { email, password } = state.auth

  return { email, password }
}

export default connect(mapStateToProps, { usernameChanged, passwordChanged })(LoginPage)
