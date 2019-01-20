import React from 'react'
import { connect } from 'react-redux'
import CreateAccountForm from '../components/CreateAccountForm'
import Animation from '../components/Animation'
import '../styles/css/CreateAccountPage.css'

const CreateAccountPage = (props) => {
  return (
    <div>
      { props.loading
        ? <div className='animation-container'>
          <Animation
            width={window.innerWidth * 0.45}
            height={window.innerWidth * 0.45}
            loop
            loading
          />
        </div>
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
  const { loading } = state.auth
  return { loading }
}

export default connect(mapStateToProps, null)(CreateAccountPage)
