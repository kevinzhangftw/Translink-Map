import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { actionTypes } from 'redux-resource'
import { requestReadResources, fetchResources } from '../actions/resources'
import config from '../config'
import sampleData from '../../sampleData'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates READ_RESOURCES_SUCCESS when fetching buses has been done', () => {
    fetchMock
      .getOnce(config.apiUrl, { body: sampleData, headers: { 'content-type': 'application/json' } })

    const expectedActions = [
      { type: actionTypes.READ_RESOURCES_PENDING },
      { type: actionTypes.READ_RESOURCES_SUCCESS, body: sampleData }
    ]
    const store = mockStore({ buses: [] })

    return store.dispatch(fetchResources()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})




