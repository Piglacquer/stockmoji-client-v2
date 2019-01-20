import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'
import { Button } from '@material-ui/core'
import Animation from '../components/Animation'
import LoginForm from '../components/LoginForm'
import '../styles/css/LoginPage.css'

const LoginPage = (props) => {
  return (
    <div>
      { props.loading
        ? <div className='animation-container'>
          <Animation
            width={window.innerWidth * 0.45}
            height={window.innerWidth * 0.45}
            loop={false}
            loading
          />
        </div>
        : <div className='login-page-container'>
          <div className='hero' />
          <div className='login-container'>
            <LoginForm className='login-form' />
            <hr />
            <div className='create-account-prompt'>
              <p>Don't have an account?</p>
              <Button variant='contained' color='primary'><Link to='/create' className='link'>Create Account</Link></Button>
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
