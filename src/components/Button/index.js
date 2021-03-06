import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../Helpers/colors'
import { systemWeights } from 'react-native-typography'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Myproject extends Component {
 
  render() {
     return (
     
       <TouchableOpacity
          style={{marginTop:10,
            width: this.props.width,
            paddingBottom:30,
            paddingTop:15,
            marginLeft:this.props.marginLeft,
            marginRight:this.props.marginRight,
            height: 40,
            elevation:15,
            marginLeft:15,
            backgroundColor: this.props.backgroundColor,
            borderRadius:this.props.borderRadius}}
          activeOpacity = { .5 }
          onPress={this.props.routeHandler} 
       > 
        <Text style={{ color: this.props.textColor, fontSize: this.props.fontSize, fontWeight: 'bold', textAlign:'center'}}> 
            {this.props.buttonText} 
        </Text>    
        </TouchableOpacity> 
      
    );
  }
} 
const styles = StyleSheet.create({ 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
 