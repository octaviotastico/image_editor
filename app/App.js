
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const StackNavigator = createStackNavigator ({
  Home: HomeScreen
});

export default class App extends React.Component {
  render() {
    return (
      <StackNavigator/>
    );
  }
}
