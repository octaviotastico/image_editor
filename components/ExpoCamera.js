import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Styles from '../assets/styles/CameraScreenStyles'
import { Button } from 'native-base';
import { Slider } from 'react-native-elements';

export default class ExpoCamera extends Component {
  state = {
    hasCameraPermission: null,
    cam: 0, // 0:Type.front, 1:Type.back
    sliderFlash: 0, // 0:off, 1:on, 2:auto, 3:torch
    showFlashSlider: false,
    autoFocus: Camera.Constants.AutoFocus, // on, off, focusDepht
    zoom: Camera.Constants.zoom, // 0 to 1
    whiteBalance: Camera.Constants.WhiteBalance, // auto, sunny, cloudy, shadow, fluorescent, incandescent
    videoStabilizationMode: Camera.Constants.VideoStabilization,
    quality: Camera.Constants.VideoQuality,

    useCamera2Api: '', // True to use advanced settings
    ratio: '', // 4:3, 16:9, 1:1, taken by 'takePictureAsync' - avaibles at getAvailablePictureSizesAsync
    focusDepht: '', // 0 to 1, needs useCamera2Api set to true
    // onCameraReady(function)
    // onFacesDetected(function) - https://docs.expo.io/versions/latest/sdk/facedetector/#event-shape
    // faceDetectorSettings(functions) - https://docs.expo.io/versions/latest/sdk/facedetector/#settings
    // onMountError(function) 
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission:status==='granted'});
  }

  flipCamera() {
    this.setState({cam:this.state.cam+1%2});
  }

  showFlashSlider() {
    this.setState({showFlashSlider:!this.state.showFlashSlider})
  }

  changeFlash(sliderVal) {
    this.setState({flash:sliderVal});
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <>

        {/*/////////////////// CAMERA ////////////////////////*/}
        
        <Camera
          style={Styles.cam}
          type={this.state.cam}
          flashMode={this.state.flash}

        />

        {/*////////////////// POPUP MENU /////////////////////*/}

        <View style={Styles.tools}>
          {
            this.state.showFlashSlider &&
            <Slider
              style={{ flex: 0.9, alignSelf: 'center' }}
              onValueChange={v => this.changeFlash(v)}
              minimumValue={0}
              maximumValue={3}
              step={1}
            />
          }
        </View>

        {/*///////////////// BOTTOM MENU ////////////////////*/}

        <View style={Styles.tools}>

          <TouchableHighlight onPress={() => this.flipCamera()}>
            <Image
              style={Styles.imageButtons}
              source={require('../assets/images/icons/Flip.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.showFlashSlider()}>
            <Image
              style={Styles.imageButtons}
              source={require('../assets/images/icons/Flash.png')}
            />
          </TouchableHighlight>

        </View>
        </>
      )
    }
  }
}
