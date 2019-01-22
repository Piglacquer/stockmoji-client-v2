import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'
import { Button, AppBar, Toolbar } from '@material-ui/core'
import '../styles/css/NavBar.css'

const NavBar = (props) => {
  return props.loggedIn ? <LoggedInNav props={props} /> : <LoggedOutNav />
}

const LoggedOutNav = () => {
  return (
    <>
      <AppBar color='primary' position='fixed' id='nav'>
        <Link className='link' to='/'>
          <Button variant='outlined' color='primary' id='nav-button'>
            <span role='img' aria-label='money face emoji' className='nav-emoji'>🤑</span>
          </Button>
        </Link>
        <Toolbar>
          <Link className='link' to='/login'>
            <Button variant='outlined' color='primary' id='nav-button'>Login</Button>
          </Link>
          <Link className='link' to='/create'>
            <Button variant='outlined' color='primary' id='nav-button'>Create Account</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

const LoggedInNav = (props) => {
  return (
    <>
      <AppBar color='primary' position='fixed' id='nav'>
        <Link className='link' to={`/home/${props.props.user.userId}`}>
          <Button variant='outlined' color='primary' id='nav-button'>
            <span role='img' aria-label='money face emoji' className='nav-emoji'>🤑</span>
          </Button>
        </Link>
        <Toolbar>
          <Link className='link' to='/login'>
            <Button variant='outlined' color='primary' id='nav-button'>Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

const mapStateToProps = state => {
  const { loggedIn, user } = state.auth
  return { loggedIn, user }
}

export default connect(mapStateToProps, null)(NavBar)
