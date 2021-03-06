import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-map-gl'
import MapScreen from './MapScreen'
import BusDot from '../assets/BusDot.png'

class HomeScreen extends Component {
  currentLatitude = 49.2811831
  currentLongitude = -123.1162378
  zoomLevel = 12

  renderBusPin = bus => (
    <Marker key={bus.VehicleNo} latitude={bus.Latitude} longitude={bus.Longitude}>
      <img src={BusDot} width='12' height='12' alt='BusDot'/>
    </Marker>
  )

  renderBusPins = (buses, renderBusPin) => buses && buses.map(bus => renderBusPin(bus))

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
