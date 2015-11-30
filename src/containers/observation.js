import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { injectIntl, intlShape } from 'react-intl'
import ObservationView from '../components/observation_view'

class Observation extends React.Component {

  createInitialObservation = () => {
    return {
      details: {
        category: null,
        survey: new Date(Date.now()).toISOString()
      },
      gps: {
        loc: this.props.location ? this.props.location : null
      },
      media: {}
    }
  }

  state = this.props.observation ? this.props.observation : this.createInitialObservation()
  updateCategory = (e, index) => {
    const newState = Object.assign({}, this.state)
    newState.details.category = index
    this.setState(newState)
  }
  render () {
    const propsForObservationView = {
      geolocation: this.props.geolocation,
      id: this.props.params.id,
      intl: this.props.intl,
      history: this.props.history,
      observation: this.state,
      type: 'observation'
    }
    const propsForOurChildren = {
      categories: this.props.categories,
      currentCategory: this.state.details.category,
      history: this.props.history,
      id: this.props.params.id,
      type: 'observation',
      updateCategory: this.updateCategory
    }

    return (
    <div>
      { !this.props.children &&
        <ObservationView {...propsForObservationView} />
      }
      {!!this.props.children && React.cloneElement(this.props.children, {...propsForOurChildren})}
    </div>
    )
  }
}

Observation.propTypes = {
  children: PropTypes.object,
  onClose: PropTypes.func,
  categories: PropTypes.object,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  geolocation: PropTypes.object,
  history: PropTypes.object,
  intl: intlShape.isRequired,
  location: PropTypes.object,
  observation: PropTypes.object,
  params: PropTypes.object
}

// TODO This will get really, really weird if the store entity gets edited somewhere else in the middle of the edition. Hope memoization saves us all.
function createSelector () {
  let cache = {}
  const empty = {}
  return function select (state) {
    // In the good old days when observation was a function, the select function had an ID passed to it.
    // Unfortunately, these days are long gone and now observation is a class. So, to create an ID, we had to resort to a regex. Yeah, ugly, but gets the job done
    const id = state.routing.path.match(/\/observation\/(\d+|new)/)[1]
    if (id === 'new') {
      return empty
    }
    let observationJSON = cache.id === id ? cache.observationJSON
      : state.graph.entities[id].asJSON()
    cache = { id, observationJSON }
    const categories = state.categories
    return {
      observation: observationJSON,
      categories: categories

    }
  }
}

export default compose(
  connect(createSelector()),
  injectIntl
)(Observation)
