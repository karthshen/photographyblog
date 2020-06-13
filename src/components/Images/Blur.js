import React, { Component } from 'react';

import {
  Image,
  InteractionManager,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity,
  findNodeHandle,
} from 'react-native';
//import React Native basic components

import { BlurView } from '@react-native-community/blur';
//import BlurView to make the Blur Background

module.exports = {
  dependencies: {
    'local-rn-library': {
      root: '/root/libraries',
    },
  },
};
// react-native.config.js

const BLUR_TYPES = ['xlight', 'light', 'dark'];
//Intensity of Blur Background 

export default class Basic extends Component {
  constructor() {
    super();
    this.state = {
      showBlur: true,
      viewRef: null,
      blurType: 'light',
    };
  }

  imageLoaded() {
    // Workaround for a tricky race condition on initial load.
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        this.setState({ viewRef: findNodeHandle(this.refs.backgroundImage) });
      }, 500);
    });
  }

  setBackgroundXlight() {
    //To make extra light background
    this.setState({
      blurType: 'xlight',
    });
  }
  setBackgroundLight() {
    //To make light background
    this.setState({
      blurType: 'light',
    });
  }
  setBackgroundDark() {
    //To make dark light background
    this.setState({
      blurType: 'dark',
    });
  }

  renderBlurView() {
    //Function for the blur background

    //For the text color on change of the background
    const tintColor = ['#ffffff', '#000000']; 
    if (this.state.blurType === 'xlight') {tintColor.reverse();}

    return (
      <View style={{flexDirection: 'column',justifyContent: 'flex-end',}}>
       {this.state.viewRef && <BlurView
          viewRef={this.state.viewRef}
          style={styles.blurView}
          blurRadius={1}
          blurType={this.state.blurType}

          // The following props are also available on Android:
          // blurRadius={20}
          // downsampleFactor={10}
          // overlayColor={'rgba(0, 0, 255, .6)'}   // set a blue overlay
        />}
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom:32,
        }}>
          <Text style={[styles.text, { color: tintColor[0] }]}>
            Blur component
          </Text>
          <TouchableOpacity
              style={styles.button}
              onPress={this.setBackgroundXlight.bind(this)}>
            <Text style={[styles.text, { color: tintColor[0] }]}>xlight</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={this.setBackgroundLight.bind(this)}>
            <Text style={[styles.text, { color: tintColor[0] }]}>light</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={this.setBackgroundDark.bind(this)}>
            <Text style={[styles.text, { color: tintColor[0] }]}>dark</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const tintColor = ['#ffffff', '#000000'];
    if (this.state.blurType === 'xlight') {tintColor.reverse();}
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/site_banner_vertical.png'}}
          //source={require('./bgimage.jpg')}
          style={styles.image}
          ref={'backgroundImage'}
          onLoadEnd={this.imageLoaded.bind(this)} />
        { this.state.showBlur ? this.renderBlurView() : null }
        <View
          style={styles.blurToggle}>
          <Text style={[styles.text, { color: tintColor[0] }]}>Show Blur Background</Text>
          <Text style={[styles.text, { color: tintColor[0] }]}>{this.state.showBlur ? "Yes" : "No"}</Text>
          <Switch
            onValueChange={(value) => this.setState({showBlur: value})}
            value={this.state.showBlur} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
    width: null,
    height: null,
  },
  blurView: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color:"#d0d0d0"
  },
  blurToggle: {
    position: 'absolute',
    top: 30,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    width:300,
    marginLeft:100,
    marginRight:100,
    marginTop:16
  },
});