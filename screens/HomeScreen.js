import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableHighlight, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Styles from '../assets/styles/HomeScreenStyles';

class HomeScreen extends Component {

  static navigationOptions = { header: null };
  // static navigationOptions = {
  //  title: 'HomeScreen'
  // };

  cameraButton() {
    this.props.navigation.navigate('Camera')
  }

  galeryButton() {
    this.props.navigation.navigate('Gallery')
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
              onPress={() => this.cameraButton()}
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
              onPress={() => this.galeryButton()}
              style={Styles.buttons}
            >
              <>
                <Image
                  style={Styles.imageButtons}
                  source={require('../assets/images/icons/Photos.png')}
                />
                <Text style={Styles.textButtons}>G A L L E R Y</Text>
              </>
            </TouchableHighlight>
          </View>

        </View>

      </ImageBackground>
    );

  }
}
  
export default HomeScreen
