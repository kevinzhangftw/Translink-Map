import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import PropTypes from 'prop-types'


class MapScreen extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: this.props.currentLatitude,
      longitude: this.props.currentLongitude,
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
      >
        {this.props.busPins}
      </ReactMapGL>
    )
  }
}

MapScreen.propTypes = {
  currentLatitude: PropTypes.number,
  currentLongitude: PropTypes.number,
  zoomLevel: PropTypes.number
}

export default MapScreen
