import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import {reducer as formReducer} from 'redux-form'

import catchErrors from './middleware/catch_errors'
import * as reducers from './reducers'

const reducer = combineReducers({
  routing: routeReducer,
  form: formReducer,
  ...reducers})

const logger = createLogger()
let createStoreWithMiddleWare
if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleWare = applyMiddleware(logger)(createStore)
} else {
  createStoreWithMiddleWare = applyMiddleware(catchErrors)(createStore)
}
const store = createStoreWithMiddleWare(reducer)
syncReduxAndRouter(createBrowserHistory(), store)

export default store
