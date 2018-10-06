import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
// import mapboxGl from '../css/mapbox-gl.css'

class MapScreen extends Component {

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 49.2811831,
      longitude: -123.1162378,
      zoom: 12
    }
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPTOKEN}
      />
    )
  }
}

export default MapScreen
