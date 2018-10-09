import { actionTypes } from 'redux-resource'
import xhr from 'xhr'
import createActionCreators from 'redux-resource-action-creators'

const readActionCreatorsFor = (type, key) => createActionCreators('read', {
  resourceType: type,
  requestKey: key,
})

const requestReadResources = (type, key) => ({
  type: actionTypes.READ_RESOURCES_PENDING,
  resourceType: type,
  requestKey: key,
})

const fetchResources = (resourceType, resourceKey, queryString) => (dispatch) => {
  dispatch(requestReadResources(resourceType, resourceKey))
  const req = xhr.get(
    queryString,
    { json: true },
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
        // setting id to vehicleNo
        const resultsWithId = body.results.map(each => ({ ...each, ...{ id: each.VehicleNo } }))
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

export default fetchResources

