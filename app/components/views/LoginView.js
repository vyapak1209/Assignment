import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import FBSDK, { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk';

export default class LoginView extends Component {

    constructor(props) {
        super(props)

    }

    afterLogin(){
        this.props.navigation.navigate('HomePage')
    }

    facebookSignIn() {

        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_posts']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    console.log('Login success with permissions: ', result);
                    AccessToken.getCurrentAccessToken().then((data) => {
                        console.log("Facebook Access Token ", data)

                        AsyncStorage.setItem('fbData', JSON.stringify(data))
                        
                    })
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error);
            }
        ).then(() => {
            this.afterLogin();
        })
    }

    render() {
        return (
            <View>
                <Text>
                    This is Login View
                </Text>
                <TouchableOpacity activeOpacity={0.8} style={{ height: 50, width: '50%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#2075b9', borderRadius: 4, marginLeft: 2 }} onPress={() => this.facebookSignIn()}>
                    <View>
                        <Image
                            source={require('../assets/fb.png')}
                            style={{ height: 25, width: 25 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}