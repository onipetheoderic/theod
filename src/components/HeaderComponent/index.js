import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from '../Helpers/colors'
import Button from '../Button'
import CircularImage from '../CircularImage'

class HeaderComponent extends React.Component {
 
    render() {
      
      return (        
        <View style={{flex: 1, flexDirection: 'row'}}>
          
        <Button backgroundColor={colors.white} buttonText="TAP" width="20%" textColor={colors.purpleDominant}/>               
        <Button backgroundColor={colors.lightPurple} marginLeft='43%' buttonText="^" width="15%" borderRadius={80} textColor={colors.purpleDominant}/>               

        <CircularImage height={43} width={43} url="http://www.aljanh.net/data/archive/img/1290825845.png"/>
        </View>
        );
    }
  }
export default HeaderComponent;  