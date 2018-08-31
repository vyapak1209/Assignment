import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchFeed } from '../../actions'
import FBSDK, { AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import PostItem from './PostItem'

class HomeView extends Component {

    constructor(props) {
        super(props)

    }

    // fetchFeed() {
    //     return fetch('https://graph.facebook.com/v3.1/me/feed?access_token=EAAHILVyn5z0BAKsIUDpxFOMEd3s7kk1swASafpjIFQBpNzjgBXbZBT5pIwED1Qnqoxoo07uMhXZApgOca2NiWpTWW0IL2LZCXaYkpEDTRGg2yDLQyjdntEnjn7JpFuZAKCkmadPuL27JrqpJ0kk4bZBxTFZBf6OwB6CpgooReRYZBmtvL5h4HSVYe3NeDdHJLQJn2Dhr3NJOQZDZD&debug=all&format=json&method=get&pretty=0&suppress_http_code=1&fields=full_picture,message')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log("Response ", responseJson)
    //             this.setState({
    //                 data: responseJson.data
    //             })
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }


    _responseInfoCallback(error, result) {

        if (error) {

            console.log('Error fetching data: ', error);
        } else {

            console.log('Success fetching data: ', result);
        }
    }

    componentWillMount() {
        //this.fetchFeed();
        this.props.fetchFeed();
    }

    renderMessages({ item }) {
        return (
            <View>
                <PostItem
                    item = {item}
                />
            </View>
        )
    }

    render() {
        console.log("this.props.feedData ", this.props.feedData)
        return (
            <View>
                <Text>
                    Home View
                </Text>

                {(this.props.feedData === null) ? <View /> : <FlatList
                    data={this.props.feedData}
                    renderItem={this.renderMessages.bind(this)}
                />}

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        feedData: state.feed.data
    }
}

export default connect(mapStateToProps, { fetchFeed })(HomeView)