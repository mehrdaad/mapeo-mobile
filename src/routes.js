import React from 'react'
import { Router, Route } from 'react-router'

import App from './containers/app'
import Observation from './containers/observation'
import ObservationView from './components/observation_view'
import CategorySelect from './components/category_select'
import LocationEdit from './components/location_edit'
import DetailsEdit from './components/details_edit'

import {
  Location,
  Media,
  PlaceEdit,
  EventEdit
} from './components'

// import createBrowserHistory from 'history/lib/createBrowserHistory'
// let history = createBrowserHistory()

const routes = (
  // <Router history={history}>
  <Router>
    <Route path='/' component={App}>
      <Route path='/observation/:id' component={Observation}>
        <Route path='view' component={ObservationView} />
        <Route path='location' component={LocationEdit} />
        <Route path='media' component={Media} />
        <Route path='category' component={CategorySelect} />
        <Route path='details' component={DetailsEdit} />
      </Route>
      <Route path='/event/:id' component={EventEdit} />
      <Route path='/place/:id' component={PlaceEdit} />
    </Route>
  </Router>
)

export default routes
