import React from 'react'
import { connect } from 'react-redux'
import { emailChanged, usernameChanged, passwordChanged } from '../actions'
import { Link } from '@reach/router'

const CreateAccountPage = ({ email, username, password }) => {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type='text' onChange={(e) => usernameChanged(e.target.value)} value={username} />
        <label>Email</label>
        <input type='text' onChange={(e) => emailChanged(e.target.value)} value={email} />
        <label>Password</label>
        <input type='text' onChange={(e) => passwordChanged(e.target.value)} value={password} />
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
