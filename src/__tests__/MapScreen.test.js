import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MapScreen from '../components/MapScreen'

it('MapScreen renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MapScreen />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('MapScreen renders correct size', () => {
  const component = renderer.create(
    <MapScreen />,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
