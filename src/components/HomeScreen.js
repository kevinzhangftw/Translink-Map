import React, { Component } from 'react'
import MapScreen from './MapScreen'

class HomeScreen extends Component {
  render() {
    return (
      <MapScreen latitude={49.2811831} longitude={-123.1162378} zoomLevel={12} />
    )
  }
}

export default HomeScreen
