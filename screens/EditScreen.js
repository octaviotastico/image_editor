import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import Styles from '../assets/styles/EditScreenStyles';

export default class EditScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    const { navigation } = this.props;
    return (
      <Image source={{ uri: navigation.getParam('img').uri }} style={Styles.selectedImage} />
    );
  }
}