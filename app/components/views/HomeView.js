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

    _responseInfoCallback(error, result) {

        if (error) {

            console.log('Error fetching data: ', error);
        } else {

            console.log('Success fetching data: ', result);
        }
    }

    componentWillMount() {
        //this.fetchFeed();
        this.props.fetchFeed(null);
    }

    renderMessages({ item }) {
        return (
            <View>
                <PostItem
                    item={item}
                />
            </View>
        )
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
      }
    

    render() {
        console.log("this.props.feedData ", this.props.feedData)
        console.log("this.props.nextUrl ", this.props.nextUrl)
        if (this.props.feedData === 'loginExpired') {
            return (
                <View>
                    <Text>
                        You need to login again
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={{ padding: 5 }}>
                    {(this.props.feedData === null) ? <View /> :
                        <FlatList
                            data={this.props.feedData}
                            renderItem={this.renderMessages.bind(this)}
                            onEndReached = {() => {
                                this.props.fetchFeed(this.props.nextUrl)
                            }}
                            onEndReachedThreshold = {0.8}
                            onViewableItemsChanged={this.onViewableItemsChanged.bind(this) }
                            viewabilityConfig={{
                              itemVisiblePercentThreshold: 50
                            }}
                        />
                    }

                </View>
            );
        }

    }
}

const mapStateToProps = state => {
    return {
        feedData: state.feed.data,
        nextUrl: state.feed.next,
    }
}

export default connect(mapStateToProps, { fetchFeed })(HomeView)