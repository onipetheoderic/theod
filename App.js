import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HeaderComponent from './src/components/HeaderComponent'
import WelcomeText from './src/components/WelcomeText'
import Lists from './src/components/Lists'
import Button from './src/components/Button'
import colors from './src/components/Helpers/colors'
import sample from './sample.json'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      value:"",
      fullName: "Theoderic"
    }
  }


  twoObjectArrayReturner = (arr)=>{
    return arr.slice(0,2)
  }
  twoObjectArrayLastReturner = (arr) => {
    return arr.slice(arr.length-3, arr.length-1)
  }

  render(){
    // console.log(sample)
    const firstTwo = this.twoObjectArrayReturner(sample)
    const lastTwo = this.twoObjectArrayLastReturner(sample);
    
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}><HeaderComponent /></View>
    <View style={{flex:2}}><WelcomeText fontSize={35}>{this.state.fullName}</WelcomeText></View>
        <View style={{flex:5}}>
          <Text style={{marginHorizontal:10, fontSize:13}}>TODAYS</Text>
          {firstTwo.map(single => <Lists key={single.id} title={single.name} price={single.price} date={single.date} imageUrl={single.url} />)}
          <Text style={{marginHorizontal:10, fontSize:13}}>Yesterdays</Text>
          {lastTwo.map(single => <Lists key={single.id} title={single.name} price={single.price} date={single.date} imageUrl={single.url} />)}
        </View>
        <View style={{flex:1, alignSelf:"center", width:'50%'}}>
          <Button borderRadius={30} backgroundColor={colors.purpleRecessive} buttonText="Pay Now →"/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
 
});

export default App;
