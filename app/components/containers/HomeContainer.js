import React, { Component } from 'react'
import { View } from 'react-native'
import HomeView from '../views/HomeView'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../../reducers'

export default class HomeContainer extends Component {
    render() {
        return (
            <View>
                <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                    <HomeView
                        navigation={this.props.navigation}
                    />
                </Provider>

            </View>
        )
    }
}