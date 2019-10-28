import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import Gallery from './components/Gallery';
import Styles from './assets/styles/AppStyles.js';

const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    Camera: CameraScreen,
    Gallery: Gallery
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(StackNavigator);
export default function App() {
  return (
    <AppContainer style={Styles.container} />
  );
}

/*
  Icons made by:
    https://www.flaticon.com/authors/smashicons
    https://www.flaticon.com/authors/photo3idea-studio
*/