import React, {Component} from 'react'
import {View, Text} from 'react-native'


export default class SplashView extends Component{

    componentWillMount(){
        setTimeout(() => {
            // this.props.navigation.pop();
            this.props.navigation.navigate('LoginPage');
          }, 1000);
        
    }

    render(){
        return(
            <View>
                <Text>
                    This is Splash View
                </Text>
            </View>
        )
    }
}