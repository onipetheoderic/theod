import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import colors from '../Helpers/colors'


export default class WelcomeText extends Component {
 
  render() {
     return (      
         <View>
  <Text style={{fontSize:this.props.fontSize, paddingHorizontal:20}}>Welcome back, {this.props.children}!</Text>
        </View>
     ) 
}
}

