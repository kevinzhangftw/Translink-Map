import { createSelector } from 'reselect'
import _ from 'lodash'

const getBuses = state => state.buses.resources

export const getBusesArray = createSelector(
  getBuses,
  buses => _.values(buses)
)
