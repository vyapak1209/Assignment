import React , {Component} from 'react'
import {View} from 'react-native'
import LoginView from '../views/LoginView'

export default class LoginContainer extends Component {
    render(){
        return(
            <View>
                <LoginView
                    navigation = {this.props.navigation}
                />
            </View>
        )
    }
}