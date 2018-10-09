import { requestReadResources, fetchResources } from '../actions/resources'
import { actionTypes } from 'redux-resource'

describe('actions', () => {
  it('requestReadResources should dispatch status READ_RESOURCES_PENDING', () => {
    const expectedAction = {
      type: actionTypes.READ_RESOURCES_PENDING,
      resourceType: 'buses',
      requestKey: 'fetchBuses',
    }
    expect(requestReadResources('buses', 'fetchBuses')).toEqual(expectedAction)
  })
})
