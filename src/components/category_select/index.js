import React, { PropTypes } from 'react'
import Colors from 'material-ui/lib/styles/colors'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import RaisedButton from 'material-ui/lib/raised-button'
import CloseIcon from 'material-ui/lib/svg-icons/navigation/close'
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance'

var SelectableList = SelectableContainerEnhance(List)

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

const CategorySelect = ({
  categories,
  currentCategory,
  history,
  id,
  type,
  updateCategory
  }) => {
  const onClose = () => {
    history.pushState(null, '/' + type + '/' + id)
  }
  const closeIcon = <IconButton onTouchTap={onClose}><CloseIcon /></IconButton>
  const categoriesOnDisplay = categories.map((c) => <ListItem value={c.payload} primaryText={c.text} />)
  return (
  <div style={styles.wrapper}>
    <AppBar title='Select the Category' iconElementLeft={closeIcon} />
    <SelectableList valueLink={{ value: currentCategory, requestChange: updateCategory }} subheader='Categories'>
      {categoriesOnDisplay}
    </SelectableList>
    <RaisedButton
      primary
      label='SAVE'
      style={styles.saveButton}
      labelStyle={styles.saveButtonLabel}
      onTouchTap={onClose} />
  </div>
  )
}

export default CategorySelect
