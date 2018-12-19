import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'
import Animation from '../components/Animation'
import LoginForm from '../components/LoginForm'
import '../styles/css/LoginPage.css'

const LoginPage = (props) => {
  return (
    <div>
      { props.loading
        ? <Animation
          width={window.innerWidth * 0.45}
          height={window.innerWidth * 0.45}
          loop={false}
          loading
        />
        : <div className='login-page-container'>
          <div className='hero' />
          <div className='login-container'>
            <LoginForm className='login-form' />
            <hr />
            <div className='create-account-prompt'>
              <p>Don't have an account?</p>
              <Link to='/create'>Create Account</Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => {
  const { loading, error } = state.auth
  return { loading, error }
}

export default connect(mapStateToProps, {})(LoginPage)
