import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MapScreen from './MapScreen'

class HomeScreen extends Component {
  render() {
    console.log('buses fetched are: ', this.props.buses)
    return (
      <MapScreen latitude={49.2811831} longitude={-123.1162378} zoomLevel={12} />
    )
  }
}

HomeScreen.propTypes = {
  buses: PropTypes.arrayOf(PropTypes.object)
}

export default HomeScreen
