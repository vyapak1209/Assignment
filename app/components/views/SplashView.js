import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'


export default class SplashView extends Component {

    componentWillMount() {
        console.log("lol")
        AsyncStorage.getItem('fbData').then((data) => {
            console.log("Async Data in splash views ", data)
            if(data){
                setTimeout(() => {
                    // this.props.navigation.pop();
                    this.props.navigation.navigate('HomePage');
                }, 1000);
            }else{
                setTimeout(() => {
                    // this.props.navigation.pop();
                    this.props.navigation.navigate('LoginPage');
                }, 1000);
            }
            
        })
    }

    render() {
        return (
            <View>
                <Text>
                    This is Splash View
                </Text>
            </View>
        )
    }
}