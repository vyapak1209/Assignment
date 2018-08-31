import { FETCH_FEED, FEED_FETCHED } from './ActionsTypes'

export const fetchFeed = () => {
    return (dispatch) => {
        fetch('https://graph.facebook.com/v3.1/me/feed?access_token=EAAHILVyn5z0BAKsIUDpxFOMEd3s7kk1swASafpjIFQBpNzjgBXbZBT5pIwED1Qnqoxoo07uMhXZApgOca2NiWpTWW0IL2LZCXaYkpEDTRGg2yDLQyjdntEnjn7JpFuZAKCkmadPuL27JrqpJ0kk4bZBxTFZBf6OwB6CpgooReRYZBmtvL5h4HSVYe3NeDdHJLQJn2Dhr3NJOQZDZD&debug=all&format=json&method=get&pretty=0&suppress_http_code=1&fields=full_picture,message,description,caption,type,height,width,link,source')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Response ", responseJson)
                dispatch({
                    type: FEED_FETCHED,
                    payload: responseJson.data
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

}