import React , {Component} from 'react'
import {View} from 'react-native'
import SplashView from '../views/SplashView'

export default class SplashContainer extends Component {
    render(){
        return(
            <View>
                <SplashView
                    navigation = {this.props.navigation}
                />
            </View>
        )
    }
}