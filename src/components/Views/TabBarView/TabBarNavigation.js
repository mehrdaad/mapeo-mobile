// @flow
import React from 'react';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Drawer from 'react-native-drawer';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import MapView from '@src/components/Views/MapView';
import CameraView from '@src/components/Views/CameraView/CameraView';
import PreferencesView from '@src/components/Views/PreferencesView/PreferencesView';
import MyObservationsView from '@src/components/Views/MyObservationsView';

import MapViewIcon from '../../../images/location-arrow.png';
import CameraViewIcon from '../../../images/photo-camera.png';
import ProfileImg from '../../../images/profile.png';
import CollectionsImg from '../../../images/collections.png';

const routeConfiguration = {
  MapView: {
    screen: MapView,
    navigationOptions: {
      tabBarIcon: () => (
        <Image source={MapViewIcon} />
      ),
    },
  },
  CameraView: {
    screen: CameraView,
    navigationOptions: {
      tabBarIcon: () => (
        <Image source={CameraViewIcon} />
      ),
    },
  },
};

const tabConfiguration = {
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'blue',
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: 'white',
    },
  },
};

const TabBar = TabNavigator(routeConfiguration, tabConfiguration);

const styles = StyleSheet.create({
  myObservationsIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },

  profileIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
});

export type StateProps = {
  navigationState: any;
  dispatch: any;
}

class TabBarNavigation extends React.Component<StateProps> {
  static router = TabBar.router;
  leftDrawer: Drawer;
  rightDrawer: Drawer;

  closeLeftDrawer = () => {
    this.leftDrawer.close();
  }

  openLeftDrawer = () => {
    this.leftDrawer.open();
  }

  closeRightDrawer = () => {
    this.rightDrawer.close();
  }

  openRightDrawer = () => {
    this.rightDrawer.open();
  }

  handleLeftDrawerRef = (ref: Drawer) => {
    this.leftDrawer = ref;
  }

  handleRightDrawerRef = (ref: Drawer) => {
    this.rightDrawer = ref;
  }

  render() {
    const { dispatch, navigationState } = this.props;

    return (
      <Drawer
        ref={this.handleLeftDrawerRef}
        content={<PreferencesView closeLeftDrawer={this.closeLeftDrawer} />}
        openDrawerOffset={30}
        type="displace"
      >
        <Drawer
          ref={this.handleRightDrawerRef}
          content={<MyObservationsView closeRightDrawer={this.closeRightDrawer} />}
          openDrawerOffset={30}
          side="right"
          type="displace"
        >
          <View style={{ flexDirection: 'row', height: 60 }}>
            <TouchableHighlight
              onPress={this.openLeftDrawer}
              style={styles.profileIcon}
              underlayColor="antiquewhite"
            >
              <Image source={ProfileImg} />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.openRightDrawer}
              style={styles.myObservationsIcon}
              underlayColor="antiquewhite"
            >
              <Image source={CollectionsImg} />
            </TouchableHighlight>
          </View>
          <TabBar
            navigation={
              addNavigationHelpers({
                dispatch,
                state: navigationState,
                addListener: createReduxBoundAddListener('tabBar'),
              })
            }
          />
        </Drawer>
      </Drawer>
    );
  }
}

export default TabBarNavigation;