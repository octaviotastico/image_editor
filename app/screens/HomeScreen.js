import React, { Component } from 'react';
import { Text,
         View,
         ImageBackground
        } from 'react-native';
import MenuItem from '../components/MenuItems';
import Styles from './HomeScreenStyles'

class HomeScreen extends Component {

  //static navigationOptions = {
  //  title: 'HomeScreen'
  //};

  render() {

    return (
      <ImageBackground

        source={require("../images/background.png")}
        style={Styles.container}>

        <View style={Styles.bigView}>

          <View style={Styles.topView}>
            <Text style={Styles.mainTitle}>H O M E</Text>
          </View>

          <View style={Styles.menuView}>
            <MenuItem itemImage={require("../images/icons/camera.png")} />
            <MenuItem itemImage={require("../images/icons/galery.png")} />
          </View>

        </View>

      </ImageBackground>
    );

  }
}
  
export default HomeScreen
