import React from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from '../Helpers/colors'
import CircularImage from '../CircularImage';

import { systemWeights } from 'react-native-typography'


class Lists extends React.Component {
 
formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
    render() {
      let price = this.formatNumber(this.props.price)
      return (        
        <View style={{flex: 1, flexDirection: 'row'}}>
            <CircularImage height={50} width={50} url={this.props.imageUrl}/>
         
           <View style={[systemWeights.bold, style.name]}>
            <Text style={[systemWeights.bold]}>{this.props.title}</Text>
      <Text style={[systemWeights.bold, style.price]}>{this.props.date}</Text>
           </View> 
           <View style={{width:'60%', marginTop:15, paddingRight:13}}>
            <Text style={[systemWeights.bold, style.price]}>N{price}</Text>
            </View>
        </View>
        );
    }
  }

  const style = StyleSheet.create({
    price: {textAlign:'right', color:colors.gray},
    name: {marginTop:15, marginLeft:25}
  })

  
export default Lists;  
