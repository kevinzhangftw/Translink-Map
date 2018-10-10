import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import PropTypes from 'prop-types'
// import mapboxGl from '../css/mapbox-gl.css'

class MapScreen extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: this.props.zoomLevel
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    this.resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
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

MapScreen.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoomLevel: PropTypes.number
}

export default MapScreen
