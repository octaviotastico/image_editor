import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableHighlight, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Styles from '../assets/styles/HomeScreenStyles';
import ExpoCamera from '../components/ExpoCamera';

class HomeScreen extends Component {

  //static navigationOptions = {
  //  title: 'HomeScreen'
  //};

  pinchila() {
    alert('momento dou')
  }

  render() {

    return (
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={Styles.container}
      >

        <View style={Styles.bigView}>

          <View style={Styles.topView}>
            <Text style={Styles.mainTitle}>H O M E</Text>
          </View>

          <View style={Styles.menuView}>
            <TouchableHighlight
              onPress={() => this.pinchila()}
              style={Styles.buttons}
            >
              <>
                <Image
                  style={Styles.imageButtons}
                  source={require('../assets/images/icons/Camera.png')}
                />
                <Text style={Styles.textButtons}>C A M E R A</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.pinchila()}
              style={Styles.buttons}
            >
              <>
                <Image
                  style={Styles.imageButtons}
                  source={require('../assets/images/icons/Photos.png')}
                />
                <Text style={Styles.textButtons}>G A L E R Y</Text>
              </>
            </TouchableHighlight>
          </View>

          <ExpoCamera />

        </View>

      </ImageBackground>
    );

  }
}
  
export default HomeScreen
