import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import Styles from '../assets/styles/CameraScreenStyles';
import ExpoCamera from '../components/ExpoCamera';

export default class CameraScreen extends Component {

  static navigationOptions = { header: null };
  //static navigationOptions = {
  //  title: 'CameraScreen'
  //};

  render() {
    return (
      <ExpoCamera />
    );
  }
}