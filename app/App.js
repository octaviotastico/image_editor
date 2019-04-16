import React, { Component } from 'react';
import { Platform,
         StyleSheet,
         Text,
         View,
         ImageBackground
        } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./background.png')}
        style={styles.container}>

        <View style={styles.overlayContainer}>


        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  }

  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47, 163, 218, .4)'
  }

});

export default App
