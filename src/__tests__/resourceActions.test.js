import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mock from 'xhr-mock'
import { actionTypes } from 'redux-resource'
import { requestReadResources, fetchResources } from '../actions/resources'
import config from '../config'
import sampleData from '../../sampleData'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('requestReadResources should dispatch status READ_RESOURCES_PENDING', () => {
    const initialState = {}
    const store = mockStore(initialState)
    store.dispatch(requestReadResources('buses', 'fetchBuses'))
    const actions = store.getActions()
    const expectedPayload = {
      type: actionTypes.READ_RESOURCES_PENDING,
      resourceType: 'buses',
      requestKey: 'fetchBuses'
    }
    expect(actions).toEqual([expectedPayload])
  })
})

describe('async actions', async () => {
  beforeEach(() => mock.setup())
  afterEach(() => mock.teardown())

  it('creates READ_RESOURCES_SUCCESS when fetching buses has been done', () => {
    const store = mockStore({ buses: {resources:{}, requests:{}} })
    // TODO Test Success Case as well
    const expectedActions = [{ "requestKey": "fetchBuses", "resourceType": "buses", "type": "READ_RESOURCES_PENDING" }]
    mock.get(config.apiUrl, { body: sampleData })
    store.dispatch(fetchResources('buses', 'fetchBuses'))
    expect(store.getActions()).toEqual(expectedActions)
  })
})




