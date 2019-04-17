import React, { Component } from 'react';
import { Platform,
         StyleSheet,
         Text,
         View,
         ImageBackground
        } from 'react-native';
import MenuItem from './components/MenuItems';

class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./background.png')}
        style={styles.container}>

        <View style={styles.bigView}>

          <View style={styles.topView}>
            <Text style={styles.mainTitle}>H O M E</Text>
          </View>

          <View style={styles.menuView}>
            <MenuItem itemImage={require('./icons/camera.png')} />
            <MenuItem itemImage={require('./icons/galery.png')} />
          </View>

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  bigView: {
    flex: 1,
    backgroundColor: 'rgba(47, 163, 218, .4)'
  },

  mainTitle: {
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 28,
    backgroundColor: 'rgba(255, 255, 255, .1)'
  },

  topView: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuView: {
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});

export default App
