import React from 'react'
import ReactDOM from 'react-dom'
import MapScreen from '../components/MapScreen'

it('MapScreen renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MapScreen />, div)
  ReactDOM.unmountComponentAtNode(div)
})
