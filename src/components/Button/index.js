import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../Helpers/colors'

export default class Myproject extends Component {
 
  render() {
     return (
     
       <TouchableOpacity
          style={{marginTop:10,
            width: this.props.width,
            paddingBottom:30,
            paddingTop:15,
            marginLeft:this.props.marginLeft,
            marginRight:3,
            height: 40,
            elevation:1,
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
 