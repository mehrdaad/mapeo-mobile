/*!
* Mapeo Mobile is an Android app for offline participatory mapping.
*
* Copyright (C) 2017 Digital Democracy
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// @flow
import React from 'react';
import RNNode from 'react-native-node';
import { Provider } from 'react-redux';
import { configureStore } from '@lib/store';
import { Navigation } from 'react-native-navigation';
import { registerViews } from '@src/components/Views';
// import MapView from '@src/components/Views/MapView';
import 'rxjs';

// export default class App extends React.PureComponent<null, null> {
//   componentDidMount() {
//     RNNode.start();
//   }

//   render() {
//     const store = configureStore();

//     return (
//       <Provider store={store}>
//         <MapView />
//       </Provider>
//     );
//   }
// }

const store = configureStore();

registerViews(store, Provider);

const tabs = [{
  label: 'Map',
  screen: 'mapeoMobile.Map',
  icon: require('./images/location-arrow.png'),
  title: 'Map View',
},
{
  label: 'Camera',
  screen: 'mapeoMobile.Camera',
  icon: require('./images/camera.png'),
  title: 'Camera View',
}];

Navigation.startTabBasedApp({
  tabs,
});