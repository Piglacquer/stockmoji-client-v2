import React from 'react'
import { Link } from '@reach/router'
import { Button, AppBar, Toolbar } from '@material-ui/core'
import '../styles/css/NavBar.css'

const NavBar = () => {
  return (
    <>
      <AppBar color='primary' position='fixed' id='nav'>
        <Link className='link' to='/'>
          <Button variant='outline' color='primary' id='nav-button'>
            <span role='img' aria-label='money face emoji' className='nav-emoji'>🤑</span>
          </Button>
        </Link>
        <Toolbar>
          <Link className='link' to='/login'>
            <Button variant='outline' color='primary' id='nav-button'>Login</Button>
          </Link>
          <Link className='link' to='/create'>
            <Button variant='outline' color='primary' id='nav-button'>Create Account</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
