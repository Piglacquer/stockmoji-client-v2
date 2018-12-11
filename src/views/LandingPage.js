import React from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions'
// import { link } from '@reach/router'

const LandingPage = (props) => {
  console.log(props)
  return (
    <div>
      <form>
        <label>Username</label>
        <input type='text' onChange={(e) => props.emailChanged(e.target.value)} value={props.email} />
        <label>Password</label>
        <input type='text' />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  const { email, password } = state.auth

  return { email, password }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LandingPage)
