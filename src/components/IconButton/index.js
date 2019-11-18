import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../Helpers/colors'
import { systemWeights } from 'react-native-typography'
import Icon from 'react-native-vector-icons/AntDesign';

export default class IconButton extends Component {
 
  render() {
     return (
     
       <TouchableOpacity
          style={{marginTop:10,
            width: this.props.width,
            paddingBottom:35,
            paddingTop:10,
            marginLeft:this.props.marginLeft,
            marginRight:this.props.marginRight,
            height: 30,
            elevation:15,
            marginLeft:15,
            backgroundColor: this.props.backgroundColor,
            borderRadius:this.props.borderRadius}}
          activeOpacity = { .5 }
          onPress={this.props.routeHandler} 
       > 
       <View>
            <Text style={{color:this.props.textColor, fontSize:20, paddingLeft:16}}>{this.props.buttonText}     <Text><Icon name="arrowright" size={20} color={colors.white} /></Text></Text>
        </View>
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
 