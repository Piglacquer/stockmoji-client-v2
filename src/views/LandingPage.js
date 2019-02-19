import React, { Component } from 'react'
import Animation from '../components/Animation'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { isLoggedIn } from '../actions'
import '../styles/css/LandingPage.css'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.props.isLoggedIn()
  }

  render () {
    return (
      <div className='landing-page'>
        <Animation
          width={window.innerWidth * 0.9}
          height={window.innerWidth * 0.3}
          loop={false} />
        <Typography component='h2' variant='h1' gutterBottom className='tagline'>...a stock sentiment analyzer <span role='img' aria-label='shrugging emoji'>🤷‍♂️</span></Typography>
      </div>
    )
  }
}

export default connect(null, { isLoggedIn })(LandingPage)
