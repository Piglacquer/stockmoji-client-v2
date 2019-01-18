import React from 'react'
import { connect } from 'react-redux'
import { emailChanged, usernameChanged, passwordChanged } from '../actions'
import CreateAccountForm from '../components/CreateAccountForm'
import Animation from '../components/Animation'
import '../styles/css/CreateAccountPage.css'

const CreateAccountPage = (props) => {
  return (
    <div>
      { props.loading
        ? <Animation
          width={window.innerWidth * 0.45}
          height={window.innerWidth * 0.45}
          loop={false}
          loading
        />
        : <div className='create-account-page-container'>
          <div className='create-account-container'>
            <CreateAccountForm />
          </div>
          <div className='hero' />
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => {
  const { email, username, password } = state.auth
  return { email, username, password }
}

export default connect(mapStateToProps, { emailChanged, usernameChanged, passwordChanged })(CreateAccountPage)
