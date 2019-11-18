import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import colors from '../Helpers/colors'


export default class CircularImage extends Component {
 
  render() {
      const {height, width, url} = this.props;
     return (
     
        <TouchableHighlight
        style={{ marginLeft: 8,
            height: height,
            marginTop:10,
            width: width,
            borderRadius: 40,}}
      >
  <Image source={{ uri:url }} style={{ 
    height: this.props.height,
    width: this.props.width,
    borderRadius: 40}} />
</TouchableHighlight>
     ) 
}
}

