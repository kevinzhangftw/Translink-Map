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

const fetchResourcesIdle = (resourceType, resourceKey) =>
  readActionCreatorsFor(resourceType, resourceKey).idle({
    requestProperties: {
      statusCode: null,
    },
  })

const fetchResourcesFailed = (resourceType, resourceKey, statusCode) =>
  readActionCreatorsFor(resourceType, resourceKey).failed({
    requestProperties: {
      statusCode: statusCode,
    },
  })

const setIdToVehicleNo = body =>
  body.map(each => ({ ...each, ...{ id: each.VehicleNo } }))

const getBodyWithId = body => setIdToVehicleNo(body)

const fetchResourcesSuccess = (resourceType, resourceKey, statusCode, resources) =>
  readActionCreatorsFor(resourceType, resourceKey).succeeded({
    resources: resources,
    requestProperties: {
      statusCode: statusCode,
    },
  })

export const fetchResources = (resourceType, resourceKey) => (dispatch) => {
  dispatch(requestReadResources(resourceType, resourceKey))
  const req = xhr.get(
    config.apiUrl,
    xhrOptions,
    (err, res, body) => {
      if (req.aborted) {
        dispatch(fetchResourcesIdle(resourceType, resourceKey))
      } else if (err || res.statusCode >= 400) {
        dispatch(fetchResourcesFailed(resourceType, resourceKey, res.statusCode))
      } else {
        dispatch(fetchResourcesSuccess(
          resourceType,
          resourceKey,
          res.statusCode,
          getBodyWithId(body)
          )
        )
      }
    },
  )
}
