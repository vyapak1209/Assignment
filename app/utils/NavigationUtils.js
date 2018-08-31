import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import SplashContainer from '../components/containers/SplashContainer'
import LoginContainer from '../components/containers/LoginContainer'
import HomeContainer from '../components/containers/HomeContainer';

export const RootStack = createStackNavigator(
    {
        SplashPage: {
            screen: SplashContainer
        },

        LoginPage: {
            screen: LoginContainer
        },

        HomePage: {
            screen: HomeContainer
        },

    }, {
        initialRouteName: 'SplashPage'
    }
);