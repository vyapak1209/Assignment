import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {RootStack} from './utils/NavigationUtils'




export default class App extends Component{
  render(){
    return(
      <RootStack/>
    );
  }
}