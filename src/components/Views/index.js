import { Navigation } from 'react-native-navigation';

import Map from '@src/components/Views/MapView';
import Camera from '@src/components/Views/CameraView';

export function registerViews(store, Provider) {
  Navigation.registerComponent('mapeoMobile.Map', () => Map, store, Provider);
  Navigation.registerComponent('mapeoMobile.Camera', () => Camera, store, Provider);
}