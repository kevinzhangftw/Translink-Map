import { actionTypes } from 'redux-resource'
import xhr from 'xhr'
import createActionCreators from 'redux-resource-action-creators'
import config from '../config'
// const apiEndpoint = `http://api.translink.ca/rttiapi/v1/buses?apikey=${process.env.REACT_APP_TRANSLINK}`

const readActionCreatorsFor = (type, key) => createActionCreators('read', {
  resourceType: type,
  requestKey: key,
})

export const requestReadResources = (type, key) => ({
  type: actionTypes.READ_RESOURCES_PENDING,
  resourceType: type,
  requestKey: key,
})

const xhrOptions = {
  json: true
}

export const fetchResources = (resourceType, resourceKey) => (dispatch) => {
  dispatch(requestReadResources(resourceType, resourceKey))
  const req = xhr.get(
    config.apiUrl,
    xhrOptions,
    (err, res, body) => {
      if (req.aborted) {
        dispatch(readActionCreatorsFor(resourceType, resourceKey).idle({
          requestProperties: {
            statusCode: null,
          },
        }))
      } else if (err || res.statusCode >= 400) {
        dispatch(readActionCreatorsFor(resourceType, resourceKey).failed({
          requestProperties: {
            statusCode: res.statusCode,
          },
        }))
      } else {
        // each bus resource is id'ed with vehicleNo, so set id to vehicleNo
        const resultsWithId = body.map(each => ({ ...each, ...{ id: each.VehicleNo } }))
        dispatch(readActionCreatorsFor(resourceType, resourceKey).succeeded({
          resources: resultsWithId,
          requestProperties: {
            statusCode: res.statusCode,
          },
        }))
      }
    },
  )
}
