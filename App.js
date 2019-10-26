import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Image, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const StackNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen
  }
});

const Container = createAppContainer(StackNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Pinchilas</Text>
      <Image source={require('./assets/images/example_images/image3.jpg')}/> */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
