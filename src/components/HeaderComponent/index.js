import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from '../Helpers/colors'
import Button from '../Button'
import CircularImage from '../CircularImage'
import Icon from 'react-native-vector-icons/Ionicons';

class HeaderComponent extends React.Component {
 
    render() {
      
      return (        
        <View style={{flex: 1, flexDirection: 'row'}}>
          
        <Button backgroundColor={colors.white} marginRight="30%" buttonText="TAP" width="20%" textColor={colors.purpleDominant}/>               
        <View style={{marginLeft:'16%', paddingTop:5, marginTop:13, borderRadius:30, height:40, width:40, backgroundColor:colors.lightPurple}}><Text style={{textAlign:'center'}}><Icon name="ios-notifications" size={30} color={colors.purpleDominant} /></Text></View>
      
        <CircularImage height={43} width={43} url="http://www.aljanh.net/data/archive/img/1290825845.png"/>
        </View>
        );
    }
  }
export default HeaderComponent;  