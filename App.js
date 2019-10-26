import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Styles from './assets/styles/AppStyles.js';

const StackNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen
  }
});

const Container = createAppContainer(StackNavigator);

export default function App() {
  return (
    <View style={Styles.container}>
      <HomeScreen />
    </View>
  );
}
