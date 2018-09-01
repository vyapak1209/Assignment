import { FETCH_FEED, FEED_FETCHED, LOGIN_AGAIN, NEXT_URL } from './ActionsTypes'
import { AsyncStorage } from 'react-native'

export const fetchFeed = (nextUrl) => {

    return (dispatch) => {
        AsyncStorage.getItem('fbData').then((data) => {
            console.log("Async Data ", data)
            let fbData = JSON.parse(data)
            let urlToAppend = `https://graph.facebook.com/v3.1/me/feed?access_token=${fbData.accessToken}&debug=all&format=json&method=get&pretty=0&suppress_http_code=1&fields=full_picture,message,description,caption,type,height,width,link,source`
            if (nextUrl) {
                urlToAppend = nextUrl
            }

            fetch(urlToAppend)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("Response ", responseJson)
                    dispatch({
                        type: FEED_FETCHED,
                        payload: responseJson.data
                    })

                    dispatch({
                        type: NEXT_URL,
                        payload: responseJson.paging.next
                    })
                })
                .catch((error) => {
                    console.log("Fetching Error ", error)
                    dispatch({
                        type: LOGIN_AGAIN,
                        payload: "loginExpired"
                    })
                });

        })

    }

}