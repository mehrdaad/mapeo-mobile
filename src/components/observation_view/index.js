import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import RaisedButton from 'material-ui/lib/raised-button'
import CloseIcon from 'material-ui/lib/svg-icons/navigation/close'
import LocationIcon from 'material-ui/lib/svg-icons/maps/my-location'
import CategoryIcon from 'material-ui/lib/svg-icons/file/folder'
import MediaIcon from 'material-ui/lib/svg-icons/image/photo-camera'
import DetailsIcon from 'material-ui/lib/svg-icons/editor/mode-edit'
import RightIcon from 'material-ui/lib/svg-icons/navigation/chevron-right'
import { defineMessages, injectIntl, intlShape, FormattedMessage } from 'react-intl'

const styles = {
  wrapper: {
    backgroundColor: 'white',
    width: '100vw',
    height: '100vh'
  },
  listItem: {
    lineHeight: '40px'
  },
  listIcon: {
    top: 12
  },
  saveButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '72px'
  },
  saveButtonLabel: {
    fontSize: '36px',
    lineHeight: '72px'
  }
}

const messages = defineMessages({
  title_existing: {
    id: 'observation_edit.title.existing',
    defaultMessage: 'Observation'
  },
  title_new: {
    id: 'observation_edit.title.new',
    defaultMessage: 'New Observation'
  },
  new_observation_location_geolocation_on: {
    id: 'observation_edit.location.new.geolocation_on',
    defaultMessage: 'We found a location. Care to edit it?'
  },
  new_observation_location_geolocation_off: {
    id: 'observation_edit.location.new.geolocation_off',
    defaultMessage: 'We didn\'t find your location. Please input it manually'
  },
  existing_observation_location_edit: {
    id: 'observation_edit.location.existing.edit',
    defaultMessage: 'Edit your location'
  }
})

/**
 * Without this the touch / drag event gets passed through to window
 * and the whole thing scrolls, which is not what we want.
 */
function stopScreenScrolling (e) {
  e.preventDefault()
}

const ObservationView = ({
  onClose,
  history,
  id,
  observation,
  location,
  intl: {formatMessage},
  type
}) => {
    const isNew = id === 'new'
    const title = isNew ? formatMessage(messages.title_new)
      : formatMessage(messages.title_existing)
    const closeIcon = <IconButton onTouchTap={onClose}><CloseIcon /></IconButton>

    // const LocationText = (observation)
    //   ? observation.gps.loc[0].toFixed(4) + ', ' + observation.gps.loc[1].toFixed(4)
    //   : 'Waiting for location fix...'

    let LocationText
    if (observation) {
      LocationText = <FormattedMessage {...messages.existing_observation_location_edit} />
    }
    if (!observation && !geolocation.error) {
      LocationText = <FormattedMessage {...messages.new_observation_location_geolocation_on} />
    }
    if (!observation && geolocation.error) {
      LocationText = <FormattedMessage {...messages.new_observation_location_geolocation_off} />
    }

    const wrapperStyle = {...styles.wrapper}

    const CategoryTouchTap = (e) => {
      e.preventDefault()
      history.pushState(null, '/' + type + '/' + id + '/category')
    }
    const DetailsTouchTap = (e) => {
      e.preventDefault()
      history.pushState(null, '/' + type + '/' + id + '/details')
    }
    const MediaTouchTap = (e) => {
      e.preventDefault()
      history.pushState(null, '/' + type + '/' + id + '/media')
    }
    return (
      <div style={wrapperStyle} onTouchMove={stopScreenScrolling}>
        <AppBar
          title={title}
          iconElementLeft={closeIcon}
        />

        <List>
          <ListItem
            style={styles.listItem}
            primaryText={LocationText}
            leftIcon={<LocationIcon style={styles.listIcon} />}
            rightIcon={<RightIcon style={styles.listIcon} />}
          />
          <ListDivider inset />
          <ListItem
            style={styles.listItem}
            primaryText='Category'
            leftIcon={<CategoryIcon style={styles.listIcon} />}
            rightIcon={<RightIcon style={styles.listIcon} />}
            onTouchTap={CategoryTouchTap}
          />
          <ListDivider inset />
          <ListItem
            style={styles.listItem}
            primaryText='Add Photo...'
            leftIcon={<MediaIcon style={styles.listIcon} />}
            rightIcon={<RightIcon style={styles.listIcon} />}
            onTouchTap={MediaTouchTap}
          />
          <ListDivider inset />
          <ListItem
            style={styles.listItem}
            primaryText='Details'
            leftIcon={<DetailsIcon style={styles.listIcon} />}
            rightIcon={<RightIcon style={styles.listIcon} />}
            onTouchTap={DetailsTouchTap}
          />
          <ListDivider inset />
        </List>
        <RaisedButton primary label='SAVE' style={styles.saveButton} labelStyle={styles.saveButtonLabel} />
      </div>
    )
}

ObservationView.propTypes = {
  onClose: PropTypes.func,
  history: PropTypes.object,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  observation: PropTypes.object,
  location: PropTypes.object,
  intl: intlShape.isRequired,
  type: PropTypes.string
}

export default ObservationView


