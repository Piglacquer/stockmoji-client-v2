import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions'
import { Link } from '@reach/router'
import { Button, AppBar, Toolbar } from '@material-ui/core'
import '../styles/css/NavBar.css'

const NavBar = (props) => {
  return props.userId ? <LoggedInNav props={props} /> : <LoggedOutNav />
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
          <Link className='link' to='/about'>
            <Button variant='outlined' color='primary' id='nav-button'>About</Button>
          </Link>
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

const LoggedInNav = ({ props }) => {
  console.log(props)
  return (
    <>
      <AppBar color='primary' position='fixed' id='nav'>
        <Link className='link' to={`/home/${props.userId}`}>
          <Button variant='outlined' color='primary' id='nav-button'>
            <span role='img' aria-label='money face emoji' className='nav-emoji'>🤑</span>
          </Button>
        </Link>
        <Toolbar>
          <Link className='link' to='/about'>
            <Button variant='outlined' color='primary' id='nav-button'>About</Button>
          </Link>
          <Link className='link' to={`/user-stocks/${props.userId}`}>
            <Button variant='outlined' color='primary' id='nav-button'>Stocks</Button>
          </Link>
          <Link className='link' to={`/home/${props.userId}`}>
            <Button variant='outlined' color='primary' id='nav-button'>Analyze</Button>
          </Link>
          <Button variant='outlined' color='primary' id='nav-button' onClick={props.logoutUser}>Logout</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

const mapStateToProps = state => {
  const { userId } = state.auth
  return { userId }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
