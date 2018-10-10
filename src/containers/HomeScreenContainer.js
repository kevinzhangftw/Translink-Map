import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import HomeScreen from '../components/HomeScreen'
import Spinner from '../components/Spinner'
import { fetchResources } from '../actions/resources'

class HomeScreenContainer extends Component {
  componentDidMount() {
    this.props.fetchBuses()
  }

  render() {
    // console.log('buses fetched are: ', this.props.buses)
    return _.isEmpty(this.props.buses) ?
      <Spinner /> :
      <HomeScreen />
  }
}

const mapStateToProps = state => ({
  buses: state.buses.resources
})

const mapDispatchToProps = dispatch => ({
  fetchBuses: () => dispatch(fetchResources('buses', 'fetchBuses'))
})

HomeScreenContainer.propTypes = {
  fetchBuses: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)
