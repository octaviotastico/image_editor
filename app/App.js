import React, { Component } from 'react';
import { Platform,
         Text,
         View,
         ImageBackground
        } from 'react-native';
import MenuItem from './components/MenuItems';
import Styles from './AppStyles'

class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./background.png')}
        style={Styles.container}>

        <View style={Styles.bigView}>

          <View style={Styles.topView}>
            <Text style={Styles.mainTitle}>H O M E</Text>
          </View>

          <View style={Styles.menuView}>
            <MenuItem itemImage={require('./icons/camera.png')} />
            <MenuItem itemImage={require('./icons/galery.png')} />
          </View>

        </View>

      </ImageBackground>
    );
  }
}

export default App
