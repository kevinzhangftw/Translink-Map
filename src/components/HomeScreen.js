import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-map-gl'
import MapScreen from './MapScreen'
import BusPin from '../assets/BusPin'

class HomeScreen extends Component {
  currentLatitude = 49.2811831
  currentLongitude = -123.1162378
  zoomLevel = 12

  renderBusPin = bus => (
    <Marker latitude={bus.Latitude} longitude={bus.Longitude}>
      <BusPin />
    </Marker>
  )

  renderBusPins = (buses, renderBusPin) => {
    return buses && buses.map(bus => renderBusPin(bus))
  }

  render() {
    return (
      <MapScreen
        currentLatitude={this.currentLatitude}
        currentLongitude={this.currentLongitude}
        zoomLevel={this.zoomLevel}
        busPins={this.renderBusPins(this.props.buses, this.renderBusPin)}
      />
    )
  }
}

HomeScreen.propTypes = {
  buses: PropTypes.arrayOf(PropTypes.object)
}

export default HomeScreen
