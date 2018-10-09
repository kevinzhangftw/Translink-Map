import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HomeScreen from '../components/HomeScreen'
import { fetchResources } from '../actions/resources'

class HomeScreenContainer extends Component {
  componentDidMount () {
    this.props.fetchBuses()
  }

  render() {
    return (
      <HomeScreen />
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  fetchBuses: () => dispatch(fetchResources('buses', 'fetchBuses'))
})

HomeScreenContainer.propTypes = {
  fetchBuses: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)
