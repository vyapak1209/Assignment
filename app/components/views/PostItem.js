import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

export default class PostItem extends Component {

    constructor(props) {

        super(props)

    }

    render() {
        return (
            <View style = {{backgroundColor: 'white', elevation: 2, margin: 5, padding: 5,}}>
                {
                    (this.props.item.full_picture) ? 
                    <Image
                        source = {{uri: this.props.item.full_picture}}
                        style={{ height: 100, width: 100 }}
                    /> : <View/>
                }
                <Text>
                    {this.props.item.message}
                </Text>
            </View>
        );
    }
}