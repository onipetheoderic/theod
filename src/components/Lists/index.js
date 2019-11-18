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
import CircularImage from '../CircularImage';

class Lists extends React.Component {
 
    render() {
      
      return (        
        <View style={{flex: 1, flexDirection: 'row'}}>
            <CircularImage height={50} width={50} url={this.props.imageUrl}/>
         
           <View style={{marginTop:15, marginLeft:15, fontWeight:'bold'}}>
            <Text>{this.props.title}</Text>
      <Text>{this.props.date}</Text>
           </View> 
           <View style={{width:'60%', marginTop:15}}>
            <Text style={{textAlign:'right'}}>N{this.props.price}</Text>
            </View>
        </View>
        );
    }
  }
export default Lists;  
