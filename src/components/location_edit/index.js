import React, { PropTypes } from 'react'
import Colors from 'material-ui/lib/styles/colors'
import AppBar from 'material-ui/lib/app-bar'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import RaisedButton from 'material-ui/lib/raised-button'
import CloseIcon from 'material-ui/lib/svg-icons/navigation/close'
import TextField from 'material-ui/lib/text-field'


const styles = {
  wrapper: {
    backgroundColor: Colors.grey300,
    position: 'relative',
    width: '100vw',
    height: '100vh'
  },
  listItem: {
    lineHeight: '40px'
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

const LocationEdit = ({
  history
}) => {
  return (
    <div style={styles.wrapper}>
      <AppBar title='Edit the Location' />
      <TextField
        hintText='this should be the default value of lat or none'
        floatingLabelText='Input the Latitude' />
      <TextField
        hintText='this should be the default value of lng or none'
        floatingLabelText='Input the Longitude' />
      <RaisedButton primary label='SAVE' style={styles.saveButton} labelStyle={styles.saveButtonLabel} onTouchTap={() => { history.goBack() }}/>
    </div>
  )
}

export default LocationEdit
