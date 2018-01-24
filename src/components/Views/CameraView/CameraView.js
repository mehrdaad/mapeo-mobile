// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type State = {
  isRecording: boolean,
};

export type StateProps = {
  observations: {
    [id: string]: Observation,
  },
};

export type DispatchProps = {
  listObservations: () => void,
};

const styles = StyleSheet.create({
});

class CameraView extends React.PureComponent<StateProps & DispatchProps, State> {
  state = { isRecording: false };
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>CameraView</Text>
      </View>
    );
  }
}

export default CameraView;

