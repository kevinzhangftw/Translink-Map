import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HomeScreen from '../components/HomeScreen'
import fetchResources from '../actions/resources'

class HomeScreenContainer extends Component {
  componentDidMount () {
    this.props.fetchBuses()
  }

  render() {
    console.log('props:', this.props)
    return (
      <HomeScreen />
    )
  }
}

const apiEndpoint = `http://api.translink.ca/rttiapi/v1/buses?apikey=${process.env.REACT_APP_TRANSLINK}`

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  fetchBuses: () => dispatch(fetchResources('buses', 'fetchBuses', apiEndpoint))
})

HomeScreenContainer.propTypes = {
  fetchBuses: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)
