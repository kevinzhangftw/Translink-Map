import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import HomeScreen from '../components/HomeScreen'
import Spinner from '../components/Spinner'
import { fetchResources } from '../actions/resources'
import { getBusesArray } from '../selectors/buses'

class HomeScreenContainer extends Component {
  componentDidMount() {
    const fetchInterval = 5 * 1000
    this.timer = setInterval(this.props.fetchBuses, fetchInterval)
    // this.timer = setInterval(() => this.testPolling(this.props.fetchBuses), fetchInterval)
  }

  // testPolling(fetchBuses) {
  //   console.log('fetching buses again')
  //   fetchBuses()
  // }

  componentWillMount() {
    clearInterval(this.timer)
    this.timer = null
  }

  render() {
    const { buses } = this.props
    return _.isEmpty(buses) ?
      <Spinner /> :
      <HomeScreen buses={buses} />
  }
}

const mapStateToProps = state => ({
  buses: getBusesArray(state)
})

const mapDispatchToProps = dispatch => ({
  fetchBuses: () => dispatch(fetchResources('buses', 'fetchBuses'))
})

HomeScreenContainer.propTypes = {
  fetchBuses: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)
