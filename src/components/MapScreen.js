import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
// import mapboxGl from '../css/mapbox-gl.css'

class MapScreen extends Component {

  state = {
    viewport: {
      width: 800,
      height: 800,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
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
